import React from 'react';
import { Copy, Code, Eye } from 'lucide-react';
interface ComponentShowcaseProps {
  title: string;
  description: string;
  children: React.ReactNode;
  codePreview?: string;
}
export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  title,
  description,
  children,
  codePreview = "// Code preview not available"
}) => {
  const [activeTab, setActiveTab] = React.useState<'preview' | 'code'>('preview');
  return <div className="mb-12 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
      {/* Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
          <div className="flex items-center gap-1 p-1 bg-slate-200/50 rounded-lg">
            <button onClick={() => setActiveTab('preview')} className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'preview' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
              <Eye size={14} />
              Preview
            </button>
            <button onClick={() => setActiveTab('code')} className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'code' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
              <Code size={14} />
              Code
            </button>
          </div>
        </div>
        <p className="text-slate-500 text-sm max-w-2xl">{description}</p>
      </div>

      {/* Content */}
      <div className="relative min-h-[200px]">
        {activeTab === 'preview' ? <div className="p-8 flex flex-wrap gap-6 items-center justify-center bg-white">
            {children}
          </div> : <div className="bg-slate-900 p-6 text-slate-300 font-mono text-sm overflow-x-auto">
            <div className="flex justify-between items-start mb-4">
              <span className="text-slate-500 text-xs">JSX / TSX</span>
              <button className="p-1.5 hover:bg-slate-800 rounded-md transition-colors text-slate-400 hover:text-white" title="Copy code">
                <Copy size={16} />
              </button>
            </div>
            <pre><code>{codePreview}</code></pre>
          </div>}
      </div>

      {/* Footer / Meta */}
      <div className="px-6 py-3 border-t border-slate-100 bg-white flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
          Component Variant Showcase
        </span>
        <div className="flex gap-4">
          <button className="text-xs text-blue-600 font-medium hover:underline">
            View Props API
          </button>
        </div>
      </div>
    </div>;
};
