# Campos da criação de exame

Entenda o que cada campo no formulário de criação/edição de exame significa.

---

## Escolha do tipo de envio

Ao iniciar um novo exame, é necessário escolher como as imagens serão enviadas:

- **Upload de imagens**: Envio manual de arquivos de imagem (JPEG, PNG, DICOM etc.) diretamente pelo sistema.
- **Serviço PACS**: Vinculação de um estudo já disponível no servidor PACS da clínica.

::: warning ATTENTION
A opção de Serviço PACS é exibida apenas quando um servidor PACS está configurado e disponível para a conta.
:::

---

## **Exames em rascunho**

Exames que foram iniciados mas ainda não foram enviados ficam salvos como rascunho. A tabela de rascunhos exibe:

- **ID**: Identificador do rascunho no sistema.
- **Data**: Data e hora de criação do rascunho.
- **Tipo**: Indica se o rascunho foi iniciado via upload de imagens ou via PACS.
- **Editar e enviar**: Continua o preenchimento do exame de onde parou.
- **Excluir**: Remove o rascunho permanentemente.

---

## **Cliente**

**Cliente** _(obrigatório)_: Selecione o cliente (clínica) responsável pelo exame.

::: warning ATTENTION
Disponível apenas para radiologistas. Clientes não veem esta opção — o sistema vincula automaticamente o exame à clínica logada.
:::

---

## **Dados do exame**

**Tipo do exame** _(obrigatório)_: Escolha a modalidade do exame a ser realizado (ex.: Radiografia, Tomografia, Ultrassonografia etc.).

**Regiões** _(obrigatório)_: Selecione as regiões anatômicas que serão avaliadas no exame. As opções variam conforme o tipo de exame escolhido:

- **Membro Torácico Esquerdo** – proximal, médio ou distal
- **Membro Torácico Direito** – proximal, médio ou distal
- **Membro Pélvico Esquerdo** – proximal, médio ou distal
- **Membro Pélvico Direito** – proximal, médio ou distal
- **Esqueleto Axial** – crânio, coluna, coxal, tórax, abdômen etc.
- **Outros**: Campo para especificar regiões não listadas previamente.

Para Ultrassonografia, as regiões disponíveis são específicas da modalidade (abdômen, órgãos etc.).

**Exame com contraste**: Marque esta opção se o exame foi realizado com contraste.

**Detalhes do exame contrastado**: Descreva a região ou tipo de contraste utilizado. Aparece apenas quando a opção "Exame com contraste" está marcada.

**Médico Solicitante** _(pode ser obrigatório)_: Nome completo do médico veterinário responsável pela solicitação do exame.

::: tip TIP
A obrigatoriedade e visibilidade deste campo dependem das configurações definidas pelo radiologista para a conta.
:::

**Data do exame**: Informe a data em que o exame foi ou será realizado.

---

## **Urgência**

**Urgência**: Marque esta opção para solicitar o exame em caráter urgente. Quando ativada, o exame recebe destaque na fila de laudos.

::: warning ATTENTION
A opção de urgência para clínicas pode estar desabilitada. Quando habilitada, uma descrição personalizada pode ser exibida pelo radiologista com instruções adicionais.
:::

---

## **Dados do paciente**

**Nome do paciente** _(pode ser obrigatório)_: Digite o nome do animal a ser examinado.

**Espécie** _(pode ser obrigatório)_: Informe a espécie do paciente (ex.: Canina, Felina, Equina etc.).

**Raça** _(pode ser obrigatório)_: Digite a raça do paciente.

**Peso** _(pode ser obrigatório)_: Informe o peso do paciente (em kg).

**Idade** _(pode ser obrigatório)_: Idade do paciente.

**Idade em** _(pode ser obrigatório)_: Escolha a unidade de medida para a idade: **ano(s)** ou **mês(es)**.

**Sexo do paciente** _(pode ser obrigatório)_: Selecione o sexo do paciente (macho ou fêmea).

**Castrado**: Marque se o paciente é castrado.

**Exame anterior**: Busque e vincule um exame anterior do mesmo paciente, caso exista. Facilita a comparação pelo radiologista durante a elaboração do laudo.

::: tip TIP
A obrigatoriedade de cada campo do paciente é definida pelo radiologista nas configurações da conta. Campos não obrigatórios ainda podem ser preenchidos para enriquecer as informações do laudo.
:::

---

## **Dados do tutor**

**Tutor**: Nome completo do responsável pelo animal.

**E-mail do tutor**: E-mail do tutor. Quando informado, o tutor receberá uma notificação com o link de acesso ao laudo ao ser finalizado.

::: tip TIP
Utilize esta opção para que o tutor receba o laudo diretamente por e-mail quando estiver pronto.
:::

---

## **Status**

**Status**: Estado atual do exame. Permite alterar manualmente o status durante a edição.

::: warning ATTENTION
Disponível apenas para radiologistas administradores (managers). Não visível para clientes nem para exames em rascunho.
:::

---

## **Estado clínico**

**Histórico clínico** _(pode ser obrigatório)_: Informe o histórico clínico relevante do paciente.

**Sinais clínicos** _(pode ser obrigatório)_: Descreva os sinais clínicos apresentados pelo animal.

**Suspeita clínica** _(pode ser obrigatório)_: Informe a suspeita clínica ou diagnóstico diferencial considerado pelo médico solicitante.

**Considerações sobre o exame**: Campo para observações relevantes sobre a realização do exame. Exemplo: "Animal inquieto durante o procedimento."

---

## **Imagens**

**Imagens** _(obrigatório)_: Área para upload das imagens do exame. Arraste os arquivos ou clique para selecionar. Formatos aceitos: JPEG, PNG, GIF, DICOM, entre outros. Limite máximo por arquivo: 120 MB.

**Image links**: Insira links de compartilhamento de imagens hospedadas em serviços externos como Dropbox ou Google Drive.

::: tip TIP
O campo de links externos é exibido apenas quando não há estudos PACS vinculados ao exame.
:::

**Links PACS**: Exibe os estudos DICOM vinculados via servidor PACS, com opção de visualização no viewer ou download.
