# Perguntas Frequentes

## Questões Gerais

### O que é a UniRadio?
A UniRadio é uma plataforma de telerradiologia que conecta clínicas veterinárias com radiologistas para interpretação especializada de imagens e geração de laudos.

### Quem pode usar a UniRadio?
- **Radiologistas**: Profissionais veterinários que analisam imagens e geram laudos
- **Clientes**: Clínicas veterinárias que enviam exames para análise

## Para Radiologistas

### É possível tornar campos obrigatórios (como nome do paciente e tutor)?
Atualmente, essa funcionalidade ainda não está disponível. No entanto, estamos trabalhando em atualizações que permitirão essa configuração em versões futuras do sistema.

### Posso personalizar meus laudos?
Sim! Você pode:
- Fazer upload do seu logo
- Personalizar modelos de laudos
- Configurar quais campos mostrar/ocultar
- Alterar fontes e layout
- Adicionar rodapés personalizados

### Posso aumentar o tamanho do meu logo nos laudos?
Sim, você pode ajustar a altura do logo nas configurações do sistema.

### Como desabilito o envio automático de e-mails aos clientes?
Acesse o perfil do cliente e desative a opção "Receber notificações de laudos finalizados?".

### Por que as imagens não aparecem no meu laudo?
Certifique-se de que os nomes dos arquivos de imagem não contenham acentos, parênteses ou caracteres especiais, pois isso pode impedir sua exibição no laudo.

### Posso trocar o termo "Parecer" por "Laudo Radiográfico"?
Sim, essa alteração pode ser realizada na aba de configurações da plataforma.

### Qual a diferença entre "Salvar e Enviar" e "Salvar"?
- **"Salvar e Enviar"**: Finaliza o laudo e envia automaticamente ao cliente por e-mail
- **"Salvar"**: Apenas armazena o laudo, mantendo-o na aba "Em Andamento"

### Como incluir imagens com marcações do visualizador DICOM?
Utilize a função de "Download" no visualizador DICOM para exportar as imagens marcadas. Em seguida, faça o upload dessas imagens no campo específico durante a edição do laudo.

### É possível personalizar o template do laudo com cores ou marca d'água?
No momento, essa funcionalidade ainda não está disponível.

### O sistema já disponibiliza certificado digital nos laudos?
Ainda não. Essa funcionalidade está em desenvolvimento.

### Não consigo visualizar o laudo em PDF. Aparece erro "images_per_page"
Acesse as configurações e ajuste a opção de "Número padrão de imagens por laudo". Isso deve corrigir o erro.

### As imagens DICOM não acompanham as informações do paciente. É normal?
Sim. Nosso visualizador DICOM não exibe informações adicionais como idade, raça ou outros dados do paciente. Caso essas informações sejam essenciais, recomendamos exportar as imagens no formato JPEG diretamente do software de imagem utilizado na clínica, incluindo as informações desejadas.

## Para Clientes

### Preciso acessar a plataforma para visualizar laudos?
Não é necessário. Caso esteja com o e-mail cadastrado e habilitado para notificações, você receberá os laudos diretamente por e-mail. É possível também habilitar a opção de enviar o laudo em anexo aos emails de notificação.

### Como enviar um exame?
Você pode enviar exames de duas maneiras:
1. Upload direto pela interface web
2. Envio via integração PACS do seu equipamento de imagem digital

### Posso editar um exame após o envio?
Sim, você pode editar detalhes do exame antes que sejam finalizados pelo radiologista.

### Como anexar o PDF do laudo no e-mail enviado?
Acesse o perfil do cliente e habilite a opção "Anexar PDF nos e-mails de notificação".

## Sobre Tags

### O que são as "tags"?
Tags são etiquetas utilizadas para categorizar os exames, funcionando de maneira semelhante às categorias de um blog, facilitando a organização e busca por exames.

## Integração PACS

### Arquivos DICOM possuem visualização automática?
Sim. Os arquivos DICOM enviados são integrados automaticamente ao visualizador DICOM dentro da plataforma.

### Por que imagens DICOM não são anexadas automaticamente ao laudo?
Essa integração ainda está em desenvolvimento. Atualmente, os arquivos DICOM precisam ser enviados por meio do servidor PACS para que as imagens sejam anexadas automaticamente ao laudo.

### Minha integração PACS não está funcionando. O que verificar?
1. Verifique se o nome institucional está cadastrado corretamente
2. Confira as configurações de firewall da sua rede
3. Confirme o endereço IP e configuração da porta
4. Tente enviar um exame de teste e verifique o nome/ID do paciente

### Onde podem ocorrer problemas na integração PACS?
Possíveis pontos de bloqueio:
- Modem
- Roteador
- Firewall

Certifique-se de que a porta PACS esteja aberta em todos esses dispositivos.

## Gerenciamento de Clientes

### Preciso cadastrar clientes para emitir laudos?
Sim. Os laudos devem estar vinculados a um cliente cadastrado. Se pela sua própria conta você envia e lauda exames, pode criar um cliente com o mesmo nome da sua clínica ou hospital.

### Convidei um cliente mas ele não recebeu o e-mail
É possível que o e-mail tenha ido para a caixa de spam ou que o endereço já esteja cadastrado no sistema. Se for um endereço do Gmail, tente reenviar utilizando a técnica do alias (ex: email+1@gmail.com).

### É possível vincular uma conta nova a uma conta antiga?
Sim, conseguimos realizar essa associação entre contas. Entre em contato com o suporte informando os dados das contas envolvidas.

### Posso importar clientes em massa?
Ainda não. Em breve, disponibilizaremos a funcionalidade de importação de clientes e exames diretamente pelo aplicativo.

## Usuários

### O que são "usuários"?
São radiologistas que possuem acesso ao sistema para emissão de laudos.

### Usuários do tipo "membro" têm acesso à gestão financeira?
Atualmente, sim.

## Relatórios e Financeiro

### É possível exportar relatórios para planilhas?
Sim, é possível.

### Os relatórios mostram valores financeiros?
Ainda não, mas essa funcionalidade está em desenvolvimento.

### Existe relatório em PDF com lista de exames por cliente?
Ainda não disponibilizamos essa funcionalidade.

### Como alterar o status de pagamento?
Selecione os exames desejados, acesse a opção de status de pagamento e altere conforme necessário (ex: de "Pendente" para "Pago").

### Existe integração com sistemas de cobrança?
Ainda não.

### Existe integração com outros sistemas como SimplesVet?
Ainda não. Estamos trabalhando para oferecer essa integração em breve.

## E-mails e Notificações

### Os exames podem ser enviados por e-mail com o nome da minha clínica?
Sim. O e-mail de envio apresenta o nome da clínica como remetente, porém o envio ocorre por meio do sistema UniRadio (app@uniradio.vet.br), com a identificação "by UniRadio".

### Os e-mails com laudos podem ser enviados pelo meu e-mail profissional?
Atualmente, o envio é feito pelo sistema UniRadio. O nome da sua empresa será exibido como remetente, mas o e-mail partirá de app@uniradio.vet.br.

## Assinatura e Cobrança

### Como cancelo minha assinatura?
1. Acesse "Minha Conta"
2. Clique em "Gerenciar Assinatura"
3. Clique em "Cancelar assinatura"

### Como mudo minha forma de pagamento?
Entre em contato com o suporte para atualizar seu método de pagamento (cartão de crédito, boleto, etc.).

## Suporte Técnico

### Como abro um chamado de suporte?
Use nosso [Formulário de Suporte](https://forms.clickup.com/3010859/f/2vw9b-4017/JUF9S4KVT2T4VHWMZ4)

### Onde encontro tutoriais em vídeo?
Tutoriais em vídeo estão disponíveis ao longo desta documentação. Procure por ícones 📹 próximos aos tópicos dos tutoriais.

## Ainda Tem Dúvidas?

Entre em contato com nossa equipe de suporte através do formulário acima ou confira os tutoriais detalhados nas seções [Radiologistas](/radiologists/) ou [Clientes](/clients/).
