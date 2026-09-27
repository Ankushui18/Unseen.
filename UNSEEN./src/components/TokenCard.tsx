import React from 'react';
import { Copy } from 'lucide-react';
interface TokenCardProps {
  name: string;
  hex: string;
  token: string;
  description?: string;
}
export const TokenCard: React.FC<TokenCardProps> = ({
  name,
  hex,
  token,
  description
}) => {
  const [copied, setCopied] = React.useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return <div className="group relative bg-white border border-slate-200 rounded-xl p-3 flex flex-col gap-3 transition-all hover:shadow-lg hover:-translate-y-0.5">
      {/* Color Swatch */}
      <div className="w-full h-24 rounded-lg border border-black/5 flex items-center justify-center relative overflow-hidden" style={{
      backgroundColor: hex
    }}>
        <button onClick={copyToClipboard} className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black/10 backdrop-blur-[2px] transition-opacity flex items-center justify-center gap-2 text-white font-medium text-sm">
          <Copy size={16} />
          {copied ? 'Copied!' : 'Copy Token'}
        </button>
      </div>

      {/* Info */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-slate-900">{name}</h4>
          <span className="text-[10px] font-mono text-slate-400 uppercase">{hex}</span>
        </div>
        <p className="text-[11px] font-mono bg-slate-50 text-slate-600 px-1.5 py-0.5 rounded border border-slate-100 inline-block">
          {token}
        </p>
        {description && <p className="text-[10px] text-slate-500 mt-1 line-clamp-1">{description}</p>}
      </div>
    </div>;
};

// Also export a Grid layout helper for the tokens
export const TokenGrid: React.FC<{
  children: React.ReactNode;
  title?: string;
}> = ({
  children,
  title
}) => <div className="mb-10">
    {title && <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {children}
    </div>
  </div>;
