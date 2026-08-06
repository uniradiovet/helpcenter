# Como Configurar o ZView para Enviar Exames ao Servidor PACS

Aprenda como configurar o software ZView para conectar e enviar exames diretamente ao servidor PACS em nuvem da UniRadio.

## Pré-requisitos

Antes de iniciar, você precisará das informações do seu servidor PACS na UniRadio:

- **AE Title** do servidor
- **Endereço IP** do servidor
- **Porta**

:::tip Onde encontrar essas informações?
Acesse as [Configurações do Servidor PACS](/clients/pacs/pacs-settings) na plataforma UniRadio e habilite a **Porta do PACS** para visualizar os dados de conexão.
:::

---

## Parte 1: Cadastrar o Servidor PACS no ZView

### 1. Acesse as Configurações

Na tela principal do ZView, clique no botão **"CONFIG."** na barra superior para abrir as configurações do sistema.

![Tela principal do ZView com o botão CONFIG. destacado na barra superior](/images/radiologists/pacs/zview/01-config.png)

### 2. Navegue até DICOM Armazenamento

Na árvore de configurações, expanda o grupo **"2. DICOM"** e clique em **"2. DICOM Armazenamento"** para acessar os servidores PACS de destino.

![Árvore de configurações com a opção DICOM Armazenamento destacada dentro do grupo DICOM](/images/radiologists/pacs/zview/02-dicom-storage.png)

### 3. Clique em Inserir

Na tela **"DICOM Armazenamento"**, clique em **"Inserir"** para cadastrar um novo servidor PACS.

![Tela DICOM Armazenamento com o botão Inserir destacado](/images/radiologists/pacs/zview/03-click-insert.png)

### 4. Preencha os dados de conexão

Na janela **"DICOM STORAGE"**, preencha os campos com as informações fornecidas pela UniRadio:

- **Name** — um nome identificador (ex: `UNIRADIO`)
- **Título AE** — insira o AE Title do servidor (ex: `UNIRADIOAPP`)
- **Endereço IP** — insira o endereço IP do servidor
- **Número da Porta** — insira a porta do servidor

:::tip Onde encontrar essas informações?
Acesse as [Configurações do Servidor PACS](/clients/pacs/pacs-settings) na plataforma UniRadio e habilite a **Porta do PACS** para visualizar os dados de conexão.
:::

Não é necessário alterar os campos da seção **Cliente**. Ao final, clique em **"OK"** para salvar.

![Janela DICOM STORAGE com os campos Name, Título AE, Endereço IP e Número da Porta destacados](/images/radiologists/pacs/zview/04-information-server-pacs.png)

### 5. Confirme o cadastro

O servidor cadastrado aparecerá na lista da tela **"DICOM Armazenamento"**. Clique em **"OK"** para salvar e fechar as configurações.

![Tela DICOM Armazenamento com o servidor cadastrado na lista e o botão OK destacado](/images/radiologists/pacs/zview/05-click-ok.png)

---

## Parte 2: Enviar um Exame ao PACS

### 6. Acesse a Busca

Na tela principal do ZView, clique no botão **"BUSCAR"** na barra superior para acessar a lista de exames realizados.

![Tela principal do ZView com o botão Buscar destacado na barra superior](/images/radiologists/pacs/zview/06-click-search.png)

### 7. Selecione o exame

Na lista de estudos, clique sobre o exame que deseja enviar ao servidor PACS para selecioná-lo.

![Lista de estudos com um exame selecionado destacado](/images/radiologists/pacs/zview/07-select-study.png)

### 8. Selecione o servidor de destino

No painel inferior esquerdo, selecione **"UNIRADIOAPP"** na lista suspensa ao lado do botão **"ENVIAR"**.

![Painel inferior com a lista suspensa de destino destacada, com UNIRADIOAPP selecionado](/images/radiologists/pacs/zview/09-select-uniradioapp.png)

### 9. Clique em Enviar

Com o exame e o servidor selecionados, clique no botão **"ENVIAR"** para transferir as imagens ao servidor PACS da UniRadio.

![Painel inferior com o botão Enviar destacado](/images/radiologists/pacs/zview/10-click-send.png)

### 10. Confirme o envio

Uma janela de confirmação será exibida perguntando **"Enviar imagens selecionadas? (S/N)"**. Clique em **"Sim"** para confirmar o envio.

O exame ficará disponível na plataforma para laudar assim que a transferência for concluída.

![Janela de confirmação com o botão Sim destacado](/images/radiologists/pacs/zview/11-confirm-send.png)

---

## Precisa de Ajuda?

Confira nossas [Perguntas Frequentes](/faq) ou entre em contato com o suporte se encontrar problemas ao configurar ou enviar exames pelo ZView.
