# Como Configurar o Ultramedic para Enviar Exames ao Servidor PACS

Aprenda como configurar o software Ultramedic para conectar e enviar exames diretamente ao servidor PACS em nuvem da UniRadio.

## Pré-requisitos

Antes de iniciar, você precisará das informações do seu servidor PACS na UniRadio:

- **AE Title** do servidor
- **Endereço IP** do servidor
- **Porta**

:::tip Onde encontrar essas informações?
Acesse as [Configurações do Servidor PACS](/radiologists/pacs/pacs-settings) na plataforma UniRadio e habilite a **Porta do PACS** para visualizar os dados de conexão.
:::

---

## Parte 1: Cadastrar o Servidor PACS no Ultramedic

### 1. Acesse o Gestor do sistema

Na tela principal do Ultramedic, clique no ícone de **engrenagem** (configurações) no canto superior direito da tela.

![Tela principal do Ultramedic com o ícone de engrenagem destacado no canto superior direito](/images/radiologists/pacs/ultramedic/Ultramedic-1.jpg)

### 2. Abra as configurações do Sistema

No menu **"Gestor do sistema"**, clique em **"SISTEMA"** para acessar as configurações gerais do software.

![Gestor do sistema com a opção SISTEMA destacada](/images/radiologists/pacs/ultramedic/Ultramedic-2.jpg)

### 3. Acesse a aba Armazenamento

Na janela **"Sistema"**, clique na aba **"Armazenamento"** para acessar as configurações dos servidores DICOM.

![Janela Sistema com a aba Armazenamento destacada, mostrando os campos de DICOM STORE](/images/radiologists/pacs/ultramedic/Ultramedic-2a.jpg)

### 4. Preencha os dados do servidor PACS

Localize um slot disponível (ex: **DICOM STORE No.2**) e preencha os campos com as informações fornecidas pela UniRadio:

- **AETitle** — insira o AE Title do servidor (ex: `ZOOMPPACS`)
- **IPAddr** — insira o endereço IP do servidor (ex: `54.187.76.135`)
- **Porta** — insira a porta do servidor (ex: `15451`)
- **Protocolo** — mantenha como `<Default>`
- **Enviar** — selecione `Envio manual`

:::tip Onde encontrar essas informações?
Acesse as [Configurações do Servidor PACS](/radiologists/pacs/pacs-settings) na plataforma UniRadio e habilite a **Porta do PACS** para visualizar os dados de conexão.
:::

![DICOM STORE No.2 com os campos AETitle, IPAddr e Porta preenchidos com os dados do servidor UniRadio](/images/radiologists/pacs/ultramedic/Ultramedic-3.jpg)

### 5. Salve as configurações

Clique em **"OK"** para salvar as configurações do servidor PACS.

![Botão OK destacado na janela de configurações do Sistema](/images/radiologists/pacs/ultramedic/Ultramedic-4.jpg)

---

## Parte 2: Enviar um Exame ao PACS

### 6. Selecione o exame na Lista de estudos

1. Clique na aba **"Lista de estudo"** na parte superior da tela
2. Selecione o exame que deseja enviar clicando sobre ele na lista
3. Clique no ícone de **envio DICOM** (ícone de globo) na barra de ferramentas inferior

![Lista de estudos com a aba "Lista de estudo", o exame selecionado e o ícone de envio DICOM destacados](/images/radiologists/pacs/ultramedic/Ultramedic-5.jpg)

### 7. Confirme o destino e envie

Na janela **"Carregamento de dados"**:

1. Selecione o servidor **ZOOMPPACS** como destino
2. Clique em **"Enviar"** para iniciar a transferência do exame

O exame será enviado ao servidor PACS da UniRadio. Após o envio, ele ficará disponível na plataforma para laudar.

![Janela Carregamento de dados com o servidor ZOOMPPACS selecionado e o botão Enviar destacado](/images/radiologists/pacs/ultramedic/Ultramedic-6.jpg)

---

## Precisa de Ajuda?

Confira nossas [Perguntas Frequentes](/faq) ou entre em contato com o suporte se encontrar problemas ao configurar ou enviar exames pelo Ultramedic.
