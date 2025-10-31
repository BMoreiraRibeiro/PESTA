#!/bin/bash

echo "===================================="
echo "PESTA Task Manager - Servidor Local"
echo "===================================="
echo ""
echo "Iniciando servidor HTTP local..."
echo "O site estará disponível em: http://localhost:8000"
echo ""
echo "Para parar o servidor, pressione Ctrl+C"
echo ""
echo "===================================="
echo ""

# Detectar Python
if command -v python3 &> /dev/null; then
    echo "Usando Python 3..."
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "Usando Python..."
    python -m http.server 8000
else
    echo "ERRO: Python não encontrado!"
    echo ""
    echo "Instale Python ou abra o arquivo index.html diretamente no navegador."
    echo ""
    exit 1
fi
