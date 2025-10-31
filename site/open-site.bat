@echo off
REM Script para abrir o PESTA Task Manager no navegador padrão

echo ====================================
echo PESTA Task Manager
echo ====================================
echo.
echo Abrindo site no navegador...
echo.

REM Abre o arquivo no navegador padrão do Windows
start "" "%~dp0index.html"

echo Site aberto!
echo.
echo Feche esta janela quando terminar.
timeout /t 3
