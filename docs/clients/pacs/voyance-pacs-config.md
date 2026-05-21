# Como Configurar o Voyance para Enviar Exames ao Servidor PACS

Aprenda como configurar o software Voyance para conectar e enviar exames diretamente ao servidor PACS em nuvem da UniRadio.

## Pré-requisitos

Antes de iniciar, você precisará das informações do seu servidor PACS na UniRadio:

- **AE Title** do servidor
- **Endereço IP** do servidor
- **Porta**

:::tip Onde encontrar essas informações?
Acesse as [Configurações do Servidor PACS](/clients/pacs/pacs-settings) na plataforma UniRadio e habilite a **Porta do PACS** para visualizar os dados de conexão.
:::

---

## Parte 1: Cadastrar o Servidor PACS no Voyance

### 1. Acesse o Menu Principal

Na tela principal do Voyance, clique no botão **"Menu Principal"** localizado na barra inferior para abrir o menu de opções.

![Tela principal do Voyance com o botão Menu Principal destacado na barra inferior](/images/radiologists/pacs/voyance/Voyance01.jpg)

### 2. Abra as Configurações

No menu lateral que se abre, clique em **"Configurações"** para acessar as configurações do sistema.

![Menu lateral aberto com a opção Configurações destacada](/images/radiologists/pacs/voyance/Voyance02.jpg)

### 3. Acesse a aba Comunicações

Na janela de Configurações, clique na aba **"Comunicações"** para acessar as opções de integração DICOM.

![Janela de Configurações com a aba Comunicações destacada](/images/radiologists/pacs/voyance/Voyance03.jpg)

### 4. Navegue até Nós Remotos

Dentro de **Comunicações**, certifique-se de estar na seção **DICOM** e clique na aba **"Nós remotos"** para gerenciar os servidores PACS de destino.

![Aba DICOM com a sub-aba Nós remotos destacada](/images/radiologists/pacs/voyance/Voyance04.jpg)

### 5. Adicione um novo nó remoto

Clique no botão **"Novo nó remoto"** na parte inferior da tela para criar uma nova entrada de servidor PACS.

![Tela de Nós remotos com o botão Novo nó remoto destacado na parte inferior](/images/radiologists/pacs/voyance/Voyance05.jpg)

### 6. Preencha os dados de conexão

No painel à direita, preencha os campos com as informações fornecidas pela UniRadio:

- **Nome** — um nome identificador (ex: `PACS`)
- **AE TITLE** — insira o AE Title do servidor (ex: `UNIRADIOAPP`)
- **Host** — insira o endereço IP do servidor
- **Porta** — insira a porta do servidor

:::tip Onde encontrar essas informações?
Acesse as [Configurações do Servidor PACS](/clients/pacs/pacs-settings) na plataforma UniRadio e habilite a **Porta do PACS** para visualizar os dados de conexão.
:::

![Painel de configuração com os campos Nome, AE TITLE, Host e Porta destacados](/images/radiologists/pacs/voyance/Voyance06.jpg)

### 7. Teste a conexão

Com os dados preenchidos, clique em **"Testar nó remoto"** para verificar se a conexão com o servidor PACS está funcionando corretamente.

![Configurações preenchidas com o botão Testar nó remoto destacado](/images/radiologists/pacs/voyance/Voyance07.jpg)

### 8. Confirme o sucesso da conexão

Se a conexão for estabelecida corretamente, uma mensagem de **"Sucesso"** será exibida: *"Conexão com o nó remoto, feita com sucesso"*. Clique em **"OK"** para fechar o diálogo.

![Diálogo de sucesso informando que a conexão com o nó remoto foi realizada com êxito](/images/radiologists/pacs/voyance/Voyance08.jpg)

### 9. Salve as configurações

Clique em **"OK"** no canto inferior direito da janela de Configurações para salvar e fechar.

![Janela de configurações com o botão OK destacado para salvar](/images/radiologists/pacs/voyance/Voyance09.jpg)

---

## Parte 2: Enviar um Exame ao PACS

### 10. Acesse a aba Completo

Na tela principal do Voyance, clique na aba **"Completo"** na barra superior para visualizar os exames já finalizados e disponíveis para envio.

![Tela principal com a aba Completo destacada na barra superior](/images/radiologists/pacs/voyance/Voyance10.jpg)

### 11. Selecione o exame

Na lista de exames completos, clique sobre o exame que deseja enviar ao servidor PACS para selecioná-lo.

![Lista de exames completos com um exame selecionado destacado](/images/radiologists/pacs/voyance/Voyance11.jpg)

### 12. Clique em Para o Servidor

Com o exame selecionado, clique no botão **"PARA O SERVIDOR"** no painel lateral direito para iniciar o envio das imagens ao servidor PACS da UniRadio.

![Painel lateral com o botão Para o Servidor destacado](/images/radiologists/pacs/voyance/Voyance12.jpg)

### 13. Aguarde a confirmação

O progresso do envio será exibido na barra inferior da tela. Quando concluído, a mensagem **"Upload das imagens feito com sucesso"** confirmará que o exame foi enviado. Ele ficará disponível na plataforma UniRadio para laudar em instantes.

![Barra inferior mostrando o progresso de upload e a mensagem de sucesso](/images/radiologists/pacs/voyance/Voyance13.jpg)

---

## Precisa de Ajuda?

Confira nossas [Perguntas Frequentes](/faq) ou entre em contato com o suporte se encontrar problemas ao configurar ou enviar exames pelo Voyance.
