# Campos das configurações de laudo

Entenda o que cada campo nas configurações de laudo (PDF e exame) significa.

---

## Configurações de laudo (edit_report)

Controla a aparência e o conteúdo do PDF do laudo gerado pelo sistema.

---

### **Logo**

**Logo marca do início do PDF**: Imagem exibida no cabeçalho do PDF do laudo. Formatos aceitos: JPEG ou PNG.

---

### **Assinatura de e-mails**

**Assinatura de e-mails**: Texto exibido na assinatura dos e-mails de notificação enviados pelo sistema (ex.: nome do serviço, contato, site).

---

### **Dimensões**

**Altura da logo (em px)**: Define a altura em pixels da logo do radiologista exibida no PDF. Exemplo: `50`.

**Altura da logo do cliente (em px)**: Define a altura em pixels da logo da clínica cliente exibida no PDF, quando aplicável. Exemplo: `50`.

**Tamanho da fonte (em px)**: Define o tamanho da fonte do texto do laudo no PDF. Exemplo: `13`.

---

### **Textos do laudo**

**Título do laudo**: Texto exibido como título no PDF do laudo (ex.: "Laudo de Imagem Veterinária").

**Nota do final do laudo**: Texto de rodapé exibido ao final do conteúdo do laudo no PDF (ex.: termos, observações gerais).

**Nota do final da página de anexos (imagens)**: Texto de rodapé exibido ao final da página de imagens anexadas no PDF.

---

### **Layout do PDF**

**Imagens por página**: Define quantas imagens são exibidas por página na seção de imagens do PDF (opções: 1, 2, 4, 6, 8 ou 10).

---

### **Conteúdo exibido no laudo**

Controla quais seções do estado clínico do paciente são exibidas no PDF do laudo:

| Campo | Descrição |
|---|---|
| **Mostrar histórico clínico** | Exibe o histórico clínico do paciente no PDF. |
| **Mostrar sinais clínicos** | Exibe os sinais clínicos no PDF. |
| **Mostrar suspeita clínica** | Exibe a suspeita clínica no PDF. |
| **Mostrar QR Code** | Exibe um QR Code no PDF com o link de acesso ao laudo online. |

---

### **Compartilhamento público do laudo**

Define o que é exibido quando o tutor ou clínica acessa o link público do laudo:

| Campo | Descrição | Padrão |
|---|---|---|
| **Compartilhar imagens anexadas** | Exibe as imagens do exame na visualização pública. | Ativado |
| **Compartilhar arquivos anexados** | Exibe arquivos não-imagem (PDFs, documentos etc.) na visualização pública. | Ativado |
| **Compartilhar link externo** | Exibe links externos (PACS, Dropbox, Google Drive etc.) na visualização pública. | Ativado |

::: tip DICA
As configurações de compartilhamento aqui definidas servem como padrão global. Cada clínica pode substituir individualmente esses valores nas configurações da sua conta.
:::

---

## Configurações de exame (edit_exam)

Controla o comportamento do formulário de criação de exames pelas clínicas.

---

### **Tipos de exame**

**Tipos de exames**: Lista de modalidades de exame disponíveis para seleção no formulário. Cada tipo pode ser:

- **Ativado/Desativado**: Define se o tipo aparece como opção para as clínicas.
- **Cor**: Cor de identificação visual do tipo de exame na lista de exames (útil para diferenciação rápida na fila).

---

### **Exames urgentes**

**Permitir que clientes marquem exames como urgente**: Quando ativado, o campo de urgência fica visível no formulário de criação de exame para as clínicas.

**Descrição do campo de urgência**: Texto explicativo exibido abaixo da opção de urgência no formulário da clínica. Utilize para informar valor adicional, prazo de entrega ou outras condições.

Exemplo: *"Valor do exame de urgência: R$ 30,00. Prazo: Até 3 horas."*

---

### **Personalizar campos**

Tabela de configuração de visibilidade e obrigatoriedade dos campos do formulário de exame para as clínicas. Para cada campo é possível definir:

| Configuração | Descrição |
|---|---|
| **Visível** | O campo é exibido no formulário de criação de exame. |
| **Obrigatório** | O preenchimento do campo é exigido antes do envio. Só pode ser ativado se o campo estiver visível. |

Os campos configuráveis incluem: nome do paciente, espécie, raça, peso, idade, sexo, histórico clínico, sinais clínicos, suspeita clínica e médico solicitante.
