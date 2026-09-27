import React from 'react';
import { Ruler, Sparkles } from 'lucide-react';
import { DocHeader } from './DocHeader';
import { SideNav } from './SideNav';
import { TokenCard } from './TokenCard';
interface ColorToken {
  name: string;
  hex: string;
  token: string;
  description: string;
}
interface TypeToken {
  label: string;
  sample: string;
  size: string;
  weight: string;
  leading: string;
  className: string;
}
interface ShadowToken {
  name: string;
  value: string;
  description: string;
  className: string;
}
const neutralTokens: ColorToken[] = [{
  name: 'Neutral 50',
  hex: '#F8FAFC',
  token: '--color-neutral-50',
  description: 'Subtle surface'
}, {
  name: 'Neutral 100',
  hex: '#F1F5F9',
  token: '--color-neutral-100',
  description: 'Muted surface'
}, {
  name: 'Neutral 300',
  hex: '#CBD5E1',
  token: '--color-neutral-300',
  description: 'Soft border'
}, {
  name: 'Neutral 500',
  hex: '#64748B',
  token: '--color-neutral-500',
  description: 'Secondary text'
}, {
  name: 'Neutral 700',
  hex: '#334155',
  token: '--color-neutral-700',
  description: 'Strong text'
}, {
  name: 'Neutral 900',
  hex: '#0F172A',
  token: '--color-neutral-900',
  description: 'Primary text'
}];
const primaryTokens: ColorToken[] = [{
  name: 'Primary 50',
  hex: '#EFF6FF',
  token: '--color-primary-50',
  description: 'Tinted surface'
}, {
  name: 'Primary 100',
  hex: '#DBEAFE',
  token: '--color-primary-100',
  description: 'Soft highlight'
}, {
  name: 'Primary 500',
  hex: '#3B82F6',
  token: '--color-primary-500',
  description: 'Default action'
}, {
  name: 'Primary 600',
  hex: '#2563EB',
  token: '--color-primary-600',
  description: 'Interactive state'
}, {
  name: 'Primary 700',
  hex: '#1D4ED8',
  token: '--color-primary-700',
  description: 'Pressed state'
}];
const successTokens: ColorToken[] = [{
  name: 'Success 50',
  hex: '#F0FDF4',
  token: '--color-success-50',
  description: 'Positive surface'
}, {
  name: 'Success 100',
  hex: '#DCFCE7',
  token: '--color-success-100',
  description: 'Positive tint'
}, {
  name: 'Success 500',
  hex: '#22C55E',
  token: '--color-success-500',
  description: 'Positive action'
}, {
  name: 'Success 700',
  hex: '#15803D',
  token: '--color-success-700',
  description: 'Positive text'
}];
const errorTokens: ColorToken[] = [{
  name: 'Error 50',
  hex: '#FEF2F2',
  token: '--color-error-50',
  description: 'Critical surface'
}, {
  name: 'Error 100',
  hex: '#FEE2E2',
  token: '--color-error-100',
  description: 'Critical tint'
}, {
  name: 'Error 500',
  hex: '#EF4444',
  token: '--color-error-500',
  description: 'Critical action'
}, {
  name: 'Error 700',
  hex: '#B91C1C',
  token: '--color-error-700',
  description: 'Critical text'
}];
const typographyTokens: TypeToken[] = [{
  label: 'H1',
  sample: 'Design with intention.',
  size: '48px',
  weight: '700 / Bold',
  leading: '56px',
  className: 'text-4xl sm:text-5xl font-bold tracking-[-0.04em]'
}, {
  label: 'H2',
  sample: 'A clear visual language.',
  size: '36px',
  weight: '700 / Bold',
  leading: '44px',
  className: 'text-3xl sm:text-4xl font-bold tracking-[-0.035em]'
}, {
  label: 'H3',
  sample: 'Foundations first.',
  size: '28px',
  weight: '600 / Semibold',
  leading: '36px',
  className: 'text-2xl sm:text-3xl font-semibold tracking-[-0.025em]'
}, {
  label: 'Body',
  sample: 'Build consistent experiences with a small set of thoughtful primitives.',
  size: '16px',
  weight: '400 / Regular',
  leading: '24px',
  className: 'text-base font-normal leading-6'
}, {
  label: 'Label',
  sample: 'COMPONENT LABEL',
  size: '12px',
  weight: '600 / Semibold',
  leading: '16px',
  className: 'text-xs font-semibold uppercase tracking-[0.12em]'
}, {
  label: 'Caption',
  sample: 'Supporting detail and metadata.',
  size: '12px',
  weight: '400 / Regular',
  leading: '16px',
  className: 'text-xs font-normal leading-4'
}];
const shadowTokens: ShadowToken[] = [{
  name: 'shadow-sm',
  value: '0 1px 2px rgba(15, 23, 42, .06)',
  description: 'Quiet separation',
  className: 'shadow-sm'
}, {
  name: 'shadow-md',
  value: '0 4px 8px rgba(15, 23, 42, .08)',
  description: 'Raised control',
  className: 'shadow-md'
}, {
  name: 'shadow-lg',
  value: '0 12px 24px rgba(15, 23, 42, .10)',
  description: 'Floating surface',
  className: 'shadow-lg'
}, {
  name: 'shadow-xl',
  value: '0 24px 48px rgba(15, 23, 42, .14)',
  description: 'Prominent overlay',
  className: 'shadow-xl'
}];
const TokenGroup = ({
  title,
  tokens
}: {
  title: string;
  tokens: ColorToken[];
}) => <section aria-labelledby={`${title.toLowerCase()}-tokens`} className="space-y-4">
    <div className="flex items-baseline justify-between gap-4">
      <h3 id={`${title.toLowerCase()}-tokens`} className="text-base font-semibold text-slate-900">{title}</h3>
      <span className="text-xs font-mono text-slate-400">{tokens.length} tokens</span>
    </div>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {tokens.map(token => <TokenCard key={token.token} name={token.name} hex={token.hex} token={token.token} description={token.description} />)}
    </div>
  </section>;
interface FoundationsTokensProps {
  onNavigate?: (category: string) => void;
}
export const FoundationsTokens: React.FC<FoundationsTokensProps> = ({
  onNavigate
}) => {
  return <div className="min-h-screen bg-white text-slate-900">
      <DocHeader />
      <div className="flex min-h-[calc(100vh-4rem)]">
        <SideNav activeCategory="Foundations" onNavigate={onNavigate} />
        <main className="min-w-0 flex-1 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
            <header className="max-w-3xl border-b border-slate-200 pb-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                <Sparkles size={14} aria-hidden="true" />
                <span>Foundations</span>
              </div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">Foundations &amp; Tokens</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">The core visual variables behind AlignDesign. Use these primitives to create interfaces that feel considered, consistent, and unmistakably ours.</p>
            </header>

            <section aria-labelledby="colors-heading" className="scroll-mt-24 border-b border-slate-200 py-12 sm:py-16">
              <div className="mb-8 max-w-2xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">01 / Color</p>
                <h2 id="colors-heading" className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Colors</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">A restrained palette of functional neutrals and confident semantic accents.</p>
              </div>
              <div className="space-y-10">
                <TokenGroup title="Neutral" tokens={neutralTokens} />
                <TokenGroup title="Primary" tokens={primaryTokens} />
                <TokenGroup title="Success" tokens={successTokens} />
                <TokenGroup title="Error" tokens={errorTokens} />
              </div>
            </section>

            <section aria-labelledby="typography-heading" className="scroll-mt-24 border-b border-slate-200 py-12 sm:py-16">
              <div className="mb-8 max-w-2xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">02 / Type</p>
                <h2 id="typography-heading" className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Typography</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">A compact, high-contrast scale designed for hierarchy without visual noise.</p>
              </div>
              <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
                {typographyTokens.map(type => <article key={type.label} className="grid gap-5 px-5 py-6 sm:grid-cols-[6rem_1fr_10rem] sm:items-center sm:px-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-600">{type.label}</p>
                    <p className={`${type.className} text-slate-900`}>{type.sample}</p>
                    <dl className="grid grid-cols-3 gap-3 text-xs text-slate-500 sm:block sm:space-y-1">
                      <div><dt className="font-medium text-slate-400">Size</dt><dd className="font-mono text-slate-700">{type.size}</dd></div>
                      <div><dt className="font-medium text-slate-400">Weight</dt><dd className="font-mono text-slate-700">{type.weight}</dd></div>
                      <div><dt className="font-medium text-slate-400">Leading</dt><dd className="font-mono text-slate-700">{type.leading}</dd></div>
                    </dl>
                  </article>)}
              </div>
            </section>

            <section aria-labelledby="shadows-heading" className="scroll-mt-24 border-b border-slate-200 py-12 sm:py-16">
              <div className="mb-8 max-w-2xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">03 / Elevation</p>
                <h2 id="shadows-heading" className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Shadows</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">Soft, layered elevations that establish depth while keeping the interface light.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {shadowTokens.map(shadow => <article key={shadow.name} className={`${shadow.className} flex min-h-36 flex-col justify-between rounded-xl border border-slate-100 bg-white p-5`}>
                    <div><h3 className="font-mono text-sm font-semibold text-slate-900">{shadow.name}</h3><p className="mt-1 text-sm text-slate-500">{shadow.description}</p></div>
                    <code className="mt-8 block break-words text-[11px] leading-4 text-slate-400">{shadow.value}</code>
                  </article>)}
              </div>
            </section>

            <section aria-labelledby="grid-heading" className="scroll-mt-24 py-12 sm:py-16">
              <div className="mb-8 max-w-2xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">04 / Rhythm</p>
                <h2 id="grid-heading" className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Grid</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">Our spacing system is built on an 8pt grid. Aligning to this rhythm keeps layouts calm and easy to scan.</p>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-8">
                <div className="flex flex-wrap items-end gap-2 sm:gap-3" aria-label="8pt spacing scale illustration">
                  {[8, 16, 24, 32, 40, 48, 64].map(size => <div key={size} className="flex flex-col items-center gap-3">
                      <div className="w-8 rounded-sm bg-blue-500" style={{
                    height: `${Math.max(size, 8)}px`
                  }} aria-hidden="true" />
                      <span className="font-mono text-xs text-slate-500">{size}pt</span>
                    </div>)}
                  <div className="ml-auto hidden items-center gap-2 self-center text-sm text-slate-500 sm:flex"><Ruler size={16} className="text-blue-500" aria-hidden="true" /><span>Consistent by design</span></div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>;
};
