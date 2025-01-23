import React from 'react';
import type { Link } from '../types';

interface LinkCardProps {
  link: Link;
  onClick: () => void;
  variant?: 'solid' | 'outline' | 'soft';
  isDark?: boolean;
}

export function LinkCard({ link, onClick, variant = 'soft', isDark = false }: LinkCardProps) {
  const baseStyles = "w-full px-6 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden hover:scale-[1.02]";
  
  const variants = isDark ? {
    solid: "bg-gradient-to-r from-zinc-900 to-black hover:from-zinc-800 hover:to-zinc-900 text-white shadow-lg hover:shadow-xl border border-zinc-800/50 hover:border-zinc-700/50",
    outline: "border-2 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 text-zinc-300 hover:text-white",
    soft: "bg-gradient-to-r from-zinc-900/90 to-black/90 hover:from-zinc-800/90 hover:to-zinc-900/90 text-white shadow-lg hover:shadow-xl border border-zinc-800/30 hover:border-zinc-700/30"
  } : {
    solid: "bg-gradient-to-r from-white to-zinc-100 hover:from-zinc-50 hover:to-white text-zinc-900 shadow-lg hover:shadow-xl border border-zinc-200/50 hover:border-zinc-300/50",
    outline: "border-2 border-zinc-200 hover:border-zinc-300 hover:bg-white/50 text-zinc-700 hover:text-zinc-900",
    soft: "bg-gradient-to-r from-white/90 to-zinc-100/90 hover:from-zinc-50/90 hover:to-white/90 text-zinc-900 shadow-lg hover:shadow-xl border border-zinc-200/30 hover:border-zinc-300/30"
  };

  const Icon = link.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} group`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      <div className="flex items-center gap-3 relative z-10">
        {Icon && <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />}
        <span className="font-medium">{link.title}</span>
      </div>
    </a>
  );
}