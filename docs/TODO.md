# 📋Tarefas
## Automatic Airsoft Detection Tower

**Última atualização:** 2025-10-31
**Status geral:** Inicialização do projeto

---

## 🎯 Fase 1: Planejamento e Definição de Requisitos
- [ ] **Definir escopo completo do projeto**
  - [ ] Listar funcionalidades principais da torre
  - [ ] Definir critérios de sucesso (precisão, velocidade, autonomia)
  - [ ] Estabelecer limitações e restrições técnicas
  - [ ] Definir cenários de uso em campo de airsoft
- [ ] **Especificações técnicas**
  - [ ] Definir especificações de hardware necessário
    - [ ] Modelo de Raspberry Pi (4B, 5, Zero 2W?)
    - [ ] Tipo de webcam (resolução, FPS, compatibilidade)
    - [ ] Motores passo a passo (torque, precisão angular)
    - [ ] Drivers de motor (A4988, DRV8825, TMC2208?)
    - [ ] Fonte de alimentação (voltagem, amperagem)
  - [ ] Definir stack de software
    - [ ] Linguagem principal (Python)
    - [ ] Framework de ML (TensorFlow Lite, ONNX, PyTorch Mobile?)
    - [ ] Bibliotecas de visão computacional (OpenCV, Picamera2)
    - [ ] Sistema de controle de motores (RPi.GPIO, pigpio, gpiozero?)
- [ ] **Criar cronograma detalhado**
  - [ ] Definir milestones do projeto
  - [ ] Alocar tempo para cada fase
  - [ ] Definir data de entrega do relatório final
  - [ ] Estabelecer checkpoints de teste em campo

---

## 🔧 Fase 2: Setup e Infraestrutura
- [ ] **Configuração do ambiente de desenvolvimento**
  - [ ] Configurar Raspberry Pi
    - [ ] Instalar Raspberry Pi OS (Lite ou Desktop?)
    - [ ] Configurar acesso SSH
    - [ ] Configurar rede (WiFi/Ethernet)
    - [ ] Atualizar sistema (apt update && upgrade)
  - [ ] Instalar dependências de software
    - [ ] Python 3.x e pip
    - [ ] OpenCV (opencv-python-headless)
    - [ ] TensorFlow Lite runtime
    - [ ] NumPy, Pillow, outras bibliotecas científicas
    - [ ] Bibliotecas de controle GPIO
  - [ ] Criar estrutura de pastas do projeto
    - [ ] `/src` - código fonte
    - [ ] `/models` - modelos ML
    - [ ] `/tests` - testes automatizados
    - [ ] `/docs` - documentação técnica
    - [ ] `/data` - datasets e logs
    - [ ] `/configs` - arquivos de configuração
- [ ] **Controle de versão**
  - [ ] Inicializar repositório Git
  - [ ] Criar `.gitignore` adequado
  - [ ] Configurar `.gitattributes` para arquivos grandes
  - [ ] Criar README.md inicial
  - [ ] Primeiro commit estrutural

---

## 🎥 Fase 3: Sistema de Visão (Webcam + ML)
- [ ] **Integração da webcam**
  - [ ] Testar webcam no Raspberry Pi
  - [ ] Criar script de captura de vídeo básica
  - [ ] Otimizar resolução e FPS para desempenho
  - [ ] Implementar buffer de frames
  - [ ] Testar latência de captura
- [ ] **Detecção de objetos (ML)**
  - [ ] Definir classes de detecção (jogador, não-jogador, obstáculos)
  - [ ] Escolher arquitetura de modelo
    - [ ] Avaliar YOLO (YOLOv8-nano, YOLOv5s)
    - [ ] Avaliar MobileNet SSD
    - [ ] Avaliar EfficientDet-Lite
  - [ ] Preparar dataset de treinamento
    - [ ] Coletar imagens de jogadores de airsoft
    - [ ] Coletar imagens de cenários típicos
    - [ ] Anotar dados (bounding boxes)
    - [ ] Dividir dataset (train/validation/test)
  - [ ] Treinar modelo inicial
    - [ ] Configurar ambiente de treinamento (Google Colab/local)
    - [ ] Treinar primeira versão
    - [ ] Avaliar métricas (mAP, precisão, recall)
  - [ ] Otimizar modelo para Raspberry Pi
    - [ ] Converter para TensorFlow Lite
    - [ ] Quantização (int8, float16)
    - [ ] Testar velocidade de inferência no RPi
    - [ ] Ajustar trade-off precisão vs velocidade
  - [ ] Implementar pipeline de detecção
    - [ ] Carregar modelo no código Python
    - [ ] Processar frames em tempo real
    - [ ] Extrair coordenadas de detecções
    - [ ] Implementar tracking de alvos (opcional)

---

## ⚙️ Fase 4: Sistema de Controle Mecânico (Motores)
- [ ] **Montagem e fiação do hardware**
  - [ ] Criar diagrama de fiação (Raspberry Pi + Drivers + Motores)
  - [ ] Montar circuito em protoboard/PCB
  - [ ] Testar continuidade e voltagens
  - [ ] Implementar proteções (fusíveis, diodos flyback)
- [ ] **Controle de motores passo a passo**
  - [ ] Configurar pinos GPIO para drivers
  - [ ] Implementar classe de controle de motor (Pan)
  - [ ] Implementar classe de controle de motor (Tilt)
  - [ ] Testar movimento básico (step by step)
  - [ ] Implementar micro-stepping para suavidade
  - [ ] Calibrar velocidade máxima sem perda de passos
  - [ ] Definir limites de movimento (soft limits)
  - [ ] Implementar homing/referenciamento (se houver endstops)
- [ ] **Sistema de coordenadas**
  - [ ] Mapear pixels da câmera para ângulos dos motores
  - [ ] Implementar calibração da relação pixel↔ângulo
  - [ ] Criar funções de conversão
  - [ ] Testar precisão de apontamento

---

## 🔗 Fase 5: Integração dos Sistemas
- [ ] **Arquitetura de software**
  - [ ] Desenhar diagrama de arquitetura do sistema
  - [ ] Definir fluxo de dados (Camera → ML → Control → Motors)
  - [ ] Implementar padrão de design (ex: Observer, MVC)
  - [ ] Definir interfaces entre módulos
- [ ] **Loop principal de controle**
  - [ ] Implementar main loop
    - [ ] Capturar frame
    - [ ] Executar detecção ML
    - [ ] Calcular posição do alvo
    - [ ] Enviar comandos para motores
    - [ ] Logging de eventos
  - [ ] Otimizar performance (multithreading, async)
  - [ ] Implementar rate limiting para motores
  - [ ] Adicionar watchdog timer
- [ ] **Sistema de configuração**
  - [ ] Criar arquivo de configuração (JSON/YAML)
  - [ ] Parâmetros de ML (threshold de confiança, NMS)
  - [ ] Parâmetros de motores (velocidade, aceleração, limites)
  - [ ] Parâmetros de câmera (resolução, FPS, exposição)
  - [ ] Permitir recarregamento de configs sem reiniciar

---

## 🧪 Fase 6: Testes e Validação
- [ ] **Testes unitários**
  - [ ] Testar módulo de câmera isoladamente
  - [ ] Testar módulo de ML isoladamente
  - [ ] Testar módulo de controle de motores isoladamente
  - [ ] Criar mocks para hardware
- [ ] **Testes de integração**
  - [ ] Testar pipeline completo em ambiente controlado
  - [ ] Validar latência end-to-end (frame → movimento)
  - [ ] Testar robustez (desconexão de câmera, perda de passos)
- [ ] **Testes em campo**
  - [ ] Testar em condições de iluminação variada
    - [ ] Luz direta do sol
    - [ ] Sombra
    - [ ] Crepúsculo
  - [ ] Testar com alvos em movimento
  - [ ] Testar alcance de detecção (distâncias variadas)
  - [ ] Testar com camuflagem/oclusões
  - [ ] Medir taxa de detecção verdadeira vs falsos positivos
- [ ] **Otimizações de campo**
  - [ ] Ajustar thresholds de detecção baseado em testes
  - [ ] Otimizar velocidade de tracking
  - [ ] Implementar filtros para reduzir falsos positivos

---

## 🛡️ Fase 7: Robustez e Confiabilidade
- [ ] **Tratamento de erros**
  - [ ] Implementar try-except em todos os módulos críticos
  - [ ] Adicionar logging detalhado (níveis: DEBUG, INFO, WARNING, ERROR)
  - [ ] Criar rotinas de recuperação de falhas
  - [ ] Testar comportamento em situações de erro
- [ ] **Considerações práticas de campo**
  - [ ] Avaliar necessidade de weatherproofing
  - [ ] Calcular autonomia de bateria
  - [ ] Implementar shutdown seguro em caso de baixa bateria
  - [ ] Criar indicadores visuais de status (LEDs)
  - [ ] Adicionar botão de emergência (e-stop)
- [ ] **Performance e recursos**
  - [ ] Monitorar uso de CPU do Raspberry Pi
  - [ ] Monitorar temperatura (throttling)
  - [ ] Otimizar uso de memória RAM
  - [ ] Implementar estratégias de cooling (se necessário)

---

## 📝 Fase 8: Documentação Técnica
- [ ] **Estrutura de documentação**
  - [ ] Criar pasta `docs/` com arquivos markdown
  - [ ] `technical_diary_entries/index.md` - diário de desenvolvimento
  - [ ] `hardware_setup.md` - documentação de hardware
  - [ ] `software_architecture.md` - arquitetura de software
  - [ ] `ml_models.md` - documentação dos modelos ML
  - [ ] `integration_notes.md` - notas de integração
  - [ ] `testing_log.md` - log de testes
  - [ ] `final_report.md` - relatório final para entrega
- [ ] **Documentação de código**
  - [ ] Adicionar docstrings em todas as funções/classes
  - [ ] Comentar trechos complexos
  - [ ] Criar diagramas de fluxo quando necessário
- [ ] **Guias práticos**
  - [ ] Manual de instalação (setup from scratch)
  - [ ] Manual de operação (como usar o sistema)
  - [ ] Manual de manutenção (troubleshooting)
  - [ ] Guia de calibração
- [ ] **Documentação de hardware**
  - [ ] Diagrama de fiação (Fritzing ou similar)
  - [ ] Lista de materiais (BOM - Bill of Materials)
  - [ ] Especificações de componentes
  - [ ] Fotos da montagem física

---

## 🎓 Fase 9: Relatório Final Acadêmico
- [ ] **Estrutura do relatório**
  - [ ] Resumo/Abstract
  - [ ] Introdução
    - [ ] Contextualização do problema
    - [ ] Objetivos do projeto
    - [ ] Justificativa
  - [ ] Revisão bibliográfica
    - [ ] Sistemas de detecção automática
    - [ ] Técnicas de ML para detecção de objetos
    - [ ] Controle de motores em sistemas embarcados
  - [ ] Metodologia
    - [ ] Descrição do hardware utilizado
    - [ ] Descrição do software desenvolvido
    - [ ] Processo de treinamento do modelo ML
  - [ ] Resultados
    - [ ] Métricas de performance do ML
    - [ ] Testes de precisão de apontamento
    - [ ] Análise de latência do sistema
    - [ ] Testes em campo - resultados qualitativos e quantitativos
  - [ ] Discussão
    - [ ] Análise crítica dos resultados
    - [ ] Limitações do sistema
    - [ ] Comparação com trabalhos relacionados
  - [ ] Conclusão
    - [ ] Síntese dos objetivos alcançados
    - [ ] Trabalhos futuros
  - [ ] Referências bibliográficas
  - [ ] Apêndices
    - [ ] Código fonte completo
    - [ ] Diagramas técnicos
    - [ ] Resultados brutos de testes
- [ ] **Revisão e formatação**
  - [ ] Revisão ortográfica e gramatical
  - [ ] Verificar normas ABNT (ou outra exigida)
  - [ ] Formatar referências bibliográficas
  - [ ] Adicionar índices (figuras, tabelas, códigos)
  - [ ] Gerar PDF final

---

## 🎤 Fase 10: Apresentação
- [ ] **Preparação de materiais**
  - [ ] Criar slides da apresentação (PowerPoint/Beamer/Reveal.js)
  - [ ] Preparar vídeo de demonstração do sistema funcionando
  - [ ] Criar poster/pôster (se aplicável)
- [ ] **Conteúdo da apresentação**
  - [ ] Introdução e motivação (2-3 min)
  - [ ] Arquitetura do sistema (3-4 min)
  - [ ] Demonstração prática/vídeo (3-5 min)
  - [ ] Resultados e métricas (2-3 min)
  - [ ] Conclusões e aprendizados (1-2 min)
  - [ ] Q&A - preparar respostas para perguntas prováveis
- [ ] **Ensaios**
  - [ ] Ensaiar apresentação (timing)
  - [ ] Preparar demo ao vivo (com plano B)
  - [ ] Testar equipamento (projetor, cabos, backup)

---

## 📊 Métricas de Progresso

### Hardware
- [ ] Raspberry Pi configurado e funcional
- [ ] Câmera testada e funcionando
- [ ] Motores pan/tilt montados e calibrados
- [ ] Sistema de alimentação validado

### Software
- [ ] Pipeline de captura de vídeo funcional
- [ ] Modelo ML treinado e otimizado
- [ ] Sistema de controle de motores implementado
- [ ] Integração completa testada

### Documentação
- [ ] Diário técnico atualizado
- [ ] Código comentado e documentado
- [ ] Relatório final redigido
- [ ] Apresentação preparada

---

## 🚨 Blockers e Problemas Conhecidos
> Esta seção deve ser atualizada conforme problemas são encontrados

- Nenhum blocker registrado ainda

---

## 📌 Notas Importantes
- **Prioridade 1:** Estabelecer comunicação com hardware (câmera + motores)
- **Prioridade 2:** Pipeline de ML funcional (mesmo que simples)
- **Prioridade 3:** Integração e testes práticos
- Sempre documentar decisões técnicas no `docs/technical_diary_entries/index.md`
- Fazer commits frequentes no Git
- Testar em condições reais o mais cedo possível

---

**Legenda:**
- `- [ ]` Tarefa pendente
- `- [x]` Tarefa completada
- **Negrito** = Categoria principal
- Indentação = Subtarefas
