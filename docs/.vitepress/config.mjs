import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Documentação UniRadio',
  description: 'Guia completo para radiologistas e clientes',
  lang: 'pt-BR',
  
  themeConfig: {
    logo: '/logo.svg',
    
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/seuusuario/uniradio-docs' }
    ],

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

    footer: {
      message: 'Lançado sob a Licença MIT.',
      copyright: 'Copyright © 2026 UniRadio'
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
})
