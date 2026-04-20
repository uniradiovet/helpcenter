import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Documentação UniRadio',
  description: 'Guia completo para radiologistas e clientes',
  base: '/helpcenter/',
  ignoreDeadLinks: true,

  locales: {
    root: {
      label: 'Português',
      lang: 'pt-BR',
      themeConfig: {
        nav: [
          { text: 'Início', link: '/' },
          { text: 'Para Radiologistas', link: '/radiologists/' },
          { text: 'Para Clientes', link: '/clients/' },
          { text: 'Perguntas Frequentes', link: '/faq' }
        ],
        sidebar: {
          '/radiologists/': [
            {
              text: 'Início',
              items: [
                { text: 'Introdução', link: '/radiologists/' }
              ]
            },
            {
              text: 'Exames',
              items: [
                { text: 'Criar exame', link: '/radiologists/exam/exam-new' },
                { text: 'Criar via PACS', link: '/radiologists/exam/pacs-exam-new' },
                { text: 'Editar exame', link: '/radiologists/exam/exam-edit' },
                { text: 'Excluir exame', link: '/radiologists/exam/exam-delete' }
              ]
            },
            {
              text: 'Laudos',
              items: [
                { text: 'Emitir Laudo', link: '/radiologists/report/issue-reports' },
                { text: 'Editar Laudo', link: '/radiologists/report/report-edit' },
                { text: 'Anexar estudo PACS', link: '/radiologists/exam/exam-pacs-attach' },
                { text: 'Anexar imagens', link: '/radiologists/exam/exam-upload-images' },
                { text: 'Marcar pendente', link: '/radiologists/report/mark-as-pending' },
                { text: 'Rejeitar laudo', link: '/radiologists/exam/exam-reject' },
                { text: 'Acessar laudo', link: '/radiologists/report/report-access' },
                { text: 'Compartilhar', link: '/radiologists/report/report-share' },
                { text: 'Filtrar Laudos', link: '/radiologists/report/report-filter' },
                { text: 'Versões do Laudo', link: '/radiologists/report/report-restore-version' },
                { text: 'Comentário', link: '/radiologists/exam/exam-comment-new' }
              ]
            },
            {
              text: 'Modelos de Laudo',
              items: [
                { text: 'Criar modelo', link: '/radiologists/report/create-report-templates' },
                { text: 'Inserir modelo', link: '/radiologists/report/insert-report-template' },
                { text: 'Editar modelo', link: '/radiologists/report/edit-report-template' },
                { text: 'Excluir modelo', link: '/radiologists/report/delete-report-template' }
              ]
            },
            {
              text: 'Clientes',
              items: [
                { text: 'Cadastrar Cliente', link: '/radiologists/clients/register-client' },
                { text: 'Editar Cliente', link: '/radiologists/clients/edit-client' },
                { text: 'Desativar Cliente', link: '/radiologists/clients/deactivate-client' },
                { text: 'Desativar em massa', link: '/radiologists/clients/bulk-deactivate-clients' },
                { text: 'Reativar Cliente', link: '/radiologists/clients/reactivate-client' },
                { text: 'Reativar em massa', link: '/radiologists/clients/bulk-reactivate-clients' },
                { text: 'Motivo de desativação', link: '/radiologists/clients/update-deactivation-reason' },
                { text: 'Mesclar contas', link: '/radiologists/clients/merge-clients' },
                { text: 'Comentários', link: '/radiologists/clients/client-comment' },
                { text: 'Exportar contas', link: '/radiologists/clients/export-clients' },
                { text: 'Exportações anteriores', link: '/radiologists/clients/export-clients-history' },
                { text: 'Importar contas', link: '/radiologists/clients/import-clients' },
                { text: 'Importações anteriores', link: '/radiologists/clients/import-clients-history' }
              ]
            },
            {
              text: 'Usuários',
              items: [
                { text: 'Convidar Usuário', link: '/radiologists/users/invite-account-user' },
                { text: 'Editar Usuário', link: '/radiologists/users/edit-account-user' },
                { text: 'Permissões', link: '/radiologists/users/edit-account-user-permissions' },
                { text: 'Notificações', link: '/radiologists/users/edit-account-user-notifications' },
                { text: 'Link redefinição', link: '/radiologists/users/account-user-password-reset-link' },
                { text: 'Desativar Usuário', link: '/radiologists/users/deactivate-account-user' },
                { text: 'Aceitar em massa', link: '/radiologists/users/bulk-accept-account-invitation' },
                { text: 'Ativar em massa', link: '/radiologists/users/bulk-activate-account-users' },
                { text: 'Desativar em massa', link: '/radiologists/users/bulk-deactivate-account-users' },
                { text: 'Reenviar em massa', link: '/radiologists/users/bulk-resend-account-invitation' }
              ]
            },
            {
              text: 'Usuários dos Clientes',
              items: [
                { text: 'Convidar Usuário', link: '/radiologists/client-users/invite-user' },
                { text: 'Editar Usuário', link: '/radiologists/client-users/edit-user' },
                { text: 'Permissões', link: '/radiologists/client-users/edit-user-permissions' },
                { text: 'Notificações', link: '/radiologists/client-users/edit-user-notifications' },
                { text: 'Link ativação', link: '/radiologists/client-users/user-activation-link' },
                { text: 'Link redefinição', link: '/radiologists/client-users/user-password-reset-link' },
                { text: 'Desativar Usuário', link: '/radiologists/client-users/deactivate-user' },
                { text: 'Aceitar em massa', link: '/radiologists/client-users/bulk-accept-invitation' },
                { text: 'Ativar em massa', link: '/radiologists/client-users/bulk-activate-users' },
                { text: 'Desativar em massa', link: '/radiologists/client-users/bulk-deactivate-users' },
                { text: 'Reenviar em massa', link: '/radiologists/client-users/bulk-resend-invitation' }
              ]
            },
            {
              text: 'Meu perfil',
              items: [
                { text: 'Gerenciar perfil', link: '/radiologists/account/my-profile' },
                { text: 'Alterar senha', link: '/radiologists/account/change-password' }
              ]
            },
            {
              text: 'Configurações',
              items: [
                { text: 'Minha conta', link: '/radiologists/account/my-account' },
                { text: 'Configurar laudos', link: '/radiologists/report/report-settings' },
                { text: 'Configurar exames', link: '/radiologists/exam/exam-settings' },
                { text: 'Pesquisa NPS', link: '/radiologists/settings/nps-settings' },
                { text: 'Notificações conta', link: '/radiologists/account/account-notifications' }
              ]
            },
            {
              text: 'Tags',
              items: [
                { text: 'Criar tag', link: '/radiologists/settings/create-tag' },
                { text: 'Editar tag', link: '/radiologists/settings/edit-tag' },
                { text: 'Excluir tag', link: '/radiologists/settings/delete-tag' }
              ]
            },
            {
              text: 'PACS',
              items: [
                { text: 'Configurações PACS', link: '/radiologists/pacs/pacs-settings' },
                { text: 'Integração Carestream', link: '/radiologists/pacs/carestream-pacs-config' },
                { text: 'Integração Dr.Tech', link: '/radiologists/pacs/drtech-pacs-config' },
                { text: 'Integração Ultramedic', link: '/radiologists/pacs/ultramedic-pacs-config' },
                { text: 'Integração VXVue', link: '/radiologists/pacs/vxvue-pacs-config' }

              ]
            },
            {
              text: 'Relatórios',
              items: [
                { text: 'Painel analítico', link: '/radiologists/report/dashboard' },
                { text: 'Gerar relatórios', link: '/radiologists/report/reports-generate' }
              ]
            },
            {
              text: 'Segurança',
              items: [
                { text: 'Ativar Autenticação 2FA', link: '/radiologists/security/2fa-enable' },
                { text: 'Desativar Autenticação 2FA', link: '/radiologists/security/2fa-disable' }
              ]
            },
            {
              text: 'Assinatura',
              items: [
                { text: 'Gerenciar assinatura', link: '/radiologists/account/account-subscription' }
              ]
            },
            {
              text: 'Financeiro',
              items: [
                { text: 'Configurações', link: '/radiologists/settings/financial-settings' },
                { text: 'Laudo', link: '/radiologists/exam/exam-financial' }
              ]
            },
            {
              text: 'Webhooks',
              items: [
                { text: 'Cadastrar Webhook', link: '/radiologists/integrations/webhooks-new' },
                { text: 'Editar Webhook', link: '/radiologists/integrations/webhooks-edit' },
                { text: 'Logs de Webhooks', link: '/radiologists/integrations/webhooks-logs' },
                { text: 'Excluir Webhook', link: '/radiologists/integrations/webhooks-delete' }
              ]
            },
            {
              text: 'Definição de Campos',
              items: [
                { text: 'Exame', link: '/radiologists/exam/exam-fields' },
                { text: 'Conta', link: '/radiologists/fields/fields-account-radiologist' },
                { text: 'Usuário da Conta', link: '/radiologists/fields/fields-invite-user-account' },
                { text: 'Usuário do Cliente', link: '/radiologists/fields/fields-invite-user-client' },
                { text: 'Novo Cliente', link: '/radiologists/fields/fields-new-client' },
                { text: 'Importação de Clientes', link: '/radiologists/fields/fields-clients-import' },
                { text: 'Notificações', link: '/radiologists/fields/fields-notifications' },
                { text: 'Perfil', link: '/radiologists/fields/fields-profile-user' },
                { text: 'Laudo', link: '/radiologists/fields/fields-report' },
                { text: 'Configurações do Laudo', link: '/radiologists/fields/fields-settings-report' },
                { text: 'Webhook', link: '/radiologists/fields/fields-webhook' }
              ]
            }
          ],
          '/clients/': [
            {
              text: 'Início',
              items: [
                { text: 'Introdução', link: '/clients/' }
              ]
            },
            {
              text: 'Exames',
              items: [
                { text: 'Enviar Exame', link: '/clients/exam/exam-new' },
                { text: 'Enviar via PACS', link: '/clients/exam/pacs-exam-new' },
                { text: 'Editar Exame', link: '/clients/exam/exam-edit' },
                { text: 'Excluir Exame', link: '/clients/exam/exam-delete' },
                { text: 'Campos de Exame', link: '/clients/exam/exam-fields' },
                { text: 'Filtrar Laudos', link: '/clients/report/report-filter' }
              ]
            },
            {
              text: 'Laudos',
              items: [
                { text: 'Acessar Laudos', link: '/clients/report/report-access' },
                { text: 'Compartilhar Laudos', link: '/clients/report/report-share' }
              ]
            },
            {
              text: 'Usuários',
              items: [
                { text: 'Convidar', link: '/clients/users/users-invite' },
                { text: 'Editar', link: '/clients/users/users-edit' },
                { text: 'Permissões', link: '/clients/users/users-permissions' },
                { text: 'Notificações', link: '/clients/users/users-notifications' }
              ]
            },
            {
              text: 'Meu Perfil',
              items: [
                { text: 'Editar Perfil', link: '/clients/account/my-profile' },
                { text: 'Alterar Senha', link: '/clients/security/password-change' }
              ]
            },
            {
              text: 'Configurações',
              items: [
                { text: 'Notificações', link: '/clients/settings/notifications' }
              ]
            },
            {
              text: 'PACS',
              items: [
                { text: 'Configurações PACS', link: '/clients/pacs/pacs-settings' }
              ]
            },
            {
              text: 'Segurança',
              items: [
                { text: 'Ativar 2 Fatores', link: '/clients/security/2fa-enable' },
                { text: 'Desativar 2 Fatores', link: '/clients/security/2fa-disable' }
              ]
            },
            {
              text: 'Webhooks',
              items: [
                { text: 'Cadastrar', link: '/clients/integrations/webhooks-new' },
                { text: 'Editar', link: '/clients/integrations/webhooks-edit' },
                { text: 'Logs', link: '/clients/integrations/webhooks-logs' },
                { text: 'Excluir', link: '/clients/integrations/webhooks-delete' }
              ]
            },
            {
              text: 'Definição de Campos',
              items: [
                { text: 'Exame', link: '/clients/exam/exam-fields' },
                { text: 'Conta', link: '/clients/fields/fields-account-clinic' },
                { text: 'Convite', link: '/clients/fields/fields-invite-user' },
                { text: 'Notificações', link: '/clients/fields/fields-notifications' }
              ]
            }
          ]
        },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Buscar',
                buttonAriaLabel: 'Buscar'
              },
              modal: {
                noResultsText: 'Nenhum resultado encontrado',
                resetButtonTitle: 'Limpar busca',
                footer: {
                  selectText: 'para selecionar',
                  navigateText: 'para navegar',
                  closeText: 'para fechar'
                }
              }
            }
          }
        },
        docFooter: {
          prev: 'Anterior',
          next: 'Próximo'
        },
        outline: {
          label: 'Nesta página'
        },
        lastUpdated: {
          text: 'Atualizado em'
        },
        darkModeSwitchLabel: 'Aparência',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Voltar ao topo'
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'For Radiologists', link: '/en/radiologists/' },
          { text: 'For Clients', link: '/en/clients/' },
          { text: 'FAQ', link: '/en/faq' }
        ],
        sidebar: {
          '/en/radiologists/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introduction', link: '/en/radiologists/' },
                { text: 'My Profile', link: '/en/radiologists/my-profile' },
                { text: 'My Account', link: '/en/radiologists/account/my-account' }
              ]
            },
            {
              text: 'Dashboard',
              items: [
                { text: 'Analytics Dashboard', link: '/en/radiologists/report/dashboard' }
              ]
            },
            {
              text: 'Account Management',
              items: [
                { text: 'Edit Profile', link: '/en/radiologists/my-profile' },
                { text: 'Change Password', link: '/en/radiologists/account/change-password' },
                { text: 'Enable Two-Factor Authentication', link: '/en/radiologists/security/2fa-enable' },
                { text: 'Disable Two-Factor Authentication', link: '/en/radiologists/security/2fa-disable' },
                { text: 'Invite User to Account', link: '/en/radiologists/users/invite-account-user' },
                { text: 'Edit Account User', link: '/en/radiologists/users/edit-account-user' },
                { text: 'Edit Account User Permissions', link: '/en/radiologists/users/edit-account-user-permissions' },
                { text: 'Edit Account User Notifications', link: '/en/radiologists/users/edit-account-user-notifications' },
                { text: 'Get User Password Reset Link', link: '/en/radiologists/users/account-user-password-reset-link' },
                { text: 'Deactivate Account User', link: '/en/radiologists/users/deactivate-account-user' },
                { text: 'Account Notifications', link: '/en/radiologists/account/account-notifications' },
                { text: 'Account Subscription', link: '/en/radiologists/account/account-subscription' },
                { text: 'Bulk Accept Invitations', link: '/en/radiologists/users/bulk-accept-account-invitation' },
                { text: 'Bulk Activate Users', link: '/en/radiologists/users/bulk-activate-account-users' },
                { text: 'Bulk Deactivate Users', link: '/en/radiologists/users/bulk-deactivate-account-users' },
                { text: 'Bulk Resend Invitation', link: '/en/radiologists/users/bulk-resend-account-invitation' }
              ]
            },
            {
              text: 'Client Management',
              items: [
                { text: 'Register Clients', link: '/en/radiologists/clients/register-client' },
                { text: 'Edit Client', link: '/en/radiologists/clients/edit-client' },
                { text: 'Deactivate Client', link: '/en/radiologists/clients/deactivate-client' },
                { text: 'Bulk Deactivate Clients', link: '/en/radiologists/clients/bulk-deactivate-clients' },
                { text: 'Reactivate Client', link: '/en/radiologists/clients/reactivate-client' },
                { text: 'Bulk Reactivate Clients', link: '/en/radiologists/clients/bulk-reactivate-clients' },
                { text: 'Update Deactivation Reason', link: '/en/radiologists/clients/update-deactivation-reason' },
                { text: 'Import Clients', link: '/en/radiologists/clients/import-clients' },
                { text: 'Import History', link: '/en/radiologists/clients/import-clients-history' },
                { text: 'Comment on Client Profile', link: '/en/radiologists/clients/client-comment' },
                { text: 'Delete Client Comment', link: '/en/radiologists/clients/client-comment' },
                { text: 'Merge Clients', link: '/en/radiologists/clients/merge-clients' },
                { text: 'Manage Clients', link: '/en/radiologists/clients/register-client' }
              ]
            },
            {
              text: 'User Management',
              items: [
                { text: 'Invite User', link: '/en/radiologists/client-users/invite-user' },
                { text: 'Edit User', link: '/en/radiologists/client-users/edit-user' },
                { text: 'Edit User Permissions', link: '/en/radiologists/client-users/edit-user-permissions' },
                { text: 'Edit User Notifications', link: '/en/radiologists/client-users/edit-user-notifications' },
                { text: 'Get Activation Link', link: '/en/radiologists/client-users/user-activation-link' },
                { text: 'Get Password Reset Link', link: '/en/radiologists/client-users/user-password-reset-link' },
                { text: 'Deactivate User', link: '/en/radiologists/client-users/deactivate-user' },
                { text: 'Bulk Accept Invitations', link: '/en/radiologists/client-users/bulk-accept-invitation' },
                { text: 'Bulk Activate Users', link: '/en/radiologists/client-users/bulk-activate-users' },
                { text: 'Bulk Deactivate Users', link: '/en/radiologists/client-users/bulk-deactivate-users' },
                { text: 'Bulk Resend Invitation', link: '/en/radiologists/client-users/bulk-resend-invitation' },
                { text: 'Add Users', link: '/en/radiologists/client-users/invite-user' },
                { text: 'Deactivate Users', link: '/en/radiologists/client-users/deactivate-user' }
              ]
            },
            {
              text: 'Exam Management',
              items: [
                { text: 'Create Exam', link: '/en/radiologists/exam/exam-new' },
                { text: 'Create Exam via PACS', link: '/en/radiologists/exam/pacs-exam-new' },
                { text: 'Edit Exam', link: '/en/radiologists/exam/exam-edit' },
                { text: 'Access Exam Results', link: '/en/radiologists/exam/exam-delete' },
                { text: 'Reject Exam', link: '/en/radiologists/exam/exam-reject' },
                { text: 'Add Comment to Exam', link: '/en/radiologists/exam/exam-comment-new' },
                { text: 'Attach PACS Study to Exam', link: '/en/radiologists/exam/exam-pacs-attach' },
                { text: 'Exam Financial Management', link: '/en/radiologists/exam/exam-financial' },
                { text: 'Attach Images to Exam', link: '/en/radiologists/exam/exam-upload-images' }
              ]
            },
            {
              text: 'Reports',
              items: [
                { text: 'Filter Reports', link: '/en/radiologists/report/report-filter' },
                { text: 'Create Report Templates', link: '/en/radiologists/report/create-report-templates' },
                { text: 'Edit Report Templates', link: '/en/radiologists/report/edit-report-template' },
                { text: 'Delete Report Templates', link: '/en/radiologists/report/delete-report-template' },
                { text: 'Apply Report Template', link: '/en/radiologists/report/insert-report-template' },
                { text: 'Issue Reports', link: '/en/radiologists/report/issue-reports' },
                { text: 'Edit Reports', link: '/en/radiologists/report/report-edit' },
                { text: 'Restore Report Version', link: '/en/radiologists/report/report-restore-version' },
                { text: 'Mark as Pending', link: '/en/radiologists/report/mark-as-pending' },
                { text: 'Access Reports', link: '/en/radiologists/report/report-access' },
                { text: 'Share Reports', link: '/en/radiologists/report/report-share' },
                { text: 'Generate Reports', link: '/en/radiologists/report/reports-generate' }
              ]
            },
            {
              text: 'PACS Server',
              items: [
                { text: 'PACS Settings', link: '/en/radiologists/pacs/pacs-settings' },
                { text: 'Integração Carestream', link: '/en/radiologists/pacs/carestream-pacs-config' },
                { text: 'Integração Dr.Tech', link: '/en/radiologists/pacs/drtech-pacs-config' },
                { text: 'Integração Ultramedic', link: '/en/radiologists/pacs/ultramedic-pacs-config' },
                { text: 'Integração VXVue', link: '/en/radiologists/pacs/vxvue-pacs-config' }
              ]
            },
            {
              text: 'Settings',
              items: [
                { text: 'Configuration Page', link: '/en/radiologists/account/my-account' },
                { text: 'Create Tag', link: '/en/radiologists/settings/create-tag' },
                { text: 'Edit Tag', link: '/en/radiologists/settings/edit-tag' },
                { text: 'Delete Tag', link: '/en/radiologists/settings/delete-tag' },
                { text: 'Exam Settings', link: '/en/radiologists/exam/exam-settings' },
                { text: 'Report Settings', link: '/en/radiologists/report/report-settings' },
                { text: 'NPS Survey', link: '/en/radiologists/settings/nps-settings' },
                { text: 'Financial Management', link: '/en/radiologists/settings/financial-settings' },
                { text: 'Register Webhook', link: '/en/radiologists/integrations/webhooks-new' },
                { text: 'Edit Webhook', link: '/en/radiologists/integrations/webhooks-edit' },
                { text: 'Webhook Logs', link: '/en/radiologists/integrations/webhooks-logs' },
                { text: 'Delete Webhook', link: '/en/radiologists/integrations/webhooks-delete' }
              ]
            },
            {
              text: 'Field Definitions',
              items: [
                { text: 'Exam', link: '/en/radiologists/exam/exam-fields' },
                { text: 'Account', link: '/en/radiologists/fields/fields-account-radiologist' },
                { text: 'Account User', link: '/en/radiologists/fields/fields-invite-user-account' },
                { text: 'Client User', link: '/en/radiologists/fields/fields-invite-user-client' },
                { text: 'New Client', link: '/en/radiologists/fields/fields-new-client' },
                { text: 'Client Import', link: '/en/radiologists/fields/fields-clients-import' },
                { text: 'Notifications', link: '/en/radiologists/fields/fields-notifications' },
                { text: 'User Profile', link: '/en/radiologists/fields/fields-profile-user' },
                { text: 'Report', link: '/en/radiologists/fields/fields-report' },
                { text: 'Report Settings', link: '/en/radiologists/fields/fields-settings-report' },
                { text: 'Webhook', link: '/en/radiologists/fields/fields-webhook' }
              ]
            }
          ],
          '/en/clients/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introduction', link: '/en/clients/' }
              ]
            },
            {
              text: 'Exams',
              items: [
                { text: 'Create Exam', link: '/en/clients/exam/exam-new' },
                { text: 'Edit Exam', link: '/en/clients/exam/exam-edit' },
                { text: 'Delete Exam', link: '/en/clients/exam/exam-delete' },
                { text: 'Exam Fields', link: '/en/clients/exam/exam-fields' },
                { text: 'Filter Reports', link: '/en/clients/report/report-filter' }
              ]
            },
            {
              text: 'Reports',
              items: [
                { text: 'Access Reports', link: '/en/clients/report/report-access' },
                { text: 'Share Reports', link: '/en/clients/report/report-share' }
              ]
            },
            {
              text: 'Users',
              items: [
                { text: 'Invite Users', link: '/en/clients/users/users-invite' },
                { text: 'Edit Users', link: '/en/clients/users/users-edit' },
                { text: 'User Permissions', link: '/en/clients/users/users-permissions' },
                { text: 'User Notifications', link: '/en/clients/users/users-notifications' }
              ]
            },
            {
              text: 'My Profile',
              items: [
                { text: 'Edit Profile', link: '/en/clients/account/my-profile' },
                { text: 'Change Password', link: '/en/clients/security/password-change' }
              ]
            },
            {
              text: 'Settings',
              items: [
                { text: 'Notifications', link: '/en/clients/settings/notifications' }
              ]
            },
            {
              text: 'PACS',
              items: [
                { text: 'PACS Settings', link: '/en/clients/pacs/pacs-settings' },
                { text: 'Send via PACS', link: '/en/clients/exam/pacs-exam-new' }
              ]
            },
            {
              text: 'Security',
              items: [
                { text: 'Enable Two-Factor Auth', link: '/en/clients/security/2fa-enable' },
                { text: 'Disable Two-Factor Auth', link: '/en/clients/security/2fa-disable' }
              ]
            },
            {
              text: 'Webhooks',
              items: [
                { text: 'Create Webhook', link: '/en/clients/integrations/webhooks-new' },
                { text: 'Edit Webhook', link: '/en/clients/integrations/webhooks-edit' },
                { text: 'Webhook Logs', link: '/en/clients/integrations/webhooks-logs' },
                { text: 'Delete Webhook', link: '/en/clients/integrations/webhooks-delete' }
              ]
            },
            {
              text: 'Field Definitions',
              items: [
                { text: 'Exam', link: '/en/clients/exam/exam-fields' },
                { text: 'Account', link: '/en/clients/fields/fields-account-clinic' },
                { text: 'Invite', link: '/en/clients/fields/fields-invite-user' },
                { text: 'Notifications', link: '/en/clients/fields/fields-notifications' }
              ]
            }
          ]
        },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          }
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        outline: {
          label: 'On this page'
        },
        lastUpdated: {
          text: 'Updated on'
        },
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Back to top'
      }
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/seuusuario/uniradio-docs' }
    ],
    footer: {
      message: 'Lançado sob a Licença MIT.',
      copyright: 'Copyright © 2026 UniRadio'
    }
  }
})
