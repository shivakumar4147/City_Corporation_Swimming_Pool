import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Star, Waves, ShieldAlert, Clock, Ticket, CalendarDays } from 'lucide-react';

export default function Hero({ currentStyle, currentTheme, onActionClick }) {
  const navigate = useNavigate();
  const isDark = currentStyle?.isDark;

  return (
    <section className="w-full px-6 pt-24 lg:pl-28 lg:pr-6 lg:pt-6 bg-transparent text-left">
      <Helmet>
        <title>City Corporation Swimming Pool Mangaluru | Book Tickets Online</title>
        <meta name="description" content="Visit the premier City Corporation Swimming Pool in Mangaluru. Check affordable ticket prices, opening timings (6 AM - 10 PM), and book your hourly or monthly pass online easily." />
        <meta name="keywords" content="swimming pool Mangalore, city corporation pool Mangaluru, pool entry fees Mangalore, swim coaches Mangalore, buy swimming tickets online" />
        <link rel="canonical" href="https://your-domain.com/" />
      </Helmet>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">
        <div 
          className="lg:col-span-8 rounded-none overflow-hidden relative min-h-[260px] sm:min-h-[360px] flex flex-col justify-between p-6 sm:p-8 shadow-xl"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=80" 
            alt="Premium Swimming Pool Infrastructure" 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.75] dark:brightness-[0.6]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10" />
          
          <div className="relative z-20 self-start px-4 py-2.5 bg-black/40 backdrop-blur-md rounded-none border border-white/10 flex items-center gap-3 text-white max-w-full">
            <div className="h-2 w-2 rounded-full bg-sky-400 animate-pulse shrink-0" />
            <div className="text-xs font-mono tracking-widest uppercase font-bold flex flex-col sm:flex-row sm:items-center gap-1.5 leading-snug">
              <span className="text-white">CITY CORPORATION SWIMMING POOL</span>
              <span className="text-emerald-400 font-medium">// OPEN DAILY</span>
            </div>
          </div>

          <div className="relative z-20 flex flex-wrap gap-x-6 gap-y-2 text-white/95 font-mono text-xs tracking-[0.2em] uppercase font-bold pt-16 sm:pt-20">
            <span>// OLYMPIC TRACKS</span>
            <span>// CLEAN WATER</span>
            <span>// WARM TEMPERATURE</span>
          </div>
        </div>

        <div className="lg:col-span-4 p-5 sm:p-6 flex flex-col justify-between relative bg-transparent min-h-[300px] lg:min-h-0">
          <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
              <path 
                d="M 0,0 L 88,0 L 100,12 L 100,100 L 0,100 Z" 
                fill={isDark ? "#0F172A" : "#FFFFFF"} 
                stroke={isDark ? "#334155" : "#0B192C"} 
                strokeWidth="2" 
                strokeDasharray="8, 6"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <div className="relative z-10 space-y-3 w-full border-b border-slate-200 dark:border-slate-800/60 pb-4">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
              <Clock className="h-4 w-4 shrink-0" />
              <span className="text-xs font-mono font-black tracking-widest uppercase">// POOL TIMINGS</span>
            </div>
            <div className="space-y-1 pl-6">
              <p className="text-lg font-black uppercase tracking-wide" style={{ color: isDark ? '#FFFFFF' : '#0B192C' }}>
                06:00 AM - 10:00 PM
              </p>
              <p className="text-xs font-bold" style={{ color: isDark ? '#94A3B8' : '#475569' }}>
                Open every single day of the week
              </p>
            </div>
          </div>

          <div className="relative z-10 space-y-3 w-full pt-4 grow">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-500">
              <Ticket className="h-4 w-4 shrink-0" />
              <span className="text-xs font-mono font-black tracking-widest uppercase">// ENTRY FEES</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pl-6 pt-1">
              <div className="space-y-0.5">
                <span className="text-xs font-mono uppercase font-black tracking-wider" style={{ color: isDark ? '#94A3B8' : '#475569' }}>PER HOUR</span>
                <p className="text-lg font-black" style={{ color: isDark ? '#FFFFFF' : '#0B192C' }}>₹50 / hr</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-mono uppercase font-black tracking-wider" style={{ color: isDark ? '#94A3B8' : '#475569' }}>MONTHLY</span>
                <p className="text-lg font-black" style={{ color: isDark ? '#FFFFFF' : '#0B192C' }}>₹1,200</p>
              </div>
            </div>
          </div>

          <button 
            onClick={onActionClick}
            className="relative z-10 w-full py-3.5 bg-[#0B192C] dark:bg-slate-800 text-white rounded-none text-xs font-black uppercase tracking-widest hover:bg-sky-600 dark:hover:bg-sky-500 transition-all cursor-pointer shadow-md mt-6 flex items-center justify-center gap-2 border-0"
          >
            <span>BOOK ENTRY PASS NOW</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="w-full mt-10 sm:mt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800/80 pb-8">
        <div className="max-w-4xl text-left">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none uppercase select-none flex flex-col">
            <span className={`transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#0B192C]'}`}>
              CITY CORPORATION
            </span>
            <span className="font-light tracking-normal mt-1.5 sm:mt-2 transition-colors duration-300" style={{ color: isDark ? '#94A3B8' : '#475569' }}>
              SWIMMING POOL.
            </span>
          </h1>
        </div>

        <div className="w-full md:max-w-xs text-left space-y-4">
          <div className="space-y-1">
            <h3 className="text-xs font-mono font-black tracking-widest uppercase text-sky-600 dark:text-sky-400 transition-colors duration-300">
              // EVERYONE WELCOME
            </h3>
            <p className="text-sm leading-relaxed font-bold" style={{ color: isDark ? '#CBD5E1' : '#1E293B' }}>
              Enjoy a premium, crystal clear pool built for both serious practice sessions and fun everyday swimming.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <button 
              onClick={onActionClick}
              className={`w-full sm:w-auto px-5 py-3 rounded-none text-xs font-black uppercase tracking-widest text-white transition-all shadow-md flex items-center justify-center gap-3 cursor-pointer border-0 ${
                currentStyle?.buttonColor || 'bg-slate-950'
              }`}
            >
              <span>BOOK ENTRY PASS</span>
              <div className="h-5 w-5 rounded-none bg-white flex items-center justify-center text-slate-950 shrink-0">
                <ArrowRight className="h-3 w-3 stroke-[3]" />
              </div>
            </button>

            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-600 dark:text-amber-500 bg-amber-500/10 dark:bg-amber-500/5 px-2.5 py-1.5 rounded-none border border-amber-500/20 w-fit self-start sm:self-auto">
              <Star className="h-3 w-3 fill-amber-600 dark:fill-amber-500 shrink-0" />
              <span>SPECIAL 25% DISCOUNT RUNNING</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-8 flex flex-col space-y-3">
        <span className="text-xs font-mono font-black tracking-[0.25em] uppercase text-sky-600 dark:text-sky-400">
          // EXPLORE WEBSITE PAGES
        </span>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <button 
            onClick={onActionClick}
            className="flex items-center justify-between p-5 rounded-none border-l-4 border-l-[#00A3FF] border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all duration-200 text-left cursor-pointer group shadow-sm"
          >
            <div className="space-y-2 pr-4 grow">
              <p className="text-xs font-mono tracking-widest uppercase font-bold text-sky-600 dark:text-sky-400">PAGE 01</p>
              <h4 className="text-sm font-black tracking-widest text-slate-900 dark:text-slate-200 uppercase break-words">BOOKING SCHEDULE WINDOW</h4>
              <p className="text-xs font-mono font-bold tracking-wider text-[#00A3FF] uppercase flex items-center gap-1.5">
                GO TO PORTAL
              </p>
            </div>
            
            <div className="flex items-center gap-2 p-3 bg-[#00A3FF] text-white rounded-xl shadow-md group-hover:scale-105 transition-transform shrink-0">
              <ArrowRight className="h-4 w-4 stroke-[3]" />
              <CalendarDays className="h-5 w-5 stroke-[2]" />
            </div>
          </button>

          <button 
            onClick={() => navigate('/facilities')}
            className="flex items-center justify-between p-5 rounded-none border-l-4 border-l-emerald-500 border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all duration-200 text-left cursor-pointer group shadow-sm"
          >
            <div className="space-y-2 pr-4 grow">
              <p className="text-xs font-mono tracking-widest uppercase font-bold text-sky-600 dark:text-sky-400">PAGE 02</p>
              <h4 className="text-sm font-black tracking-widest text-slate-900 dark:text-slate-200 uppercase break-words">VIEW POOL FEATURES</h4>
              <p className="text-xs font-mono font-bold tracking-wider text-emerald-500 uppercase flex items-center gap-1.5">
                VISIT PAGE
              </p>
            </div>
            
            <div className="flex items-center gap-2 p-3 bg-emerald-500 text-white rounded-xl shadow-md group-hover:scale-105 transition-transform shrink-0">
              <ArrowRight className="h-4 w-4 stroke-[3]" />
              <Waves className="h-5 w-5 stroke-[2]" />
            </div>
          </button>

          <button 
            onClick={() => navigate('/safety')}
            className="flex items-center justify-between p-5 rounded-none border-l-4 border-l-amber-500 border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all duration-200 text-left cursor-pointer group shadow-sm sm:col-span-2 lg:col-span-1"
          >
            <div className="space-y-2 pr-4 grow">
              <p className="text-xs font-mono tracking-widest uppercase font-bold text-sky-600 dark:text-sky-400">PAGE 03</p>
              <h4 className="text-sm font-black tracking-widest text-slate-900 dark:text-slate-200 uppercase break-words">SAFETY RULES</h4>
              <p className="text-xs font-mono font-bold tracking-wider text-amber-500 uppercase flex items-center gap-1.5">
                VISIT PAGE
              </p>
            </div>
            
            <div className="flex items-center gap-2 p-3 bg-amber-500 text-white rounded-xl shadow-md group-hover:scale-105 transition-transform shrink-0">
              <ArrowRight className="h-4 w-4 stroke-[3]" />
              <ShieldAlert className="h-5 w-5 stroke-[2]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}