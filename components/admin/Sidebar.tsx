import React from 'react';

type AdminSection = 'dashboard' | 'profil' | 'berita' | 'agenda' | 'galeri' | 'download' | 'struktur' | 'layanan' | 'donasi' | 'submissions' | 'pengaturan';

interface SidebarProps {
  activeSection: AdminSection;
  setActiveSection: (section: AdminSection) => void;
  onLogout: () => void;
}

const NavLink: React.FC<{
  section: AdminSection;
  activeSection: AdminSection;
  setActiveSection: (section: AdminSection) => void;
  children: React.ReactNode;
  icon: React.ReactNode;
}> = ({ section, activeSection, setActiveSection, children, icon }) => (
  <button
    onClick={() => setActiveSection(section)}
    className={`w-full text-left flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
      activeSection === section
        ? 'bg-brand-emerald-700 text-white'
        : 'text-gray-200 hover:bg-brand-emerald-800 hover:text-white'
    }`}
  >
    <span className="mr-3">{icon}</span>
    {children}
  </button>
);

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, onLogout }) => {
  return (
    <div className="w-64 bg-brand-emerald-900 text-white flex flex-col p-4">
        <div className="text-center py-4 border-b border-brand-emerald-700">
            <h1 className="text-xl font-bold font-cairo">CMS Nur-Aliman</h1>
            <p className="text-xs text-brand-emerald-300">Admin Dashboard</p>
        </div>
        <nav className="flex-1 mt-6 space-y-2">
            <div>
                 <NavLink section="dashboard" activeSection={activeSection} setActiveSection={setActiveSection} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>}>Dashboard</NavLink>
            </div>
            
            <div className="pt-4">
                <h3 className="px-4 text-xs font-semibold text-brand-emerald-400 uppercase tracking-wider">Manajemen Konten</h3>
                <div className="mt-2 space-y-1">
                    <NavLink section="profil" activeSection={activeSection} setActiveSection={setActiveSection} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>}>Profil</NavLink>
                    <NavLink section="berita" activeSection={activeSection} setActiveSection={setActiveSection} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2h1a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2zm2 0a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1H4z" clipRule="evenodd" /></svg>}>Berita</NavLink>
                    <NavLink section="agenda" activeSection={activeSection} setActiveSection={setActiveSection} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>}>Agenda</NavLink>
                    <NavLink section="galeri" activeSection={activeSection} setActiveSection={setActiveSection} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>}>Galeri</NavLink>
                    <NavLink section="download" activeSection={activeSection} setActiveSection={setActiveSection} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>}>Download Manager</NavLink>
                </div>
            </div>

             <div className="pt-4">
                <h3 className="px-4 text-xs font-semibold text-brand-emerald-400 uppercase tracking-wider">Interaksi Jamaah</h3>
                 <div className="mt-2 space-y-1">
                    <NavLink section="submissions" activeSection={activeSection} setActiveSection={setActiveSection} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>}>Form Submissions</NavLink>
                </div>
            </div>
            
            <div className="pt-4">
                <h3 className="px-4 text-xs font-semibold text-brand-emerald-400 uppercase tracking-wider">Pengaturan Situs</h3>
                <div className="mt-2 space-y-1">
                    <NavLink section="struktur" activeSection={activeSection} setActiveSection={setActiveSection} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>}>Struktur Organisasi</NavLink>
                    <NavLink section="layanan" activeSection={activeSection} setActiveSection={setActiveSection} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" /></svg>}>Program & Layanan</NavLink>
                    <NavLink section="donasi" activeSection={activeSection} setActiveSection={setActiveSection} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h12v4a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 6a2 2 0 00-2 2v2a2 2 0 002 2h12a2 2 0 002-2v-2a2 2 0 00-2-2H4z" clipRule="evenodd" /></svg>}>Laporan Donasi</NavLink>
                    <NavLink section="pengaturan" activeSection={activeSection} setActiveSection={setActiveSection} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01-.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>}>Pengaturan Umum</NavLink>
                </div>
            </div>
        </nav>
        <div className="mt-auto">
            <button
                onClick={onLogout}
                className="w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-md bg-brand-emerald-800 hover:bg-red-700 text-white transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                </svg>
                Logout
            </button>
        </div>
    </div>
  );
};

export default Sidebar;
