# Campos do Laudo

Entenda o que cada campo na tela de laudo significa.

---

## **Laudo do exame**

**Laudo** *(campo principal)*: Editor de texto completo onde o radiologista redige o laudo do exame. Suporta formatação rica (negrito, itálico, tabelas, imagens etc.).

**Usar modelo**: Botão para selecionar um modelo de laudo pré-cadastrado e utilizá-lo como ponto de partida para a redação.

### Upload de PDF

**Upload de PDF do laudo**: Área para anexar um arquivo PDF do laudo, caso o laudo seja gerado externamente (ex.: outro sistema). Substitui ou complementa o laudo redigido no editor.

---

## **Responsável pelo laudo**

**Responsável pelo laudo**: Selecione o membro da equipe (radiologista) responsável por elaborar o laudo deste exame.

::: warning ATENÇÃO
Disponível apenas para contas do tipo radiologista com permissão de edição de exame.
:::

**Revisado por**: Selecione o membro da equipe responsável pela revisão do laudo, caso aplicável.

---

## **Configurações do laudo**

**Qtd. de regiões**: Informe a quantidade de regiões anatômicas avaliadas no laudo (de 1 a 10). Utilizado para controle e cobrança.

**Categoria do exame** *(obrigatório)*: Classifique o exame em uma das categorias disponíveis (ex.: Radiografia, Tomografia, Ultrassonografia etc.).

**Tags**: Adicione etiquetas ao exame para facilitar a busca e categorização posterior. Podem ser selecionadas múltiplas tags.

**Imagens por página**: Define quantas imagens serão exibidas por página no PDF do laudo gerado (opções: 1, 2, 4, 6, 8 ou 10).

**Template de laudo**: Selecione um template de formatação para o PDF do laudo (ex.: cabeçalho personalizado, disposição das imagens etc.).

---

## **Ações (barra superior)**

**Salvar**: Salva o laudo sem enviá-lo ao cliente.

**Salvar e enviar**: Salva o laudo e envia a notificação ao cliente e/ou tutor com o link de acesso.

**Editar exame**: Abre o formulário de edição dos dados do exame (dados do paciente, clínico etc.).

**Visualizar PDF**: Abre o PDF do laudo em nova aba para pré-visualização.

**Compartilhar**: Gera e exibe um link de compartilhamento do exame.

### Menu de ações adicionais

**Mover para "Em andamento"**: Altera o status do exame para "Em andamento". Disponível quando o exame está com status "Pendente" ou "Rejeitado".

**Marcar como pendente**: Retorna o exame ao status "Pendente".

**Rejeitar exame**: Marca o exame como "Rejeitado".

**Versões anteriores do laudo**: Exibe o histórico de versões anteriores do texto do laudo, permitindo restaurar uma versão antiga.

---

## **Aba: Dados do exame**

Painel lateral com as informações cadastradas no exame, exibidas em modo de leitura.

### Dados do exame

**Tipo do exame**: Modalidade do exame (ex.: Radiografia, Tomografia, Ultrassonografia).

**Regiões**: Regiões anatômicas selecionadas no cadastro do exame.

**Contraste**: Detalhe da região onde foi aplicado o contraste, caso o exame tenha sido realizado com contraste.

**Data do exame**: Data em que o exame foi realizado.

**Data de envio**: Data e hora em que o exame foi enviado para o sistema.

**Data de aceite**: Data e hora em que o exame foi aceito pelo radiologista.

**Primeiro envio do laudo**: Data e hora do primeiro envio do laudo ao cliente.

**Médico solicitante**: Nome do médico veterinário que solicitou o exame.

**Clínica**: Nome da clínica responsável pelo exame.

### Dados do paciente

**Nome do paciente**: Nome do animal examinado.

**Tutor**: Nome do responsável pelo animal.

**E-mail do tutor**: E-mail do tutor, utilizado para envio de notificação com o link de acesso ao laudo.

**Espécie**: Espécie do animal (ex.: Canina, Felina).

**Raça**: Raça do animal.

**Idade**: Idade do animal, com a unidade (anos ou meses). Quando não informada numericamente, pode constar apenas a unidade.

**Peso**: Peso do animal.

**Sexo**: Sexo do animal.

**Castrado**: Indica se o animal é castrado (Sim/Não).

**Exame anterior**: Link para o exame anterior do mesmo paciente, quando informado no cadastro.

### Estado clínico

**Histórico clínico**: Histórico clínico do paciente informado pela clínica.

**Sinais clínicos**: Sinais clínicos apresentados pelo paciente.

**Suspeita clínica**: Suspeita clínica ou diagnóstico diferencial considerado.

**Considerações sobre o exame**: Observações da clínica sobre a realização do exame. Exemplo: "Animal inquieto durante o procedimento."

---

## **Aba: Anexos**

### Imagens e arquivos

**Imagens**: Área para visualização e upload das imagens do exame (JPEG, PNG, GIF, DICOM etc.). Limite máximo: 120 MB.

**Documentos/Arquivos**: Arquivos não-imagem anexados ao exame (ex.: PDFs, relatórios). Permite download individual ou em lote.

### Links e PACS

**Links de imagens (Image links)**: Links de compartilhamento de imagens hospedadas em serviços externos, como Dropbox ou Google Drive. Exibidos como botões de acesso.

**DICOM / PACS**: Links para estudos DICOM armazenados no servidor PACS. Permite visualizar no Viewer integrado ou fazer download do estudo completo.

**Vincular estudo do PACS**: Botão para associar manualmente um estudo existente no servidor PACS ao exame atual.

::: warning ATENÇÃO
O botão de vincular estudo do PACS é exibido apenas quando o servidor PACS está disponível e o usuário possui permissão de edição.
:::

---

## **Aba: Comentários**

**Comentários**: Área para troca de mensagens internas entre a clínica e o radiologista, sem que o conteúdo apareça no laudo. Indica a quantidade de comentários existentes no exame.

**Novo comentário**: Botão para adicionar um novo comentário ao exame.

---

## **Aba: Financeiro**

::: warning ATENÇÃO
Esta aba é exibida apenas quando o recurso de métodos de pagamento está habilitado nas configurações da conta.
:::

**Forma de pagamento**: Selecione a forma de pagamento utilizada para este exame (ex.: PIX, cartão, convênio). O padrão pode ser configurado por clínica.

**Valor**: Informe o valor cobrado pelo exame, na moeda configurada na conta.

**Status do pagamento**: Indica se o pagamento do exame está pendente, recebido ou em outro estado definido pela conta.
