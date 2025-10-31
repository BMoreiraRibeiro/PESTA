# PESTA Task Manager - Site Interativo

**Gerenciador de Tarefas para o Projeto PESTA** (Automatic Airsoft Detection Tower)

## 🎯 Funcionalidades

### ✅ Gerenciamento de Tarefas
- **Adicionar tarefas** principais com um clique
- **Marcar/desmarcar** tarefas como concluídas com checkboxes
- **Adicionar subtarefas** em hierarquia ilimitada (quantos níveis forem necessários)
- **Excluir tarefas** individuais ou com todas as suas subtarefas
- **Organização por categorias** (ex: Fase 1, Fase 2, etc.)

### 🔍 Filtragem e Busca
- **Filtros rápidos**: Todas / Pendentes / Concluídas
- **Busca em tempo real** por texto
- **Colapsar/expandir categorias** para visualização focada

### 💾 Persistência de Dados
- **Salvamento automático** no localStorage do navegador
- **Exportar tarefas** em formato JSON
- **Importar tarefas** de arquivos JSON
- **Opção de substituir ou adicionar** ao importar

### 📊 Acompanhamento de Progresso
- **Barra de progresso visual** com percentual
- **Estatísticas detalhadas**: Total / Pendentes / Concluídas
- **Progresso por categoria**
- **Data da última sincronização**

### 🎨 Interface e UX
- **Design responsivo** (funciona em desktop, tablet e mobile)
- **Tema profissional** com cores do projeto
- **Animações suaves** em transições
- **Atalhos de teclado**:
  - `Ctrl/Cmd + E`: Exportar tarefas
  - `Ctrl/Cmd + F`: Focar na busca
  - `Enter`: Adicionar tarefa (quando no campo de input)

## 🚀 Como Usar

### 1. Abrir Localmente
Basta abrir o arquivo `index.html` em qualquer navegador moderno:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 2. Publicar no GitHub Pages

#### Passo 1: Criar Repositório
```bash
cd C:\Users\Bruno\Documents\Programar\PESTA
git init
git add site/
git commit -m "Adicionar site de gerenciamento de tarefas PESTA"
```

#### Passo 2: Criar Repositório no GitHub
1. Acesse https://github.com/new
2. Nome do repositório: `pesta-task-manager` (ou o nome que preferir)
3. Deixe público ou privado (GitHub Pages funciona em ambos)
4. NÃO inicialize com README, .gitignore ou licença

#### Passo 3: Push para GitHub
```bash
git remote add origin https://github.com/SEU_USUARIO/pesta-task-manager.git
git branch -M main
git push -u origin main
```

#### Passo 4: Ativar GitHub Pages
1. No GitHub, vá em **Settings** do repositório
2. Na barra lateral, clique em **Pages**
3. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/site` (se a estrutura for `site/` na raiz) ou `/` (se for raiz)
4. Clique em **Save**

#### Passo 5: Acessar o Site
Após alguns minutos, o site estará disponível em:
```
https://SEU_USUARIO.github.io/pesta-task-manager/
```

### 3. Alternativa: Usar o Site Diretamente
Se não quiser publicar no GitHub Pages, pode usar o site localmente:
- Os dados são salvos no **localStorage do navegador**
- Funciona **offline** (sem necessidade de servidor)
- Exportar/importar JSON para backup

## 📁 Estrutura de Arquivos

```
site/
├── index.html        # Página principal HTML
├── styles.css        # Estilos CSS
├── app.js           # Lógica JavaScript
└── README.md        # Esta documentação
```

## 🔧 Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis CSS, grid, flexbox, animações
- **JavaScript (ES6+)**: Lógica de aplicação pura (sem frameworks)
- **localStorage**: Persistência de dados no navegador
- **JSON**: Formato de importação/exportação

## 💡 Dicas de Uso

### Organização de Tarefas
1. **Use categorias** para separar fases do projeto (ex: "Fase 1: Planejamento")
2. **Adicione subtarefas** para dividir tarefas grandes em etapas menores
3. **Marque como concluído** quando uma tarefa estiver 100% pronta

### Backup de Dados
- **Exporte regularmente** suas tarefas usando o botão "Exportar"
- Salve os arquivos JSON em um local seguro (cloud, repositório Git, etc.)
- Em caso de perda de dados, use "Importar" para restaurar

### Trabalho em Equipe
1. Uma pessoa mantém o arquivo JSON principal
2. Membros da equipe podem importar o JSON para visualizar tarefas
3. Exportar e compartilhar JSON atualizado periodicamente
4. Ou publicar no GitHub Pages para acesso centralizado

### Filtros Inteligentes
- Use **"Pendentes"** para focar no que falta fazer
- Use **"Concluídas"** para revisar o progresso
- Use **busca** para encontrar tarefas específicas rapidamente

## 🎨 Customização

### Alterar Cores
Edite as variáveis CSS no início de `styles.css`:

```css
:root {
    --primary: #0366d6;        /* Cor primária */
    --success: #28a745;        /* Cor de sucesso */
    --danger: #dc3545;         /* Cor de perigo */
    /* ... outras variáveis ... */
}
```

### Modificar Tarefas Padrão
Edite a função `loadDefaultTasks()` em `app.js` para alterar as tarefas iniciais.

## 📱 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móveis (iOS Safari, Chrome Mobile)

## 🔒 Privacidade

- **Nenhum dado é enviado para servidores externos**
- Todos os dados ficam **localmente no seu navegador** (localStorage)
- Ao exportar, **você controla onde salvar o JSON**
- Ao publicar no GitHub Pages, o site é estático (sem backend)

## 🐛 Problemas Conhecidos

- localStorage tem limite de ~5MB por domínio
- Limpar cache do navegador apaga os dados (faça backup!)
- Importar JSON muito grande pode causar lentidão

## 🚀 Melhorias Futuras (Opcional)

- [ ] PWA (Progressive Web App) para trabalhar offline completo
- [ ] Sincronização com Google Drive / Dropbox
- [ ] Temas dark/light
- [ ] Notificações de prazos
- [ ] Integração com GitHub Issues
- [ ] Modo colaborativo (Firebase/Supabase)

## 📝 Licença

Este site foi desenvolvido para o Projeto PESTA (Automatic Airsoft Detection Tower).
Uso livre para fins acadêmicos e educacionais.

---

**Desenvolvido como parte do Projeto PESTA © 2025**

Para dúvidas ou sugestões, abra uma issue no repositório ou entre em contato com a equipe.
