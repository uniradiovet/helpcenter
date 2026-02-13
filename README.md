# Portal de Documentação UniRadio

Um site de documentação completo para a UniRadio, construído com VitePress e implantado no GitHub Pages.

## 🚀 Recursos

- **Navegação por Função**: Seções separadas para Radiologistas e Clientes
- **Buscável**: Funcionalidade de busca integrada
- **Mobile Friendly**: Design responsivo para todos os dispositivos
- **Rápido**: Powered by Vite para builds ultra-rápidas
- **Fácil de Atualizar**: Escreva documentação em Markdown
- **Implantação Automática**: Push para GitHub e implanta automaticamente

## 📁 Estrutura do Projeto

```
uniradio-docs/
├── docs/
│   ├── .vitepress/
│   │   └── config.mjs          # Configuração VitePress
│   ├── radiologistas/          # Documentação radiologistas
│   │   ├── index.md
│   │   ├── editar-perfil.md
│   │   └── ...
│   ├── clientes/               # Documentação clientes
│   │   ├── index.md
│   │   ├── criar-exame.md
│   │   └── ...
│   ├── public/                 # Assets estáticos (imagens, etc.)
│   │   └── images/
│   ├── index.md                # Página inicial
│   └── perguntas-frequentes.md # Página FAQ
├── package.json
└── README.md
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seuusuario/uniradio-docs.git
cd uniradio-docs
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run docs:dev
```

O site estará disponível em `http://localhost:5173`

## 📝 Escrevendo Documentação

### Criando uma Nova Página

1. Crie um novo arquivo `.md` no diretório apropriado:
   - `/docs/radiologistas/` para documentação de radiologistas
   - `/docs/clientes/` para documentação de clientes

2. Adicione front matter (opcional):
```markdown
---
title: Título da Sua Página
description: Descrição da página para SEO
---

# Título da Sua Página

Seu conteúdo aqui...
```

3. Adicione a página à barra lateral em `.vitepress/config.mjs`:
```javascript
sidebar: {
  '/radiologistas/': [
    {
      text: 'Sua Seção',
      items: [
        { text: 'Sua Página', link: '/radiologistas/sua-pagina' }
      ]
    }
  ]
}
```

### Adicionando Imagens

1. Coloque imagens em `/docs/public/images/`
2. Referencie-as no markdown:
```markdown
![Texto alternativo](/images/radiologistas/captura-tela.png)
```

### Usando Alertas e Dicas

VitePress suporta containers personalizados:

```markdown
::: tip Dica
Isto é uma dica
:::

::: warning Aviso
Isto é um aviso
:::

::: danger Perigo
Isto é um aviso perigoso
:::

::: info Informação
Isto é uma caixa de informação
:::
```

## 🚢 Implantação

### GitHub Pages (Automático)

1. Faça push do seu código para o GitHub
2. GitHub Actions irá automaticamente construir e implantar no GitHub Pages
3. Seu site estará disponível em `https://seuusuario.github.io/uniradio-docs/`

### Build Manual

```bash
npm run docs:build
```

Os arquivos construídos estarão em `docs/.vitepress/dist/`

## 🎨 Personalização

### Alterando Cores/Tema

Edite `.vitepress/theme/custom.css` (crie se não existir):

```css
:root {
  --vp-c-brand: #sua-cor;
  --vp-c-brand-light: #sua-cor-clara;
  --vp-c-brand-lighter: #sua-cor-mais-clara;
}
```

### Adicionando um Logo

1. Adicione seu logo em `/docs/public/logo.svg`
2. Já está configurado em `config.mjs`

### Atualizando Navegação

Edite o array `nav` em `.vitepress/config.mjs`:

```javascript
nav: [
  { text: 'Início', link: '/' },
  { text: 'Seu Link', link: '/sua-pagina' }
]
```

## 📋 Lista de Tarefas

- [ ] Adicionar todos os tutoriais de radiologistas do documento fonte
- [ ] Adicionar todos os tutoriais de clientes do documento fonte
- [ ] Adicionar embeds de vídeo onde aplicável
- [ ] Criar logo personalizado
- [ ] Adicionar capturas de tela para todos os tutoriais
- [ ] Configurar domínio personalizado (opcional)
- [ ] Ativar Google Analytics (opcional)

## 🤝 Contribuindo

1. Crie um novo branch
2. Faça suas alterações
3. Envie um pull request

## 📞 Suporte

Para perguntas ou problemas, entre em contato através do nosso [Formulário de Suporte](https://forms.clickup.com/3010859/f/2vw9b-4017/JUF9S4KVT2T4VHWMZ4)

## 📄 Licença

Licença MIT - sinta-se livre para usar isso em seu projeto
