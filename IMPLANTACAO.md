# Guia de Implantação no GitHub Pages

Siga estes passos para implantar sua documentação UniRadio no GitHub Pages.

## Pré-requisitos

- Conta no GitHub
- Git instalado no seu computador
- Node.js 18+ instalado

## Passo 1: Criar Repositório no GitHub

1. Vá para [GitHub](https://github.com)
2. Clique no ícone "+" → "New repository"
3. Nome: `uniradio-docs`
4. Torne-o Público ou Privado (Público recomendado para documentação)
5. Não inicialize com README (já temos um)
6. Clique em "Create repository"

## Passo 2: Enviar Seu Código

Abra o terminal na pasta `uniradio-docs` e execute:

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Commit
git commit -m "Configuração inicial da documentação"

# Adicionar seu repositório GitHub como remoto
git remote add origin https://github.com/SEU_USUARIO/uniradio-docs.git

# Push para GitHub
git branch -M main
git push -u origin main
```

Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.

## Passo 3: Ativar GitHub Pages

1. Vá para seu repositório no GitHub
2. Clique na aba "Settings"
3. Clique em "Pages" na barra lateral esquerda
4. Em "Build and deployment":
   - Source: Selecione "GitHub Actions"
5. O workflow será executado automaticamente no push

## Passo 4: Aguardar Implantação

1. Vá para a aba "Actions" no seu repositório
2. Você verá o workflow de implantação em execução
3. Aguarde a conclusão (geralmente 2-3 minutos)
4. Uma vez completo, seu site estará online!

## Passo 5: Acessar Sua Documentação

Sua documentação estará disponível em:

```
https://SEU_USUARIO.github.io/uniradio-docs/
```

## Atualizando a Documentação

Para atualizar a documentação:

1. Edite qualquer arquivo `.md` localmente
2. Commit e push:

```bash
git add .
git commit -m "Atualizar documentação"
git push
```

O site será reconstruído e implantado automaticamente em 2-3 minutos.

## Domínio Personalizado (Opcional)

### Opção 1: Usando Domínio Personalizado do GitHub Pages

1. Compre um domínio (ex: docs.uniradio.vet.br)
2. Em Configurações do repositório → Pages → Custom domain
3. Digite seu domínio
4. Adicione registros DNS no seu provedor de domínio:
   - Type: CNAME
   - Name: docs (ou subdomínio que desejar)
   - Value: SEU_USUARIO.github.io

### Opção 2: Atualizar Base do VitePress

Se implantar em um subdomínio ou caminho, atualize `config.mjs`:

```javascript
export default defineConfig({
  base: '/uniradio-docs/', // Adicione esta linha
  // ... resto da config
})
```

## Solução de Problemas

### Build Falha

Verifique a aba Actions para mensagens de erro. Problemas comuns:
- Dependências faltando: Execute `npm install` localmente para verificar
- Erros de sintaxe na config: Valide seu `.vitepress/config.mjs`

### Página 404 Não Encontrada

- Certifique-se de que `base` em config.mjs corresponda ao nome do repositório
- Verifique se GitHub Pages está ativado
- Confirme que o workflow foi concluído com sucesso

### Imagens Não Aparecem

- Imagens devem estar em `/docs/public/images/`
- Referencie-as como `/images/nomedoarquivo.png` (não `./images/`)
- Nomes de arquivos são case-sensitive

## Testando Localmente Antes da Implantação

Sempre teste localmente antes de fazer push:

```bash
# Servidor de desenvolvimento
npm run docs:dev

# Teste de build de produção
npm run docs:build
npm run docs:preview
```

## Proteção de Branch (Opcional)

Para documentação em equipe:

1. Settings → Branches
2. Adicione regra para branch `main`
3. Requeira revisões de pull request
4. Requeira que verificações de status passem

## Próximos Passos

1. ✅ Implantar no GitHub Pages
2. 📝 Adicionar todos os tutoriais do documento fonte
3. 🖼️ Adicionar capturas de tela para tutoriais
4. 📹 Incorporar tutoriais em vídeo
5. 🎨 Personalizar cores do tema
6. 🔍 Testar funcionalidade de busca
7. 📱 Testar em dispositivos móveis

## Precisa de Ajuda?

- [Documentação VitePress](https://vitepress.dev)
- [Documentação GitHub Pages](https://docs.github.com/pages)
- [Documentação GitHub Actions](https://docs.github.com/actions)
