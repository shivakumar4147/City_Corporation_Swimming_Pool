import React from 'react';
import { Compass, Shield, Award, Sparkles } from 'lucide-react';

export default function Amenities({ currentStyle }) {
  const isDark = currentStyle?.isDark;

  return (
    <section id="features" className="w-full px-6 pt-24 lg:pl-28 lg:pr-6 lg:pt-6 bg-transparent text-left">
      
      {/* Title */}
      <div className="w-full border-b border-slate-300 dark:border-slate-800 pb-4 mb-6">
        <div className="space-y-2">
          <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-sky-500 font-bold">// BEST HIGHLIGHTS</p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
            <span style={{ color: isDark ? '#FFFFFF' : '#0B192C' }}>OUR </span>
            <span 
              className="font-light tracking-wide ml-1" 
              style={{ color: isDark ? '#94A3B8' : '#64748B' }}
            >
              FACILITIES.
            </span>
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full bg-transparent">
        
        <div className="grid grid-cols-1 lg:col-span-8 gap-6 bg-transparent">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-transparent">
            
            {/* Card 1 */}
            <div 
              className="neo-card p-6 min-h-[220px] flex flex-col justify-between shadow-md relative overflow-hidden bg-transparent"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}
            >
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-[#0B172A]/40 dark:bg-slate-950/50 z-10" />
              <div className="relative z-20 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-black uppercase text-white">Full-Size Pool</h3>
                  <Compass className="h-4 w-4 text-sky-400" />
                </div>
                <p className="text-xs text-white dark:text-slate-200 font-semibold">
                  Standard 50-meter long pool designed for long distance laps and casual swimming practice.
                </p>
              </div>
              <span className="text-[9px] font-mono text-white/90 font-bold relative z-20">FEATURE // 01</span>
            </div>

            {/* Card 2 */}
            <div 
              className="neo-card p-6 min-h-[220px] flex flex-col justify-between shadow-md relative overflow-hidden bg-transparent"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}
            >
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="https://images.unsplash.com/photo-1565992441121-4367c2967103?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-[#0B172A]/40 dark:bg-slate-950/50 z-10" />
              <div className="relative z-20 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-black uppercase text-white">Super Clean Water</h3>
                  <Shield className="h-4 w-4 text-sky-400" />
                </div>
                <p className="text-xs text-white dark:text-slate-200 font-semibold">
                  We use safe UV water purifiers continuously to keep the pool water crystal clear.
                </p>
              </div>
              <span className="text-[9px] font-mono text-white/90 font-bold relative z-20">FEATURE // 02</span>
            </div>

          </div>

          {/* Card 3 */}
          <div 
            className="neo-card p-6 min-h-[160px] flex flex-col justify-between shadow-md relative overflow-hidden bg-transparent grow"
            style={{ clipPath: 'polygon(0 0, 96% 0, 100% 18%, 100% 100%, 0 100%)' }}
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover object-center" />
            </div>
            <div className="absolute inset-0 bg-[#0B172A]/40 dark:bg-slate-950/50 z-10" />
            <div className="relative z-20 max-w-2xl space-y-2">
              <div className="flex items-center gap-3">
                <Award className="h-4 w-4 text-sky-400" />
                <h3 className="text-base font-black uppercase text-white">Helpful Swimming Coaches</h3>
              </div>
              <p className="text-xs text-white dark:text-slate-200 font-semibold">
                Learn from well-trained coaches present right on the pool deck to guide your speed, stroke styles, and swimming safety.
              </p>
            </div>
            <span className="text-[9px] font-mono text-white/90 font-bold relative z-20">FEATURE // 03</span>
          </div>

        </div>

        {/* Card 4 */}
        <div 
          className="lg:col-span-4 neo-card p-6 min-h-[340px] lg:min-h-0 flex flex-col justify-between shadow-md relative overflow-hidden bg-transparent"
          style={{ clipPath: 'polygon(0 8%, 14% 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-[#0B172A]/40 dark:bg-slate-950/50 z-10" />
          <div className="relative z-20 flex justify-end">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white border border-white/15">
              <Sparkles className="h-4 w-4 text-amber-400 fill-amber-400/20" />
            </div>
          </div>
          <div className="relative z-20 space-y-3 text-white text-left pt-20 sm:pt-28 lg:pt-36">
            <span className="text-[9px] font-mono text-sky-300 font-bold tracking-widest uppercase">// CONTROLLED WARMTH</span>
            <h3 className="text-lg font-black uppercase tracking-wide">Perfect Temperature</h3>
            <p className="text-xs text-white dark:text-slate-200 font-semibold">
              Our advanced heating systems maintain the water at a comfortable 27.4°C so it never feels freezing cold.
            </p>
            <div className="text-[9px] font-mono text-white/80 pt-2 uppercase">
              FEATURE // 04 • CLIMATE_OK
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}