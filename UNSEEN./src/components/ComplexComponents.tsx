import * as React from 'react';
import { ArrowDown, ArrowUp, Check, ChevronRight, FileSearch, Filter, MoreHorizontal, Plus, Search, SlidersHorizontal, X } from 'lucide-react';
import { ComponentShowcase } from './ComponentShowcase';
import { DocHeader } from './DocHeader';
import { SideNav } from './SideNav';
type SortKey = 'name' | 'role' | 'joined';
type Status = 'Active' | 'Invited' | 'Paused';
interface Member {
  id: string;
  initials: string;
  name: string;
  email: string;
  role: string;
  status: Status;
  joined: string;
  color: string;
}
const members: Member[] = [{
  id: 'm-01',
  initials: 'SK',
  name: 'Sarah Kim',
  email: 'sarah@northstar.io',
  role: 'Product designer',
  status: 'Active',
  joined: 'Mar 12, 2024',
  color: 'bg-violet-100 text-violet-700'
}, {
  id: 'm-02',
  initials: 'JM',
  name: 'Jordan Miller',
  email: 'jordan@northstar.io',
  role: 'Engineer',
  status: 'Active',
  joined: 'Mar 08, 2024',
  color: 'bg-blue-100 text-blue-700'
}, {
  id: 'm-03',
  initials: 'AC',
  name: 'Alex Chen',
  email: 'alex@northstar.io',
  role: 'Researcher',
  status: 'Invited',
  joined: 'Feb 27, 2024',
  color: 'bg-amber-100 text-amber-700'
}, {
  id: 'm-04',
  initials: 'LW',
  name: 'Lena Wilson',
  email: 'lena@northstar.io',
  role: 'Product manager',
  status: 'Paused',
  joined: 'Feb 14, 2024',
  color: 'bg-emerald-100 text-emerald-700'
}];
const verticalTabs = ['Overview', 'Activity', 'Members', 'Settings'];
const horizontalTabs = ['All components', 'Foundations', 'Patterns'];
const statusStyles: Record<Status, string> = {
  Active: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  Invited: 'bg-blue-50 text-blue-700 ring-blue-600/20',
  Paused: 'bg-slate-100 text-slate-600 ring-slate-500/20'
};
interface ComplexComponentsProps {
  onNavigate?: (category: string) => void;
}
export const ComplexComponents: React.FC<ComplexComponentsProps> = ({
  onNavigate
}) => {
  const [sortKey, setSortKey] = React.useState<SortKey>('name');
  const [sortAscending, setSortAscending] = React.useState(true);
  const [selected, setSelected] = React.useState<string[]>(['m-01']);
  const [verticalActive, setVerticalActive] = React.useState('Members');
  const [horizontalActive, setHorizontalActive] = React.useState('All components');
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const sortedMembers = [...members].sort((a, b) => {
    const left = sortKey === 'name' ? a.name : sortKey === 'role' ? a.role : a.joined;
    const right = sortKey === 'name' ? b.name : sortKey === 'role' ? b.role : b.joined;
    return (left.localeCompare(right) || 0) * (sortAscending ? 1 : -1);
  });
  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAscending(current => !current);else {
      setSortKey(key);
      setSortAscending(true);
    }
  };
  const toggleSelected = (id: string) => {
    setSelected(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  };
  const toggleAll = () => {
    setSelected(selected.length === members.length ? [] : members.map(member => member.id));
  };
  const sortIcon = (key: SortKey) => sortKey === key ? sortAscending ? <ArrowUp size={13} /> : <ArrowDown size={13} /> : <ArrowDown size={13} className="opacity-30" />;
  return <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <div className="hidden lg:block shrink-0"><SideNav activeCategory="Complex Components" onNavigate={onNavigate} /></div>
        <div className="min-w-0 flex-1">
          <DocHeader />
          <main className="mx-auto max-w-[1380px] px-5 py-8 sm:px-8 lg:px-10">
            <header className="mb-8 flex flex-col gap-3 border-b border-slate-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Components / Patterns</p>
                <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Complex Components</h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Composed patterns for dense product workflows, built from simple, dependable atoms.</p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />v2.4.0 · Stable</span>
            </header>

            <ComponentShowcase title="Data Table" description="A sortable, selectable table with clear status communication and compact row actions." codePreview={'<DataTable selectable sortable />'}>
              <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-white text-left shadow-sm">
                <div className="flex flex-col gap-3 border-b border-slate-200 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2"><div className="relative"><Search size={14} className="absolute left-2.5 top-2.5 text-slate-400" /><input aria-label="Search members" placeholder="Search members" className="h-9 w-48 rounded-md border border-slate-200 bg-slate-50 pl-8 pr-3 text-xs outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></div><button className="inline-flex h-9 items-center gap-1.5 rounded-md border border-slate-200 px-2.5 text-xs font-medium text-slate-600 hover:bg-slate-50"><Filter size={14} /><span>Filter</span></button></div>
                  <div className="flex items-center gap-3"><span className="text-xs text-slate-400">{selected.length} selected</span><button className="inline-flex h-9 items-center gap-1.5 rounded-md bg-blue-600 px-3 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"><Plus size={14} /><span>Invite member</span></button></div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] text-xs">
                    <thead className="bg-slate-50 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-500"><tr><th className="w-12 px-4 py-3"><input aria-label="Select all members" type="checkbox" checked={selected.length === members.length} onChange={toggleAll} className="accent-blue-600" /></th><th className="px-3 py-3"><button onClick={() => toggleSort('name')} className="inline-flex items-center gap-1 hover:text-slate-900"><span>Name</span>{sortIcon('name')}</button></th><th className="px-3 py-3"><button onClick={() => toggleSort('role')} className="inline-flex items-center gap-1 hover:text-slate-900"><span>Role</span>{sortIcon('role')}</button></th><th className="px-3 py-3"><span>Status</span></th><th className="px-3 py-3"><button onClick={() => toggleSort('joined')} className="inline-flex items-center gap-1 hover:text-slate-900"><span>Joined</span>{sortIcon('joined')}</button></th><th className="px-4 py-3 text-right"><span>Actions</span></th></tr></thead>
                    <tbody className="divide-y divide-slate-100">{sortedMembers.map(member => <tr key={member.id} className="transition-colors hover:bg-slate-50"><td className="px-4 py-3.5"><input aria-label={`Select ${member.name}`} type="checkbox" checked={selected.includes(member.id)} onChange={() => toggleSelected(member.id)} className="accent-blue-600" /></td><td className="px-3 py-3.5"><div className="flex items-center gap-3"><span className={`flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold ${member.color}`}>{member.initials}</span><span><strong className="block font-semibold text-slate-800">{member.name}</strong><span className="mt-0.5 block text-[11px] text-slate-400">{member.email}</span></span></div></td><td className="px-3 py-3.5 text-slate-600">{member.role}</td><td className="px-3 py-3.5"><span className={`inline-flex rounded-full px-2 py-1 text-[10px] font-semibold ring-1 ring-inset ${statusStyles[member.status]}`}>{member.status}</span></td><td className="px-3 py-3.5 text-slate-500">{member.joined}</td><td className="px-4 py-3.5 text-right"><button aria-label={`More actions for ${member.name}`} className="rounded p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"><MoreHorizontal size={16} /></button></td></tr>)}</tbody>
                  </table>
                </div>
                <footer className="flex items-center justify-between border-t border-slate-200 px-4 py-3 text-xs text-slate-500"><span>Showing 1–4 of 24 members</span><button className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700"><span>View all members</span><ChevronRight size={14} /></button></footer>
              </div>
            </ComponentShowcase>

            <div className="grid gap-8 xl:grid-cols-2">
              <ComponentShowcase title="Modals & Dialogs" description="Keep decisions focused with a clear confirmation hierarchy and reversible actions." codePreview={'<ConfirmDialog open />'}>
                <div className="flex w-full items-center justify-center rounded-lg bg-slate-100 p-8"><div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 text-left shadow-lg"><div className="mb-4 flex items-start justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600"><X size={18} /></div><button aria-label="Close dialog preview" className="rounded-md p-1 text-slate-400 hover:bg-slate-100"><X size={16} /></button></div><h3 className="text-base font-bold text-slate-900">Remove workspace member?</h3><p className="mt-1.5 text-xs leading-5 text-slate-500">This will revoke access for Alex Chen. They can be invited again later.</p><div className="mt-5 flex justify-end gap-2"><button className="rounded-md border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"><span>Cancel</span></button><button className="rounded-md bg-red-600 px-3 py-2 text-xs font-semibold text-white hover:bg-red-700"><span>Remove member</span></button></div></div></div>
              </ComponentShowcase>

              <ComponentShowcase title="Navigation" description="Orient users across related views with vertical and horizontal tab patterns." codePreview={'<Tabs orientation="vertical" />'}>
                <div className="w-full space-y-7 text-left"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">Horizontal tabs</p><nav className="flex gap-5 border-b border-slate-200" aria-label="Component categories">{horizontalTabs.map(tab => <button key={tab} onClick={() => setHorizontalActive(tab)} className={`border-b-2 px-1 pb-2.5 text-xs font-semibold transition-colors ${horizontalActive === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}><span>{tab}</span></button>)}</nav></div><div className="flex gap-8"><nav className="w-32 shrink-0 space-y-1 border-r border-slate-200 pr-4" aria-label="Settings sections">{verticalTabs.map(tab => <button key={tab} onClick={() => setVerticalActive(tab)} className={`flex w-full items-center justify-between rounded-md px-2.5 py-2 text-left text-xs font-medium ${verticalActive === tab ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'}`}><span>{tab}</span>{verticalActive === tab && <ChevronRight size={13} />}</button>)}</nav><div className="pt-1"><p className="text-sm font-semibold text-slate-800">{verticalActive}</p><p className="mt-1 text-xs leading-5 text-slate-500">Manage your workspace preferences and access.</p></div></div></div>
              </ComponentShowcase>
            </div>

            <ComponentShowcase title="Empty States" description="A purposeful resting state that explains what happened and gives users a clear next step." codePreview={'<EmptyState type="no-results" />'}>
              <div className="flex w-full items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50/70 px-6 py-10"><div className="max-w-xs text-center"><div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm ring-1 ring-slate-200"><FileSearch size={23} /></div><h3 className="text-sm font-bold text-slate-800">No results found</h3><p className="mt-1.5 text-xs leading-5 text-slate-500">We couldn't find anything matching “quarterly review”. Try a different search or clear your filters.</p><div className="mt-4 flex justify-center gap-2"><button className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm hover:bg-slate-50"><span>Clear filters</span></button><button className="rounded-md bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"><span>Browse all</span></button></div></div></div>
            </ComponentShowcase>

            <section className="rounded-xl border border-slate-200 bg-slate-900 p-5 text-white shadow-sm"><div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">Side drawer preview</p><h2 className="mt-1 text-lg font-bold">Inspect detail without losing context</h2><p className="mt-1 text-xs text-slate-400">A larger drawer keeps supporting actions close to the parent view.</p></div><button onClick={() => setDrawerOpen(open => !open)} className="inline-flex w-fit items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-blue-50"><SlidersHorizontal size={14} /><span>{drawerOpen ? 'Hide drawer' : 'Show drawer'}</span></button></div>{drawerOpen && <div className="mt-5 rounded-lg border border-slate-700 bg-slate-800 p-5"><div className="flex items-start justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Member details</p><h3 className="mt-1 text-base font-bold">Sarah Kim</h3></div><button aria-label="Close side drawer" onClick={() => setDrawerOpen(false)} className="rounded-md p-1.5 text-slate-400 hover:bg-slate-700 hover:text-white"><X size={16} /></button></div><div className="mt-5 grid gap-4 border-y border-slate-700 py-4 sm:grid-cols-3"><div><p className="text-[10px] text-slate-500">Role</p><p className="mt-1 text-xs font-medium text-slate-200">Product designer</p></div><div><p className="text-[10px] text-slate-500">Status</p><p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-emerald-300"><Check size={12} /><span>Active</span></p></div><div><p className="text-[10px] text-slate-500">Last active</p><p className="mt-1 text-xs font-medium text-slate-200">Today, 9:42 AM</p></div></div><div className="mt-4 flex items-center justify-between"><button className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white"><span>View activity</span><ChevronRight size={13} /></button><button className="rounded-md bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-500"><span>Edit member</span></button></div></div>}</section>
          </main>
        </div>
      </div>
    </div>;
};
