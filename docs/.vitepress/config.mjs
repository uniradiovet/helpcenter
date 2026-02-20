import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Documentação UniRadio',
  description: 'Guia completo para radiologistas e clientes',
  base: '/app-ajuda-pt/',
  ignoreDeadLinks: true,

  locales: {
    root: {
      label: 'Português',
      lang: 'pt-BR',
      themeConfig: {
        nav: [
          { text: 'Início', link: '/' },
          { text: 'Para Radiologistas', link: '/radiologistas/' },
          { text: 'Para Clientes', link: '/clientes/' },
          { text: 'Perguntas Frequentes', link: '/perguntas-frequentes' }
        ],
        sidebar: {
          '/radiologistas/': [
            {
              text: 'Primeiros Passos',
              items: [
                { text: 'Introdução', link: '/radiologistas/' },
                { text: 'Meu Perfil', link: '/radiologistas/meu-perfil' },
                { text: 'Minha Conta', link: '/radiologistas/minha-conta' }
              ]
            },
            {
              text: 'Gerenciamento de Conta',
              items: [
                { text: 'Editar Perfil', link: '/radiologistas/editar-perfil' },
                { text: 'Alterar Senha', link: '/radiologistas/alterar-senha' },
                { text: 'Cancelar Assinatura', link: '/radiologistas/cancelar-assinatura' }
              ]
            },
            {
              text: 'Gerenciamento de Clientes',
              items: [
                { text: 'Cadastrar Clientes', link: '/radiologistas/cadastrar-clientes' },
                { text: 'Gerenciar Clientes', link: '/radiologistas/gerenciar-clientes' }
              ]
            },
            {
              text: 'Gerenciamento de Usuários',
              items: [
                { text: 'Adicionar Usuários', link: '/radiologistas/adicionar-usuarios' },
                { text: 'Desativar Usuários', link: '/radiologistas/desativar-usuarios' }
              ]
            },
            {
              text: 'Laudos',
              items: [
                { text: 'Criar Modelos de Laudos', link: '/radiologistas/criar-modelos-laudos' },
                { text: 'Emitir Laudos', link: '/radiologistas/emitir-laudos' },
                { text: 'Acessar Laudos', link: '/radiologistas/acessar-laudos' },
                { text: 'Editar Laudos', link: '/radiologistas/editar-laudos' }
              ]
            },
            {
              text: 'Servidor PACS',
              items: [
                { text: 'Visão Geral PACS', link: '/radiologistas/pacs-visao-geral' },
                { text: 'Integração VXvue', link: '/radiologistas/pacs-vxvue' },
                { text: 'Integração Ultrassom', link: '/radiologistas/pacs-ultrassom' },
                { text: 'Integração Carestream', link: '/radiologistas/pacs-carestream' },
                { text: 'Integração Ultramedic', link: '/radiologistas/pacs-ultramedic' },
                { text: 'Solução de Problemas PACS', link: '/radiologistas/pacs-solucao-problemas' }
              ]
            },
            {
              text: 'Configurações',
              items: [
                { text: 'Página de Configuração', link: '/radiologistas/configuracao' }
              ]
            }
          ],
          '/clientes/': [
            {
              text: 'Primeiros Passos',
              items: [
                { text: 'Introdução', link: '/clientes/' },
                { text: 'Meu Perfil', link: '/clientes/meu-perfil' }
              ]
            },
            {
              text: 'Gerenciamento de Exames',
              items: [
                { text: 'Criar Exame', link: '/clientes/criar-exame' },
                { text: 'Enviar via PACS', link: '/clientes/enviar-pacs' },
                { text: 'Editar Exame', link: '/clientes/editar-exame' },
                { text: 'Marcar como Pendente', link: '/clientes/marcar-pendente' }
              ]
            },
            {
              text: 'Laudos',
              items: [
                { text: 'Acessar Laudos', link: '/clientes/acessar-laudos' }
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
          { text: 'For Radiologists', link: '/en/radiologistas/' },
          { text: 'For Clients', link: '/en/clientes/' },
          { text: 'FAQ', link: '/en/perguntas-frequentes' }
        ],
        sidebar: {
          '/en/radiologistas/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introduction', link: '/en/radiologistas/' },
                { text: 'My Profile', link: '/en/radiologistas/meu-perfil' },
                { text: 'My Account', link: '/en/radiologistas/minha-conta' }
              ]
            },
            {
              text: 'Account Management',
              items: [
                { text: 'Edit Profile', link: '/en/radiologistas/editar-perfil' },
                { text: 'Change Password', link: '/en/radiologistas/alterar-senha' },
                { text: 'Cancel Subscription', link: '/en/radiologistas/cancelar-assinatura' }
              ]
            },
            {
              text: 'Client Management',
              items: [
                { text: 'Register Clients', link: '/en/radiologistas/cadastrar-clientes' },
                { text: 'Manage Clients', link: '/en/radiologistas/gerenciar-clientes' }
              ]
            },
            {
              text: 'User Management',
              items: [
                { text: 'Add Users', link: '/en/radiologistas/adicionar-usuarios' },
                { text: 'Deactivate Users', link: '/en/radiologistas/desativar-usuarios' }
              ]
            },
            {
              text: 'Reports',
              items: [
                { text: 'Create Report Templates', link: '/en/radiologistas/criar-modelos-laudos' },
                { text: 'Issue Reports', link: '/en/radiologistas/emitir-laudos' },
                { text: 'Access Reports', link: '/en/radiologistas/acessar-laudos' },
                { text: 'Edit Reports', link: '/en/radiologistas/editar-laudos' }
              ]
            },
            {
              text: 'PACS Server',
              items: [
                { text: 'PACS Overview', link: '/en/radiologistas/pacs-visao-geral' },
                { text: 'VXvue Integration', link: '/en/radiologistas/pacs-vxvue' },
                { text: 'Ultrasound Integration', link: '/en/radiologistas/pacs-ultrassom' },
                { text: 'Carestream Integration', link: '/en/radiologistas/pacs-carestream' },
                { text: 'Ultramedic Integration', link: '/en/radiologistas/pacs-ultramedic' },
                { text: 'PACS Troubleshooting', link: '/en/radiologistas/pacs-solucao-problemas' }
              ]
            },
            {
              text: 'Settings',
              items: [
                { text: 'Configuration Page', link: '/en/radiologistas/configuracao' }
              ]
            }
          ],
          '/en/clientes/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introduction', link: '/en/clientes/' },
                { text: 'My Profile', link: '/en/clientes/meu-perfil' }
              ]
            },
            {
              text: 'Exam Management',
              items: [
                { text: 'Create Exam', link: '/en/clientes/criar-exame' },
                { text: 'Send via PACS', link: '/en/clientes/enviar-pacs' },
                { text: 'Edit Exam', link: '/en/clientes/editar-exame' },
                { text: 'Mark as Pending', link: '/en/clientes/marcar-pendente' }
              ]
            },
            {
              text: 'Reports',
              items: [
                { text: 'Access Reports', link: '/en/clientes/acessar-laudos' }
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
      { icon: 'github', link: 'https://github.com/seuusuario/uniradio-docs' }
    ],
    footer: {
      message: 'Lançado sob a Licença MIT.',
      copyright: 'Copyright © 2026 UniRadio'
    }
  }
})
