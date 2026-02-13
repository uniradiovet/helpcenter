#!/bin/bash

echo "🚀 Portal de Documentação UniRadio - Início Rápido"
echo "=================================================="
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado!"
    echo "Por favor, instale o Node.js 18+ em https://nodejs.org"
    exit 1
fi

echo "✅ Versão do Node.js: $(node --version)"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependências instaladas com sucesso!"
else
    echo "❌ Falha ao instalar dependências"
    exit 1
fi

echo ""
echo "🎉 Configuração completa!"
echo ""
echo "Comandos disponíveis:"
echo "  npm run docs:dev      - Iniciar servidor de desenvolvimento"
echo "  npm run docs:build    - Build para produção"
echo "  npm run docs:preview  - Preview do build de produção"
echo ""
echo "Para começar, execute:"
echo "  npm run docs:dev"
echo ""
echo "Depois abra http://localhost:5173 no seu navegador"
