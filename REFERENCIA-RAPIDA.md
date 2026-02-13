# Referência Rápida

## 🚀 Começando (5 Minutos)

```bash
# 1. Extrair o projeto
tar -xzf uniradio-docs.tar.gz
cd uniradio-docs

# 2. Instalar e executar
./iniciar.sh

# OU manualmente:
npm install
npm run docs:dev

# 3. Abrir navegador
# http://localhost:5173
```

## 📝 Uso Diário

### Criando um Novo Tutorial

```bash
# 1. Criar arquivo
touch docs/radiologistas/novo-tutorial.md

# 2. Adicionar conteúdo
cat > docs/radiologistas/novo-tutorial.md << 'EOF'
# Título do Tutorial

## Passo a Passo

### 1. Primeiro Passo

Conteúdo aqui...
EOF

# 3. Adicionar à barra lateral em docs/.vitepress/config.mjs
```

### Adicionando Imagens

```bash
# 1. Salvar imagem
cp ~/captura-tela.png docs/public/images/radiologistas/

# 2. Referenciar no markdown
![Descrição](/images/radiologistas/captura-tela.png)
```

### Implantando Alterações

```bash
git add .
git commit -m "Documentação atualizada"
git push

# Implanta automaticamente em 2-3 minutos
```

## 🎯 Localizações de Arquivos

| O Que | Onde |
|------|-------|
| Docs radiologistas | `docs/radiologistas/*.md` |
| Docs clientes | `docs/clientes/*.md` |
| Imagens | `docs/public/images/` |
| Navegação | `docs/.vitepress/config.mjs` |
| Página inicial | `docs/index.md` |
| FAQ | `docs/perguntas-frequentes.md` |

## 🔨 Comandos

```bash
npm run docs:dev      # Desenvolvimento (com hot reload)
npm run docs:build    # Build para produção
npm run docs:preview  # Preview do build de produção
```

## 📋 Dicas de Markdown

```markdown
# Título H1
## Seção H2
### Subseção H3

**negrito** e *itálico*

[Texto do link](/caminho/para/pagina)

![Imagem](/images/pasta/nome.png)

::: tip Dica
Dica útil
:::

::: warning Aviso
Aviso importante
:::

- Lista com marcadores
- Item 2

1. Lista numerada
2. Item 2

| Coluna 1 | Coluna 2 |
|----------|----------|
| Dado 1   | Dado 2   |
```

## 🌐 URLs Após Implantação

```
Página inicial:   https://seuusuario.github.io/uniradio-docs/
Radiologistas:    https://seuusuario.github.io/uniradio-docs/radiologistas/
Clientes:         https://seuusuario.github.io/uniradio-docs/clientes/
FAQ:              https://seuusuario.github.io/uniradio-docs/perguntas-frequentes
```

## ✅ Checklist Antes de Implantar

- [ ] Instalou dependências (`npm install`)
- [ ] Testou localmente (`npm run docs:dev`)
- [ ] Todas as imagens salvas em `/docs/public/images/`
- [ ] Navegação atualizada em `config.mjs`
- [ ] Commit no Git
- [ ] Push para GitHub
- [ ] GitHub Pages ativado

## 🆘 Solução Rápida de Problemas

**Build falha:**
```bash
npm install  # Reinstalar dependências
npm run docs:dev  # Verificar erros
```

**Imagens não aparecem:**
- Verifique o caminho: `/images/` não `./images/`
- Verifique se o arquivo existe em `docs/public/images/`
- Nomes de arquivos são case-sensitive

**404 no site implantado:**
- Verifique se `base` em config.mjs corresponde ao nome do repo
- Verifique se GitHub Pages está ativado
- Aguarde alguns minutos para propagação

**Busca não funciona:**
```javascript
// Em config.mjs
search: {
  provider: 'local'  // Certifique-se de que está configurado
}
```

## 📞 Recursos

- **Este Projeto**: Leia VISAO-GERAL-PROJETO.md
- **Migração**: Leia MIGRACAO.md  
- **Implantação**: Leia IMPLANTACAO.md
- **VitePress**: https://vitepress.dev
- **Markdown**: https://www.markdownguide.org

## 🎯 Tarefas Prioritárias

1. **Hoje**: Implantar no GitHub Pages
2. **Esta Semana**: Migrar 5 tutoriais de alta prioridade
3. **Este Mês**: Completar todos os tutoriais + imagens
4. **Próximo Mês**: Adicionar vídeos, otimizar, coletar feedback

---

**Precisa de ajuda?** Leia o arquivo VISAO-GERAL-PROJETO.md ou a documentação do VitePress!
