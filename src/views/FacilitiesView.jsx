import React from 'react';
import { ArrowRight, Waves, Thermometer, Gauge } from 'lucide-react';

export default function FacilitiesView({ currentStyle }) {
  const isDark = currentStyle?.isDark;

  return (
    <section className="w-full px-6 pt-24 lg:pl-28 lg:pr-6 lg:pt-6 bg-transparent text-left select-none animate-in fade-in duration-300">
      
      {/* Top Heading Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 pb-8 border-b border-slate-200 dark:border-slate-800/80">
        <div className="space-y-2 w-full lg:w-auto">
          <p className="text-[10px] font-mono font-black tracking-[0.25em] text-sky-500 dark:text-sky-400 uppercase">
            // POOL DETAILS & LIVE UPDATES
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none uppercase flex flex-col sm:flex-row sm:items-baseline flex-wrap">
            <span className={isDark ? 'text-white' : 'text-[#0B192C]'}>
              POOL
            </span>
            <span className={`font-light tracking-normal sm:ml-3 transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}>
              FEATURES.
            </span>
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-black tracking-widest uppercase pb-2 text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors cursor-pointer self-start lg:self-auto">
          <span>SEE RECENT UPDATES</span>
          <ArrowRight className="h-4 w-4 stroke-[2.5]" />
        </div>
      </div>

      {/* Grid Layout Shell */}
      <div className="mt-8 space-y-6 w-full">
        
        {/* Row 1: Image & Text Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">
          
          {/* Left Feature Showcase Panel */}
          <div className="grid grid-cols-1 lg:col-span-8 rounded-none overflow-hidden relative min-h-[240px] sm:min-h-[280px] shadow-sm">
            <div 
              className="w-full h-full min-h-[240px] sm:min-h-[280px] relative bg-slate-200 dark:bg-slate-800"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 92% 100%, 0 100%)' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80" 
                alt="Main Swimming Pool" 
                className="absolute inset-0 w-full h-full object-cover brightness-[0.8] dark:brightness-[0.65]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/40 backdrop-blur-md text-white border border-white/10 font-mono text-[9px] font-bold uppercase tracking-widest">
                MAIN RACING POOL
              </div>
            </div>
          </div>

          {/* Right Text Block Box */}
          <div className="lg:col-span-4 p-6 sm:p-8 relative flex flex-col justify-center min-h-[200px] sm:min-h-[240px]">
            <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                <path 
                  d="M 0,0 L 88,0 L 100,12 L 100,100 L 12,100 L 0,88 Z" 
                  fill="none" 
                  stroke={isDark ? "#334155" : "#CBD5E1"} 
                  strokeWidth="2" 
                  strokeDasharray="6, 4"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
            <div className="relative z-10 space-y-3 w-full max-w-sm lg:max-w-xs pl-2 sm:pl-4">
              <h3 className="text-[10px] font-mono font-black tracking-widest text-sky-500 dark:text-sky-400">
                // OUR COMMITMENT
              </h3>
              <p className={`text-xs font-black tracking-wide leading-relaxed uppercase ${
                isDark ? 'text-slate-200' : 'text-[#0B192C]'
              }`}>
                OUR POOL IS CLEANED REGULARLY. WE ALWAYS KEEP THE WATER HEALTHY, SAFE, AND PERFECT FOR SWIMMING PRACTICE.
              </p>
            </div>
          </div>

        </div>

        {/* Row 2: 3-Column Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          
          {/* Box 1 */}
          <div className={`p-5 rounded-none border flex flex-col justify-center space-y-2 transition-colors duration-300 ${
            isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-[#0B192C] border-[#0B192C]'
          }`}>
            <span className="text-sm font-black uppercase tracking-wider text-white">
              BIG OLYMPIC POOL →
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] font-black tracking-wide">
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 bg-sky-400 rounded-none" />
                <span className="text-sky-400 uppercase">50 METERS LONG</span>
              </div>
              <span className="text-slate-700 dark:text-slate-700 hidden xs:inline">|</span>
              <span className="text-sky-400">8 LANES</span>
            </div>
          </div>

          {/* Box 2 */}
          <div className={`p-5 rounded-none border flex flex-col justify-center space-y-2 transition-colors duration-300 ${
            isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-[#0B192C] border-[#0B192C]'
          }`}>
            <span className="text-sm font-black uppercase tracking-wider text-sky-400">
              CLEAN WATER →
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] font-black tracking-wide">
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 bg-emerald-400 rounded-none" />
                <span className="text-emerald-400 uppercase">ADVANCED FILTERS</span>
              </div>
              <span className="text-slate-700 dark:text-slate-700 hidden xs:inline">|</span>
              <span className="text-emerald-400">99% GERMS FREE</span>
            </div>
          </div>

          {/* Box 3 */}
          <div className={`p-4 rounded-none flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border md:col-span-2 lg:col-span-1 ${
            isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-[#0B192C] border-[#0B192C]'
          }`}>
            <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest sm:pl-2">
              // BOOK YOUR TICKET
            </span>
            <button className="w-full sm:w-auto px-6 py-3 bg-[#00A3FF] hover:bg-[#0082cc] text-white text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 rounded-none shadow-md transition-all cursor-pointer">
              <span>BOOK NOW</span>
              <ArrowRight className="h-3.5 w-3.5 stroke-[3]" />
            </button>
          </div>

        </div>

        {/* Row 3: Detail Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-2">
          
          {/* Card 01 */}
          <div className={`border rounded-none relative overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px] transition-all p-6 shadow-md group ${
            isDark ? 'border-slate-800 hover:border-sky-500/40' : 'border-slate-200 hover:border-sky-600/40'
          }`}>
            <img 
              src="https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=600&q=80" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex items-center justify-between relative z-20 w-full p-2 bg-slate-950/70 backdrop-blur-md border border-white/10">
              <span className="text-[9px] font-mono font-black text-sky-400 tracking-widest">// TRACKS</span>
              <Waves className="h-4 w-4 text-sky-400" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-10" />
            <div className="space-y-1.5 relative z-20 w-full mt-auto">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">SWIMMING LANES</h4>
              <p className="text-[11px] leading-relaxed font-bold text-slate-200">
                8 straight lanes separated by high-quality wave breakers so you can swim smoothly.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className={`border rounded-none relative overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px] transition-all p-6 shadow-md group ${
            isDark ? 'border-slate-800 hover:border-amber-500/40' : 'border-slate-200 hover:border-amber-600/40'
          }`}>
            <img 
              src="https://images.unsplash.com/photo-1518605333140-552e4b373d3e?auto=format&fit=crop&w=600&q=80" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex items-center justify-between relative z-20 w-full p-2 bg-slate-950/70 backdrop-blur-md border border-white/10">
              <span className="text-[9px] font-mono font-black text-amber-400 tracking-widest">// CLIMATE</span>
              <Thermometer className="h-4 w-4 text-amber-400" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/95 via-black/85 to-transparent z-10" />
            <div className="space-y-1.5 relative z-20 w-full mt-auto">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">WATER TEMPERATURE</h4>
              <p className="text-[11px] leading-relaxed font-bold text-slate-200">
                We use automatic water heaters to keep the pool water at a comfortable warm level.
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div className={`border rounded-none relative overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px] transition-all p-6 shadow-md group md:col-span-2 lg:col-span-1 ${
            isDark ? 'border-slate-800 hover:border-indigo-500/40' : 'border-slate-200 hover:border-indigo-600/40'
          }`}>
            <img 
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex items-center justify-between relative z-20 w-full p-2 bg-slate-950/70 backdrop-blur-md border border-white/10">
              <span className="text-[9px] font-mono font-black text-indigo-400 tracking-widest">// MEASURE</span>
              <Gauge className="h-4 w-4 text-indigo-400" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/95 via-black/85 to-transparent z-10" />
            <div className="space-y-1.5 relative z-20 w-full mt-auto">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">POOL DEPTH</h4>
              <p className="text-[11px] leading-relaxed font-bold text-slate-200">
                A safe, uniform 2.0-meter depth across the pool, perfect for safe turns and training.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}