---
title: Adicionar Entrada ao Diário
---

# ➕ Nova Entrada no Diário Técnico

## 🚀 Método 1: Via GitHub Issue (Recomendado)

A forma mais fácil de adicionar entradas é através de GitHub Issues!

### Como usar:

1. **Vá para** [Issues do Projeto](https://github.com/BMoreiraRibeiro/PESTA/issues)
2. **Clique** em "New Issue"
3. **Escolha** o template "Nova Entrada no Diário"
4. **Preencha** o formulário
5. **Submeta** a issue
6. **Aguarde** ~30 segundos - A GitHub Action irá:
   - ✅ Processar automaticamente a issue
   - ✅ Adicionar a entrada ao `technical_diary.md`
   - ✅ Fazer commit e push
   - ✅ Fechar a issue automaticamente
   - ✅ Comentar com link para ver a entrada

### Vantagens:
- ✅ Totalmente automático
- ✅ Não precisa editar arquivos manualmente
- ✅ Formulário guiado
- ✅ Histórico completo nas issues
- ✅ Funciona de qualquer lugar (web, mobile)

---

## 📝 Método 2: Formulário Web (Offline)

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
