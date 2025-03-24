import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    title: 'Farcho Dev',
  },
  links: [
    {
      type: 'menu',
      text: 'Sena',
      items: [
        {
          text: 'Análisis y desarrollo de software',
          description: 'Un recurso para los aprendices de la tecnología en Análisis y Desarrollo de Software',
          url: '/docs/sena/ads_docs',          
        },
        {
          text: 'Formación complementaria',
          description: 'Programas cortos para actualizar o complementar conocimientos en áreas específicas.',
          url: '/docs/sena/fc_docs',          
        },
      ],
    },
    {
      text: 'Cursos',
      url: '/docs/sena/cursos',
      active: 'nested-url',
    }
  ],
};
