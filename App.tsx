import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HomeProfile from './components/HomeProfile';
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
import ProfilePage from './pages/ProfilePage';

type ViewStatus = 'home' | 'profile' | 'login' | 'dashboard';

export interface Member {
  id: number;
  name: string;
  position: string;
  phone: string;
  photo: string;
}

export interface StructureData {
  id: string;
  title: string;
  description: string;
  members: Member[];
}

const initialStructures: StructureData[] = [
    {
      id: 'dkm',
      title: 'Struktur & Profil DKM',
      description: 'Dewan Kemakmuran Masjid yang amanah dan profesional dalam melayani jamaah.',
      members: [
        { id: 1, name: 'H. Abdullah', position: 'Ketua DKM', phone: '081234567890', photo: 'https://i.pravatar.cc/150?u=dkm1' },
        { id: 2, name: 'Ahmad Fauzi', position: 'Sekretaris', phone: '081234567891', photo: 'https://i.pravatar.cc/150?u=dkm2' },
        { id: 3, name: 'Muhammad Ridwan', position: 'Bendahara', phone: '081234567892', photo: 'https://i.pravatar.cc/150?u=dkm3' },
        { id: 4, name: 'Dr. H. Yusuf', position: 'Bidang Dakwah', phone: '081234567893', photo: 'https://i.pravatar.cc/150?u=dkm4' },
        { id: 5, name: 'Ir. Sulaiman', position: 'Bidang Sarpras', phone: '081234567894', photo: 'https://i.pravatar.cc/150?u=dkm5' },
      ],
    },
    {
      id: 'irmas',
      title: 'Ikatan Remaja Masjid (IRMAS)',
      description: 'Wadah kreativitas dan kegiatan positif bagi generasi muda masjid.',
       members: [
        { id: 6, name: 'Rizki Pratama', position: 'Ketua IRMAS', phone: '085678901234', photo: 'https://i.pravatar.cc/150?u=irmas1' },
        { id: 7, name: 'Anisa Fitriani', position: 'Sekretaris', phone: '085678901235', photo: 'https://i.pravatar.cc/150?u=irmas2' },
        { id: 8, name: 'Farhan Maulana', position: 'Bendahara', phone: '085678901236', photo: 'https://i.pravatar.cc/150?u=irmas3' },
        { id: 9, name: 'Putri Aulia', position: 'Div. Kreatif', phone: '085678901237', photo: 'https://i.pravatar.cc/150?u=irmas4' },
        { id: 10, name: 'Fajar Nugraha', position: 'Div. Olahraga', phone: '085678901238', photo: 'https://i.pravatar.cc/150?u=irmas5' },
      ],
    },
    {
      id: 'majelis-ibu',
      title: 'Majelis Taklim Ibu-Ibu',
      description: 'Forum silaturahmi dan pengajian khusus untuk para ibu dan muslimah.',
       members: [
        { id: 11, name: 'Hj. Siti Aminah', position: 'Koordinator', phone: '087712345678', photo: 'https://i.pravatar.cc/150?u=majelis1' },
        { id: 12, name: 'Ibu Fatimah', position: 'Sekretaris', phone: '087712345679', photo: 'https://i.pravatar.cc/150?u=majelis2' },
        { id: 13, name: 'Ibu Khadijah', position: 'Bendahara', phone: '087712345680', photo: 'https://i.pravatar.cc/150?u=majelis3' },
        { id: 14, name: 'Ibu Aisyah', position: 'Anggota Aktif', phone: '087712345681', photo: 'https://i.pravatar.cc/150?u=majelis4' },
        { id: 15, name: 'Ibu Maryam', position: 'Anggota Aktif', phone: '087712345682', photo: 'https://i.pravatar.cc/150?u=majelis5' },
      ],
    },
];


const App: React.FC = () => {
  const [viewStatus, setViewStatus] = useState<ViewStatus>('home');
  const [scrollToSection, setScrollToSection] = useState<string | null>(null);
  const [structures, setStructures] = useState<StructureData[]>(initialStructures);

  const handleNavigate = (page: 'home' | 'profile', sectionId?: string) => {
    if (page === 'home' && sectionId) {
      if (viewStatus !== 'home') {
        setViewStatus('home');
        setScrollToSection(sectionId);
      } else {
        // Already on the home page, just scroll
        const targetElement = document.querySelector(sectionId);
        if (targetElement) {
          const headerElement = document.querySelector('header');
          const headerHeight = headerElement ? headerElement.offsetHeight + 20 : 80;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = targetPosition - headerHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    } else {
      setViewStatus(page);
      window.scrollTo(0, 0); // Scroll to top on page change
    }
  };

  useEffect(() => {
    if (viewStatus === 'home' && scrollToSection) {
      const timer = setTimeout(() => {
        const targetElement = document.querySelector(scrollToSection);
        if (targetElement) {
          const headerElement = document.querySelector('header');
          const headerHeight = headerElement ? headerElement.offsetHeight + 20 : 80;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = targetPosition - headerHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
        setScrollToSection(null); // Reset after scrolling
      }, 100); // Delay to allow the page to render
      return () => clearTimeout(timer);
    }
  }, [viewStatus, scrollToSection]);


  const handleLoginSuccess = () => {
    setViewStatus('dashboard');
  };

  const handleLogout = () => {
    setViewStatus('home');
  };
  
  const renderContent = () => {
    switch (viewStatus) {
      case 'login':
        return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
      case 'dashboard':
        return <AdminDashboard onLogout={handleLogout} structures={structures} setStructures={setStructures} />;
      case 'profile':
        return (
          <>
            <Header onAdminLoginClick={() => setViewStatus('login')} onNavigate={handleNavigate} currentPage="profile" />
            <ProfilePage />
            <Footer />
          </>
        );
      case 'home':
      default:
        return (
          <div className="bg-slate-100 text-slate-800">
            <Header onAdminLoginClick={() => setViewStatus('login')} onNavigate={handleNavigate} currentPage="home" />
            <main>
              <Hero />
              <HomeProfile onNavigate={handleNavigate} />
              <Structure structures={structures} />
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
    }
  };

  return <>{renderContent()}</>;
};

export default App;