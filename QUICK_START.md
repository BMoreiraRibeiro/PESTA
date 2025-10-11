# Guia Rápido - PESTA AI

## 🎯 Objetivo

Este projeto está configurado para você começar a trabalhar com modelos de IA imediatamente usando GitHub Codespaces.

## ✅ Passo a Passo

### 1. Abrir no Codespaces

```
GitHub → Botão "Code" → Tab "Codespaces" → "Create codespace"
```

Aguarde 2-3 minutos enquanto o ambiente é configurado automaticamente.

### 2. Testar o Ambiente

Após o Codespace iniciar, abra o terminal e execute:

```bash
# Verificar Python
python --version

# Verificar instalação
pip list | grep -E "numpy|pandas|sklearn|tensorflow|torch"
```

### 3. Executar Exemplo

```bash
# Rodar script de exemplo
python exemplo_modelo_ai.py
```

Você verá:
- Carregamento do dataset Iris
- Treinamento do modelo
- Métricas de acurácia
- Gráfico salvo

### 4. Experimentar com Jupyter

1. Abra `exemplo_notebook.ipynb`
2. Clique em "Select Kernel" → escolha Python 3
3. Execute as células com Shift+Enter

## 🔍 Estrutura do Projeto

```
PESTA/
├── .devcontainer/
│   └── devcontainer.json          # Configuração do Codespace
├── exemplo_modelo_ai.py            # Script Python de exemplo
├── exemplo_notebook.ipynb          # Jupyter Notebook de exemplo
├── requirements.txt                # Dependências Python
├── .gitignore                      # Arquivos ignorados
└── README.md                       # Documentação completa
```

## 🧠 O que você pode fazer?

### Machine Learning Tradicional
- Classificação, regressão, clustering
- Feature engineering
- Validação cruzada

### Deep Learning
- Redes neurais com TensorFlow/PyTorch
- Transfer learning
- Fine-tuning de modelos

### Processamento de Linguagem Natural
- Análise de sentimento
- Modelos de linguagem
- Transformers (BERT, GPT, etc.)

### Computer Vision
- Classificação de imagens
- Detecção de objetos
- Segmentação

## 💻 Comandos Úteis

```bash
# Instalar nova biblioteca
pip install nome-biblioteca

# Listar bibliotecas instaladas
pip list

# Executar script Python
python seu_script.py

# Iniciar Jupyter Lab
jupyter lab --ip=0.0.0.0 --port=8888

# Formatar código com Black
black seu_script.py

# Checar qualidade com Pylint
pylint seu_script.py
```

## 🎓 Recursos de Aprendizado

- **Scikit-learn**: https://scikit-learn.org/
- **TensorFlow**: https://www.tensorflow.org/
- **PyTorch**: https://pytorch.org/
- **Hugging Face**: https://huggingface.co/

## ⚡ Dicas Importantes

1. **Salve seu trabalho**: Codespaces pausam após inatividade
2. **Commit frequente**: Use Git para versionar seu código
3. **Experimente**: O ambiente está isolado, pode quebrar à vontade!
4. **GPU**: Para modelos grandes, considere usar Codespaces com GPU

## ❓ Problemas Comuns

### Biblioteca não encontrada
```bash
pip install --user nome-da-biblioteca
```

### Kernel do Jupyter não inicia
```bash
pip install --user ipykernel
python -m ipykernel install --user
```

### Porta não acessível
Verifique se a porta está na lista de "Forwarded Ports" no VS Code

## 🚀 Próximo Nível

Quando estiver confortável:
1. Crie seu próprio dataset
2. Treine modelos personalizados
3. Experimente diferentes algoritmos
4. Faça deploy do seu modelo

---

**Bom desenvolvimento! 🤖**
