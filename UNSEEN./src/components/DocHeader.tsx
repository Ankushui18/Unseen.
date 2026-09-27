import React from 'react';
import { Search, Moon, Bell, ChevronDown } from 'lucide-react';
export const DocHeader: React.FC = () => {
  return <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-50">
      <div className="flex items-center gap-8 flex-1">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input type="text" placeholder="Search documentation (Cmd+K)" className="w-full bg-slate-100 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-full py-2 pl-10 pr-4 text-sm transition-all" />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Version Switcher */}
        <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-medium text-slate-600 transition-colors">
          <span>v2.4.0</span>
          <ChevronDown size={14} />
        </button>

        <div className="h-4 w-px bg-slate-200" />

        {/* Theme & Notifications */}
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all" title="Toggle dark mode">
            <Moon size={18} />
          </button>
          <button className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all relative">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 border-2 border-white rounded-full"></span>
          </button>
        </div>

        <div className="h-4 w-px bg-slate-200" />

        {/* User Profile */}
        <button className="flex items-center gap-3 p-1 pl-1 pr-3 hover:bg-slate-100 rounded-full transition-all group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white">
            AD
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-semibold text-slate-900 leading-tight">Alex Design</p>
            <p className="text-[10px] text-slate-500 leading-tight">Admin</p>
          </div>
          <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-600" />
        </button>
      </div>
    </header>;
};
