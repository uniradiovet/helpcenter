# Perguntas Frequentes

## Questões Gerais

### O que é o App UniRadio?
O App UniRadio é uma plataforma de telerradiologia que conecta clínicas veterinárias com radiologistas para interpretação especializada de imagens e geração de laudos.

### Quem pode usar a UniRadio?
- **Radiologistas**: Profissionais veterinários que analisam imagens e geram laudos.
- **Clientes**: Clínicas veterinárias que enviam exames para análise.

---

## Para Radiologistas

### É possível tornar campos obrigatórios (como nome do paciente e tutor)?

Sim. Em **Configurações > Configurações do Exame**, há uma tabela de campos configuráveis onde cada campo pode ser marcado individualmente como **visível** ou **obrigatório**. Campos desativados não aparecem no formulário de laudo. A configuração vale para toda a conta e para todos os exames.

---

### Posso personalizar meus laudos?

Sim. Em **Configurações > Configurações do Laudo** é possível:

- Fazer upload do seu logo
- Criar e usar modelos de laudos
- Configurar quais campos mostrar ou ocultar
- Ajustar fonte e tamanho do texto
- Adicionar rodapé personalizado

---

### Posso aumentar o tamanho do meu logo nos laudos?

Sim. Em **Configurações > Configurações do Laudo**, ajuste o campo **"Altura do logo"** para definir o tamanho do logo da conta e do logo da clínica cliente separadamente.

---

### Como desabilito o envio automático de e-mails aos clientes?

Acesse as configurações da conta e desative a opção de envio de e-mail ao finalizar o laudo. Também é possível configurar isso individualmente por clínica cliente nas configurações de compartilhamento.

---

### Por que as imagens não aparecem no meu laudo?

A causa mais comum é o **nome do arquivo com caracteres especiais**: acentos, cedilha, parênteses ou espaços podem impedir o processamento da imagem. Renomeie o arquivo usando apenas letras sem acento, números e underline antes de enviar.

---

### Posso trocar o termo "Parecer" por "Laudo Radiográfico"?

Sim. Em **Configurações > Configurações do Laudo**, o campo **"Título do laudo"** permite definir o texto que aparece como título no PDF gerado.

---

### Qual a diferença entre "Salvar e Enviar" e "Salvar"?

- **"Salvar e Enviar"** — finaliza o laudo, muda o status do exame para **Concluído** e dispara o envio automático ao cliente por e-mail.
- **"Salvar"** — armazena o laudo sem finalizar. O exame permanece na fila **"Em Andamento"** e nenhum e-mail é enviado ao cliente.

---

### O laudo salva automaticamente?

Sim. O editor de texto salva automaticamente **2 segundos após a última tecla digitada**. Uma notificação breve aparece na tela com a mensagem "Salvando exame…" a cada salvamento automático.

::: warning ATENÇÃO
O salvamento automático cobre apenas o **texto do laudo** (editor). Outros campos — como categoria, responsável, tags e imagens selecionadas — precisam ser salvos manualmente pelo botão **"Salvar"**.
:::

---

### Como incluir imagens com marcações do visualizador DICOM?

Utilize a função de **download** no visualizador DICOM para exportar as imagens com as marcações aplicadas. Em seguida, faça o upload dessas imagens no campo de imagens do exame durante a edição do laudo.

---

### É possível personalizar o template do laudo com cores ou marca d'água?

Essa personalização não está disponível diretamente pelo painel. Para solicitar um template com logo, cores e identidade visual da sua conta, entre em contato com a equipe de suporte. A equipe aplica as customizações mediante solicitação.

---

### O sistema já disponibiliza certificado digital nos laudos?

Ainda não. Essa funcionalidade está em desenvolvimento.

---

### Não consigo visualizar o laudo em PDF. Aparece erro relacionado a "images_per_page"

Acesse **Configurações > Configurações do Laudo** e ajuste o campo **"Número padrão de imagens por página"**. Esse campo precisa estar preenchido para que o PDF seja gerado corretamente.

---

### As imagens DICOM não acompanham as informações do paciente. É normal?

Sim. O visualizador DICOM não exibe informações adicionais como idade, raça ou outros dados clínicos do paciente. Caso essas informações sejam essenciais para o laudo, recomenda-se exportar as imagens no formato JPEG diretamente do software de imagem da clínica, incluindo os dados desejados, e fazer o upload como imagem convencional.

---

### Por quanto tempo as imagens ficam armazenadas no sistema?

As imagens não são excluídas automaticamente. O sistema possui uma rotina de controle de imagens antigas, mas a remoção automática está desativada. As imagens permanecem disponíveis indefinidamente, salvo exclusão manual.

---

## Para Clientes

### Preciso acessar a plataforma para visualizar laudos?

Não é obrigatório. Se o e-mail estiver cadastrado e com notificações habilitadas, o laudo é enviado diretamente por e-mail. Também é possível habilitar a opção de **anexar o PDF ao e-mail** de notificação para que o laudo chegue como arquivo.

---

### Como enviar um exame?

Há duas formas de enviar exames:

1. **Upload direto** — pela interface web, arrastando ou selecionando os arquivos de imagem.
2. **Integração PACS** — enviando diretamente do seu equipamento de imagem digital via servidor PACS configurado na conta.

---

### Posso editar um exame após o envio?

Sim. É possível editar os dados do exame enquanto ele ainda não foi finalizado pelo radiologista.

---

### Como anexar o PDF do laudo no e-mail enviado?

Em **Configurações da Conta**, habilite a opção **"Enviar PDF em anexo nas notificações de e-mail"**.

---

## Sobre Tags

### O que são as "tags"?

Tags são etiquetas usadas para categorizar exames — funcionam de forma similar a categorias. Facilitam a organização e a busca por exames específicos na listagem.

---

## Integração PACS

### Arquivos DICOM possuem visualização automática?

Sim. Os arquivos DICOM enviados via PACS são integrados ao **OHIF Viewer**, um visualizador DICOM que abre diretamente no navegador, sem necessidade de instalar nenhum programa.

---

### Quais ferramentas estão disponíveis no visualizador DICOM?

O OHIF Viewer oferece as principais ferramentas de análise:

- **Zoom** — aproximar e afastar a imagem
- **Pan** — mover a imagem na tela
- **Ajuste de janela (Window/Level)** — controle de brilho e contraste para diferentes tipos de tecido
- **Medições** — régua de distância, ângulo e área de ROI (região de interesse)
- **Anotações** — adicionar texto e marcações sobre a imagem
- **Navegação entre séries e instâncias** — acesso às diferentes séries de um mesmo estudo
- **Inversão de cores** — alternar entre fundo preto e branco
- **Rotação e espelhamento** — reposicionar a imagem para análise

---

### Por que imagens DICOM não são anexadas automaticamente ao laudo?

Os arquivos DICOM são vinculados ao exame como estudos PACS e acessíveis pelo visualizador, mas não são convertidos automaticamente em imagens anexadas ao PDF do laudo. Para incluir imagens no laudo, exporte-as do visualizador e faça o upload manualmente.

---

### Quais formatos são aceitos no envio via PACS?

O sistema aceita arquivos nos formatos **DICOM** (`.dcm`) e **ZIP** contendo arquivos DICOM. Outros formatos são rejeitados automaticamente.

---

### A imagem foi enviada mas aparece preta ou com problema de visualização. O que pode ser?

As causas mais comuns são:

- **Arquivo corrompido ou incompleto** — verifique se o arquivo abre normalmente em outro visualizador DICOM antes de enviar.
- **Conversão inadequada** — imagens exportadas com configurações não-padrão do DICOM podem não renderizar corretamente. Tente exportar novamente diretamente do equipamento, sem conversão intermediária.
- **Arquivo ZIP com estrutura incorreta** — os arquivos DICOM devem estar na raiz do ZIP ou em uma pasta simples. Estruturas de pastas aninhadas podem causar falha no processamento.

---

### O upload de imagens falhou com erro. Quais são as causas mais comuns?

- **Nome do arquivo com caracteres especiais** — acentos, cedilha, parênteses e espaços podem causar falha. Renomeie o arquivo usando apenas letras sem acento, números e underline.
- **Formato não suportado no ZIP** — apenas `.zip` é aceito. Formatos como `.rar`, `.7z` e `.tar.gz` não funcionam.
- **Upload interrompido** — não feche nem recarregue a página durante o upload. O sistema avisa ao tentar sair com uploads em andamento.
- **Tipo de arquivo incorreto** — para o laudo em PDF, apenas `.pdf` é aceito.

---

### Minha integração PACS não está funcionando. O que verificar?

1. Verifique se o **AE Title** (nome institucional) está cadastrado corretamente na conta.
2. Confira as configurações de **firewall** da sua rede.
3. Confirme o **endereço IP** e a **porta** configurados.
4. Tente enviar um exame de teste e verifique o nome e ID do paciente.

---

### Onde podem ocorrer bloqueios na integração PACS?

Possíveis pontos de bloqueio na rede:

- Modem
- Roteador
- Firewall

Certifique-se de que a porta PACS esteja aberta em todos esses dispositivos.

---

## Gerenciamento de Clientes

### Preciso cadastrar clientes para emitir laudos?

Sim. Os laudos precisam estar vinculados a um cliente cadastrado. Se você lauda exames da própria clínica, crie um cliente com o nome da sua clínica ou hospital.

---

### Convidei um cliente mas ele não recebeu o e-mail de convite

É possível que o e-mail tenha ido para a caixa de spam ou que o endereço já esteja cadastrado no sistema. Se for um endereço do Gmail, tente reenviar utilizando o recurso de alias (ex.: `email+1@gmail.com`).

Também é possível **copiar o link de convite** diretamente: acesse o perfil do usuário e clique em **"Exibir link de convite"**. Esse link pode ser enviado por qualquer canal (WhatsApp, por exemplo) sem depender do e-mail.

---

### O cliente recebeu o convite mas não finalizou o cadastro. O que fazer?

Em **Configurações > Usuários**, selecione o usuário com status **"Convite pendente"** e use a ação em lote **"Reenviar convite"**. O sistema envia um novo e-mail com um link atualizado.

---

### O cadastro pelo link de convite é obrigatório?

Depende de como o convite foi criado. Se a opção **"Pular envio de e-mail de convite"** foi marcada, o usuário é ativado automaticamente pelo sistema sem precisar clicar em nenhum link.

---

### É possível vincular uma conta nova a uma conta antiga?

Sim. Entre em contato com o suporte informando os dados das contas envolvidas para que a associação seja feita.

---

### Posso importar clientes em massa?

Sim. O sistema permite importar clientes via arquivo **CSV**. Em **Importação de Clientes**, faça o upload do arquivo e mapeie as colunas do CSV para os campos do sistema. Consulte a documentação de campos de importação para o formato esperado.

---

## Usuários

### O que são "usuários"?

Usuários são as pessoas com acesso ao sistema. Em uma conta de radiologista, os usuários são os profissionais que emitem laudos. Em uma conta de clínica, são os responsáveis por enviar exames e acompanhar laudos.

---

### Usuários do tipo "membro" têm acesso à gestão financeira?

Depende da permissão configurada para o usuário. A permissão **"Receita"** pode ser habilitada ou desabilitada individualmente para qualquer usuário — independente de ser Administrador ou Membro. Essa configuração é feita pelo administrador da conta em **Configurações > Usuários > perfil do usuário**.

---

## Relatórios e Financeiro

### É possível exportar relatórios para planilhas?

Sim. O sistema permite exportar dados para Excel.

---

### Como criar um novo lançamento financeiro?

Na seção financeira, acesse **Notas de Débito > Nova nota**. O formulário permite informar a data, o motivo, um número identificador e a clínica correspondente. Os itens cobrados são adicionados em uma tabela com descrição, quantidade e valor unitário.

::: tip DICA
Use ponto (`.`) como separador decimal ao digitar valores. Exemplo: `150.00` em vez de `150,00`.
:::

---

### Como editar informações financeiras já lançadas?

Acesse o lançamento pela lista de notas de débito e clique em editar. Todos os campos — data, motivo, clínica e itens — podem ser alterados antes de reenviar.

---

### Os relatórios mostram valores financeiros?

A seção financeira é exibida apenas quando a opção **"Métodos de pagamento"** está habilitada nas configurações do laudo e o usuário possui a permissão **"Receita"** ativada. Se esses critérios estiverem atendidos, os valores aparecem na listagem de exames e nos relatórios.

---

### Existe relatório em PDF com lista de exames por cliente?

Ainda não disponibilizamos essa funcionalidade.

---

### Como alterar o status de pagamento de um exame?

Na listagem de exames, selecione os exames desejados e use a ação em lote para alterar o status de pagamento (ex.: de "Pendente" para "Pago").

---

### Existe integração com sistemas de cobrança ou outros sistemas como SimplesVet?

Ainda não. Estamos trabalhando para oferecer essas integrações em breve.

---

## E-mails e Notificações

### Os e-mails com laudos podem ser enviados com o nome da minha clínica?

Sim. O e-mail apresenta o nome da sua conta como remetente, mas o envio ocorre pelo sistema UniRadio (app@uniradio.vet.br), com a identificação "by UniRadio".

---

### Os e-mails podem ser enviados pelo meu e-mail profissional?

Atualmente, o envio é feito pelo sistema UniRadio. O nome da sua conta aparece como remetente, mas o e-mail parte de app@uniradio.vet.br.

---

## Assinatura e Cobrança

### Como cancelo minha assinatura?

1. Acesse **Minha Conta**
2. Clique em **Gerenciar Assinatura**
3. Clique em **Cancelar assinatura**

---

### Como mudo minha forma de pagamento?

Entre em contato com o suporte para atualizar seu método de pagamento (cartão de crédito, boleto, etc.).

---

## Suporte Técnico

### Como abro um chamado de suporte?

Use nosso [Formulário de Suporte](https://forms.clickup.com/3010859/f/2vw9b-4017/JUF9S4KVT2T4VHWMZ4).

---

### Onde encontro tutoriais em vídeo?

Tutoriais em vídeo estão disponíveis ao longo desta documentação. Procure por ícones 📹 próximos aos tópicos dos tutoriais.

---

## Ainda Tem Dúvidas?

Entre em contato com nossa equipe de suporte através do formulário acima ou confira os tutoriais detalhados nas seções [Radiologistas](/radiologists/) ou [Clientes](/clients/).