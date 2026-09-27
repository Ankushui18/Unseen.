import React from 'react';
import { Search, LockKeyhole, ArrowRight, Check, Copy } from 'lucide-react';
import { SideNav } from './SideNav';
import { DocHeader } from './DocHeader';
import { ComponentShowcase } from './ComponentShowcase';
const buttonSizes = [{
  label: 'Small',
  className: 'h-8 px-3 text-xs'
}, {
  label: 'Medium',
  className: 'h-10 px-4 text-sm'
}, {
  label: 'Large',
  className: 'h-12 px-5 text-base'
}];
const badgeColors = [{
  label: 'Blue',
  className: 'bg-blue-50 text-blue-700 ring-blue-600/10'
}, {
  label: 'Gray',
  className: 'bg-slate-100 text-slate-700 ring-slate-500/10'
}, {
  label: 'Green',
  className: 'bg-emerald-50 text-emerald-700 ring-emerald-600/10'
}, {
  label: 'Red',
  className: 'bg-rose-50 text-rose-700 ring-rose-600/10'
}];
interface BaseComponentsLibraryProps {
  onNavigate?: (category: string) => void;
}
export const BaseComponentsLibrary: React.FC<BaseComponentsLibraryProps> = ({
  onNavigate
}) => {
  const [activeCategory, setActiveCategory] = React.useState('Base Components');
  const [notifications, setNotifications] = React.useState(true);
  const [autoSave, setAutoSave] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [unchecked, setUnchecked] = React.useState(false);
  return <div className="flex h-screen min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <SideNav activeCategory={activeCategory} onNavigate={category => {
        setActiveCategory(category);
        onNavigate?.(category);
      }} />
      <div className="flex min-w-0 flex-1 flex-col">
        <DocHeader />
        <main className="min-h-0 flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 lg:px-10">
            <header className="mb-9 border-b border-slate-200 pb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Components / Foundations</p>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Base Components</h1>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">The essential building blocks of AlignDesign. Explore states, sizes, and usage patterns before composing more complex interfaces.</p>
                </div>
                <span className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500">12 primitives</span>
              </div>
            </header>

            <ComponentShowcase title="Buttons" description="Action hierarchy is expressed through color, weight, and scale. Every variant includes a quiet hover transition." codePreview={'<Button variant="primary" size="medium">Continue</Button>'}>
              <div className="w-full space-y-8">
                <div className="overflow-x-auto rounded-lg border border-slate-100">
                  <div className="min-w-[620px] divide-y divide-slate-100">
                    <div className="grid grid-cols-[120px_repeat(3,1fr)] items-center gap-4 bg-slate-50 px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      <span>Variant</span><span>Small</span><span>Medium</span><span>Large</span>
                    </div>
                    <div className="grid grid-cols-[120px_repeat(3,1fr)] items-center gap-4 px-5 py-5">
                      <span className="text-sm font-semibold text-slate-700">Primary</span>
                      {buttonSizes.map(size => <button key={`primary-${size.label}`} className={`${size.className} rounded-lg bg-blue-600 font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-500/20`}><span>Continue</span></button>)}
                    </div>
                    <div className="grid grid-cols-[120px_repeat(3,1fr)] items-center gap-4 px-5 py-5">
                      <span className="text-sm font-semibold text-slate-700">Secondary</span>
                      {buttonSizes.map(size => <button key={`secondary-${size.label}`} className={`${size.className} rounded-lg bg-slate-100 font-semibold text-slate-700 transition-all hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-400/20`}><span>Save draft</span></button>)}
                    </div>
                    <div className="grid grid-cols-[120px_repeat(3,1fr)] items-center gap-4 px-5 py-5">
                      <span className="text-sm font-semibold text-slate-700">Outline</span>
                      {buttonSizes.map(size => <button key={`outline-${size.label}`} className={`${size.className} rounded-lg border border-slate-300 bg-white font-semibold text-slate-700 transition-all hover:border-blue-500 hover:text-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/20`}><span>Learn more</span></button>)}
                    </div>
                    <div className="grid grid-cols-[120px_repeat(3,1fr)] items-center gap-4 px-5 py-5">
                      <span className="text-sm font-semibold text-slate-700">Ghost</span>
                      {buttonSizes.map(size => <button key={`ghost-${size.label}`} className={`${size.className} rounded-lg font-semibold text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-slate-400/20`}><span>Cancel</span></button>)}
                    </div>
                    <div className="grid grid-cols-[120px_repeat(3,1fr)] items-center gap-4 px-5 py-5">
                      <span className="text-sm font-semibold text-slate-700">Icon</span>
                      {buttonSizes.map(size => <button aria-label="Continue" key={`icon-${size.label}`} className={`${size.className} flex items-center justify-center rounded-lg bg-blue-600 font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-500/20`}><ArrowRight size={size.label === 'Small' ? 14 : 17} /></button>)}
                    </div>
                  </div>
                </div>
              </div>
            </ComponentShowcase>

            <ComponentShowcase title="Inputs" description="Inputs provide clear feedback at every point of interaction, from an untouched field to an error or disabled state." codePreview={'<Input label="Email address" state="default" />'}>
              <div className="grid w-full gap-8 md:grid-cols-2">
                <div className="space-y-5">
                  <label className="block"><span className="mb-2 block text-xs font-semibold text-slate-700">Text · Default</span><input type="text" placeholder="Enter your name" className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" /></label>
                  <label className="block"><span className="mb-2 block text-xs font-semibold text-slate-700">Password · Focus</span><div className="relative"><LockKeyhole size={16} className="absolute left-3 top-3 text-slate-400" /><input type="password" value="password" readOnly aria-label="Password focus state" className="h-10 w-full rounded-lg border border-blue-500 bg-white pl-9 pr-3 text-sm text-slate-800 outline-none ring-4 ring-blue-500/10" /></div></label>
                </div>
                <div className="space-y-5">
                  <label className="block"><span className="mb-2 block text-xs font-semibold text-slate-700">Search · Error</span><div className="relative"><Search size={16} className="absolute left-3 top-3 text-rose-400" /><input type="search" value="unknown query" readOnly aria-label="Search error state" className="h-10 w-full rounded-lg border border-rose-400 bg-white pl-9 pr-3 text-sm text-slate-800 outline-none ring-4 ring-rose-500/10" /></div><span className="mt-1.5 block text-xs text-rose-600">No matching results found.</span></label>
                  <label className="block"><span className="mb-2 block text-xs font-semibold text-slate-400">Text · Disabled</span><input type="text" disabled placeholder="Unavailable field" className="h-10 w-full cursor-not-allowed rounded-lg border border-slate-200 bg-slate-100 px-3 text-sm placeholder:text-slate-400" /></label>
                </div>
              </div>
            </ComponentShowcase>

            <ComponentShowcase title="Badges" description="Compact status labels use restrained color to support scanning without competing with primary content." codePreview={'<Badge tone="blue" shape="pill">In progress</Badge>'}>
              <div className="w-full space-y-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="w-16 text-xs font-bold uppercase tracking-wider text-slate-400">Pill</span>
                  {badgeColors.map(color => <span key={`pill-${color.label}`} className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${color.className}`}>{color.label}</span>)}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="w-16 text-xs font-bold uppercase tracking-wider text-slate-400">Square</span>
                  {badgeColors.map(color => <span key={`square-${color.label}`} className={`rounded-md px-3 py-1 text-xs font-semibold ring-1 ring-inset ${color.className}`}>{color.label}</span>)}
                </div>
              </div>
            </ComponentShowcase>

            <ComponentShowcase title="Toggles & Checkboxes" description="Use switches for immediate settings and checkboxes for selections that can be reviewed before submission." codePreview={'<Switch checked={enabled} onCheckedChange={setEnabled} />'}>
              <div className="grid w-full gap-6 md:grid-cols-2">
                <div className="space-y-1 rounded-lg border border-slate-100 bg-slate-50/60 p-5">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Switches</p>
                  <button type="button" role="switch" aria-checked={notifications} onClick={() => setNotifications(!notifications)} className="flex w-full items-center justify-between py-2 text-left"><span><strong className="block text-sm font-semibold text-slate-800">Notifications</strong><span className="text-xs text-slate-500">Receive product updates</span></span><span className={`flex h-6 w-11 items-center rounded-full p-1 transition-colors ${notifications ? 'bg-blue-600 justify-end' : 'bg-slate-300 justify-start'}`}><span className="h-4 w-4 rounded-full bg-white shadow-sm" /></span></button>
                  <button type="button" role="switch" aria-checked={autoSave} onClick={() => setAutoSave(!autoSave)} className="flex w-full items-center justify-between py-2 text-left"><span><strong className="block text-sm font-semibold text-slate-800">Auto-save</strong><span className="text-xs text-slate-500">Keep work synced automatically</span></span><span className={`flex h-6 w-11 items-center rounded-full p-1 transition-colors ${autoSave ? 'bg-blue-600 justify-end' : 'bg-slate-300 justify-start'}`}><span className="h-4 w-4 rounded-full bg-white shadow-sm" /></span></button>
                </div>
                <div className="space-y-4 rounded-lg border border-slate-100 bg-slate-50/60 p-5">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Checkboxes</p>
                  <label className="flex cursor-pointer items-center gap-3"><input type="checkbox" checked={checked} onChange={event => setChecked(event.target.checked)} className="h-4 w-4 accent-blue-600" /><span className="text-sm font-medium text-slate-700">I agree to the terms</span></label>
                  <label className="flex cursor-pointer items-center gap-3"><input type="checkbox" checked={unchecked} onChange={event => setUnchecked(event.target.checked)} className="h-4 w-4 accent-blue-600" /><span className="text-sm font-medium text-slate-700">Remember this device</span></label>
                  <label className="flex cursor-not-allowed items-center gap-3 text-slate-400"><input type="checkbox" disabled className="h-4 w-4" /><span className="text-sm font-medium">Disabled option</span></label>
                  {checked && <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600"><Check size={14} /> Selection confirmed</span>}
                </div>
              </div>
            </ComponentShowcase>

            <div className="flex items-center justify-between border-t border-slate-200 py-6 text-xs text-slate-400"><span>AlignDesign System · v2.4.0</span><button className="flex items-center gap-1.5 font-medium text-slate-500 hover:text-blue-600"><Copy size={13} /><span>Copy page link</span></button></div>
          </div>
        </main>
      </div>
    </div>;
};
