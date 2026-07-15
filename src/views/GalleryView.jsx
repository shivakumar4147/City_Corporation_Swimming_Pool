import React from 'react';

export default function GalleryView({ currentStyle }) {
  const isDark = currentStyle?.isDark;
  return (
    <section className="w-full pl-28 pr-6 pt-6">
      <div className="w-full border-b border-slate-300 dark:border-slate-800 pb-4 mb-6">
        <div className="space-y-1">
          <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-sky-500 font-bold">// VISUAL CATALOG ARCHIVE</p>
          <h2 className="text-3xl font-black uppercase">
            <span style={{ color: isDark ? '#FFFFFF' : '#0B192C' }}>MEDIA </span>
            <span className="font-light tracking-wide text-[#64748B] dark:text-slate-400 ml-1">GRID PLATFORM.</span>
          </h2>
        </div>
      </div>
      <p className="text-xs text-slate-500">High-resolution photographic arrays of events and pool assets loading...</p>
    </section>
  );
}