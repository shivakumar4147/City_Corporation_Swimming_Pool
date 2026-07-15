import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import { supabase } from './supabaseClient.js';

// Import page layouts
import Hero from './components/Hero.jsx'; 
import BookingSystem from './components/BookingSystem.jsx'; 
import Amenities from './components/Amenities.jsx';       
import FacilitiesView from './views/FacilitiesView.jsx';
import AboutView from './views/AboutView.jsx';
import ContactView from './views/ContactView.jsx';

function HomeLayout({ currentStyle, currentTheme, isLoggedIn, setIsProfileOpen, onActionClick }) {
  return (
    <>
      <Hero 
        currentStyle={currentStyle || {}} 
        currentTheme={currentTheme} 
        isLoggedIn={isLoggedIn}
        setIsProfileOpen={setIsProfileOpen}
        onActionClick={onActionClick}
      />
      <BookingSystem 
        currentStyle={currentStyle || {}} 
        isLoggedIn={isLoggedIn}
        setIsProfileOpen={setIsProfileOpen}
        onActionClick={onActionClick}
      />
      <Amenities currentStyle={currentStyle || {}} />
    </>
  );
}

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  const [currentStyle, setCurrentStyle] = useState({
    isDark: currentTheme === 'night',
    buttonColor: 'bg-[#0B192C]'
  });

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('User'); 
  const [authStep, setAuthStep] = useState('logged-out');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    phone: '',
    avatar: ''
  });

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
    const root = window.document.documentElement;
    if (currentTheme === 'night') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    setCurrentStyle({
      isDark: currentTheme === 'night',
      buttonColor: currentTheme === 'night' ? 'bg-slate-800' : 'bg-[#0B192C]'
    });
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'night' ? 'light' : 'night');
  };

  // Authenticated Smooth Scroll Gate Interceptor
  const handleBookingActionCheck = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      setIsLoggedIn(false);
      setIsProfileOpen(true);
      return;
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('current_session_status')
      .eq('id', user.id)
      .maybeSingle();

    if (profile && profile.current_session_status === 'Logged In') {
      const scheduleSection = document.getElementById('booking-schedule-section');
      if (scheduleSection) {
        // Updated back to 'smooth' for a fluid scroll transition down the page viewport
        scheduleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setIsLoggedIn(false);
      setIsProfileOpen(true);
    }
  };

  return (
    <div className={`min-h-screen w-full relative overflow-x-hidden transition-colors duration-300 ${currentTheme === 'night' ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      <div className="relative z-10 w-full">
        <Navbar 
          currentStyle={currentStyle || {}} 
          onToggleTheme={toggleTheme} 
          currentTheme={currentTheme} 
          isProfileOpen={isProfileOpen}
          setIsProfileOpen={setIsProfileOpen}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          authStep={authStep}
          setAuthStep={setAuthStep}
          formData={formData}
          setFormData={setFormData}
          userRole={userRole}
          setUserRole={setUserRole}
        />

        <main className="w-full pb-24">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomeLayout 
                  currentStyle={currentStyle} 
                  currentTheme={currentTheme} 
                  isLoggedIn={isLoggedIn}
                  setIsProfileOpen={setIsProfileOpen}
                  onActionClick={handleBookingActionCheck}
                />
              } 
            />
            <Route path="/facilities" element={<FacilitiesView currentStyle={currentStyle} />} />
            <Route path="/about" element={<AboutView currentStyle={currentStyle} />} />
            <Route path="/contact" element={<ContactView currentStyle={currentStyle} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}