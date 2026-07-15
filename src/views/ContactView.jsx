import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactView({ currentStyle }) {
  const isDark = currentStyle?.isDark;
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="w-full px-6 pt-24 lg:pl-28 lg:pr-6 lg:pt-6 bg-transparent text-left select-none animate-in fade-in duration-300">
      {/* Contact View SEO Tags */}
      <Helmet>
        <title>Contact Us & Location Map | City Corporation Swimming Pool</title>
        <meta name="description" content="Have questions? Contact the City Corporation Swimming Pool desk in Mangaluru, Karnataka. Send an online message, view our phone number, or check pool email." />
        <link rel="canonical" href="https://your-domain.com/contact" />
      </Helmet>
      
      {/* Title */}
      <div className="w-full border-b border-slate-300 dark:border-slate-800 pb-4 mb-6">
        <div className="space-y-1">
          <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-sky-500 font-bold">// GET IN TOUCH</p>
          <h2 className="text-3xl font-black uppercase">
            <span style={{ color: isDark ? '#FFFFFF' : '#0B192C' }}>LOCATION </span>
            <span className="font-light tracking-wide text-[#64748B] dark:text-slate-400 ml-1">& HELP.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full mt-6 bg-transparent">
        {/* Left Side */}
        <div className="lg:col-span-5 flex flex-col gap-4 bg-transparent">
          {/* Box 1 */}
          <div className={`p-5 rounded-none border space-y-3 transition-colors duration-300 ${
            isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-[#0B192C]/[0.02] border-slate-200'
          }`}>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-500 shrink-0" />
              <h4 className="text-xs font-black uppercase tracking-wider" style={{ color: isDark ? '#FFFFFF' : '#0B192C' }}>
                FIND OUR POOL
              </h4>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 font-medium uppercase">
              City Corporation Swimming Pool Complexes,<br />
              Mangaluru, Karnataka, India
            </p>
          </div>

          {/* Box 2 */}
          <div className={`p-5 rounded-none border space-y-3 transition-colors duration-300 ${
            isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-[#0B192C]/[0.02] border-slate-200'
          }`}>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald-500 shrink-0" />
              <h4 className="text-xs font-black uppercase tracking-wider" style={{ color: isDark ? '#FFFFFF' : '#0B192C' }}>
                EMAIL ADRESS
              </h4>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 font-mono font-bold">
              HELP@CITYCORP-AQUA.IN
            </p>
          </div>

          {/* Box 3 */}
          <div className={`p-5 rounded-none border space-y-3 transition-colors duration-300 ${
            isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-[#0B192C]/[0.02] border-slate-200'
          }`}>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-amber-500 shrink-0" />
              <h4 className="text-xs font-black uppercase tracking-wider" style={{ color: isDark ? '#FFFFFF' : '#0B192C' }}>
                CALL US DIRECTLY
              </h4>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 font-mono font-bold">
              +91 (824) 244-2782
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center relative bg-transparent min-h-[340px]">
          <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
              <path 
                d="M 0,0 L 90,0 L 100,10 L 100,100 L 0,100 Z" 
                fill={isDark ? "#0F172A" : "#FFFFFF"} 
                stroke={isDark ? "#334155" : "#CBD5E1"} 
                strokeWidth="2" 
                strokeDasharray="8, 6"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <div className="relative z-10 w-full">
            {formSubmitted ? (
              <div className="py-4 text-center space-y-3 bg-transparent">
                <h3 className="text-base font-black uppercase text-sky-500">// MESSAGE SENT</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto uppercase font-bold tracking-wide">
                  Thank you. Your question has been delivered to our office desk successfully.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-black uppercase text-sky-500 hover:underline block mx-auto pt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5 bg-transparent">
                <div className="space-y-1">
                  <label className="text-[9px] font-mono font-black tracking-widest uppercase text-slate-400">// YOUR EMAIL</label>
                  <input 
                    type="email" 
                    required
                    placeholder="ENTER YOUR EMAIL ADRESS HERE..."
                    className="w-full p-3 text-xs font-mono font-bold rounded-lg border-0 bg-[#0B192C]/[0.06] dark:bg-slate-950/40 text-[#0B192C] dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-mono font-black tracking-widest uppercase text-slate-400">// HOW CAN WE HELP YOU?</label>
                  <textarea 
                    rows="4"
                    required
                    placeholder="TYPE YOUR QUESTION ABOUT TIMINGS, MONTHLY TICKET PRICES, OR LEAP CLASSES..."
                    className="w-full p-3 text-xs font-mono font-bold rounded-lg border-0 bg-[#0B192C]/[0.06] dark:bg-slate-950/40 text-[#0B192C] dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-sky-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full p-3.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all border-0 bg-[#0B192C] hover:bg-[#152942] text-white cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="h-3.5 w-3.5 stroke-[2.5]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}