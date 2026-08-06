# Como Configurar o DR Tech para Enviar Exames ao Servidor PACS

Aprenda como configurar o software DR Tech para conectar e enviar exames diretamente ao servidor PACS em nuvem da UniRadio.

## Pré-requisitos

Antes de iniciar, você precisará das informações do seu servidor PACS na UniRadio:

- **AE Title** do servidor
- **Endereço IP** do servidor
- **Porta**

:::tip Onde encontrar essas informações?
Acesse as [Configurações do Servidor PACS](/clients/pacs/pacs-settings) na plataforma UniRadio e habilite a **Porta do PACS** para visualizar os dados de conexão.
:::

---

## Parte 1: Cadastrar o Servidor PACS no DR Tech

### 1. Acesse as Configurações

Na tela principal do DR Tech, clique no botão **"Config"** localizado na barra inferior direita da tela.

![Tela principal do DR Tech com o botão Config destacado na barra inferior direita](/images/radiologists/pacs/drtech/1-drtech.jpg)

### 2. Abra a seção PACS e clique em Adicionar

Na janela **"Config."**, clique em **"PACS"** no menu lateral esquerdo. A lista de servidores cadastrados será exibida. Clique no botão **"Adicionar"** para cadastrar um novo servidor.

![Janela Config. na seção PACS com o botão Adicionar destacado](/images/radiologists/pacs/drtech/2-drtech.jpg)

### 3. Preencha os dados do servidor PACS

Na janela **"Novo"**, preencha os campos com as informações fornecidas pela UniRadio:

- **AE Title** — insira o AE Title do servidor (ex: `UNIRADIOAPP`)
- **IP** — insira o endereço IP do servidor
- **Porta** — insira a porta do servidor

:::tip Onde encontrar essas informações?
Acesse as [Configurações do Servidor PACS](/clients/pacs/pacs-settings) na plataforma UniRadio e habilite a **Porta do PACS** para visualizar os dados de conexão.
:::

Clique em **"Ok"** para confirmar o cadastro.

![Formulário Novo com os campos AE Title, IP e Porta preenchidos e botão Ok destacado](/images/radiologists/pacs/drtech/3-drtech.jpg)

### 4. Verifique a conexão e feche as configurações

O servidor recém-adicionado aparecerá na lista. Se a conexão estiver correta, o status exibirá **"PACS OK (C-ECHO)"**, confirmando que o equipamento está comunicando com o servidor.

Verifique o **TimeOut** (padrão: 30 segundos) e clique no **"X"** para fechar a janela de configurações.

![Janela PACS mostrando o servidor UNIRADIOAPP adicionado com status PACS OK e TimeOut destacado](/images/radiologists/pacs/drtech/4-drtech.jpg)

---

## Parte 2: Enviar um Exame ao PACS

### 5. Selecione o exame e clique em Enviar

1. Clique na aba **"Lista de Estudo"** na parte superior da tela
2. Selecione o paciente e o exame que deseja enviar
3. Clique no botão **"Enviar"** no canto inferior direito para enviar as imagens ao servidor PACS

O exame será transferido ao servidor PACS da UniRadio e ficará disponível na plataforma para laudar.

![Lista de Estudo com paciente selecionado e botão Enviar destacado no canto inferior direito](/images/radiologists/pacs/drtech/5-drtech.jpg)

---

## Precisa de Ajuda?

Confira nossas [Perguntas Frequentes](/faq) ou entre em contato com o suporte se encontrar problemas ao configurar ou enviar exames pelo DR Tech.
