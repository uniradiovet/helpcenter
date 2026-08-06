# Como Configurar o VXVue para Enviar Exames ao Servidor PACS

Aprenda como configurar o software VXVue Imaging Expert para conectar e enviar exames diretamente ao servidor PACS em nuvem da UniRadio.

## Pré-requisitos

Antes de iniciar, você precisará das informações do seu servidor PACS na UniRadio:

- **AE Title** do servidor
- **Endereço IP** do servidor
- **Porta**

:::tip Onde encontrar essas informações?
Acesse as [Configurações do Servidor PACS](/radiologists/pacs/pacs-settings) na plataforma UniRadio e habilite a **Porta do PACS** para visualizar os dados de conexão.
:::

---

## Parte 1: Cadastrar o Servidor PACS no VXVue

### 1. Acesse as Configurações

Na tela principal do VXVue, clique na aba **"Configuração"** localizada na barra lateral direita.

![Tela principal do VXVue com a aba Configuração destacada na barra lateral direita](/images/radiologists/pacs/vxvuew/1-vxvue.jpg)

### 2. Navegue até a seção DICOM

Na árvore de configurações, localize o grupo **"Integração"** e clique em **"DICOM"** para expandir as opções de integração.

![Árvore de configurações com a opção DICOM destacada dentro do grupo Integração](/images/radiologists/pacs/vxvuew/2-vxvue.jpg)

### 3. Abra o menu Armazenamento

Com o grupo **DICOM** expandido, clique em **"Armazenamento"** para acessar as configurações dos servidores PACS de destino.

![Menu DICOM expandido com a opção Armazenamento destacada](/images/radiologists/pacs/vxvuew/3-vxvue.jpg)

### 4. Adicione o servidor e preencha os dados

Na tela **"DICOM - Armazenamento"**:

1. Clique em **"Adicionar"** para criar um novo destino PACS
2. Preencha os campos com as informações fornecidas pela UniRadio:
   - **Nome** — um nome identificador (ex: `UNIRADIO`)
   - **Título de AE** — insira o AE Title do servidor (ex: `UNIRADIOAPP`)
   - **Endereço IP** — insira o endereço IP do servidor
   - **Porta** — insira a porta do servidor
   
:::tip Onde encontrar essas informações?
Acesse as [Configurações do Servidor PACS](/radiologists/pacs/pacs-settings) na plataforma UniRadio e habilite a **Porta do PACS** para visualizar os dados de conexão.
:::

3. Clique em **"Atualizar"** para salvar as configurações

:::tip Software de Colimação
Mantenha o **Software de Colimação** definido como **"Cortar"** para garantir compatibilidade com o servidor PACS.
:::

![Tela DICOM Armazenamento com os campos Nome, Título de AE, IP e Porta preenchidos, e botões Adicionar e Atualizar destacados](/images/radiologists/pacs/vxvuew/4-vxvue.jpg)

---

## Parte 2: Enviar um Exame ao PACS

### 5. Acesse o Banco de Dados

Clique na aba **"Banco de Dados"** na barra lateral direita para acessar a lista de exames realizados.

![Tela de estudos com a aba Banco de Dados destacada na barra lateral direita](/images/radiologists/pacs/vxvuew/5-vxvue.jpg)

### 6. Selecione o exame

Na lista de estudos, clique sobre o exame que deseja enviar ao PACS para selecioná-lo.

![Lista de estudos com um exame selecionado destacado em azul](/images/radiologists/pacs/vxvuew/6-vxvue.jpg)

### 7. Clique em Enviar

Com o exame selecionado, clique no botão **"Enviar"** na barra de ferramentas superior para transferir as imagens ao servidor PACS da UniRadio.

O exame ficará disponível na plataforma para laudar assim que a transferência for concluída.

![Barra de ferramentas com o botão Enviar destacado](/images/radiologists/pacs/vxvuew/7-vxvue.jpg)

---

## Precisa de Ajuda?

Confira nossas [Perguntas Frequentes](/faq) ou entre em contato com o suporte se encontrar problemas ao configurar ou enviar exames pelo VXVue.
