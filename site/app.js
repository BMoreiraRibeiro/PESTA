/**
 * PESTA Task Manager
 * Interactive task management system for the PESTA project
 *
 * Features:
 * - Add/remove tasks and subtasks (unlimited hierarchy)
 * - Mark tasks as complete/incomplete
 * - Save state to localStorage
 * - Export/Import JSON
 * - Filter tasks (all/pending/completed)
 * - Search tasks
 * - Progress tracking
 * - Responsive design
 */

// ============================
// STATE MANAGEMENT
// ============================

let tasks = [];
let currentFilter = 'all';
let searchQuery = '';

// ============================
// INITIALIZATION
// ============================

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    initializeEventListeners();
    renderTasks();
    updateProgress();
    updateLastSync();
});

// ============================
// EVENT LISTENERS
// ============================

function initializeEventListeners() {
    // Add task
    document.getElementById('addTaskBtn').addEventListener('click', addTask);
    document.getElementById('newTaskInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    // Export/Import
    document.getElementById('exportBtn').addEventListener('click', exportTasks);
    document.getElementById('importBtn').addEventListener('click', () => {
        document.getElementById('importFile').click();
    });
    document.getElementById('importFile').addEventListener('change', importTasks);

    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentFilter = e.target.dataset.filter;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderTasks();
        });
    });

    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderTasks();
    });

    // Footer actions
    document.getElementById('clearDataBtn').addEventListener('click', clearAllData);
    document.getElementById('resetToDefaultBtn').addEventListener('click', resetToDefault);
}

// ============================
// TASK OPERATIONS
// ============================

function addTask() {
    const input = document.getElementById('newTaskInput');
    const content = input.value.trim();

    if (!content) {
        showToast('Digite o texto da tarefa!', 'error');
        return;
    }

    const newTask = {
        id: generateId(),
        content: content,
        completed: false,
        subtasks: []
    };

    tasks.push(newTask);
    input.value = '';

    saveTasks();
    renderTasks();
    updateProgress();
    showToast('Tarefa adicionada com sucesso!', 'success');
}

function addSubtask(parentId, parentPath = []) {
    const content = prompt('Digite o texto da subtarefa:');
    if (!content || !content.trim()) return;

    const newSubtask = {
        id: generateId(),
        content: content.trim(),
        completed: false,
        subtasks: []
    };

    const parent = findTaskByPath([...parentPath, parentId]);
    if (parent) {
        parent.subtasks.push(newSubtask);
        saveTasks();
        renderTasks();
        updateProgress();
        showToast('Subtarefa adicionada!', 'success');
    }
}

function toggleTask(taskId, path = []) {
    const task = findTaskByPath([...path, taskId]);
    if (task) {
        task.completed = !task.completed;

        // Toggle all subtasks recursively
        toggleAllSubtasks(task, task.completed);

        saveTasks();
        renderTasks();
        updateProgress();
    }
}

function toggleAllSubtasks(task, completed) {
    task.subtasks.forEach(subtask => {
        subtask.completed = completed;
        toggleAllSubtasks(subtask, completed);
    });
}

function deleteTask(taskId, path = []) {
    if (!confirm('Tem certeza que deseja excluir esta tarefa e todas as suas subtarefas?')) {
        return;
    }

    if (path.length === 0) {
        // Top-level task
        tasks = tasks.filter(t => t.id !== taskId);
    } else {
        // Nested task
        const parent = findTaskByPath(path);
        if (parent) {
            parent.subtasks = parent.subtasks.filter(t => t.id !== taskId);
        }
    }

    saveTasks();
    renderTasks();
    updateProgress();
    showToast('Tarefa excluída!', 'info');
}

// ============================
// RENDERING
// ============================

function renderTasks() {
    const tasksList = document.getElementById('tasksList');
    const emptyState = document.getElementById('emptyState');

    if (tasks.length === 0) {
        tasksList.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';

    // Group tasks by category (extracted from markdown structure)
    const categorizedTasks = categorizeTasks(tasks);

    tasksList.innerHTML = '';

    Object.keys(categorizedTasks).forEach(category => {
        const categoryTasks = categorizedTasks[category];
        const categoryDiv = createCategoryElement(category, categoryTasks);
        tasksList.appendChild(categoryDiv);
    });
}

function categorizeTasks(taskList) {
    const categorized = { 'Geral': [] };

    taskList.forEach(task => {
        // Check if task starts with category marker (e.g., "Fase 1:", "##")
        const categoryMatch = task.content.match(/^(?:#{1,3}\s*)?(?:Fase\s+\d+|[A-Z][^:]+):/i);

        if (categoryMatch) {
            const category = categoryMatch[0].replace(/^#{1,3}\s*/, '').replace(/:$/, '').trim();
            if (!categorized[category]) {
                categorized[category] = [];
            }
            categorized[category].push(task);
        } else {
            categorized['Geral'].push(task);
        }
    });

    return categorized;
}

function createCategoryElement(categoryName, categoryTasks) {
    const div = document.createElement('div');
    div.className = 'task-category';

    const stats = getCategoryStats(categoryTasks);
    const completionPercent = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

    div.innerHTML = `
        <div class="category-header" onclick="toggleCategory(this)">
            <span class="collapse-icon">▼</span>
            <h2 class="category-title">${categoryName}</h2>
            <span class="category-badge">${stats.completed}/${stats.total} (${completionPercent}%)</span>
        </div>
        <div class="category-content">
            ${categoryTasks.map(task => renderTask(task, [])).join('')}
        </div>
    `;

    return div;
}

function renderTask(task, path = []) {
    const isVisible = filterTask(task);
    const hasVisibleSubtasks = task.subtasks.some(st => filterTask(st));

    if (!isVisible && !hasVisibleSubtasks) {
        return '';
    }

    const taskPath = [...path, task.id];
    const taskClass = `task-item ${task.completed ? 'completed' : ''} ${!isVisible ? 'hidden' : ''}`;

    const subtasksHtml = task.subtasks.length > 0
        ? `<div class="subtasks">${task.subtasks.map(st => renderTask(st, taskPath)).join('')}</div>`
        : '';

    return `
        <div class="${taskClass}" data-task-id="${task.id}">
            <div class="task-content">
                <div class="task-checkbox-wrapper">
                    <input
                        type="checkbox"
                        class="task-checkbox"
                        ${task.completed ? 'checked' : ''}
                        onchange="toggleTask('${task.id}', ${JSON.stringify(path)})"
                    >
                </div>
                <div class="task-text-wrapper">
                    <div class="task-text">${escapeHtml(task.content)}</div>
                    ${subtasksHtml}
                </div>
                <div class="task-actions">
                    <button
                        class="task-btn add-subtask"
                        onclick="addSubtask('${task.id}', ${JSON.stringify(path)})"
                        title="Adicionar subtarefa"
                    >➕</button>
                    <button
                        class="task-btn delete"
                        onclick="deleteTask('${task.id}', ${JSON.stringify(path)})"
                        title="Excluir tarefa"
                    >✕</button>
                </div>
            </div>
        </div>
    `;
}

function toggleCategory(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.collapse-icon');

    content.classList.toggle('collapsed');
    icon.classList.toggle('collapsed');
}

// ============================
// FILTERING & SEARCH
// ============================

function filterTask(task) {
    // Apply search filter
    if (searchQuery && !task.content.toLowerCase().includes(searchQuery)) {
        return false;
    }

    // Apply status filter
    if (currentFilter === 'pending' && task.completed) {
        return false;
    }
    if (currentFilter === 'completed' && !task.completed) {
        return false;
    }

    return true;
}

// ============================
// STATISTICS & PROGRESS
// ============================

function updateProgress() {
    const stats = getAllStats(tasks);

    const progressText = document.getElementById('progressText');
    const statsText = document.getElementById('statsText');
    const progressFill = document.getElementById('progressFill');

    const percentage = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

    progressText.textContent = `${stats.completed} de ${stats.total} tarefas completadas (${percentage}%)`;
    statsText.textContent = `Total: ${stats.total} | Pendentes: ${stats.pending} | Concluídas: ${stats.completed}`;
    progressFill.style.width = `${percentage}%`;
}

function getAllStats(taskList) {
    let total = 0;
    let completed = 0;

    function countTasks(tasks) {
        tasks.forEach(task => {
            total++;
            if (task.completed) completed++;
            if (task.subtasks.length > 0) {
                countTasks(task.subtasks);
            }
        });
    }

    countTasks(taskList);

    return {
        total,
        completed,
        pending: total - completed
    };
}

function getCategoryStats(categoryTasks) {
    return getAllStats(categoryTasks);
}

// ============================
// PERSISTENCE (LocalStorage)
// ============================

function saveTasks() {
    localStorage.setItem('pesta_tasks', JSON.stringify(tasks));
    localStorage.setItem('pesta_last_sync', new Date().toISOString());
    updateLastSync();
}

function loadTasks() {
    const saved = localStorage.getItem('pesta_tasks');
    if (saved) {
        try {
            tasks = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading tasks:', e);
            showToast('Erro ao carregar tarefas salvas', 'error');
            tasks = [];
        }
    } else {
        // Load default tasks from TODO.md structure
        loadDefaultTasks();
    }
}

function updateLastSync() {
    const lastSync = localStorage.getItem('pesta_last_sync');
    const lastSyncEl = document.getElementById('lastSync');

    if (lastSync) {
        const date = new Date(lastSync);
        lastSyncEl.textContent = date.toLocaleString('pt-BR');
    } else {
        lastSyncEl.textContent = 'Nunca';
    }
}

// ============================
// EXPORT / IMPORT
// ============================

function exportTasks() {
    const dataStr = JSON.stringify(tasks, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `pesta_tasks_${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    URL.revokeObjectURL(url);
    showToast('Tarefas exportadas com sucesso!', 'success');
}

function importTasks(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);

            if (!Array.isArray(imported)) {
                throw new Error('Formato inválido');
            }

            const choice = confirm(
                'Deseja substituir as tarefas atuais ou adicionar às existentes?\n\n' +
                'OK = Substituir\n' +
                'Cancelar = Adicionar'
            );

            if (choice) {
                tasks = imported;
            } else {
                tasks = [...tasks, ...imported];
            }

            saveTasks();
            renderTasks();
            updateProgress();
            showToast('Tarefas importadas com sucesso!', 'success');
        } catch (error) {
            console.error('Import error:', error);
            showToast('Erro ao importar tarefas: formato inválido', 'error');
        }
    };

    reader.readAsText(file);
    event.target.value = ''; // Reset file input
}

// ============================
// DATA MANAGEMENT
// ============================

function clearAllData() {
    if (!confirm('Tem certeza que deseja excluir TODAS as tarefas? Esta ação não pode ser desfeita!')) {
        return;
    }

    tasks = [];
    localStorage.removeItem('pesta_tasks');
    localStorage.removeItem('pesta_last_sync');

    renderTasks();
    updateProgress();
    updateLastSync();
    showToast('Todos os dados foram excluídos', 'info');
}

function resetToDefault() {
    if (!confirm('Deseja restaurar as tarefas padrão do projeto PESTA? As tarefas atuais serão perdidas.')) {
        return;
    }

    loadDefaultTasks();
    saveTasks();
    renderTasks();
    updateProgress();
    showToast('Tarefas restauradas para o padrão!', 'success');
}

function loadDefaultTasks() {
    // Default PESTA tasks based on TODO.md
    tasks = [
        {
            id: generateId(),
            content: 'Fase 1: Planejamento e Definição de Requisitos',
            completed: false,
            subtasks: [
                {
                    id: generateId(),
                    content: 'Definir escopo completo do projeto',
                    completed: false,
                    subtasks: [
                        { id: generateId(), content: 'Listar funcionalidades principais da torre', completed: false, subtasks: [] },
                        { id: generateId(), content: 'Definir critérios de sucesso (precisão, velocidade, autonomia)', completed: false, subtasks: [] },
                        { id: generateId(), content: 'Estabelecer limitações e restrições técnicas', completed: false, subtasks: [] },
                    ]
                },
                {
                    id: generateId(),
                    content: 'Especificações técnicas',
                    completed: false,
                    subtasks: [
                        { id: generateId(), content: 'Definir especificações de hardware necessário', completed: false, subtasks: [] },
                        { id: generateId(), content: 'Definir stack de software', completed: false, subtasks: [] },
                    ]
                }
            ]
        },
        {
            id: generateId(),
            content: 'Fase 2: Setup e Infraestrutura',
            completed: false,
            subtasks: [
                {
                    id: generateId(),
                    content: 'Configuração do ambiente de desenvolvimento',
                    completed: false,
                    subtasks: [
                        { id: generateId(), content: 'Configurar Raspberry Pi', completed: false, subtasks: [] },
                        { id: generateId(), content: 'Instalar dependências de software', completed: false, subtasks: [] },
                    ]
                }
            ]
        },
        {
            id: generateId(),
            content: 'Fase 3: Sistema de Visão (Webcam + ML)',
            completed: false,
            subtasks: [
                { id: generateId(), content: 'Integração da webcam', completed: false, subtasks: [] },
                { id: generateId(), content: 'Detecção de objetos (ML)', completed: false, subtasks: [] },
            ]
        },
        {
            id: generateId(),
            content: 'Fase 4: Sistema de Controle Mecânico (Motores)',
            completed: false,
            subtasks: [
                { id: generateId(), content: 'Montagem e fiação do hardware', completed: false, subtasks: [] },
                { id: generateId(), content: 'Controle de motores passo a passo', completed: false, subtasks: [] },
            ]
        },
        {
            id: generateId(),
            content: 'Fase 5: Integração dos Sistemas',
            completed: false,
            subtasks: []
        },
        {
            id: generateId(),
            content: 'Fase 6: Testes e Validação',
            completed: false,
            subtasks: []
        }
    ];
}

// ============================
// UTILITY FUNCTIONS
// ============================

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function findTaskByPath(path) {
    if (path.length === 0) return null;

    let current = tasks.find(t => t.id === path[0]);

    for (let i = 1; i < path.length; i++) {
        if (!current) return null;
        current = current.subtasks.find(t => t.id === path[i]);
    }

    return current;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================
// KEYBOARD SHORTCUTS
// ============================

document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + E: Export
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        exportTasks();
    }

    // Ctrl/Cmd + F: Focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});

// Make functions globally accessible for inline event handlers
window.toggleTask = toggleTask;
window.addSubtask = addSubtask;
window.deleteTask = deleteTask;
window.toggleCategory = toggleCategory;
