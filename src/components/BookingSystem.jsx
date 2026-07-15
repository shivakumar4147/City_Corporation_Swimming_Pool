import React, { useState, useEffect } from 'react';
import { Clock, Users, Check, ChevronDown } from 'lucide-react';

export default function BookingSystem({ currentStyle, onActionClick }) {
  const [selectedTime, setSelectedTime] = useState('');
  const [swimmerCount, setSwimmerCount] = useState(1);
  const [isBooked, setIsBooked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const [liveDateTime, setLiveDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setLiveDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isDark = currentStyle?.isDark;

  const currentHour = liveDateTime.getHours();
  const isOpen = currentHour >= 6 && currentHour < 22;
  
  const dayName = liveDateTime.toLocaleDateString('en-US', { weekday: 'long' });
  const formattedDate = liveDateTime.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  const formattedTime = liveDateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const timeSlots = [
    "06:00 AM - 07:00 AM",
    "07:00 AM - 08:00 AM",
    "08:00 AM - 09:00 AM",
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
    "07:00 PM - 08:00 PM",
    "08:00 PM - 09:00 PM",
    "09:00 PM - 10:00 PM"
  ];

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTime) return;

    if (onActionClick) {
      await onActionClick();
      
      const scheduleSection = document.getElementById('booking-schedule-section');
      if (scheduleSection) {
        setIsBooked(true);
      }
    } else {
      setIsBooked(true);
    }
  };

  return (
    <section id="booking-schedule-section" className="w-full px-6 pt-24 lg:pl-28 lg:pr-6 lg:pt-6 bg-transparent text-left schedule-window-target">
      
      <div className="w-full border-b border-slate-300 dark:border-slate-800 pb-4 mb-6">
        <div className="space-y-1">
          <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-sky-500 font-bold">// ACCESS PASSING SYSTEM</p>
          <h2 className="text-3xl font-black uppercase">
            <span style={{ color: isDark ? '#FFFFFF' : '#0B192C' }}>SCHEDULE </span>
            <span className="font-light tracking-wide text-[#64748B] dark:text-slate-400 ml-1">ENTRY WINDOW.</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full bg-transparent">
        <div 
          className="w-full lg:w-5/12 overflow-hidden relative shadow-lg min-h-[240px] lg:min-h-0 bg-transparent"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=800&q=80" 
            alt="Active Pool System" 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.45]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent z-10" />
          
          <div className="absolute top-4 left-4 right-4 text-white space-y-2 z-20">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[9px] font-mono text-sky-400 font-bold uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">// SYSTEM MONITOR</span>
              <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider ${
                isOpen ? 'bg-emerald-500/30 text-emerald-400 border border-emerald-400/40' : 'bg-rose-500/30 text-rose-400 border border-rose-400/40'
              }`}>
                {isOpen ? '• OPEN NOW' : '• CLOSED'}
              </span>
            </div>
            
            <div className="space-y-0.5">
              <p className="text-[10px] font-mono text-slate-300 uppercase tracking-widest drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">{dayName}</p>
              <h4 className="text-base font-black tracking-tight uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">{formattedDate}</h4>
              <p className="text-xl font-mono font-bold text-sky-400 tracking-wider pt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">{formattedTime}</p>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white z-20">
            <p className="text-[11px] text-slate-300 leading-normal font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
              Lanes are monitored continuously to maintain optimal swimming distribution density parameters.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-7/12 p-5 sm:p-6 flex flex-col justify-center relative bg-transparent min-h-[380px]">
          <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
              <path 
                d="M 0,0 L 88,0 L 100,12 L 100,100 L 0,100 Z" 
                fill={isDark ? "#0F172A" : "#FFFFFF"} 
                stroke={isDark ? "#FFFFFF" : "#848282"} 
                strokeWidth="2" 
                strokeDasharray="8, 6"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <div className="relative z-10 w-full">
            {isBooked ? (
              <div className="py-4 text-center space-y-4 bg-transparent">
                <div className="mx-auto p-2 bg-emerald-500/10 text-emerald-400 rounded-full w-fit border border-emerald-500/20">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-black uppercase" style={{ color: isDark ? '#FFFFFF' : '#0B192C' }}>Reservation Logged</h3>
                <p className="text-xs text-slate-500">Pass confirmed for {swimmerCount} members at {selectedTime}.</p>
                <button 
                  onClick={() => { setIsBooked(false); setSelectedTime(''); setSwimmerCount(1); }}
                  className="text-xs font-bold uppercase text-sky-500 hover:text-sky-600 underline block mx-auto border-0 bg-transparent cursor-pointer"
                >
                  Book Another Pass
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-8 sm:space-y-10 bg-transparent">
                <div className="space-y-2 relative">
                  <label className="text-[10px] font-mono font-black tracking-widest uppercase text-sky-500 dark:text-sky-400 flex items-center gap-2 transition-colors duration-300">
                    <Clock className="h-3.5 w-3.5 text-sky-500 dark:text-sky-400" /> // 01. SELECT SLOTS
                  </label>
                  
                  <div 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full p-4 rounded-xl flex items-center justify-between cursor-pointer transition-all bg-[#0B192C]/[0.06] dark:bg-slate-950/40 border-0"
                  >
                    <span 
                      className="text-xs font-black uppercase tracking-wide truncate max-w-[85%]" 
                      style={{ color: isDark ? '#FFFFFF' : '#0B192C' }}
                    >
                      {selectedTime ? selectedTime : "CHOOSE CUSTOM 1-HOUR SESSION BLOCK..."}
                    </span>
                    <ChevronDown className="h-4 w-4 text-slate-500 shrink-0" />
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute top-[58px] left-0 w-full max-h-40 overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-800 z-50 shadow-2xl bg-white dark:bg-slate-900">
                      {timeSlots.map((slot, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedTime(slot);
                            setIsDropdownOpen(false);
                          }}
                          className="p-2.5 text-xs font-mono font-bold cursor-pointer transition-colors border-b last:border-0 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-sky-500 hover:text-white"
                        >
                          {slot}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-1 bg-transparent border-t border-slate-100 dark:border-slate-800/40 pt-4">
                  <div className="space-y-0.5 text-left">
                    <label className="text-[10px] font-mono font-black tracking-widest uppercase text-sky-500 dark:text-sky-400 flex items-center gap-2 transition-colors duration-300">
                      <Users className="h-3.5 w-3.5 text-sky-500 dark:text-sky-400" /> // 02. TOTAL SWIMMERS
                    </label>
                    <p className="text-[11px] text-slate-400 font-medium">Set aggregate ticket presence variables</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-1.5 bg-transparent self-start sm:self-auto">
                    {[1, 2, 3, 4, 5].map((num) => {
                      const isActive = swimmerCount === num;
                      return (
                        <button
                          type="button"
                          key={num}
                          onClick={() => setSwimmerCount(num)}
                          className={`h-9 w-9 rounded-lg text-center text-xs font-black uppercase transition-all border-0 ${
                            isActive
                              ? 'bg-[#0B192C] text-white shadow-sm'
                              : 'bg-[#0B192C]/[0.08] dark:bg-slate-950/40 text-[#0B192C] dark:text-slate-300 hover:bg-[#0B192C]/15 font-bold'
                          }`}
                        >
                          {num}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!selectedTime}
                  className={`w-full p-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all border-0 ${
                    selectedTime 
                      ? 'bg-[#0B192C] hover:bg-[#152942] text-white cursor-pointer hover:translate-y-[-1px] shadow-md' 
                      : 'bg-[#0B192C]/20 dark:bg-slate-800 text-[#0B192C]/40 dark:text-slate-600 cursor-not-allowed shadow-none'
                  }`}
                >
                  PAY FOR THE TICKET
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}