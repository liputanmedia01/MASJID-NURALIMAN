import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Structure from './components/Structure';
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
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

type AuthStatus = 'public' | 'login' | 'dashboard';

const App: React.FC = () => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('public');

  const handleAdminLoginClick = () => {
    setAuthStatus('login');
  };
  
  const handleLoginSuccess = () => {
    setAuthStatus('dashboard');
  };

  const handleLogout = () => {
    setAuthStatus('public');
  };

  if (authStatus === 'login') {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }
  
  if (authStatus === 'dashboard') {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="bg-slate-100 text-slate-800">
      <Header onAdminLoginClick={handleAdminLoginClick} />
      <main>
        <Hero />
        <Profile />
        <Structure />
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