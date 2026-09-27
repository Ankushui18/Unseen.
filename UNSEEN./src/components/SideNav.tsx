import React from 'react';
import { LayoutDashboard, Palette, Layers, Component, BookOpen, ExternalLink, GitFork as Github } from 'lucide-react';
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}
const NavItem = ({
  icon,
  label,
  active,
  onClick
}: NavItemProps) => <button onClick={onClick} className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${active ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}>
    <span className={`${active ? 'text-blue-600' : 'text-slate-400'}`}>
      {icon}
    </span>
    {label}
  </button>;
interface NavSectionProps {
  title: string;
  children: React.ReactNode;
}
const NavSection = ({
  title,
  children
}: NavSectionProps) => <div className="mb-6">
    <h3 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
      {title}
    </h3>
    <div className="space-y-1">
      {children}
    </div>
  </div>;
export interface SideNavProps {
  activeCategory?: string;
  onNavigate?: (category: string) => void;
}
export const SideNav: React.FC<SideNavProps> = ({
  activeCategory,
  onNavigate
}) => {
  return <aside className="w-64 border-r border-slate-200 h-screen bg-white flex flex-col overflow-y-auto sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Layers className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">AlignDesign</span>
        </div>

        <NavSection title="Introduction">
          <NavItem icon={<BookOpen size={18} />} label="Getting Started" active={activeCategory === 'Getting Started'} onClick={() => onNavigate?.('Getting Started')} />
        </NavSection>

        <NavSection title="Foundations">
          <NavItem icon={<Palette size={18} />} label="Foundations" active={activeCategory === 'Foundations'} onClick={() => onNavigate?.('Foundations')} />
        </NavSection>

        <NavSection title="Components">
          <NavItem icon={<Component size={18} />} label="Base Components" active={activeCategory === 'Base Components'} onClick={() => onNavigate?.('Base Components')} />
          <NavItem icon={<Layers size={18} />} label="Complex Components" active={activeCategory === 'Complex Components'} onClick={() => onNavigate?.('Complex Components')} />
        </NavSection>

        <NavSection title="Showcase">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard Example" active={activeCategory === 'Dashboard'} onClick={() => onNavigate?.('Dashboard')} />
        </NavSection>
      </div>

      <div className="mt-auto p-4 border-t border-slate-100">
        <div className="space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
            <Github size={16} />
            <span>View GitHub</span>
            <ExternalLink size={12} className="ml-auto" />
          </a>
        </div>
      </div>
    </aside>;
};
