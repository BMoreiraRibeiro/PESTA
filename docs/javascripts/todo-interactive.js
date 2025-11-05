/**
 * TODO Interactive - Adiciona botões "+" para criar subtarefas
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
            addAddSubtaskButton(item);
        });
    });
}

function addAddSubtaskButton(item) {
    // Verifica se já tem o botão
    if (item.querySelector('.add-subtask-btn')) return;

    // Cria o botão "+"
    const button = document.createElement('button');
    button.className = 'add-subtask-btn';
    button.innerHTML = '➕';
    button.title = 'Adicionar subtarefa';
    
    button.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addSubtaskPrompt(item);
    };

    // Adiciona o botão ao item
    const label = item.querySelector('label');
    if (label) {
        label.style.display = 'flex';
        label.style.alignItems = 'center';
        label.style.gap = '8px';
        label.appendChild(button);
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
    
    // Adiciona botão "+" na nova subtarefa
    addAddSubtaskButton(newSubtask);
    
    // Mostra notificação
    showNotification('Subtarefa adicionada! (Nota: não será salva permanentemente)', 'success');
}

function createSubtaskElement(text) {
    const li = document.createElement('li');
    li.className = 'task-list-item';
    
    const label = document.createElement('label');
    label.style.display = 'flex';
    label.style.alignItems = 'center';
    label.style.gap = '8px';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-list-control';
    
    const span = document.createElement('span');
    span.textContent = text;
    
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
    .add-subtask-btn {
        background: #0366d6;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 2px 8px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.2s;
        opacity: 0;
        margin-left: auto;
    }

    .task-list-item:hover .add-subtask-btn {
        opacity: 1;
    }

    .add-subtask-btn:hover {
        background: #0256b8;
        transform: scale(1.1);
    }

    .add-subtask-btn:active {
        transform: scale(0.95);
    }

    .todo-notification {
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: #24292e;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 9999;
        max-width: 300px;
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

    /* Melhorar layout dos labels */
    .task-list-item label {
        width: 100%;
    }
`;
document.head.appendChild(style);
