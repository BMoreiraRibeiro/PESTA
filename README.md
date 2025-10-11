# PESTA - Projeto de IA com Codespaces

Projeto PESTA configurado para desenvolvimento de modelos de Inteligência Artificial usando GitHub Codespaces.

## 🚀 Como usar com GitHub Codespaces

### Iniciando o Codespace

1. Acesse o repositório no GitHub
2. Clique no botão verde **"Code"**
3. Selecione a aba **"Codespaces"**
4. Clique em **"Create codespace on main"** (ou no branch desejado)

O Codespace será criado automaticamente com todas as dependências instaladas!

### Ambiente Pré-configurado

O ambiente inclui:

- **Python 3.11** com todas as bibliotecas de IA/ML
- **TensorFlow** e **PyTorch** para Deep Learning
- **scikit-learn** para Machine Learning tradicional
- **Jupyter Notebooks** para experimentação interativa
- **VS Code Extensions** para Python e Jupyter

### 📚 Bibliotecas Disponíveis

- **Machine Learning**: scikit-learn, numpy, pandas
- **Deep Learning**: TensorFlow, PyTorch
- **NLP**: transformers, nltk
- **Visualização**: matplotlib, seaborn, plotly
- **Desenvolvimento**: Jupyter, black, pylint

## 🧪 Exemplos Incluídos

### 1. Script Python (`exemplo_modelo_ai.py`)

Execute o exemplo de classificação:

```bash
python exemplo_modelo_ai.py
```

Este script demonstra:
- Carregamento de dataset
- Treinamento de modelo Random Forest
- Avaliação de performance
- Visualização de resultados

### 2. Jupyter Notebook (`exemplo_notebook.ipynb`)

Abra o notebook no Codespace para uma experiência interativa:

1. Clique no arquivo `exemplo_notebook.ipynb`
2. Execute as células sequencialmente
3. Experimente modificar o código!

## 🛠️ Desenvolvendo seu Modelo

### Criar um novo script Python

```python
import numpy as np
from sklearn.model_selection import train_test_split
# seu código aqui
```

### Instalar bibliotecas adicionais

```bash
pip install nome-da-biblioteca
```

Para tornar permanente, adicione ao `requirements.txt`:

```bash
echo "nome-da-biblioteca>=versão" >> requirements.txt
```

## 📊 Portas Disponíveis

O Codespace expõe automaticamente:
- **Porta 8888**: Para Jupyter Lab/Notebook
- **Porta 5000**: Para aplicações web (Flask, FastAPI, etc.)

## 🔧 Personalização

### Modificar o ambiente

Edite `.devcontainer/devcontainer.json` para:
- Adicionar extensões do VS Code
- Alterar configurações do Python
- Incluir ferramentas adicionais

### Adicionar dependências

Edite `requirements.txt` para incluir novas bibliotecas Python.

## 💡 Dicas

1. **Use Jupyter** para experimentação rápida
2. **Salve modelos** treinados em formato `.pkl` ou `.h5`
3. **Versione datasets** pequenos no Git, use `.gitignore` para grandes
4. **Commit frequentemente** suas mudanças
5. **Use GPU** habilitando Codespaces com GPU (se disponível na sua conta)

## 📝 Próximos Passos

- [ ] Criar seu primeiro modelo
- [ ] Experimentar com diferentes datasets
- [ ] Testar frameworks de Deep Learning
- [ ] Criar visualizações dos resultados
- [ ] Deploy do modelo treinado

## 🤝 Contribuindo

Sinta-se à vontade para adicionar novos exemplos e melhorias!

## 📄 Licença

Este projeto está sob a licença GPL-3.0 (veja LICENSE).
