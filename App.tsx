import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import PrayerTimes from './components/PrayerTimes';
import Features from './components/Features';
import Donation from './components/Donation';
import Forms from './components/Forms';
import Gallery from './components/Gallery';
import News from './components/News';
import Agenda from './components/Agenda';
import Forum from './components/Forum';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

const App: React.FC = () => {
  return (
    <div className="bg-slate-100 text-slate-800">
      <Header />
      <main>
        <Hero />
        <Profile />
        <PrayerTimes />
        <Features />
        <Donation />
        <Forms />
        <Gallery />
        <News />
        <Agenda />
        <Forum />
        <Testimonials />
        <Download />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default App;