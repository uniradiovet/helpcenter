# Ditar Laudo

O recurso **Ditar Laudo** permite gravar o laudo por voz em vez de digitar. O áudio é enviado para transcrição automática e o texto reconhecido é inserido diretamente no editor do laudo.

::: tip Dica para uma boa transcrição
Fale próximo ao microfone, em ritmo natural e sem ruídos ao fundo. Isso ajuda a captar melhor o áudio e a gerar uma transcrição mais precisa.
:::

## Passo a Passo

### 1. Acesse os exames em andamento

Acesse a plataforma em [app.uniradio.vet.br/exams](https://app.uniradio.vet.br/exams) e clique na aba **"Em Andamento"**.

![Em Andamento](/images/radiologists/report/report-dictate/01-em-andamento.png)

### 2. Selecione o exame

Clique sobre o exame para o qual deseja ditar o laudo.

![Selecionar exame](/images/radiologists/report/report-dictate/02-select-exam.png)

### 3. Clique em "Ditar laudo"

Na página de laudo, clique no botão **"Ditar laudo"** para iniciar a gravação por voz.

![Clicar em Ditar laudo](/images/radiologists/report/report-dictate/03-click-ditar-laudo.png)

### 4. Grave o laudo

Durante a gravação, você pode pausar, descartar o áudio ou finalizar e enviar a gravação para transcrição.

![Controles de gravação](/images/radiologists/report/report-dictate/04-recording-controls.png)

### 5. Envie para transcrever

Clique em **"Enviar"** para transcrever o áudio. A transcrição é inserida automaticamente no editor do laudo.

![Enviar para transcrever](/images/radiologists/report/report-dictate/05-send-transcribe.png)

## Comandos de Voz

Além do texto do laudo, você pode ditar comandos para estruturar e formatar o texto automaticamente.

### Estrutura de texto

| Fale | Resultado |
|---|---|
| "novo parágrafo" / "outro parágrafo" / "próximo parágrafo" / "new paragraph" | Novo parágrafo |
| "nova linha" / "quebra de linha" / "new line" | Quebra de linha |

### Símbolos ditados

Estes símbolos são reconhecidos independentemente da pontuação automática.

| Fale | Resultado |
|---|---|
| "abre parênteses" / "fecha parênteses" | `(` `)` |
| "abre aspas" / "fecha aspas" | `"` |
| "mais ou menos" | `±` |
| "hífen" / "traço" | `-` |
| "barra" | `/` |
| "graus" | `°` |

### Comandos de editor

Estes comandos só são executados quando o ditado inteiro é o comando, sem nenhum texto de conteúdo junto.

| Fale | Ação |
|---|---|
| "novo tópico" / "outro tópico" / "próximo tópico" / "novo item" / "novo marcador" / "mais um tópico" / "mais um item" | Cria um novo item de lista |
| "lista numerada" / "lista numérica" / "numerada" / "numbered list" | Aplica lista ordenada (numerada) |
| "lista com marcadores" / "lista de marcadores" / "tópicos" / "bullet list" | Aplica lista não ordenada (com marcadores) |
| "alinhar à esquerda" / "à esquerda" / "align left" | Alinha o texto à esquerda |
| "alinhar à direita" / "à direita" / "align right" | Alinha o texto à direita |
| "centralizar" / "centralizado" / "ao centro" / "center" | Centraliza o texto |
| "justificar" / "justificado" / "justify" | Justifica o texto |
| "negrito" / "bold" | Aplica negrito |
| "itálico" / "italic" | Aplica itálico |
| "sublinhado" / "underline" | Aplica sublinhado |

::: tip Encadeando comandos
Você pode combinar mais de um comando de editor na mesma frase usando "e"/"em". Exemplo: **"negrito e centralizar"**.
:::

### Formatação de um trecho

Para aplicar uma formatação apenas a um trecho específico, dite o trecho primeiro e depois o comando de formatação, por exemplo: **"lesão hepática em negrito"** envolve "lesão hepática" em negrito. A mesma lógica vale para itálico e sublinhado. A única exceção são os marcadores de lista, cujo comando deve ser dito antes do conteúdo.

### Siglas soletradas

Ao soletrar uma sigla com dois ou mais elementos — letras, números por extenso de 0 a 20, ou "hífen"/"traço"/"barra" — o ditado monta a sigla automaticamente. Por exemplo, dizer **"S um traço S três"** resulta em **"S1-S3"**. Algumas siglas com grafia mista já são reconhecidas automaticamente, como CRCD → **CrCd** e DPA → **DPa**.

### Medidas faladas

| Fale | Resultado |
|---|---|
| "dois ponto cinco" / "dois vírgula cinco" | `2.5` / `2,5` |
| "30 por cento" | `30%` |
| "dois por três" | `2×3` (pode ser encadeado para medidas em 3D) |
| "cinco centímetros" / "cinco milímetros" | `5cm` / `5mm` |

## Precisa de Ajuda?

Confira nossas [Perguntas Frequentes](/faq) ou entre em contato com o suporte se encontrar problemas ao ditar o laudo.
