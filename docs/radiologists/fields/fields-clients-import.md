# Importação de clientes

Entenda o que cada campo significa ao preparar ou revisar o arquivo CSV de importação de clientes.

## Como funciona o processo

1. **Upload do arquivo CSV** — faça o upload do arquivo com os dados das contas clínicas.
2. **Mapeamento de colunas** — o sistema exibe cada campo esperado e você indica qual coluna do seu CSV corresponde a ele.
3. **Importação** — o sistema cria as contas e envia o convite por e-mail para cada proprietário.

::: tip DICA
Utilize a exportação de contas do sistema como modelo de CSV. O arquivo exportado já contém as colunas no formato correto, facilitando futuras reimportações ou correções em lote.
:::

---

## Campos obrigatórios

Estes três campos são exigidos para que cada linha da importação seja processada com sucesso. Se algum deles estiver ausente ou inválido, a linha será ignorada e registrada como falha.

### Nome

Nome da conta clínica que será criada no sistema.

Exemplo: `Clínica Veterinária Central`

::: warning ATENÇÃO
Este campo é **obrigatório**. Linhas sem nome de conta serão rejeitadas.
:::

### Nome do Proprietário

Nome completo do usuário que será criado como proprietário (administrador) da conta clínica.

Exemplo: `Dr. João Silva`

::: warning ATENÇÃO
Este campo é **obrigatório**. O sistema usa este nome ao criar o usuário e ao enviar o e-mail de convite.
:::

### Email do Proprietário

Endereço de e-mail do proprietário da conta. Utilizado para criar o login do usuário e enviar o convite de acesso.

Exemplo: `joao@clinicacentral.com.br`

::: warning ATENÇÃO
Este campo é **obrigatório** e deve conter um e-mail válido. Se o e-mail já estiver cadastrado no sistema, o usuário existente será vinculado à nova conta sem criar um novo cadastro.
:::

---

## Dados de identificação e cobrança

### Nome da Conta

Termo alternativo para o campo **Nome**. Refere-se ao nome da conta clínica. Presente no arquivo CSV exportado pelo sistema com este rótulo.

### Email da Conta

E-mail principal da conta clínica. Aparece no arquivo CSV exportado pelo sistema. Na importação, o sistema utiliza o **Email do Proprietário** como e-mail da conta — este campo não precisa ser mapeado separadamente.

### Nome do Usuário

Nome do usuário adicional vinculado à conta. Presente apenas na exportação do tipo **"Contas com usuários"**, que inclui uma linha por usuário além do proprietário. Não é um campo de importação.

### Nome de Cobrança

Nome utilizado para fins fiscais e de cobrança. Pode ser diferente do nome da conta — por exemplo, a razão social da empresa.

Exemplo: `Centro Veterinário Central Ltda`

### CNPJ / CNPJ/CPF

Número de identificação fiscal da conta:

- **CNPJ** — para clínicas constituídas como pessoa jurídica.
- **CPF** — para clínicas de pessoa física (autônomo, MEI).

Informe apenas os números, sem pontuação.

Exemplo: `12345678000195`

---

## Contato

### Telefone

Número de telefone de contato da clínica. Informe com DDD.

Exemplo: `11987654321`

---

## Endereço

### CEP

Código de Endereçamento Postal da clínica. Informe apenas os números, sem hífen.

Exemplo: `01310100`

### Endereço

Nome da rua, avenida ou logradouro.

Exemplo: `Av. Paulista`

### Número

Número do imóvel no logradouro.

Exemplo: `1000`

### Complemento

Informação adicional de localização, como sala, andar ou bloco. Campo opcional.

Exemplo: `Sala 42`

### Cidade

Nome da cidade onde a clínica está localizada.

Exemplo: `São Paulo`

### Bairro

Nome do bairro da clínica.

Exemplo: `Bela Vista`

### Estado

Sigla do estado (UF) onde a clínica está localizada.

Exemplo: `SP`

---

::: tip DICA
Campos de endereço são todos opcionais para a importação. Caso não sejam mapeados, o sistema deixará o endereço da conta em branco — ele poderá ser preenchido posteriormente na tela de edição da conta.
:::
