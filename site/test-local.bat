@echo off
echo ====================================
echo PESTA Task Manager - Servidor Local
echo ====================================
echo.
echo Iniciando servidor HTTP local...
echo O site estara disponivel em: http://localhost:8000
echo.
echo Para parar o servidor, pressione Ctrl+C
echo.
echo ====================================
echo.

REM Tentar Python 3 primeiro
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Usando Python 3...
    python -m http.server 8000
    goto :end
)

REM Tentar Python 2
python2 --version >nul 2>&1
if %errorlevel% == 0 (
    echo Usando Python 2...
    python2 -m SimpleHTTPServer 8000
    goto :end
)

REM Se Python não estiver instalado
echo ERRO: Python nao encontrado!
echo.
echo Instale Python de: https://www.python.org/downloads/
echo Ou abra o arquivo index.html diretamente no navegador.
echo.
pause

:end
