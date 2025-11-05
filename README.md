# PESTA - Automatic Airsoft Detection Tower
## Torre de Detecção Automática para Airsoft

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![Platform](https://img.shields.io/badge/Platform-Raspberry%20Pi-red)
![Language](https://img.shields.io/badge/Language-Python-blue)

---

## Sobre o Projeto

O **PESTA** é um sistema embarcado de detecção e rastreamento automático desenvolvido para aplicações em jogos de airsoft. Utiliza visão computacional e aprendizado de máquina para identificar jogadores em campo, combinado com controle mecânico preciso através de motores passo a passo para acompanhamento do alvo.

### Objetivos
- Detectar e rastrear jogadores de airsoft em tempo real
- Diferenciar jogadores de elementos do cenário (árvores, obstáculos, etc.)
- Controlar sistema pan/tilt para acompanhamento preciso
- Operar de forma autônoma em condições reais de campo
- Documentar completamente o desenvolvimento para fins acadêmicos

---

## Arquitetura do Sistema

### Hardware
- **Processador:** Raspberry Pi (modelo a definir)
- **Visão:** Webcam USB (resolução e FPS a definir)
- **Atuadores:** 2x motores passo a passo (pan e tilt)
- **Drivers:** A4988/DRV8825/TMC2208 (a definir)
- **Alimentação:** Sistema de bateria/fonte (especificações a definir)

### Software
- **Linguagem:** Python 3.x
- **Visão Computacional:** OpenCV
- **Machine Learning:** TensorFlow Lite / ONNX (a definir)
- **Controle GPIO:** RPi.GPIO / pigpio / gpiozero (a definir)
- **Sistema Operacional:** Raspberry Pi OS

---

## Estrutura do Projeto

```
PESTA/
├── TODO.md                  # Lista de tarefas do projeto
├── README.md                # Este arquivo
├── docs/                    # Documentação técnica
│   ├── technical_diary_entries/  # Diário de desenvolvimento (cada entrada em ficheiro próprio)
│   ├── hardware_setup.md    # Documentação de hardware
│   ├── software_architecture.md
│   ├── ml_models.md
│   ├── integration_notes.md
│   ├── testing_log.md
│   └── final_report.md      # Relatório final acadêmico
├── src/                     # Código fonte (a criar)
├── models/                  # Modelos ML (a criar)
├── tests/                   # Testes automatizados (a criar)
├── configs/                 # Arquivos de configuração (a criar)
└── data/                    # Datasets e logs (a criar)
```

---

## Status Atual

**Fase:** Planejamento e Setup Inicial
**Última atualização:** 2025-10-31

### Completado
- [x] Estrutura de pastas criada
- [x] Sistema de TODO list implementado
- [x] Documentação inicial estruturada

### Em Andamento
- [ ] Definição de especificações de hardware
- [ ] Escolha de tecnologias de ML
- [ ] Criação de cronograma detalhado

### Próximos Passos
1. Definir modelo de Raspberry Pi e componentes
2. Configurar ambiente de desenvolvimento
3. Iniciar prototipagem de módulos individuais

---

## Como Usar Este Projeto

### Gestão de Tarefas
Consulte `TODO.md` para ver todas as tarefas do projeto organizadas por fase.

### Documentação
Toda documentação técnica está em `docs/`:
- **Para entender decisões:** Leia `docs/technical_diary_entries/index.md`
- **Para replicar hardware:** Consulte `hardware_setup.md`
- **Para entender o código:** Veja `software_architecture.md`
- **Para informações de ML:** Consulte `ml_models.md`

### Desenvolvimento
_(Será atualizado conforme o código for desenvolvido)_

---

## Requisitos do Sistema

### Hardware Necessário
- Raspberry Pi (3B+, 4B, ou 5)
- Webcam USB compatível
- 2x Motores passo a passo NEMA 17
- 2x Drivers de motor compatíveis
- Fonte de alimentação adequada
- Estrutura mecânica pan/tilt
- Cabos e componentes eletrônicos

### Software Necessário
- Raspberry Pi OS (Bullseye ou mais recente)
- Python 3.9+
- Bibliotecas (ver `requirements.txt`)

### Instalação de Dependências
Para instalar as dependências do projeto (necessário para gerar a documentação):
```bash
pip install -r requirements.txt
```

Para servir a documentação localmente:
```bash
mkdocs serve
```

Para construir a documentação:
```bash
mkdocs build
```

---

## Contribuindo

Este é um projeto acadêmico. Para manter a disciplina do projeto:
1. **Sempre** consulte `TODO.md` antes de iniciar trabalho
2. **Sempre** documente decisões em `docs/technical_diary_entries/index.md`
3. **Sempre** atualize o TODO quando completar tarefas
4. Faça commits frequentes e descritivos no Git

---

## Licença

Este projeto é desenvolvido para fins acadêmicos.

---

## Contato e Informações

**Projeto:** PESTA - Automatic Airsoft Detection Tower
**Instituição:** [Nome da Faculdade]
**Curso:** [Nome do Curso]
**Ano Letivo:** 2025

---

**Última atualização:** 2025-10-31
