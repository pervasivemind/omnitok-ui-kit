import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Layout, SidebarAccount, type SidebarItem, type SidebarProjectOption } from '@omnitok/ui';
import {
  BarChart3,
  CalendarClock,
  Database,
  FolderTree,
  LayoutDashboard,
  LayoutGrid,
  ListChecks,
  ListOrdered,
  PieChart,
  Settings,
  ShieldCheck,
  Store,
  TrendingUp,
  Users,
} from 'lucide-react';

/**
 * The v3 application shell with the three sidebar situations that exist in
 * production today, plus the collapsed rail. Approved on 2026-10-23 against
 * the sketches in the BI portal repository (docs/mockups/bocetos-sidebar-*).
 */
const meta: Meta<typeof Layout> = {
  title: 'Layout/Shell v3',
  component: Layout,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/* ── fixtures ────────────────────────────────────────────────────── */

const gatingReports: SidebarItem[] = [
  { id: '/projects/gating_executive/dashboard', label: 'Executive Summary', icon: <LayoutGrid size={16} /> },
  { id: '/projects/gating_market/dashboard', label: 'Market', icon: <PieChart size={16} /> },
  { id: '/projects/gating_sellers/dashboard', label: 'Sellers', icon: <Users size={16} /> },
  { id: '/projects/gating_catalog/dashboard', label: 'Catalog', icon: <ListOrdered size={16} /> },
  { id: '/projects/country_health/dashboard', label: 'Country Health', icon: <TrendingUp size={16} /> },
  { id: '/projects/storefronts/dashboard', label: 'Storefronts', icon: <Store size={16} /> },
  { id: '/projects/gc_listings/dashboard', label: 'Listings', icon: <LayoutGrid size={16} /> },
  { id: '/projects/gating_overall/dashboard', label: 'Overall', icon: <BarChart3 size={16} /> },
];

function portalItems(opts: {
  reports: SidebarItem[];
  projectSlug: string;
  admin: boolean;
  tasks?: number;
  lang?: 'es' | 'en';
}): SidebarItem[] {
  const es = (opts.lang ?? 'es') === 'es';
  const items: SidebarItem[] = [
    { id: '/', label: es ? 'Inicio' : 'Home', icon: <LayoutDashboard size={16} /> },
    { id: '__project__', kind: 'project-selector', label: '' },
    { id: '__section__reports', kind: 'section', label: es ? 'Reportes' : 'Reports', badge: opts.reports.length, children: opts.reports },
    { id: `/projects/${opts.projectSlug}/maestros`, label: es ? 'Maestros' : 'Master data', icon: <Database size={16} /> },
    { id: `/projects/${opts.projectSlug}/files`, label: es ? 'Archivos' : 'Files', icon: <FolderTree size={16} /> },
    { id: '/tasks', label: es ? 'Tareas' : 'Tasks', icon: <ListChecks size={16} />, badge: opts.tasks, dividerBefore: true },
    { id: '/schedules', label: es ? 'Programaciones' : 'Scheduled emails', icon: <CalendarClock size={16} /> },
  ];
  if (opts.admin) {
    items.push({
      id: '__section__admin',
      label: es ? 'Administración' : 'Administration',
      icon: <ShieldCheck size={16} />,
      children: [{ id: '/personas', label: es ? 'Personas' : 'People', icon: <Users size={16} /> }],
    });
  }
  items.push({ id: '/settings', label: es ? 'Configuración' : 'Settings', icon: <Settings size={16} /> });
  return items;
}

const LANGUAGES = [{ code: 'es' }, { code: 'en' }, { code: 'pt' }];

function Footer({ name, email, lang, initials }: { name: string; email: string; lang: 'es' | 'en' | 'pt'; initials: string }) {
  const [current, setCurrent] = useState<string>(lang);
  return (
    <SidebarAccount
      name={name}
      detail={email}
      initials={initials}
      version="3.1.0"
      languages={LANGUAGES}
      language={current}
      onLanguageChange={setCurrent}
      onSignOut={() => undefined}
      signOutLabel={lang === 'en' ? 'Sign out' : 'Salir'}
      languageLabel={lang === 'en' ? 'Language' : 'Idioma'}
    />
  );
}

function FooterCollapsed({ initials }: { initials: string }) {
  return <SidebarAccount collapsed name={initials} initials={initials} />;
}

function Content({ crumbs, title, subtitle }: { crumbs: string[]; title: string; subtitle: string }) {
  return (
    <div className="font-sans">
      <div className="mb-3 text-[11px] text-[var(--omni-muted)]">
        {crumbs.slice(0, -1).join(' › ')} › <span className="text-[var(--omni-text)]">{crumbs[crumbs.length - 1]}</span>
      </div>
      <h1 className="font-display text-[22px] font-bold tracking-[-.02em] text-[var(--omni-ink)]">{title}</h1>
      <p className="mt-1 text-[12px] text-[var(--omni-muted)]">{subtitle}</p>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {['30,8%', '79,7%', '24,5%'].map((v) => (
          <div key={v} className="rounded-xl border border-[var(--omni-line)] bg-white p-4 shadow-[var(--omni-shadow-card)]">
            <div className="mb-3 h-2 w-1/2 rounded bg-[#EEF0F4]" />
            <div className="font-display text-2xl font-bold tracking-tight text-[var(--omni-ink)]">{v}</div>
            <div className="mt-3 h-2 w-2/3 rounded bg-[#EEF0F4]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function BrotherLogo() {
  return (
    <span className="flex items-baseline gap-1.5 font-display text-[20px] font-extrabold tracking-[-.04em] text-white">
      brother<span className="text-[10px] font-medium tracking-normal text-[#C9C4E6]">at your side</span>
    </span>
  );
}

const omnitokProjects: SidebarProjectOption[] = [
  { id: 'gating', label: 'Gating', meta: '8 reportes' },
  { id: 'gating-consolidated', label: 'Gating consolidado', meta: '9 reportes' },
  { id: 'precios-hisense', label: 'Precios Hisense', meta: '6 reportes' },
  { id: 'monitoring-emea-kpi2', label: 'Monitoring EMEA KPI2', meta: '3 reportes' },
  { id: 'disponibilidad-brother-pe', label: 'Disponibilidad Brother PE', meta: '1 reporte' },
  { id: 'disponibilidad-gloria-pe', label: 'Disponibilidad Gloria PE', meta: '1 reporte' },
  { id: 'disponibilidad-hisense-ar', label: 'Disponibilidad Hisense AR', meta: '1 reporte' },
  { id: 'disponibilidad-sigma-mx', label: 'Disponibilidad Sigma MX', meta: '1 reporte' },
  { id: 'dashboard-explorer', label: 'Dashboard Explorer', meta: '1 reporte' },
  { id: 'kpi2-enforcement-360', label: 'KPI2 Enforcement 360', meta: '1 reporte' },
  { id: 'kpi3-restricted-monitoring', label: 'KPI3 Restricted Monitoring', meta: '1 reporte' },
  { id: 'unauthorized', label: 'Unauthorized', meta: '1 reporte' },
  { id: 'prueba', label: 'Prueba', meta: 'sin reportes', disabled: true },
];

/* ── stories ─────────────────────────────────────────────────────── */

/** Caso 1: cliente DSA en producción. Un proyecto, dos reportes, logo del tenant. */
export const BrotherPeru: Story = {
  render: () => {
    const [active, setActive] = useState('/projects/availability/dashboard');
    const reports: SidebarItem[] = [
      { id: '/projects/availability/dashboard', label: 'Disponibilidad y cobertura', icon: <LayoutGrid size={16} /> },
      { id: '/projects/pricing_brand/dashboard', label: 'Pricing-Brand', icon: <BarChart3 size={16} /> },
    ];
    return (
      <Layout
        brandHeader={{ brand: <BrotherLogo />, label: 'Disponibilidad · Disponibilidad y cobertura' }}
        projectSelector={{ active: { id: 'disponibilidad', label: 'Disponibilidad' }, options: [{ id: 'disponibilidad', label: 'Disponibilidad' }] }}
        sidebarItems={portalItems({ reports, projectSlug: 'disponibilidad', admin: false, tasks: 2 })}
        activeSidebarId={active}
        onSidebarItemClick={(item) => !item.children && setActive(item.id)}
        sidebarFooter={<Footer name="María Rojas" email="maria.rojas@brother.com.pe" lang="es" initials="MR" />}
        sidebarFooterCollapsed={<FooterCollapsed initials="MR" />}
      >
        <Content
          crumbs={['Reportes', 'Disponibilidad', 'Disponibilidad y cobertura']}
          title="Disponibilidad y cobertura"
          subtitle="Qué está disponible, qué se cayó y dónde falta surtido · Brother Perú"
        />
      </Layout>
    );
  },
};

/** Caso 2: tenant omnitok en staging. Trece proyectos, sin logo, usuario admin. */
export const OmnitokStaging: Story = {
  render: () => {
    const [active, setActive] = useState('/projects/gating_executive/dashboard');
    const [project, setProject] = useState(omnitokProjects[0]);
    const [expanded, setExpanded] = useState<string[]>([]);
    return (
      <Layout
        brandHeader={{ brandText: 'Omnitok', label: `${project.label} · Executive Summary` }}
        projectSelector={{ active: project, options: omnitokProjects, onSelect: setProject }}
        sidebarItems={portalItems({ reports: gatingReports, projectSlug: project.id, admin: true, tasks: 3 })}
        activeSidebarId={active}
        onSidebarItemClick={(item) => !item.children && setActive(item.id)}
        sidebarExpandedIds={expanded}
        onSidebarExpandedChange={(id, open) => setExpanded((prev) => (open ? [...prev, id] : prev.filter((x) => x !== id)))}
        sidebarFooter={<Footer name="Pablo Junyent" email="pablo.junyent@pervasivemind.net" lang="es" initials="PJ" />}
        sidebarFooterCollapsed={<FooterCollapsed initials="PJ" />}
      >
        <Content crumbs={['Reportes', project.label, 'Executive Summary']} title="Executive Summary" subtitle="Gating · resumen ejecutivo del período" />
      </Layout>
    );
  },
};

/** Caso 3: tenant HP en producción. Dos proyectos grandes, sin logo, interfaz en inglés. */
export const HpProduction: Story = {
  render: () => {
    const [active, setActive] = useState('/projects/gating_sellers/dashboard');
    const projects: SidebarProjectOption[] = [
      { id: 'gating', label: 'Gating', meta: '8 reports' },
      { id: 'gating-consolidated', label: 'Gating consolidado', meta: '9 reports' },
    ];
    const reports = [...gatingReports, { id: '/projects/gc_overall/dashboard', label: 'Overall consolidated', icon: <BarChart3 size={16} /> }];
    return (
      <Layout
        brandHeader={{ brandText: 'HP', label: 'Gating consolidado · Sellers' }}
        projectSelector={{ active: projects[1], options: projects, caption: 'Project', menuTitle: 'Change project' }}
        sidebarItems={portalItems({ reports, projectSlug: 'gating-consolidated', admin: false, lang: 'en' })}
        activeSidebarId={active}
        onSidebarItemClick={(item) => !item.children && setActive(item.id)}
        sidebarFooter={<Footer name="Arturo C." email="arturo@hp.com" lang="en" initials="AC" />}
        sidebarFooterCollapsed={<FooterCollapsed initials="AC" />}
      >
        <Content crumbs={['Reports', 'Gating consolidado', 'Sellers']} title="Sellers" subtitle="Gating consolidado · authorized and unauthorized sellers" />
      </Layout>
    );
  },
};

/** Caso 4: el sidebar colapsado (64 px), con el selector reducido a la letra del proyecto. */
export const Collapsed: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(true);
    const reports: SidebarItem[] = [
      { id: '/projects/availability/dashboard', label: 'Disponibilidad y cobertura', icon: <LayoutGrid size={16} /> },
      { id: '/projects/pricing_brand/dashboard', label: 'Pricing-Brand', icon: <BarChart3 size={16} /> },
    ];
    return (
      <Layout
        brandHeader={{ brand: <BrotherLogo />, label: 'Disponibilidad · Disponibilidad y cobertura' }}
        projectSelector={{ active: { id: 'disponibilidad', label: 'Disponibilidad' }, options: [{ id: 'disponibilidad', label: 'Disponibilidad' }] }}
        sidebarItems={portalItems({ reports, projectSlug: 'disponibilidad', admin: false, tasks: 2 })}
        activeSidebarId="/projects/availability/dashboard"
        sidebarCollapsed={collapsed}
        onSidebarCollapsedChange={setCollapsed}
        sidebarFooter={<Footer name="María Rojas" email="maria.rojas@brother.com.pe" lang="es" initials="MR" />}
        sidebarFooterCollapsed={<FooterCollapsed initials="MR" />}
      >
        <Content
          crumbs={['Reportes', 'Disponibilidad', 'Disponibilidad y cobertura']}
          title="Disponibilidad y cobertura"
          subtitle="Qué está disponible, qué se cayó y dónde falta surtido · Brother Perú"
        />
      </Layout>
    );
  },
};

/**
 * D14: el tenant tiñe el sidebar, la selección y el header. El host escribe
 * estas variables (desde el tema del tenant, que ya pasó el gate de contraste
 * de tenancy.theming); el kit no conoce al tenant.
 */
export const TenantTint: Story = {
  render: () => {
    const [active, setActive] = useState('/projects/availability/dashboard');
    const reports: SidebarItem[] = [
      { id: '/projects/availability/dashboard', label: 'Disponibilidad y cobertura', icon: <LayoutGrid size={16} /> },
      { id: '/projects/pricing_brand/dashboard', label: 'Pricing-Brand', icon: <BarChart3 size={16} /> },
    ];
    const tint = {
      '--omni-sb-bg': 'linear-gradient(180deg, #12306B 0%, #0B2150 100%)',
      '--omni-sb-accent': '#4FA3FF',
      '--omni-sb-accent-ink': '#9CCBFF',
      '--omni-header-bg': '#0B2150',
    } as React.CSSProperties;
    return (
      <div style={tint}>
        <Layout
          brandHeader={{ brand: <BrotherLogo />, label: 'Disponibilidad · Disponibilidad y cobertura' }}
          projectSelector={{ active: { id: 'disponibilidad', label: 'Disponibilidad' }, options: [{ id: 'disponibilidad', label: 'Disponibilidad' }] }}
          sidebarItems={portalItems({ reports, projectSlug: 'disponibilidad', admin: false, tasks: 2 })}
          activeSidebarId={active}
          onSidebarItemClick={(item) => !item.children && setActive(item.id)}
          sidebarFooter={<Footer name="María Rojas" email="maria.rojas@brother.com.pe" lang="es" initials="MR" />}
          sidebarFooterCollapsed={<FooterCollapsed initials="MR" />}
        >
          <Content
            crumbs={['Reportes', 'Disponibilidad', 'Disponibilidad y cobertura']}
            title="Disponibilidad y cobertura"
            subtitle="Sidebar, selección y header con el tema del tenant"
          />
        </Layout>
      </div>
    );
  },
};
