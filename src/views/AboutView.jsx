import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Target, History } from 'lucide-react';

export default function AboutView({ currentStyle }) {
  const isDark = currentStyle?.isDark;

  return (
    <section className="w-full px-6 pt-24 lg:pl-28 lg:pr-6 lg:pt-6 bg-transparent text-left select-none animate-in fade-in duration-300">
      {/* About View SEO Tags */}
      <Helmet>
        <title>About Us | City Corporation Swimming Pool Mangaluru</title>
        <meta name="description" content="Learn about our swimming center history, our goal to keep swimming public access low cost, and our team of professional lifesavers on deck." />
        <link rel="canonical" href="https://your-domain.com/about" />
      </Helmet>
      
      {/* Section Title */}
      <div className="w-full border-b border-slate-300 dark:border-slate-800 pb-4 mb-6">
        <div className="space-y-1">
          <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-sky-500 font-bold">// OUR STORY</p>
          <h2 className="text-3xl font-black uppercase">
            <span style={{ color: isDark ? '#FFFFFF' : '#0B192C' }}>ABOUT </span>
            <span className="font-light tracking-wide text-[#64748B] dark:text-slate-400 ml-1">OUR ACADEMY.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full mt-6">
        {/* Left Side */}
        <div className="lg:col-span-7 p-6 sm:p-8 relative flex flex-col justify-center min-h-[220px]">
          <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
              <path 
                d="M 0,0 L 92,0 L 100,8 L 100,100 L 0,100 Z" 
                fill={isDark ? "#0F172A" : "#FFFFFF"} 
                stroke={isDark ? "#334155" : "#CBD5E1"} 
                strokeWidth="2" 
                strokeDasharray="6, 4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
          
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2">
              <History className="h-4 w-4 text-sky-500 shrink-0" />
              <h3 className="text-[10px] font-mono font-black tracking-widest text-sky-500 dark:text-sky-400 uppercase">
                // OVER 20 YEARS OF SERVICE
              </h3>
            </div>
            <p className={`text-xs font-black tracking-wide leading-relaxed uppercase ${
              isDark ? 'text-slate-200' : 'text-[#0B192C]'
            }`}>
              For over two decades, our public swimming center has provided local families, kids, and professional athletes with clean, safe waters to stay fit and learn swimming.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div 
          className="lg:col-span-5 rounded-none overflow-hidden relative min-h-[200px] lg:min-h-0 shadow-md"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1518605333140-552e4b373d3e?auto=format&fit=crop&w=800&q=80" 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.7] dark:brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
          <div className="absolute bottom-4 left-4 z-20 px-3 py-1 bg-black/40 backdrop-blur-md text-white border border-white/10 font-mono text-[9px] font-bold uppercase tracking-widest">
            OFFICE ROOM
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
        {/* Box 1 */}
        <div className={`p-5 rounded-none border space-y-3 transition-colors duration-300 ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-[#0B192C]/[0.02] border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-sky-500" />
            <h4 className="text-xs font-black uppercase tracking-wider" style={{ color: isDark ? '#FFFFFF' : '#0B192C' }}>
              OUR MAIN GOAL
            </h4>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
            To provide the best standard swimming pool experience, keeping the facilities open, low cost, and perfectly clean for the entire neighborhood.
          </p>
        </div>

        {/* Box 2 */}
        <div className={`p-5 rounded-none border space-y-3 transition-colors duration-300 ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-[#0B192C]/[0.02] border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-emerald-500" />
            <h4 className="text-xs font-black uppercase tracking-wider" style={{ color: isDark ? '#FFFFFF' : '#0B192C' }}>
              LIFEGUARDS ON DUTY
            </h4>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
            Your safety is our priority. Highly certified professional lifeguards are always standing on the deck during active hours to look after you.
          </p>
        </div>
      </div>

    </section>
  );
}