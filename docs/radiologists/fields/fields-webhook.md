# Campos do webhook

Entenda o que cada campo no formulário de criação/edição de webhook significa.

Webhooks permitem que o sistema envie notificações automáticas para sistemas externos sempre que determinados eventos ocorrem na plataforma.

---

## **URL**

**URL** *(obrigatório)*: Endereço do endpoint que receberá as requisições do webhook. Deve ser uma URL HTTPS acessível publicamente.

Exemplo: `https://meusite.com/webhooks`

---

## **Descrição**

**Descrição**: Texto livre para identificar a finalidade deste webhook. Útil para diferenciar múltiplos webhooks configurados na conta.

Exemplo: *"Integração com sistema de gestão clínica XYZ"*

---

## **Eventos**

Selecione quais eventos do sistema devem disparar este webhook. É possível marcar múltiplos eventos.

| Evento | Descrição |
|---|---|
| **Exame enviado** | Disparado quando um novo exame é criado/enviado pela clínica. |
| **Exame atualizado** | Disparado quando os dados de um exame são editados. |
| **Laudo enviado** | Disparado quando um laudo é finalizado e enviado. |
| **Laudo atualizado** | Disparado quando um laudo já enviado é editado. |
| **Novo usuário cadastrado** | Disparado quando um novo usuário aceita o convite e se cadastra na conta. |
| **Usuário atualizado** | Disparado quando os dados de um usuário são alterados. |
| **Novo cliente cadastrado** | Disparado quando uma nova clínica cliente é adicionada à conta. |
| **Cliente atualizado** | Disparado quando os dados de uma clínica cliente são alterados. |

::: warning ATENÇÃO
Os eventos **Novo cliente cadastrado** e **Cliente atualizado** estão disponíveis apenas para contas do tipo radiologista. Contas de clínica não visualizam essas opções.
:::

---

## **Ativo**

**Webhook ativo**: Quando ativado, o webhook está em operação e os eventos selecionados disparam requisições para a URL configurada. Quando desativado, o webhook é pausado sem ser excluído.

::: tip DICA
Desative o webhook temporariamente durante manutenções no sistema externo para evitar falhas de entrega sem precisar excluir a configuração.
:::
