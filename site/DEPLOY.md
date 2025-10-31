# 🚀 Guia de Deploy - PESTA Task Manager no GitHub Pages

Este guia explica como publicar o site de gerenciamento de tarefas PESTA no GitHub Pages.

## Pré-requisitos

- Conta no GitHub
- Git instalado no computador
- Navegador web moderno

## Opção 1: Deploy Rápido (Pasta `site/` como raiz do GitHub Pages)

### Passo 1: Inicializar Git (se ainda não tiver)

```bash
cd C:\Users\Bruno\Documents\Programar\PESTA\site
git init
```

### Passo 2: Fazer o primeiro commit

```bash
git add .
git commit -m "Initial commit: PESTA Task Manager"
```

### Passo 3: Criar repositório no GitHub

1. Acesse https://github.com/new
2. Nome: `pesta-task-manager` (ou o que preferir)
3. Descrição: "Interactive task manager for PESTA project"
4. Visibilidade: Public ou Private (ambos funcionam com GitHub Pages)
5. **NÃO marque** nenhuma opção de inicialização
6. Clique em **Create repository**

### Passo 4: Conectar ao GitHub

```bash
git remote add origin https://github.com/SEU_USUARIO/pesta-task-manager.git
git branch -M main
git push -u origin main
```

### Passo 5: Ativar GitHub Pages

1. No repositório do GitHub, clique em **Settings**
2. Na barra lateral esquerda, clique em **Pages**
3. Em **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
4. Clique em **Save**

### Passo 6: Aguardar o deploy

- O GitHub levará alguns minutos para processar
- Você verá uma mensagem: "Your site is ready to be published at..."
- Após alguns minutos, aparecerá: "Your site is live at https://SEU_USUARIO.github.io/pesta-task-manager/"

### Passo 7: Acessar o site

Abra no navegador:
```
https://SEU_USUARIO.github.io/pesta-task-manager/
```

## Opção 2: Deploy como Subpasta do Projeto PESTA

Se você quiser manter a pasta `site/` dentro do projeto PESTA completo:

### Passo 1: Ir para a pasta principal PESTA

```bash
cd C:\Users\Bruno\Documents\Programar\PESTA
git init
```

### Passo 2: Criar .gitignore na raiz (se não existir)

```bash
echo "node_modules/" > .gitignore
echo "*.pyc" >> .gitignore
echo "__pycache__/" >> .gitignore
echo ".venv/" >> .gitignore
echo ".env" >> .gitignore
```

### Passo 3: Commit inicial

```bash
git add .
git commit -m "Initial commit: PESTA project with task manager site"
```

### Passo 4: Criar repositório no GitHub

Mesmo processo da Opção 1, mas com nome tipo `pesta-project`.

### Passo 5: Push

```bash
git remote add origin https://github.com/SEU_USUARIO/pesta-project.git
git branch -M main
git push -u origin main
```

### Passo 6: Configurar GitHub Pages

1. Settings → Pages
2. Source:
   - Branch: `main`
   - Folder: **/site** (selecione `/site` se disponível, caso contrário veja opção abaixo)

**Nota:** Se `/site` não aparecer como opção, você precisa criar um branch `gh-pages`:

```bash
# Criar branch gh-pages apenas com a pasta site
git subtree push --prefix site origin gh-pages
```

Então em Settings → Pages:
- Branch: `gh-pages`
- Folder: `/ (root)`

### Passo 7: Acessar

```
https://SEU_USUARIO.github.io/pesta-project/
```

## Opção 3: Deploy com GitHub CLI (gh)

Se tiver o GitHub CLI instalado:

```bash
cd C:\Users\Bruno\Documents\Programar\PESTA\site

# Criar repositório diretamente
gh repo create pesta-task-manager --public --source=. --remote=origin --push

# Ativar GitHub Pages
gh repo edit --enable-pages --pages-branch=main
```

## Atualizações Futuras

Sempre que fizer alterações no site:

```bash
cd C:\Users\Bruno\Documents\Programar\PESTA\site
git add .
git commit -m "Descrição das mudanças"
git push
```

O GitHub Pages atualizará automaticamente em alguns minutos.

## Domínio Personalizado (Opcional)

Se tiver um domínio próprio:

1. Settings → Pages → Custom domain
2. Digite seu domínio (ex: `pesta.seudominio.com`)
3. Configure DNS do domínio:
   - Tipo: CNAME
   - Nome: pesta
   - Valor: SEU_USUARIO.github.io

## Troubleshooting

### Problema: Site não aparece após 10 minutos
**Solução:** Verifique em Settings → Pages se há algum erro de build

### Problema: 404 Not Found
**Solução:**
- Verifique se a branch e pasta estão corretas
- Certifique-se que `index.html` está na raiz da pasta selecionada

### Problema: Estilos não carregam
**Solução:**
- Se os caminhos estão relativos (`./styles.css`), funciona automaticamente
- Se estão absolutos (`/styles.css`), pode precisar ajustar

### Problema: GitHub Pages não está ativado (repo privado)
**Solução:**
- Plano Free do GitHub permite Pages em repos públicos
- GitHub Pro/Teams permite em repos privados
- Alternativa: tornar repo público

## URLs de Exemplo

Dependendo da configuração:

- **Repo público com nome qualquer:**
  `https://usuario.github.io/nome-repo/`

- **Repo com nome `usuario.github.io`:**
  `https://usuario.github.io/` (site principal)

- **Projeto organization:**
  `https://nome-org.github.io/nome-repo/`

## Próximos Passos

Após o deploy:

1. ✅ Testar todas as funcionalidades no site publicado
2. ✅ Compartilhar URL com equipe do projeto
3. ✅ Adicionar link no README.md principal do PESTA
4. ✅ Considerar adicionar badge de status no README:

```markdown
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)
[🎯 Gerenciador de Tarefas](https://SEU_USUARIO.github.io/pesta-task-manager/)
```

## Recursos Adicionais

- [Documentação oficial GitHub Pages](https://docs.github.com/en/pages)
- [Guia de domínio personalizado](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Jekyll (gerador de sites estáticos do GitHub)](https://jekyllrb.com/)

---

**Dúvidas?** Abra uma issue no repositório ou consulte a documentação oficial do GitHub Pages.
