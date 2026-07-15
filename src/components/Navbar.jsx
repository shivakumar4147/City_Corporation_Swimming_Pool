import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Phone, ArrowUpDown, Layers, Sun, Moon, User, Info, X, CheckCircle2, ChevronUp, ChevronDown, Mail, Lock, Eye, EyeOff, Edit3 } from 'lucide-react';
import { supabase } from '../supabaseClient.js';

export default function Navbar({ 
  currentStyle, 
  onToggleTheme, 
  currentTheme,
  isProfileOpen,
  setIsProfileOpen,
  isLoggedIn,
  setIsLoggedIn,
  formData,
  setFormData 
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const dropdownRef = useRef(null);

  const [authStep, setAuthStep] = useState('landing');
  const [userRole, setUserRole] = useState('User');
  const [isEditing, setIsEditing] = useState(false);
  
  const [manualEmail, setManualEmail] = useState('');
  const [manualPassword, setManualPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Track active Supabase session listeners
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleSessionCheck(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      handleSessionCheck(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSessionCheck = async (session) => {
    if (session) {
      let { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .maybeSingle();

      // Fallback Strategy: If trigger didn't run, inject the row manually from frontend
      if (!profile) {
        const fallbackName = session.user.user_metadata?.full_name || session.user.email.split('@')[0].toUpperCase();
        const fallbackPic = session.user.user_metadata?.avatar_url || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80';
        const fallbackRole = session.user.email === 'admin@gmail.com' ? 'Admin' : 'User';

        const { data: newProfile } = await supabase
          .from('profiles')
          .insert([
            {
              id: session.user.id,
              name: fallbackName,
              email: session.user.email,
              profile_pic: fallbackPic,
              role: fallbackRole,
              current_session_status: 'Logged In'
            }
          ])
          .select()
          .maybeSingle();

        profile = newProfile;
      } else if (profile.current_session_status !== 'Logged In') {
        // Sync database table row logging state text parameter live
        await supabase
          .from('profiles')
          .update({ current_session_status: 'Logged In' })
          .eq('id', session.user.id);
      }

      if (profile) {
        setFormData({
          name: profile.name,
          email: profile.email,
          age: profile.age !== null && profile.age !== undefined ? String(profile.age) : '',
          phone: profile.phone || '',
          profilePic: profile.profile_pic || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
        });
        setUserRole(profile.role);
        setIsLoggedIn(true); // Forces UI update visibility instantly

        const hasNoAge = !profile.age || String(profile.age).trim() === '';
        const hasNoPhone = !profile.phone || String(profile.phone).trim() === '';

        if (hasNoAge || hasNoPhone) {
          setAuthStep('additional_info');
        } else {
          setAuthStep(profile.role === 'Admin' ? 'admin_dashboard' : 'user_dashboard');
        }
      }
    } else {
      handleLogoutReset();
    }
  };

  // Google Sign-In with Real Supabase OAuth Redirect Flow
  const handleGoogleAuth = async () => {
    setErrorMessage('');
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    });
    if (error) setErrorMessage(error.message);
  };

  // Manual Email & Password Handler with Real Supabase Execution Path
  const handleManualAuthSubmit = async (e) => {
    e.preventDefault();
    if (!manualEmail || !manualPassword) return;
    setErrorMessage('');

    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email: manualEmail,
      password: manualPassword,
    });

    if (signInError) {
      if (signInError.message.toLowerCase().includes('invalid login credentials')) {
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email: manualEmail,
          password: manualPassword,
        });

        if (signUpError) {
          setErrorMessage(signUpError.message);
        } else {
          setErrorMessage('Account created! Logging you in...');
        }
      } else {
        setErrorMessage(signInError.message);
      }
    }
    
    setManualEmail('');
    setManualPassword('');
    setShowPassword(false);
  };

  // Save Age and Phone Number details via direct DOM layout to bypass state rendering delays
  const handleExtraDetailsSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const cleanAge = String(formData.age).trim();
    const cleanPhone = String(formData.phone).trim();

    if (!cleanAge || parseInt(cleanAge, 10) <= 0) {
      setErrorMessage('Please enter a valid age layer.');
      return;
    }

    if (cleanPhone.length !== 10) {
      setErrorMessage(`Phone number must be exactly 10 digits. Current length: ${cleanPhone.length}`);
      return;
    }

    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (user) {
      const { error } = await supabase
        .from('profiles')
        .update({
          age: parseInt(cleanAge, 10),
          phone: cleanPhone,
          current_session_status: 'Logged In'
        })
        .eq('id', user.id);

      if (error) {
        setErrorMessage(error.message);
      } else {
        setIsLoggedIn(true);
        setIsEditing(false);
        setAuthStep(userRole === 'Admin' ? 'admin_dashboard' : 'user_dashboard');
      }
    } else {
      setErrorMessage(userError?.message || 'No active session discovered. Please re-authenticate.');
    }
  };

  const handleLogoutAction = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      // Synchronize logout profile row state text
      await supabase
        .from('profiles')
        .update({ current_session_status: 'Not Logged In' })
        .eq('id', user.id);
    }
    await supabase.auth.signOut();
    handleLogoutReset();
  };

  const handleLogoutReset = () => {
    setIsLoggedIn(false);
    setIsEditing(false);
    setAuthStep('landing');
    setUserRole('User');
    setErrorMessage('');
    setFormData({ name: '', email: '', age: '', phone: '', profilePic: '' });
  };

  const handlePhoneInputChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, phone: numericValue });
  };

  const incrementAge = () => {
    setFormData(prev => {
      const currentAge = parseInt(prev.age, 10) || 0;
      if (currentAge >= 120) return prev;
      return { ...prev, age: String(currentAge + 1) };
    });
  };

  const decrementAge = () => {
    setFormData(prev => {
      const currentAge = parseInt(prev.age, 10) || 0;
      if (currentAge <= 1) return { ...prev, age: '' };
      return { ...prev, age: String(currentAge - 1) };
    });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef, setIsProfileOpen]);

  return (
    <nav className="fixed z-50 select-none flex transition-all duration-300 left-4 top-4 right-4 h-12 w-auto flex-row justify-between items-center bg-transparent lg:left-6 lg:top-6 lg:bottom-6 lg:w-16 lg:h-auto lg:flex-col lg:justify-between">
      
      <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-full shadow-lg h-full px-4 flex-row gap-4 py-0 lg:w-full lg:h-auto lg:py-5 lg:flex-col lg:gap-6 lg:px-0">
        {isHomePage ? (
          <button 
            onClick={(e) => { e.stopPropagation(); setIsProfileOpen(!isProfileOpen); }}
            className={`transition-all border-0 bg-transparent cursor-pointer flex items-center justify-center p-0 rounded-full overflow-hidden h-6 w-6 lg:h-7 lg:w-7 ${isProfileOpen ? 'scale-110 ring-2 ring-[#00A3FF]' : 'hover:scale-105 active:scale-95'}`}
          >
            {isLoggedIn && formData.profilePic ? (
              <img src={formData.profilePic} alt="User Profile" className="h-full w-full object-cover" />
            ) : (
              <User className="h-4 w-4 lg:h-5 lg:w-5 stroke-[2] text-[#0B192C] dark:text-slate-300" />
            )}
          </button>
        ) : (
          <button onClick={() => { setIsProfileOpen(false); navigate('/'); }} className="text-[#0B192C] dark:text-slate-300 hover:scale-105 active:scale-95 transition-all border-0 bg-transparent cursor-pointer">
            <Menu className="h-4 w-4 lg:h-5 lg:w-5 stroke-[2]" />
          </button>
        )}

        <button onClick={() => { setIsProfileOpen(false); navigate('/about'); }} className={`hover:scale-105 active:scale-95 transition-all border-0 bg-transparent cursor-pointer ${location.pathname === '/about' ? 'text-[#00A3FF]' : 'text-[#0B192C] dark:text-slate-300'}`}>
          <Info className="h-3.5 w-3.5 lg:h-4 lg:w-4 stroke-[2]" />
        </button>
        <button onClick={() => { setIsProfileOpen(false); navigate('/contact'); }} className={`hover:scale-105 active:scale-95 transition-all border-0 bg-transparent cursor-pointer ${location.pathname === '/contact' ? 'text-[#00A3FF]' : 'text-[#0B192C] dark:text-slate-300'}`}>
          <Phone className="h-3.5 w-3.5 lg:h-4 lg:w-4 stroke-[2]" />
        </button>
        <div className="rounded-full bg-[#00A3FF] flex items-center justify-center text-white shadow-md h-7 w-7 mt-0 lg:h-10 lg:w-10 lg:mt-1">
          <ArrowUpDown className="h-3.5 w-3.5 lg:h-4 lg:w-4 stroke-[2.5]" />
        </div>
      </div>

      {isProfileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 dark:bg-black/40 backdrop-blur-md">
          <div ref={dropdownRef} className="w-full max-w-md border p-6 sm:p-8 shadow-2xl rounded-2xl overflow-hidden text-left bg-[#0B192C] border-slate-800 text-white">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div>
                <span className="text-[10px] font-mono font-black tracking-widest text-[#00A3FF] uppercase">// SYSTEM MEMBERSHIP</span>
                <h4 className="text-sm font-black uppercase tracking-wide text-white">
                  {isLoggedIn ? (authStep === 'additional_info' || isEditing ? 'Modify Parameters' : userRole === 'Admin' ? 'Admin Environment' : 'User Member Card') : authStep === 'landing' || authStep === 'manual_auth' ? 'Sign In Portal' : 'Complete Registration'}
                </h4>
              </div>
              <button onClick={() => setIsProfileOpen(false)} className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 border-0 bg-transparent cursor-pointer">
                <X className="h-4 w-4 text-white" />
              </button>
            </div>

            {errorMessage && (
              <div className="mb-4 p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-xs font-mono text-rose-400">
                {errorMessage}
              </div>
            )}

            {isLoggedIn ? (
              <div>
                {authStep === 'additional_info' || isEditing ? (
                  <form onSubmit={handleExtraDetailsSubmit} className="space-y-5 bg-transparent">
                    <div className="flex flex-col items-center text-center p-5 bg-white/5 border border-white/10 rounded-xl space-y-3">
                      {formData.profilePic && (
                        <img src={formData.profilePic} alt="Verification Payload" className="h-24 w-24 rounded-full border-2 border-sky-500/40 shadow-md object-cover" />
                      )}
                      <div className="space-y-0.5">
                        <h5 className="text-base font-black uppercase text-white">{formData.name}</h5>
                        <p className="text-sm font-mono font-bold text-slate-300">{formData.email}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono font-black text-slate-400 uppercase">// AGE</label>
                        <div className="relative w-full flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                          <input type="number" min="1" max="120" placeholder="24..." required value={formData.age} onChange={(e) => { const val = e.target.value; if (val === '' || parseInt(val, 10) > 0) setFormData({...formData, age: val}); }} className="w-full p-3.5 pr-8 text-xs font-mono font-black border-0 bg-transparent text-white focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                          <div className="absolute right-2 flex flex-col gap-0.5 justify-center h-full z-10 text-slate-400">
                            <button type="button" onClick={incrementAge} className="p-0.5 hover:text-white border-0 bg-transparent cursor-pointer"><ChevronUp className="h-3.5 w-3.5 stroke-[3] text-white" /></button>
                            <button type="button" onClick={decrementAge} className="p-0.5 hover:text-white border-0 bg-transparent cursor-pointer"><ChevronDown className="h-3.5 w-3.5 stroke-[3] text-white" /></button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono font-black text-slate-400 uppercase">// PHONE NUMBER</label>
                        <input type="text" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} required placeholder="10-DIGIT NO..." value={formData.phone} onChange={handlePhoneInputChange} className="w-full p-3.5 text-xs font-mono font-black rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:outline-none" />
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-2">
                      {isEditing && (
                        <button type="button" onClick={() => setIsEditing(false)} className="w-1/3 p-4 bg-white/10 text-white rounded-xl text-xs font-black uppercase border-0 transition-all cursor-pointer hover:bg-white/20 text-center">
                          Cancel
                        </button>
                      )}
                      <button type="submit" className={`p-4 bg-[#00A3FF] text-white rounded-xl text-xs font-black uppercase tracking-widest border-0 transition-all cursor-pointer shadow-md hover:bg-sky-600 text-center ${isEditing ? 'w-2/3' : 'w-full'}`}>
                        {isEditing ? 'Save Changes' : 'Register Profile'}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between gap-2.5 p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                        <span className="text-xs font-black uppercase tracking-wide text-white">Profile Verified</span>
                      </div>
                      
                      <button 
                        onClick={() => setIsEditing(true)} 
                        className="flex items-center gap-1 py-1 px-2.5 rounded-lg border-0 bg-white/10 hover:bg-white/20 text-white text-[10px] font-mono font-bold cursor-pointer transition-all"
                      >
                        <Edit3 className="h-3 w-3 text-[#00A3FF]" />
                        <span>EDIT</span>
                      </button>
                    </div>

                    <div className="flex flex-col items-center text-center p-5 bg-white/5 border border-white/10 rounded-xl space-y-3">
                      {formData.profilePic && (
                        <img src={formData.profilePic} alt="Swimmer Profile Card" className="h-24 w-24 rounded-full border-2 border-emerald-500/40 shadow-md object-cover" />
                      )}
                      <div className="space-y-1">
                        <h5 className="text-base font-black tracking-wide uppercase text-white">{formData.name}</h5>
                        <p className="text-sm font-mono font-bold text-slate-300">{formData.email}</p>
                      </div>
                      
                      {userRole !== 'Admin' && (
                        <div className="w-full pt-3 mt-1 border-t border-white/10 grid grid-cols-2 gap-2 text-xs text-left font-black">
                          <div>
                            <span className="text-[9px] font-mono text-slate-400 block">AGE LEVEL</span>
                            <span className="text-white">{formData.age || '—'} Yrs</span>
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-slate-400 block">PHONE NO</span>
                            <span className="text-white">{formData.phone || '—'}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <button onClick={handleLogoutAction} className="w-full p-3 rounded-xl text-xs font-black uppercase tracking-widest bg-rose-600 hover:bg-rose-700 text-white border-0 cursor-pointer text-center">
                      Log Out From Profile
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {authStep === 'landing' && (
                  <div className="space-y-4 py-1">
                    <button onClick={handleGoogleAuth} className="w-full p-3.5 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-3 text-slate-700 shadow-sm">
                      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.355 0 3.364 2.673 1.345 6.582l3.92 3.183z"/><path fill="#4285F4" d="M23.491 12.273c0-.818-.073-1.609-.209-2.373H12v4.509h6.455a5.51 5.51 0 01-2.391 3.618v3.018h3.864c2.264-2.09 3.564-5.173 3.564-8.764z"/><path fill="#FBBC05" d="M5.266 14.235a7.125 7.125 0 010-4.47l-3.92-3.183a11.916 11.916 0 000 10.836l3.92-3.183z"/><path fill="#34A853" d="M12 24c3.245 0 5.973-1.073 7.964-2.918l-3.864-3.018c-1.073.718-2.445 1.145-4.1 1.145-3.218 0-5.936-2.173-6.91-5.1L1.21 17.273C3.218 21.191 7.227 24 12 24z"/></svg>
                      <span className="text-slate-800">Continue with Google</span>
                    </button>
                    
                    <div className="relative flex py-2 items-center">
                      <div className="flex-grow border-t border-white/10"></div>
                      <span className="flex-shrink mx-4 text-[10px] font-mono font-black text-slate-400">OR</span>
                      <div className="flex-grow border-t border-white/10"></div>
                    </div>
                    
                    <button onClick={() => setAuthStep('manual_auth')} className="w-full p-3.5 bg-transparent border-2 border-white text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/5 transition-all cursor-pointer text-center">
                      Sign In with Email & Password
                    </button>
                  </div>
                )}

                {authStep === 'manual_auth' && (
                  <form onSubmit={handleManualAuthSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono font-black text-slate-400 uppercase">EMAIL ADDRESS</label>
                      <div className="relative flex items-center">
                        <Mail className="absolute left-3 h-4 w-4 text-slate-400" />
                        <input type="email" required placeholder="enter your email..." value={manualEmail} onChange={(e) => setManualEmail(e.target.value)} className="w-full p-3 pl-10 text-xs font-mono font-black rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none" />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono font-black text-slate-400 uppercase">PASSWORD</label>
                      <div className="relative flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden pr-3">
                        <div className="flex items-center pl-3 pr-2 shrink-0"><Lock className="h-4 w-4 text-slate-400" /></div>
                        <input type={showPassword ? "text" : "password"} required placeholder="••••••••" value={manualPassword} onChange={(e) => manualPassword(e.target.value)} className="w-full p-3 pl-0 text-xs font-mono font-black border-0 bg-transparent text-white focus:outline-none" />
                        
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="p-1 rounded text-slate-400 hover:text-white border-0 bg-transparent cursor-pointer flex items-center justify-center">
                          {showPassword ? <EyeOff className="h-4 w-4 text-white" /> : <Eye className="h-4 w-4 text-white" />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <button type="button" onClick={() => { setAuthStep('landing'); setShowPassword(false); }} className="w-1/3 p-3 bg-white/10 text-white rounded-xl text-xs font-black uppercase border-0 cursor-pointer hover:bg-white/20">Back</button>
                      <button type="submit" className="w-2/3 p-3 bg-[#00A3FF] hover:bg-sky-600 text-white rounded-xl text-xs font-black uppercase tracking-widest border-0 cursor-pointer">Continue</button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="hidden lg:flex items-center justify-center grow my-4 rotate-180" style={{ writingMode: 'vertical-rl' }}>
        <span className="text-[8px] font-mono font-black tracking-[0.25em] uppercase text-slate-400/80 dark:text-slate-500 whitespace-nowrap">TRAIN • SWIM • EXCEL • CITY CORPORATION SWIMMING POOL</span>
      </div>
      
      <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-full shadow-lg h-full px-3 flex-row gap-3 py-0 lg:w-full lg:h-auto lg:py-4 lg:flex-col lg:gap-4 lg:px-0">
        <div className="rounded-full bg-[#1E293B] dark:bg-slate-800 flex items-center justify-center text-white h-7 w-7 lg:h-8 lg:w-8"><Layers className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-slate-300 dark:text-sky-400 stroke-[2]" /></div>
        <button onClick={onToggleTheme} className={`rounded-full transition-all duration-300 border-0 flex items-center justify-center h-7 w-7 lg:h-8 lg:w-8 ${currentTheme === 'night' ? 'bg-[#1A2332] text-[#00A3FF]' : 'bg-[#00A3FF] text-white'}`}>
          {currentTheme === 'night' ? <Moon className="h-3.5 w-3.5 lg:h-4 lg:w-4 stroke-[2.5]" /> : <Sun className="h-3.5 w-3.5 lg:h-4 lg:w-4 stroke-[2.5]" fill="currentColor" />}
        </button>
      </div>

    </nav>
  );
}