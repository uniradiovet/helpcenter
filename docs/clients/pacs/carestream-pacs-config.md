# Como Configurar o Carestream para Enviar Exames ao Servidor PACS

Aprenda como configurar o software Carestream Image Suite para conectar e enviar exames diretamente ao servidor PACS em nuvem da UniRadio.

## Pré-requisitos

Antes de iniciar, você precisará das informações do seu servidor PACS na UniRadio:

- **Endereço IP** do servidor
- **Porta SSCP**
- **AE Title** (Nome AE)

:::tip Onde encontrar essas informações?
Acesse as [Configurações do Servidor PACS](/clients/pacs/pacs-settings) na plataforma UniRadio e habilite a **Porta do PACS** para visualizar os dados de conexão.
:::

---

## Parte 1: Cadastrar o Servidor PACS no Carestream

### 1. Acesse a Configuração do Serviço

Abra o Carestream Image Suite e acesse **Configuração do serviço**. No menu lateral, clique em **"Outro regist..."** para gerenciar os destinos PACS cadastrados.

![Tela de Configuração do serviço com a opção "Outro regist..." destacada](/images/radiologists/pacs/carestream/Carestream-1.jpg)

### 2. Preencha as informações do servidor PACS

Na tela **"Informações sobre o Carestream PACS"**, preencha os campos conforme as informações fornecidas pela UniRadio:

- **Nome AE** — insira o AE Title do servidor (ex: `UNIRADIOAPP`)
- **Endereço IP** — insira o IP do servidor PACS
- **Título AE SSCP** — marque a caixa e insira o mesmo AE Title
- **Nº da porta SSCP** — insira a porta fornecida (ex: `15451`)
- **Confirmação de** — mantenha como `Não permitido`

:::tip Onde encontrar essas informações?
Acesse as [Configurações do Servidor PACS](/clients/pacs/pacs-settings) na plataforma UniRadio e habilite a **Porta do PACS** para visualizar os dados de conexão.
:::

![Formulário de cadastro com os campos Nome AE, Endereço IP, Título AE SSCP e Porta preenchidos](/images/radiologists/pacs/carestream/Carestream-2.jpg)

### 3. Salve o cadastro

Clique no botão **Salvar** (ícone de disquete) na parte inferior da janela para confirmar o cadastro do servidor.

![Botão Salvar destacado na parte inferior da janela](/images/radiologists/pacs/carestream/Carestream-3.jpg)

---

## Parte 2: Configurar a Transferência

### 4. Configure o tempo limite e salve

De volta à tela **"Configuração do serviço"**, na seção **"Configuração de transferência"**:

1. Verifique se o **Tempo limite** está definido como `120` segundos
2. Clique no botão **Salvar** (ícone de disquete) para salvar as configurações de transferência

![Seção de Configuração de transferência com Tempo limite em 120 e botão Salvar destacados](/images/radiologists/pacs/carestream/Carestream-4.jpg)

### 5. Carregue as configurações

Clique no botão **"Carregar"** na barra inferior da janela para aplicar todas as configurações realizadas.

![Botão Carregar destacado na barra inferior da janela](/images/radiologists/pacs/carestream/Carestream-5.jpg)

---

## Parte 3: Enviar um Exame ao PACS

### 6. Selecione o exame na lista de estudos

Na tela principal do Carestream Image Suite, localize o exame que deseja enviar na **lista de estudos** e clique sobre ele para selecioná-lo.

![Lista de estudos com um exame selecionado e status "INICIADO"](/images/radiologists/pacs/carestream/Carestream-6.jpg)

### 7. Abra o visualizador e acesse a opção de exportação

Com o exame aberto no visualizador de imagens, clique no ícone de **exportar/enviar** (ícone de servidor) localizado na barra de ferramentas inferior esquerda.

![Visualizador de imagens com o ícone de exportação destacado na barra inferior](/images/radiologists/pacs/carestream/Carestream-7.jpg)

### 8. Exporte o estudo para o PACS

Na janela **"Exportar estudo"**:

1. Selecione as imagens que deseja enviar (ou marque **"Selecionar tudo"**)
2. Na lista de destinos, marque o servidor **ZOOMPPACS**
3. Clique no botão de **envio** (ícone de energia) para iniciar a transferência

![Janela Exportar estudo com imagens selecionadas, destino ZOOMPPACS marcado e botão de envio destacado](/images/radiologists/pacs/carestream/Carestream-8.jpg)

### 9. Acompanhe o status da transferência

O **Painel de transferência** será aberto automaticamente, mostrando o progresso e o status de cada envio. Quando o status exibir **"Bem-sucedido"**, o exame foi enviado com sucesso ao servidor PACS.

![Painel de transferência mostrando estudos com status "Recente" e "Bem-sucedido"](/images/radiologists/pacs/carestream/Carestream-9.jpg)

---

## Precisa de Ajuda?

Confira nossas [Perguntas Frequentes](/faq) ou entre em contato com o suporte se encontrar problemas ao configurar ou enviar exames pelo Carestream.
