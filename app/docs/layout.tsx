import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions} sidebar={{
      tabs: [
        {
          title: 'Formación Complementaria',
          url: '/docs/sena/fc_docs',
        },
        {
          title: 'Análisis y Desarrollo de Software',
          url: '/docs/sena/ads_docs',
        }
      ],
    }}>
      {children}
    </DocsLayout>
  );
}
