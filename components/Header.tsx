import React, { useState, useEffect } from 'react';
import Clock from './Clock';

interface HeaderProps {
  onAdminLoginClick: () => void;
  onNavigate: (page: 'home' | 'profile', sectionId?: string) => void;
  currentPage: 'home' | 'profile';
}

const LogoIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-emerald-700" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L1 9l4 2.18V18h14V11.18L23 9l-11-7zm0 2.24L19.5 9h-15L12 4.24zM5 12.07l7 3.5 7-3.5V16H5v-3.93zM4 18v-4.5l8 4 8-4V18H4z"/>
  </svg>
);

const MenuIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const RunningText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex-1 bg-brand-emerald-700 text-white py-1 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm font-medium mx-4">{text}</span>
      </div>
    </div>
  );
};

interface TopBarProps {
  onAdminLoginClick: () => void;
  onNavigate: (page: 'home' | 'profile', sectionId?: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({ onAdminLoginClick, onNavigate }) => (
    <div className="bg-brand-emerald-800 text-white text-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
            <Clock />
            <div className='hidden md:block w-1/3'>
                <RunningText text="Kajian Akbar malam ini pukul 19.30 | Infaq pembangunan tahap 3 sudah mencapai 85% | Jadwal Qurban akan diumumkan tanggal 10 Dzulhijjah." />
            </div>
            <div className="hidden md:flex items-center space-x-4">
                <a href="#donasi" onClick={(e) => { e.preventDefault(); onNavigate('home', '#donasi'); }} className="bg-brand-gold-500 hover:bg-brand-gold-300 text-brand-emerald-900 font-bold py-1 px-3 rounded-md text-xs transition-colors">Donasi</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('home', '#contact'); }} className="hover:text-brand-gold-300 transition-colors">Hubungi DKM</a>
                <button onClick={onAdminLoginClick} className="hover:text-brand-gold-300 transition-colors">Login Admin</button>
            </div>
        </div>
    </div>
);


const Header: React.FC<HeaderProps> = ({ onAdminLoginClick, onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const navLinks = [
    { name: 'Home', href: '#home', page: 'home' },
    { name: 'Profil', href: '#profil', page: 'profile' },
    { 
      name: 'Struktur', 
      href: '#struktur',
      page: 'home',
      sublinks: [
        { name: 'DKM Masjid', href: '#dkm' },
        { name: 'IRMAS Masjid', href: '#irmas' },
        { name: 'Majelis Ibu-Ibu', href: '#majelis-ibu' },
      ]
    },
    { name: 'Program', href: '#features', page: 'home' },
    { name: 'Layanan', href: '#layanan', page: 'home' },
    { name: 'Galeri', href: '#gallery', page: 'home' },
    { name: 'Berita', href: '#berita', page: 'home' },
    { name: 'Agenda', href: '#agenda', page: 'home' },
    { name: 'Forum', href: '#forum', page: 'home' },
    { name: 'Testimoni', href: '#testimoni', page: 'home' },
    { name: 'Download', href: '#download', page: 'home' },
    { name: 'Lokasi & Kontak', href: '#contact', page: 'home' },
  ];
  
  const allSectionLinks = navLinks.flatMap(l => l.sublinks ? [{name: l.name, href: l.href}, ...l.sublinks] : {name: l.name, href: l.href});

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: 'home' | 'profile', href: string) => {
    e.preventDefault();
    onNavigate(page, href);
    setIsOpen(false);
  };
  

  useEffect(() => {
    if (currentPage !== 'home') {
      setActiveLink('');
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 150; 
      let currentActive = '';

      allSectionLinks.forEach(link => {
        const element = document.querySelector(link.href) as HTMLElement;
        if (element && element.offsetTop <= scrollPosition + offset) {
          currentActive = link.href;
        }
      });
      
      setActiveLink(currentActive || '#home');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  return (
    <header className="sticky top-0 z-50">
      <TopBar onAdminLoginClick={onAdminLoginClick} onNavigate={onNavigate} />
       <div className="bg-white/80 backdrop-blur-md shadow-md" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23065f46' fill-opacity='0.05'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h5v-4h1v4h9v-4h1v4h9v-4h1v4h9v-4h1v4h9v-4h1v4h9v-4h1v4h9v-4h1v4h9v-4h1v4h9v-4h1v4h9v-4h1v4h5v1h-5v9h5v1h-5v9h5v1h-5v9h5v1h-5v9h5v1h-5v9h5v1h-5v9h5v1h-5v9h5v1h-5v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm-9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm-9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm-9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm-9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9z'/%3E%3Cpath d='M6 5V0h1v5h9V0h1v5h9V0h1v5h9V0h1v5h9V0h1v5h9V0h1v5h9V0h1v5h9V0h1v5h9V0h1v5h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h5v1h-5v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H6v4H5v-4H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4v-9H0v-1h4V0h2v5h8V0h1v5h9V0h1v5h9V0h1v5h9V0h1v5h9V0h1v5h9V0h1v5h9V0h1v5h9V0h1v5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home', '#home')} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <LogoIcon />
                    <div className="flex flex-col">
                        <span className="self-center text-2xl font-cairo font-bold whitespace-nowrap text-brand-emerald-800">Masjid Nur-Aliman</span>
                        <span className="text-xs text-gray-500 font-medium">Masjid Sebagai Pusat Ibadah, Dakwah, dan Pemberdayaan Umat.</span>
                    </div>
                </a>
                <div className="hidden lg:flex lg:items-center lg:space-x-6">
                   {navLinks.map((link) => {
                        const isLinkActive = (currentPage === 'home' && (activeLink === link.href || (link.sublinks && link.sublinks.some(sub => sub.href === activeLink)))) || (currentPage === 'profile' && link.name === 'Profil');
                        const linkClasses = `transition duration-150 ease-in-out text-sm whitespace-nowrap ${isLinkActive ? 'text-brand-emerald-700 font-bold' : 'text-gray-600 hover:text-brand-emerald-700 font-semibold'}`;
                        
                        return link.sublinks ? (
                            <div key={link.name} className="relative group">
                                <a href={link.href} onClick={(e) => handleLinkClick(e, 'home', link.href)} className={`${linkClasses} flex items-center`}>
                                    {link.name}
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </a>
                                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-10 border border-slate-100">
                                    {link.sublinks.map(sublink => (
                                        <a key={sublink.name} href={sublink.href} onClick={(e) => handleLinkClick(e, 'home', sublink.href)} className={`block px-4 py-2 text-sm ${activeLink === sublink.href ? 'font-bold text-brand-emerald-700 bg-gray-100' : 'text-gray-700 hover:bg-gray-100'}`}>{sublink.name}</a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.page as 'home' | 'profile', link.href)} className={linkClasses}>
                                {link.name}
                            </a>
                        )
                    })}
                </div>
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-brand-emerald-700 focus:outline-none">
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
        </div>
        {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => {
                      const isLinkActive = (currentPage === 'home' && (activeLink === link.href || (link.sublinks && link.sublinks.some(sub => sub.href === activeLink)))) || (currentPage === 'profile' && link.name === 'Profil');
                      const linkClasses = `block px-3 py-2 rounded-md text-base font-medium ${isLinkActive ? 'text-brand-emerald-700 bg-gray-100 font-bold' : 'text-gray-700 hover:text-brand-emerald-700 hover:bg-gray-100'}`;

                      return link.sublinks ? (
                            <div key={link.name}>
                                <a href={link.href} onClick={(e) => handleLinkClick(e, 'home', link.href)} className={linkClasses}>{link.name}</a>
                                <div className="pl-6">
                                    {link.sublinks.map(sublink => (
                                        <a key={sublink.name} href={sublink.href} onClick={(e) => handleLinkClick(e, 'home', sublink.href)} className={`block px-3 py-2 rounded-md text-base font-medium text-sm ${activeLink === sublink.href ? 'text-brand-emerald-700 bg-gray-100 font-bold' : 'text-gray-600 hover:text-brand-emerald-700 hover:bg-gray-100'}`}>{sublink.name}</a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.page as 'home' | 'profile', link.href)} className={linkClasses}>
                                {link.name}
                            </a>
                        )
                    })}
                     <div className="border-t border-gray-200 mt-3 pt-3 px-3 flex items-center space-x-4">
                        <a href="#donasi" onClick={(e) => handleLinkClick(e, 'home', '#donasi')} className="bg-brand-gold-500 hover:bg-brand-gold-300 text-brand-emerald-900 font-bold py-2 px-4 rounded-md text-sm transition-colors w-full text-center">Donasi</a>
                        <button onClick={() => { setIsOpen(false); onAdminLoginClick(); }} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md text-sm transition-colors w-full text-center">Login Admin</button>
                    </div>
                </div>
            </div>
        )}
      </div>
    </header>
  );
};

export default Header;