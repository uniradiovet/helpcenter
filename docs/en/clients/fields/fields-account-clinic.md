# Campos da conta (Clínica)

Entenda o que cada campo nas configurações da conta de clínica significa.

---

## **Conta**

**Logo da conta**: Imagem de logotipo da clínica exibida no sistema. Formatos aceitos: JPEG, PNG ou GIF.

**Nome da conta** *(obrigatório)*: Nome fantasia ou razão social da clínica, exibido no sistema e nos documentos.

**E-mail da conta**: E-mail principal da conta, utilizado para comunicações do sistema.

---

## **Endereço**

**Nome de cobrança**: Nome completo ou razão social para fins de cobrança e emissão de documentos fiscais.

**CNPJ**: Número do CNPJ da clínica.

**DDD/País + Telefone**: Código do país e número de telefone de contato da clínica.

**CEP**: Código de Endereçamento Postal da clínica.

**Endereço**: Logradouro (rua, avenida etc.).

**Número**: Número do estabelecimento.

**Complemento**: Informações adicionais do endereço (sala, bloco, andar etc.).

**Cidade**: Cidade onde a clínica está localizada.

**Bairro**: Bairro da clínica.

**Estado**: Estado (UF) da clínica.

**País**: País da clínica.

---

## **Template de laudo**

**Template de laudo**: Selecione o template padrão de formatação do PDF dos laudos para esta clínica. O template define o cabeçalho, rodapé e layout utilizados ao gerar o laudo em PDF.

::: tip TIP
O template aqui definido será utilizado como padrão para todos os exames da clínica, podendo ser substituído individualmente no formulário do exame.
:::

---

## **Forma de pagamento padrão**

**Forma de pagamento**: Define a forma de pagamento padrão aplicada automaticamente aos novos exames desta clínica (ex.: PIX, cartão, convênio).

::: warning ATTENTION
Esta seção é exibida apenas quando o recurso de métodos de pagamento está habilitado nas configurações do radiologista.
:::

---

## **Anexos de e-mail**

**Anexar laudo no e-mail de notificação**: Quando ativado, o PDF do laudo é enviado como anexo no e-mail de notificação para a clínica e para o tutor do animal, ao ser finalizado.

::: tip TIP
Se desativado, o e-mail de notificação conterá apenas o link de acesso ao laudo, sem o arquivo em anexo.
:::

---

## **Opções de compartilhamento do laudo**

Define o que é exibido para o tutor e para a clínica ao acessar o link público do laudo. Cada opção pode ser configurada individualmente com os seguintes valores:

- **Padrão**: Segue a configuração definida pelo radiologista para todas as contas.
- **Sim**: Exibe o conteúdo no laudo compartilhado.
- **Não**: Oculta o conteúdo no laudo compartilhado.

| Campo | Descrição |
|---|---|
| **Compartilhar imagens anexas no laudo** | Exibe ou oculta as imagens anexadas ao exame na visualização pública do laudo. |
| **Compartilhar arquivos anexos no laudo** | Exibe ou oculta os arquivos (não-imagens) anexados ao exame na visualização pública do laudo. |
| **Compartilhar links externos no laudo** | Exibe ou oculta os links externos (PACS, Dropbox, Google Drive etc.) na visualização pública do laudo. |

---

## **PACS**

**Habilitar PACS**: Ativa a integração com o servidor PACS para que a clínica possa enviar e vincular estudos DICOM.

**Habilitar Porta do PACS**: Ativa a porta específica do servidor PACS para esta clínica. Ao habilitar, as informações de conexão (AE Title, IP e Porta) são exibidas para configuração nos equipamentos de imagem.

::: tip TIP
As informações de conexão PACS (AE Title, IP e Porta) devem ser configuradas nos equipamentos de imagem da clínica (tomógrafo, aparelho de raio-x etc.) para que os estudos sejam enviados automaticamente ao sistema.
:::

---

## **Contatos**

Lista de contatos informativos da clínica. Estes contatos **não são usuários do sistema** e não possuem acesso à plataforma. Servem apenas para registro interno de informações de responsáveis.

Cada contato possui os seguintes campos:

**Nome do contato**: Nome completo do responsável.

**CPF**: CPF do responsável.

**CRMV do responsável técnico**: Número do CRMV do médico veterinário responsável técnico pela clínica.

**Tipo**: Classificação do contato:
- **Responsável Técnico**: Médico veterinário responsável técnico pela clínica.
- **Administrador**: Responsável administrativo da clínica.

É possível adicionar múltiplos contatos clicando em **Adicionar Contato**.
