import React from 'react';
import Hero from '../components/Hero';
import Amenities from '../components/Amenities';
import BookingSystem from '../components/BookingSystem';

export default function HomeView({ currentStyle, currentTheme }) {
  return (
    <div className="space-y-8">
      <Hero currentStyle={currentStyle} currentTheme={currentTheme} />
      <Amenities currentStyle={currentStyle} />
      <BookingSystem currentStyle={currentStyle} />
    </div>
  );
}