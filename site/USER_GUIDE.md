# 📖 Guia do Usuário - PESTA Task Manager

Guia completo de uso do gerenciador de tarefas do Projeto PESTA.

---

## 🎯 Visão Geral

O PESTA Task Manager é uma aplicação web interativa para gerenciar tarefas do projeto. Todos os dados são salvos localmente no seu navegador.

---

## 🚀 Começando

### Primeira Vez

1. Abra `index.html` no navegador
2. Você verá as tarefas padrão do projeto PESTA já carregadas
3. Todas as alterações são salvas automaticamente

### Já Usei Antes

- Suas tarefas estarão como você deixou
- A data da última sincronização aparece no rodapé

---

## ✅ Gerenciando Tarefas

### Adicionar Nova Tarefa

1. Digite o texto da tarefa no campo no topo
2. Pressione `Enter` ou clique no botão **"➕ Adicionar"**
3. A tarefa aparecerá na categoria "Geral"

**Dica:** Para criar tarefas de categorias específicas, comece o texto com:
```
Fase 1: Sua tarefa aqui
```

### Marcar Tarefa como Concluída

- Clique no **checkbox** ao lado da tarefa
- Tarefas concluídas ficam riscadas e com fundo verde claro
- **Marcar uma tarefa principal marca todas as subtarefas automaticamente**

### Desmarcar Tarefa

- Clique novamente no checkbox
- A tarefa volta ao estado pendente

### Adicionar Subtarefa

1. Passe o mouse sobre uma tarefa
2. Clique no botão **"➕"** que aparece
3. Digite o texto da subtarefa no prompt
4. A subtarefa aparecerá indentada abaixo da tarefa principal

**Você pode adicionar subtarefas infinitamente!**
- Subtarefa → Sub-subtarefa → Sub-sub-subtarefa...

### Excluir Tarefa

1. Passe o mouse sobre a tarefa
2. Clique no botão **"✕"** vermelho
3. Confirme a exclusão
4. **Atenção:** Todas as subtarefas também serão excluídas!

---

## 🔍 Filtrando Tarefas

### Filtros Disponíveis

Clique nos botões no topo:

- **Todas**: Mostra todas as tarefas (padrão)
- **⏳ Pendentes**: Mostra apenas tarefas não concluídas
- **✅ Concluídas**: Mostra apenas tarefas completadas

### Busca por Texto

1. Digite no campo **"🔍 Buscar tarefas..."**
2. A busca é em tempo real (enquanto você digita)
3. Encontra texto em qualquer parte da tarefa
4. **Case-insensitive** (não diferencia maiúsculas/minúsculas)

**Exemplo:**
- Buscar "ML" encontra: "Sistema de Visão (Webcam + **ML**)"
- Buscar "teste" encontra: "**Teste**s unitários", "**Teste**s em campo"

---

## 📂 Organizando por Categorias

### Colapsar/Expandir Categorias

- Clique no **cabeçalho da categoria** (fundo azul)
- A categoria será ocultada/exibida
- Útil para focar em uma fase específica

### Progresso por Categoria

Cada categoria mostra:
```
Fase 1: Planejamento e Definição    [3/10 (30%)]
```
- `3/10`: 3 tarefas concluídas de 10 totais
- `30%`: Percentual de conclusão

---

## 📊 Acompanhando Progresso

### Barra de Progresso

No topo da página:
- **Barra visual**: Mostra percentual completado
- **Texto**: "X de Y tarefas completadas (Z%)"
- **Estatísticas**: Total | Pendentes | Concluídas

### Progresso Geral

A barra de progresso conta **todas as tarefas**, incluindo subtarefas de todos os níveis.

---

## 💾 Salvando e Carregando Dados

### Salvamento Automático

- ✅ Toda ação salva automaticamente
- ✅ Dados ficam no localStorage do navegador
- ✅ Funciona offline
- ⚠️ Limpar cache do navegador apaga os dados!

### Exportar Tarefas

1. Clique em **"📥 Exportar"**
2. Arquivo JSON será baixado
3. Nome: `pesta_tasks_YYYY-MM-DD.json`

**Quando exportar:**
- Antes de limpar cache do navegador
- Para backup periódico
- Para compartilhar com equipe
- Antes de trocar de computador

### Importar Tarefas

1. Clique em **"📤 Importar"**
2. Selecione um arquivo JSON
3. Escolha:
   - **OK**: Substituir tarefas atuais
   - **Cancelar**: Adicionar às tarefas existentes

**Formatos aceitos:**
- JSON exportado do próprio site
- `data.json` fornecido com o site
- Qualquer JSON no formato correto

---

## 🎨 Personalização

### Tema de Cores

As cores atuais são:
- **Azul** (#0366d6): Primária (botões, categorias)
- **Verde** (#28a745): Sucesso (tarefas concluídas)
- **Vermelho** (#dc3545): Perigo (botão excluir)

Para alterar, edite o arquivo `styles.css`:
```css
:root {
    --primary: #0366d6;    /* Sua cor aqui */
    --success: #28a745;
    --danger: #dc3545;
}
```

---

## ⌨️ Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| `Enter` | Adicionar tarefa (quando no campo de input) |
| `Ctrl + E` (Win/Linux) | Exportar tarefas |
| `Cmd + E` (Mac) | Exportar tarefas |
| `Ctrl + F` (Win/Linux) | Focar no campo de busca |
| `Cmd + F` (Mac) | Focar no campo de busca |

---

## 🔒 Privacidade e Segurança

### Onde os Dados Ficam?

- **localStorage** do navegador (no seu computador)
- **Nenhum servidor** recebe seus dados
- **Totalmente offline** após carregar

### Cada Navegador é Independente

- Chrome e Firefox têm dados separados
- Modo anônimo não salva dados
- Trocar de computador = dados não vêm junto

### Backup Recomendado

1. Exporte semanalmente (ou após grandes mudanças)
2. Salve JSON em:
   - Google Drive / OneDrive
   - Repositório Git
   - Pendrive
   - Email para si mesmo

---

## 🛠️ Recursos Avançados

### Limpar Dados

**Rodapé → "Limpar Dados"**
- Apaga **todas** as tarefas
- **Irreversível!**
- Use apenas se quiser começar do zero

### Restaurar Padrão

**Rodapé → "Restaurar Padrão"**
- Volta para as tarefas iniciais do PESTA
- Perde alterações atuais
- Útil se bagunçou tudo e quer recomeçar

---

## 📱 Usando no Celular/Tablet

### Interface Responsiva

- Layout se adapta automaticamente
- Botões maiores em telas pequenas
- Todas as funcionalidades disponíveis

### Dicas Mobile

- **Adicionar à tela inicial**: Navegador → Opções → "Adicionar à tela inicial"
- **Modo paisagem**: Melhor para visualizar hierarquia
- **Zoom**: Pinça para aumentar/diminuir texto

---

## 🐛 Problemas Comuns

### "Minhas tarefas sumiram!"

**Possíveis causas:**
1. Limpou cache do navegador
2. Usou modo anônimo
3. Trocou de navegador
4. Outra pessoa usou o mesmo computador

**Solução:**
- Restaurar de backup (arquivo JSON exportado)
- Ou usar "Restaurar Padrão" para voltar ao inicial

### "Não consigo adicionar tarefa"

**Verifique:**
- Campo de texto não está vazio?
- Navegador é moderno? (Chrome 90+, Firefox 88+)
- JavaScript está habilitado?

**Solução:**
- Digite algo no campo antes de clicar "Adicionar"
- Atualize o navegador
- Teste em outro navegador

### "Exportar não funciona"

**Possíveis causas:**
1. Navegador bloqueou download
2. Permissões de pasta

**Solução:**
- Permita downloads no navegador
- Clique com botão direito → "Salvar como"

### "Site está lento"

**Causas:**
- Muitas tarefas (milhares)
- Computador lento

**Solução:**
- Exporte tarefas antigas e remova
- Divida em arquivos JSON separados por fase

---

## 💡 Dicas de Produtividade

### Organize por Fases

Crie tarefas principais assim:
```
Fase 1: Nome da Fase
Fase 2: Outra Fase
```
Elas serão automaticamente categorizadas.

### Use Subtarefas para Dividir

Tarefa grande? Divida:
```
✅ Fase 3: Sistema de Visão
  ├─ ⏳ Integração da webcam
  │   ├─ ⏳ Testar webcam no RPi
  │   └─ ⏳ Criar script de captura
  └─ ⏳ Detecção ML
```

### Revisão Semanal

1. Use filtro "Concluídas" → veja o progresso!
2. Exporte para backup
3. Adicione novas tarefas para a semana

### Trabalho em Equipe

1. Uma pessoa mantém o JSON "oficial"
2. Compartilha semanalmente com equipe
3. Membros importam para visualizar
4. Reuniões: discutir tarefas pendentes

---

## 📚 Exemplos de Uso

### Exemplo 1: Adicionar Fase Completa

1. Adicione: "Fase 11: Manutenção"
2. Com o mouse sobre ela, clique ➕
3. Adicione subtarefa: "Criar manual de manutenção"
4. Sobre a subtarefa, clique ➕
5. Adicione: "Listar componentes substituíveis"

Resultado:
```
Fase 11: Manutenção
  └─ Criar manual de manutenção
      └─ Listar componentes substituíveis
```

### Exemplo 2: Focar em Uma Fase

1. Colapse todas as categorias (clique nos cabeçalhos)
2. Expanda apenas "Fase 3: Sistema de Visão"
3. Use filtro "Pendentes"
4. Trabalhe apenas nessas tarefas

### Exemplo 3: Compartilhar Progresso

1. Clique "Exportar"
2. Envie JSON por email/WhatsApp
3. Destinatário clica "Importar"
4. Escolhe "Substituir" para ver exatamente o mesmo

---

## 🎓 Para Relatório Acadêmico

### Documentar Progresso

1. Tire screenshots da barra de progresso
2. Exporte JSON como apêndice
3. Mostre evolução ao longo do tempo

### Métricas Úteis

O site mostra automaticamente:
- Total de tarefas planejadas
- Tarefas concluídas
- Percentual de conclusão
- Tarefas por categoria

Útil para gráficos no relatório!

---

## 🆘 Suporte

### Onde Obter Ajuda

1. Leia este guia completo
2. Consulte `README.md` para infos técnicas
3. Veja `DEPLOY.md` para publicar no GitHub Pages

### Reportar Bugs

Se encontrar problemas:
1. Descreva o que aconteceu
2. Passos para reproduzir
3. Navegador e versão
4. Exporte tarefas (JSON) se relevante

---

## ✨ Funcionalidades Futuras (Planejadas)

Não implementado ainda, mas possível adicionar:
- [ ] PWA completo (funcionar offline total)
- [ ] Sincronização na nuvem
- [ ] Temas dark/light
- [ ] Notificações de prazo
- [ ] Anexos em tarefas
- [ ] Comentários/notas
- [ ] Tags/labels
- [ ] Modo colaborativo real-time

---

**Desenvolvido para o Projeto PESTA © 2025**

Dúvidas? Consulte a documentação ou entre em contato com a equipe do projeto.

---

**Última atualização:** 2025-10-31
