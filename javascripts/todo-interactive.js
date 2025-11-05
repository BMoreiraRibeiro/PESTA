/**
 * TODO Interactive - Adiciona botões "+" e "🗑️" para gerir tarefas
 * Para usar com MkDocs Material
 */

document.addEventListener('DOMContentLoaded', function() {
    // Só executa na página do TODO
    if (!window.location.pathname.includes('TODO')) return;

    initializeTodoEnhancements();
});

function initializeTodoEnhancements() {
    const taskLists = document.querySelectorAll('.task-list');
    
    taskLists.forEach(list => {
        const items = list.querySelectorAll('.task-list-item');
        
        items.forEach(item => {
            addTaskButtons(item);
        });
    });
}

function addTaskButtons(item) {
    // Verifica se já tem os botões
    if (item.querySelector('.task-actions')) return;

    // Cria container para os botões
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'task-actions';
    actionsContainer.style.display = 'flex';
    actionsContainer.style.gap = '4px';
    actionsContainer.style.marginLeft = 'auto';
    actionsContainer.style.flexShrink = '0';

    // Botão "+" para adicionar subtarefa
    const addButton = document.createElement('button');
    addButton.className = 'task-btn add-subtask-btn';
    addButton.innerHTML = '➕';
    addButton.title = 'Adicionar subtarefa';
    
    addButton.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addSubtaskPrompt(item);
    };

    // Botão "🗑️" para eliminar tarefa
    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-btn delete-task-btn';
    deleteButton.innerHTML = '🗑️';
    deleteButton.title = 'Eliminar tarefa';
    
    deleteButton.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteTask(item);
    };

    // Adiciona botões ao container
    actionsContainer.appendChild(addButton);
    actionsContainer.appendChild(deleteButton);

    // Adiciona o container ao item
    const label = item.querySelector('label');
    if (label) {
        // Garantir que o label tem o estilo correto
        label.style.display = 'flex';
        label.style.alignItems = 'center';
        label.style.gap = '8px';
        label.style.width = '100%';
        label.style.flexWrap = 'nowrap';
        
        label.appendChild(actionsContainer);
    }
}

function addSubtaskPrompt(parentItem) {
    const subtaskText = prompt('Digite o texto da subtarefa:');
    
    if (!subtaskText || !subtaskText.trim()) {
        return;
    }

    // Cria a nova subtarefa
    const newSubtask = createSubtaskElement(subtaskText.trim());
    
    // Encontra ou cria a lista de subtarefas
    let subtasksList = parentItem.querySelector('.task-list');
    
    if (!subtasksList) {
        subtasksList = document.createElement('ul');
        subtasksList.className = 'task-list';
        parentItem.appendChild(subtasksList);
    }

    // Adiciona a subtarefa
    subtasksList.appendChild(newSubtask);
    
    // Adiciona botões na nova subtarefa
    addTaskButtons(newSubtask);
    
    // Mostra notificação
    showNotification('✅ Subtarefa adicionada! (Nota: não será salva permanentemente)', 'success');
}

function deleteTask(item) {
    // Conta subtarefas
    const subtasks = item.querySelectorAll('.task-list-item');
    const subtaskCount = subtasks.length;
    
    // Mensagem de confirmação
    let confirmMessage = 'Tem certeza que deseja eliminar esta tarefa?';
    if (subtaskCount > 0) {
        confirmMessage = `Tem certeza que deseja eliminar esta tarefa e TODAS as suas ${subtaskCount} subtarefa(s)?`;
    }
    
    if (!confirm(confirmMessage)) {
        return;
    }

    // Remove o item com animação
    item.style.transition = 'all 0.3s ease';
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        item.remove();
        showNotification('🗑️ Tarefa eliminada! (Nota: não será salva permanentemente)', 'info');
    }, 300);
}

function createSubtaskElement(text) {
    const li = document.createElement('li');
    li.className = 'task-list-item';
    
    const label = document.createElement('label');
    label.style.display = 'flex';
    label.style.alignItems = 'center';
    label.style.gap = '8px';
    label.style.width = '100%';
    label.style.flexWrap = 'nowrap';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-list-control';
    checkbox.style.flexShrink = '0';
    
    const span = document.createElement('span');
    span.textContent = text;
    span.style.flex = '1';
    span.style.wordWrap = 'break-word';
    
    label.appendChild(checkbox);
    label.appendChild(span);
    li.appendChild(label);
    
    return li;
}

function showNotification(message, type = 'info') {
    // Remove notificação anterior se existir
    const existing = document.querySelector('.todo-notification');
    if (existing) {
        existing.remove();
    }

    // Cria notificação
    const notification = document.createElement('div');
    notification.className = `todo-notification todo-notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Mostra com animação
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Remove após 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// CSS para os botões e notificações
const style = document.createElement('style');
style.textContent = `
    /* Container dos botões */
    .task-actions {
        display: flex;
        gap: 4px;
        margin-left: auto;
    }

    /* Estilo base dos botões */
    .task-btn {
        background: white;
        border: 2px solid #d1d5da;
        border-radius: 6px;
        padding: 4px 10px;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.2s ease;
        opacity: 1; /* Sempre visível! */
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 32px;
        height: 32px;
    }

    /* Botão adicionar subtarefa */
    .add-subtask-btn {
        border-color: #0366d6;
        color: #0366d6;
    }

    .add-subtask-btn:hover {
        background: #0366d6;
        color: white;
        transform: scale(1.1);
        box-shadow: 0 2px 8px rgba(3, 102, 214, 0.3);
    }

    .add-subtask-btn:active {
        transform: scale(0.95);
    }

    /* Botão eliminar tarefa */
    .delete-task-btn {
        border-color: #dc3545;
        color: #dc3545;
    }

    .delete-task-btn:hover {
        background: #dc3545;
        color: white;
        transform: scale(1.1);
        box-shadow: 0 2px 8px rgba(220, 53, 69, 0.3);
    }

    .delete-task-btn:active {
        transform: scale(0.95);
    }

    /* Animação suave ao remover */
    .task-list-item {
        transition: all 0.3s ease;
    }

    /* Notificações */
    .todo-notification {
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: #24292e;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 9999;
        max-width: 350px;
        font-size: 14px;
        line-height: 1.5;
    }

    .todo-notification.show {
        opacity: 1;
        transform: translateY(0);
    }

    .todo-notification-success {
        background: #28a745;
    }

    .todo-notification-error {
        background: #dc3545;
    }

    .todo-notification-warning {
        background: #ffc107;
        color: #000;
    }

    .todo-notification-info {
        background: #17a2b8;
    }

    /* Melhorar layout dos labels */
    .task-list-item label {
        width: 100%;
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
        flex-wrap: nowrap !important;
    }

    /* Espaçamento do texto da tarefa */
    .task-list-item label > span {
        flex: 1;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    /* Garantir que checkbox não encolhe */
    .task-list-item .task-list-control {
        flex-shrink: 0;
    }

    /* Garantir que botões não encolhem */
    .task-actions {
        flex-shrink: 0;
    }

    /* Responsivo para mobile */
    @media (max-width: 768px) {
        .task-btn {
            min-width: 36px;
            height: 36px;
            font-size: 18px;
        }

        .task-actions {
            gap: 6px;
        }

        .todo-notification {
            bottom: 16px;
            right: 16px;
            left: 16px;
            max-width: none;
        }
    }
`;
document.head.appendChild(style);