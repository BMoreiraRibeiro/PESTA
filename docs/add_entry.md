---
title: Adicionar Entrada ao Diário
---

# ➕ Nova Entrada no Diário Técnico

Preencha o formulário abaixo e clique em "Adicionar ao Diário" para criar a issue pré-preenchida no GitHub.

---

<div style="max-width: 800px; margin: 0 auto;">

<form id="entryForm" style="background: var(--md-code-bg-color); padding: 2rem; border-radius: 8px;">
  
  <div style="margin-bottom: 1.5rem;">
    <label for="title" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">📌 Título:</label>
    <input type="text" id="title" placeholder="Ex: Configuração do MkDocs" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem;" required>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="category" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">🏷️ Tema / Assunto:</label>
    <select id="category" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem;">
      <option value="Gerais">Gerais</option>
      <option value="Configuração">Configuração</option>
      <option value="Documentação">Documentação</option>
      <option value="Pesquisa">Pesquisa</option>
      <option value="Decisão">Decisão</option>
      <option value="Outros">Outros</option>
    </select>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="context" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">📝 Descrição:</label>
    <textarea id="context" rows="6" placeholder="Descreva o que fez, encontrou ou pretende documentar" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="notes" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">💡 Notas:</label>
    <textarea id="notes" rows="3" placeholder="Observações adicionais" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="display: flex; gap: 1rem;">
    <button type="button" onclick="submitToGitHub()" style="flex: 1; padding: 0.75rem; background: #4caf50; color: white; border: none; border-radius: 4px; font-size: 1rem; font-weight: bold; cursor: pointer;">
      🚀 Adicionar ao Diário
    </button>
    <button type="button" onclick="previewEntry()" style="flex: 1; padding: 0.75rem; background: #3f51b5; color: white; border: none; border-radius: 4px; font-size: 1rem; font-weight: bold; cursor: pointer;">
      👁️ Pré-visualizar
    </button>
  </div>

</form>

<div id="preview" style="margin-top: 2rem; display: none;">
  <h3>👁️ Pré-visualização:</h3>
  <div style="background: var(--md-code-bg-color); padding: 1.5rem; border-radius: 8px; border-left: 4px solid #3f51b5;">
    <pre id="previewText" style="margin: 0; white-space: pre-wrap; font-family: 'Courier New', monospace; font-size: 0.95rem;"></pre>
  </div>
</div>

<div id="result" style="margin-top: 2rem; display: none;">
  <div id="resultContent"></div>
</div>

</div>

<script>
const REPO_OWNER = 'BMoreiraRibeiro';
const REPO_NAME = 'PESTA';

function generateMarkdown() {
  const title = document.getElementById('title').value || 'Sem título';
  const category = document.getElementById('category').value;
  const context = document.getElementById('context').value;
  const notes = document.getElementById('notes').value;
  const date = new Date().toISOString().split('T')[0];

  let markdown = `## [${date}] - ${title}\n\n`;
  markdown += `**Tema/Assunto:** ${category}\n\n`;

  if (context.trim()) {
    markdown += `### Descrição\n${context.trim()}\n\n`;
  }

  if (notes.trim()) {
    markdown += `### Notas\n${notes.trim()}\n\n`;
  }

  markdown += `---\n`;
  return markdown;
}

function previewEntry() {
  const markdown = generateMarkdown();
  document.getElementById('previewText').textContent = markdown;
  document.getElementById('preview').style.display = 'block';
  document.getElementById('preview').scrollIntoView({ behavior: 'smooth' });
}

function generateIssueBody() {
  const title = document.getElementById('title').value || 'Sem título';
  const category = document.getElementById('category').value;
  const context = document.getElementById('context').value || '_No response_';
  const notes = document.getElementById('notes').value || '_No response_';

  let body = `### 📌 Título da Entrada\n\n${title}\n\n`;
  body += `### 🏷️ Tema / Assunto\n\n${category}\n\n`;
  body += `### 📝 Descrição\n\n${context}\n\n`;
  body += `### 💡 Notas/Observações\n\n${notes}\n`;

  return body;
}

function submitToGitHub() {
  const title = document.getElementById('title').value;
  if (!title.trim()) {
    alert('❌ Por favor, preencha pelo menos o título!');
    return;
  }

  const issueTitle = `[DIÁRIO] ${title}`;
  const issueBody = generateIssueBody();

  const issueUrl = `https://github.com/${REPO_OWNER}/${REPO_NAME}/issues/new?` +
    `title=${encodeURIComponent(issueTitle)}&` +
    `body=${encodeURIComponent(issueBody)}&` +
    `labels=diário,documentação`;

  document.getElementById('resultContent').innerHTML = `
    <div style="padding: 1.5rem; background: #d4edda; border-left: 4px solid #28a745; border-radius: 4px;">
      <h3 style="margin-top: 0; color: #155724;">✅ Preparado para submeter!</h3>
      <p style="color: #155724;">Clique no botão abaixo para criar a issue no GitHub. A GitHub Action processará automaticamente a entrada.</p>
      <a href="${issueUrl}" target="_blank" style="display: inline-block; margin-top: 1rem; padding: 0.75rem 1.5rem; background: #28a745; color: white; text-decoration: none; border-radius: 4px; font-weight: bold;">
        🚀 Abrir GitHub Issue
      </a>
    </div>
  `;
  document.getElementById('result').style.display = 'block';
  document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}
</script>

---

[📝 Ver Diário Técnico](technical_diary.md) | [🏠 Voltar ao Início](index.md)

---
---
title: Adicionar Entrada ao Diário
---

# ➕ Nova Entrada no Diário Técnico

Preencha o formulário acima e clique em "Adicionar ao Diário" para criar a issue pré-preenchida no GitHub.

---

title: Adicionar Entrada ao Diário
---

# ➕ Nova Entrada no Diário Técnico

Preencha o formulário abaixo e clique em "Adicionar ao Diário" para criar automaticamente a entrada.

---

<div style="max-width: 800px; margin: 0 auto;">

<form id="entryForm" style="background: var(--md-code-bg-color); padding: 2rem; border-radius: 8px;">
  
  <div style="margin-bottom: 1.5rem;">
    <label for="title" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">📌 Título:</label>
    <input type="text" id="title" placeholder="Ex: Configuração do MkDocs" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem;" required>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="category" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">🏷️ Categoria:</label>
    <select id="category" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem;">
      <option value="Hardware">Hardware</option>
      <option value="Software">Software</option>
      <option value="Testes">Testes</option>
      <option value="Integração">Integração</option>
      <option value="Pesquisa">Pesquisa</option>
      <option value="Decisão">Decisão</option>
    </select>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="context" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">📝 Contexto:</label>
    <textarea id="context" rows="3" placeholder="Descrição breve do que estava a fazer ou do problema a resolver" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="done" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">✅ O Que Foi Feito (uma linha por item):</label>
    <textarea id="done" rows="5" placeholder="- Item 1&#10;- Item 2&#10;- Item 3" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="decisions" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">🎯 Decisões Tomadas (uma linha por item):</label>
    <textarea id="decisions" rows="3" placeholder="- Decisão 1: Justificativa&#10;- Decisão 2: Justificativa" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="results" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">📊 Resultados:</label>
    <textarea id="results" rows="3" placeholder="O que funcionou ou não funcionou" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="next" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">🚀 Próximos Passos (uma linha por item):</label>
    <textarea id="next" rows="3" placeholder="- Tarefa 1&#10;- Tarefa 2&#10;- Tarefa 3" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="notes" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">💡 Notas/Observações:</label>
    <textarea id="notes" rows="3" placeholder="Qualquer informação adicional relevante" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="display: flex; gap: 1rem;">
    <button type="button" onclick="submitToGitHub()" style="flex: 1; padding: 0.75rem; background: #4caf50; color: white; border: none; border-radius: 4px; font-size: 1rem; font-weight: bold; cursor: pointer;">
      🚀 Adicionar ao Diário
    </button>
    <button type="button" onclick="previewEntry()" style="flex: 1; padding: 0.75rem; background: #3f51b5; color: white; border: none; border-radius: 4px; font-size: 1rem; font-weight: bold; cursor: pointer;">
      👁️ Pré-visualizar
    </button>
  </div>

</form>

<div id="preview" style="margin-top: 2rem; display: none;">
  <h3>👁️ Pré-visualização:</h3>
  <div style="background: var(--md-code-bg-color); padding: 1.5rem; border-radius: 8px; border-left: 4px solid #3f51b5;">
    <pre id="previewText" style="margin: 0; white-space: pre-wrap; font-family: 'Courier New', monospace; font-size: 0.9rem;"></pre>
  </div>
</div>

<div id="result" style="margin-top: 2rem; display: none;">
  <div id="resultContent"></div>
</div>

</div>

<script>
const REPO_OWNER = 'BMoreiraRibeiro';
const REPO_NAME = 'PESTA';

function generateMarkdown() {
  const title = document.getElementById('title').value || 'Sem título';
  ---
  title: Adicionar Entrada ao Diário
  ---

  # ➕ Nova Entrada no Diário Técnico

  Preencha o formulário acima e clique em "Adicionar ao Diário" para criar a issue pré-preenchida no GitHub.

  ---
    </select>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="context" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">📝 Contexto:</label>
    <textarea id="context" rows="3" placeholder="Descrição breve do que estava a fazer ou do problema a resolver" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="done" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">✅ O Que Foi Feito (uma linha por item):</label>
    <textarea id="done" rows="5" placeholder="Item 1&#10;Item 2&#10;Item 3" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="decisions" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">🎯 Decisões Tomadas (uma linha por item):</label>
    <textarea id="decisions" rows="3" placeholder="Decisão 1: Justificativa&#10;Decisão 2: Justificativa" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="results" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">📊 Resultados:</label>
    <textarea id="results" rows="3" placeholder="O que funcionou ou não funcionou" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="next" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">🚀 Próximos Passos (uma linha por item):</label>
    <textarea id="next" rows="3" placeholder="Tarefa 1&#10;Tarefa 2&#10;Tarefa 3" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="notes" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">💡 Notas/Observações:</label>
    <textarea id="notes" rows="3" placeholder="Qualquer informação adicional relevante" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="display: flex; gap: 1rem;">
    <button type="button" onclick="generateEntry()" style="flex: 1; padding: 0.75rem; background: #3f51b5; color: white; border: none; border-radius: 4px; font-size: 1rem; font-weight: bold; cursor: pointer;">
      🎉 Gerar Entrada
    </button>
    <button type="button" onclick="copyToClipboard()" style="flex: 1; padding: 0.75rem; background: #4caf50; color: white; border: none; border-radius: 4px; font-size: 1rem; font-weight: bold; cursor: pointer;">
      📋 Copiar
    </button>
  </div>

</form>

<div id="output" style="margin-top: 2rem; display: none;">
  <h3>📄 Entrada Gerada:</h3>
  <div style="background: var(--md-code-bg-color); padding: 1.5rem; border-radius: 8px; border-left: 4px solid #4caf50;">
    <pre id="generatedText" style="margin: 0; white-space: pre-wrap; font-family: 'Courier New', monospace; font-size: 0.9rem;"></pre>
  </div>
  <p style="margin-top: 1rem; padding: 1rem; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 4px;">
    <strong>📌 Próximo passo:</strong> Copie o texto acima e cole no início do arquivo <code>docs/technical_diary.md</code>
  </p>
</div>

</div>

<script>
function generateEntry() {
  const date = document.getElementById('date').value || new Date().toISOString().split('T')[0];
  const title = document.getElementById('title').value || 'Sem título';
  const category = document.getElementById('category').value;
  const context = document.getElementById('context').value;
  const done = document.getElementById('done').value;
  const decisions = document.getElementById('decisions').value;
  const results = document.getElementById('results').value;
  const next = document.getElementById('next').value;
  const notes = document.getElementById('notes').value;

  const doneItems = done.split('\n').filter(line => line.trim()).map(line => `- ${line.trim()}`).join('\n');
  const decisionItems = decisions.split('\n').filter(line => line.trim()).map(line => `- ${line.trim()}`).join('\n');
  const nextItems = next.split('\n').filter(line => line.trim()).map(line => `- [ ] ${line.trim()}`).join('\n');

  let markdown = `## [${date}] - ${title}\n\n`;
  markdown += `**Categoria:** ${category}\n\n`;
  
  if (context) markdown += `### Contexto\n${context}\n\n`;
  if (doneItems) markdown += `### O Que Foi Feito\n${doneItems}\n\n`;
  if (decisionItems) markdown += `### Decisões Tomadas\n${decisionItems}\n\n`;
  if (results) markdown += `### Resultados\n${results}\n\n`;
  if (nextItems) markdown += `### Próximos Passos\n${nextItems}\n\n`;
  if (notes) markdown += `### Notas/Observações\n${notes}\n\n`;
  
  markdown += `---\n\n`;

  document.getElementById('generatedText').textContent = markdown;
  document.getElementById('output').style.display = 'block';
  document.getElementById('output').scrollIntoView({ behavior: 'smooth' });
}

function copyToClipboard() {
  const text = document.getElementById('generatedText').textContent;
  
  if (!text) {
    alert('❌ Gere a entrada primeiro!');
    return;
  }
  
  navigator.clipboard.writeText(text).then(() => {
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '✅ Copiado!';
    button.style.background = '#2e7d32';
    
    setTimeout(() => {
      button.innerHTML = originalText;
      button.style.background = '#4caf50';
    }, 2000);
  }).catch(err => {
    alert('❌ Erro ao copiar. Copie manualmente.');
  });
}

document.getElementById('date').valueAsDate = new Date();
</script>

---

[📝 Ver Diário Técnico](technical_diary.md) | [🏠 Voltar ao Início](index.md)

---

<div style="max-width: 800px; margin: 0 auto;">

<form id="entryForm" style="background: var(--md-code-bg-color); padding: 2rem; border-radius: 8px;">
  
  <div style="margin-bottom: 1.5rem;">
    <label for="date" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">📅 Data:</label>
    <input type="date" id="date" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem;">
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="title" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">📌 Título:</label>
    <input type="text" id="title" placeholder="Ex: Configuração do MkDocs" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem;">
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="category" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">🏷️ Categoria:</label>
    <select id="category" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem;">
      <option value="Hardware">Hardware</option>
      <option value="Software">Software</option>
      <option value="Testes">Testes</option>
      <option value="Integração">Integração</option>
      <option value="Pesquisa">Pesquisa</option>
      <option value="Decisão">Decisão</option>
    </select>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="context" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">📝 Contexto:</label>
    <textarea id="context" rows="3" placeholder="Descrição breve do que estava a fazer ou do problema a resolver" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="done" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">✅ O Que Foi Feito (uma linha por item):</label>
    <textarea id="done" rows="5" placeholder="Item 1&#10;Item 2&#10;Item 3" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="decisions" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">🎯 Decisões Tomadas (uma linha por item):</label>
    <textarea id="decisions" rows="3" placeholder="Decisão 1: Justificativa&#10;Decisão 2: Justificativa" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="results" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">📊 Resultados:</label>
    <textarea id="results" rows="3" placeholder="O que funcionou ou não funcionou" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="next" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">🚀 Próximos Passos (uma linha por item):</label>
    <textarea id="next" rows="3" placeholder="Tarefa 1&#10;Tarefa 2&#10;Tarefa 3" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="notes" style="display: block; font-weight: bold; margin-bottom: 0.5rem;">💡 Notas/Observações:</label>
    <textarea id="notes" rows="3" placeholder="Qualquer informação adicional relevante" style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
  </div>

  <div style="display: flex; gap: 1rem;">
    <button type="button" onclick="generateEntry()" style="flex: 1; padding: 0.75rem; background: #3f51b5; color: white; border: none; border-radius: 4px; font-size: 1rem; font-weight: bold; cursor: pointer;">
      🎉 Gerar Entrada
    </button>
    <button type="button" onclick="copyToClipboard()" style="flex: 1; padding: 0.75rem; background: #4caf50; color: white; border: none; border-radius: 4px; font-size: 1rem; font-weight: bold; cursor: pointer;">
      📋 Copiar para Área de Transferência
    </button>
  </div>

</form>

<div id="output" style="margin-top: 2rem; display: none;">
  <h3>📄 Entrada Gerada:</h3>
  <div style="background: var(--md-code-bg-color); padding: 1.5rem; border-radius: 8px; border-left: 4px solid #4caf50;">
    <pre id="generatedText" style="margin: 0; white-space: pre-wrap; font-family: 'Courier New', monospace; font-size: 0.9rem;"></pre>
  </div>
  <p style="margin-top: 1rem; padding: 1rem; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 4px;">
    <strong>📌 Próximo passo:</strong> Copie o texto acima e cole no início do arquivo <code>docs/technical_diary.md</code> (logo após o título principal).
  </p>
</div>

</div>

<script>
function generateEntry() {
  // Obter valores
  const date = document.getElementById('date').value || new Date().toISOString().split('T')[0];
  const title = document.getElementById('title').value || 'Sem título';
  const category = document.getElementById('category').value;
  const context = document.getElementById('context').value;
  const done = document.getElementById('done').value;
  const decisions = document.getElementById('decisions').value;
  const results = document.getElementById('results').value;
  const next = document.getElementById('next').value;
  const notes = document.getElementById('notes').value;

  // Processar listas
  const doneItems = done.split('\n').filter(line => line.trim()).map(line => `- ${line.trim()}`).join('\n');
  const decisionItems = decisions.split('\n').filter(line => line.trim()).map(line => `- ${line.trim()}`).join('\n');
  const nextItems = next.split('\n').filter(line => line.trim()).map(line => `- [ ] ${line.trim()}`).join('\n');

  // Gerar markdown
  let markdown = `## [${date}] - ${title}\n\n`;
  markdown += `**Categoria:** ${category}\n\n`;
  
  if (context) {
    markdown += `### Contexto\n${context}\n\n`;
  }
  
  if (doneItems) {
    markdown += `### O Que Foi Feito\n${doneItems}\n\n`;
  }
  
  if (decisionItems) {
    markdown += `### Decisões Tomadas\n${decisionItems}\n\n`;
  }
  
  if (results) {
    markdown += `### Resultados\n${results}\n\n`;
  }
  
  if (nextItems) {
    markdown += `### Próximos Passos\n${nextItems}\n\n`;
  }
  
  if (notes) {
    markdown += `### Notas/Observações\n${notes}\n\n`;
  }
  
  markdown += `---\n\n`;

  // Mostrar output
  document.getElementById('generatedText').textContent = markdown;
  document.getElementById('output').style.display = 'block';
  
  // Scroll para o resultado
  document.getElementById('output').scrollIntoView({ behavior: 'smooth' });
}

function copyToClipboard() {
  const text = document.getElementById('generatedText').textContent;
  
  if (!text) {
    alert('❌ Gere a entrada primeiro clicando em "Gerar Entrada"!');
    return;
  }
  
  navigator.clipboard.writeText(text).then(() => {
    // Feedback visual
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '✅ Copiado!';
    button.style.background = '#2e7d32';
    
    setTimeout(() => {
      button.innerHTML = originalText;
      button.style.background = '#4caf50';
    }, 2000);
    
    alert('✅ Entrada copiada para a área de transferência!\n\nAgora cole no arquivo docs/technical_diary.md');
  }).catch(err => {
    alert('❌ Erro ao copiar. Selecione e copie manualmente (Ctrl+C).');
  });
}

// Definir data de hoje por padrão
document.getElementById('date').valueAsDate = new Date();
</script>

---

## 📖 Instruções de Uso

1. **Preencha o formulário** acima com as informações da entrada
2. Clique em **"Gerar Entrada"** para visualizar o resultado
3. Clique em **"Copiar para Área de Transferência"**
4. **Abra** o arquivo `docs/technical_diary.md`
5. **Cole** o texto no início do arquivo (logo após o título `# Diário Técnico`)
6. **Salve** e faça commit:
   ```bash
   git add docs/technical_diary.md
   git commit -m "docs: adicionar entrada [DATA]"
   git push
   ```

---

## 💡 Dicas

- **Campos opcionais**: Pode deixar campos em branco se não forem relevantes
- **Listas**: Digite um item por linha nas caixas de texto
- **Data**: Por padrão usa a data de hoje
- **Próximos Passos**: Automaticamente cria checkboxes `- [ ]`

---

[� Ver Diário Técnico](technical_diary.md) | [🏠 Voltar ao Início](index.md)
