import React from 'react';
import { ArrowUpRight, CalendarDays, Check, ChevronRight, Clock3, FolderKanban, MoreHorizontal, UserPlus, Users } from 'lucide-react';
import { SideNav } from './SideNav';
import { DocHeader } from './DocHeader';
type Metric = {
  label: string;
  value: string;
  change: string;
  note: string;
  color: string;
  icon: React.ReactNode;
  points: string;
};
type Activity = {
  person: string;
  initials: string;
  tone: string;
  action: string;
  detail: string;
  time: string;
};
type Employee = {
  name: string;
  role: string;
  initials: string;
  tone: string;
  status: string;
  statusTone: string;
};
const metrics: Metric[] = [{
  label: 'Total Employees',
  value: '1,284',
  change: '+8.2%',
  note: 'vs. last month',
  color: '#2563eb',
  icon: <Users size={18} />,
  points: '0,30 18,26 36,28 54,18 72,21 90,13 108,16 126,7 144,10 162,3'
}, {
  label: 'Leave Requests',
  value: '24',
  change: '+3.1%',
  note: 'vs. last month',
  color: '#d97706',
  icon: <CalendarDays size={18} />,
  points: '0,13 18,20 36,18 54,25 72,17 90,21 108,10 126,15 144,6 162,10'
}, {
  label: 'New Hires',
  value: '38',
  change: '+12.5%',
  note: 'vs. last month',
  color: '#059669',
  icon: <UserPlus size={18} />,
  points: '0,30 18,28 36,23 54,25 72,17 90,20 108,12 126,15 144,7 162,4'
}, {
  label: 'Active Projects',
  value: '16',
  change: '+4.6%',
  note: 'vs. last month',
  color: '#7c3aed',
  icon: <FolderKanban size={18} />,
  points: '0,25 18,26 36,19 54,22 72,15 90,17 108,12 126,15 144,7 162,10'
}];
const activities: Activity[] = [{
  person: 'Olivia Rhye',
  initials: 'OR',
  tone: 'bg-blue-100 text-blue-700',
  action: 'approved a leave request',
  detail: 'for Jordan Lee',
  time: '12 min ago'
}, {
  person: 'Phoenix Baker',
  initials: 'PB',
  tone: 'bg-amber-100 text-amber-700',
  action: 'completed onboarding',
  detail: 'for the Design team',
  time: '46 min ago'
}, {
  person: 'Lana Steiner',
  initials: 'LS',
  tone: 'bg-emerald-100 text-emerald-700',
  action: 'added a new employee',
  detail: 'Maya Patel · Product',
  time: '2 hours ago'
}, {
  person: 'Demi Wilkinson',
  initials: 'DW',
  tone: 'bg-violet-100 text-violet-700',
  action: 'updated a project',
  detail: 'People Operations Q3',
  time: 'Yesterday'
}];
const employees: Employee[] = [{
  name: 'Maya Patel',
  role: 'Product Designer',
  initials: 'MP',
  tone: 'bg-pink-100 text-pink-700',
  status: 'Active',
  statusTone: 'bg-emerald-50 text-emerald-700'
}, {
  name: 'Jordan Lee',
  role: 'Engineering Lead',
  initials: 'JL',
  tone: 'bg-sky-100 text-sky-700',
  status: 'On leave',
  statusTone: 'bg-amber-50 text-amber-700'
}, {
  name: 'Sarah Chen',
  role: 'People Partner',
  initials: 'SC',
  tone: 'bg-indigo-100 text-indigo-700',
  status: 'Active',
  statusTone: 'bg-emerald-50 text-emerald-700'
}, {
  name: 'Ethan Brooks',
  role: 'Product Manager',
  initials: 'EB',
  tone: 'bg-orange-100 text-orange-700',
  status: 'Remote',
  statusTone: 'bg-blue-50 text-blue-700'
}];
const calendarDays = [{
  day: 'M',
  date: '12'
}, {
  day: 'T',
  date: '13'
}, {
  day: 'W',
  date: '14'
}, {
  day: 'T',
  date: '15'
}, {
  day: 'F',
  date: '16'
}];
interface HRDashboardProps {
  onNavigate?: (category: string) => void;
}
export const HRDashboard: React.FC<HRDashboardProps> = ({
  onNavigate
}) => {
  return <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <SideNav activeCategory="Dashboard" onNavigate={onNavigate ?? (() => undefined)} />
        <div className="min-w-0 flex-1">
          <DocHeader />
          <main className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 lg:px-10">
            <header className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-sm font-medium text-blue-600">Tuesday, September 12, 2023</p>
                <h1 className="text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">Good morning, Alex</h1>
                <p className="mt-2 text-sm text-slate-500">Here’s what’s happening across your workplace today.</p>
              </div>
              <button type="button" className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100">
                <UserPlus size={17} />
                <span>Add employee</span>
              </button>
            </header>

            <section aria-labelledby="overview-heading">
              <div className="mb-4 flex items-center justify-between">
                <h2 id="overview-heading" className="text-base font-semibold text-slate-900">Overview</h2>
                <button type="button" className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-blue-600">This month <ChevronRight size={15} /></button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map(metric => <article key={metric.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-start justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{
                    color: metric.color,
                    backgroundColor: `${metric.color}14`
                  }}>{metric.icon}</div>
                      <button type="button" aria-label={`More options for ${metric.label}`} className="text-slate-400 hover:text-slate-700"><MoreHorizontal size={18} /></button>
                    </div>
                    <p className="mt-4 text-sm font-medium text-slate-500">{metric.label}</p>
                    <div className="mt-1 flex items-end justify-between gap-2">
                      <strong className="text-2xl font-bold tracking-tight text-slate-950">{metric.value}</strong>
                      <div className="mb-1 flex items-center gap-1 text-xs font-semibold text-emerald-600"><ArrowUpRight size={14} />{metric.change}</div>
                    </div>
                    <div className="mt-4 flex items-end justify-between gap-3">
                      <span className="whitespace-nowrap text-xs text-slate-400">{metric.note}</span>
                      <svg aria-label={`${metric.label} trend`} role="img" viewBox="0 0 162 34" className="h-9 w-28 overflow-visible">
                        <polyline points={metric.points} fill="none" stroke={metric.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </article>)}
              </div>
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
              <article className="rounded-xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                  <div><h2 className="text-base font-semibold text-slate-900">Recent activity</h2><p className="mt-1 text-sm text-slate-500">Stay up to date with your team.</p></div>
                  <button type="button" className="text-sm font-semibold text-blue-600 hover:text-blue-700">View all</button>
                </div>
                <ol className="px-6 py-2">
                  {activities.map(activity => <li key={`${activity.person}-${activity.time}`} className="flex gap-4 border-b border-slate-100 py-4 last:border-0">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${activity.tone}`}>{activity.initials}</div>
                      <div className="min-w-0 flex-1"><p className="text-sm leading-5 text-slate-700"><strong className="font-semibold text-slate-900">{activity.person}</strong> {activity.action}</p><p className="mt-0.5 text-sm text-slate-500">{activity.detail}</p></div>
                      <time className="shrink-0 pt-0.5 text-xs text-slate-400">{activity.time}</time>
                    </li>)}
                </ol>
              </article>

              <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
                <div className="flex items-start justify-between"><div><h2 className="text-base font-semibold text-slate-900">Upcoming events</h2><p className="mt-1 text-sm text-slate-500">Your schedule this week.</p></div><button type="button" aria-label="Open calendar" className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"><CalendarDays size={18} /></button></div>
                <div className="mt-5 grid grid-cols-5 gap-2 border-b border-slate-100 pb-5">
                  {calendarDays.map(item => <button type="button" key={item.date} className={`rounded-lg py-2 text-center ${item.date === '14' ? 'bg-blue-600 text-white shadow-sm shadow-blue-200' : 'text-slate-500 hover:bg-slate-50'}`}><span className="block text-[11px] font-medium uppercase">{item.day}</span><strong className="mt-1 block text-sm">{item.date}</strong></button>)}
                </div>
                <div className="mt-5 space-y-4">
                  <div className="flex gap-3"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500" /><div><p className="text-sm font-semibold text-slate-800">All-hands meeting</p><p className="mt-1 flex items-center gap-1 text-xs text-slate-500"><Clock3 size={13} /> Today, 10:00 AM · 45 min</p></div></div>
                  <div className="flex gap-3"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet-500" /><div><p className="text-sm font-semibold text-slate-800">Design team sync</p><p className="mt-1 flex items-center gap-1 text-xs text-slate-500"><Clock3 size={13} /> Thu, 2:30 PM · 30 min</p></div></div>
                </div>
              </article>
            </section>

            <section className="mt-6 rounded-xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5"><div><h2 className="text-base font-semibold text-slate-900">Employee status</h2><p className="mt-1 text-sm text-slate-500">A quick look at your people.</p></div><button type="button" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">View directory <ChevronRight size={15} /></button></div>
              <div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left"><thead><tr className="text-xs font-semibold uppercase tracking-wider text-slate-400"><th className="px-6 py-3">Employee</th><th className="px-6 py-3">Department</th><th className="px-6 py-3">Status</th><th className="px-6 py-3">Last active</th></tr></thead><tbody className="divide-y divide-slate-100">
                {employees.map(employee => <tr key={employee.name} className="text-sm hover:bg-slate-50/70"><td className="px-6 py-3.5"><div className="flex items-center gap-3"><div className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold ${employee.tone}`}>{employee.initials}</div><div><p className="font-semibold text-slate-800">{employee.name}</p><p className="text-xs text-slate-500">{employee.role}</p></div></div></td><td className="px-6 py-3.5 text-slate-500">{employee.role.includes('People') ? 'People' : employee.role.includes('Product') ? 'Product' : 'Engineering'}</td><td className="px-6 py-3.5"><span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${employee.statusTone}`}><span className="h-1.5 w-1.5 rounded-full bg-current" />{employee.status}</span></td><td className="px-6 py-3.5 text-slate-500">Today, 9:42 AM</td></tr>)}
              </tbody></table></div>
            </section>
            <footer className="flex items-center justify-between py-6 text-xs text-slate-400"><span>Synergy HR · People operations, made simple.</span><span className="hidden items-center gap-1 sm:flex"><Check size={13} /> All systems operational</span></footer>
          </main>
        </div>
      </div>
    </div>;
};
