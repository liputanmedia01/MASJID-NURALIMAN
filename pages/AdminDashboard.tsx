import React, { useState } from 'react';
import Sidebar from '../components/admin/Sidebar';
import DashboardHome from '../components/admin/DashboardHome';
import ContentManager from '../components/admin/ContentManager';
import GalleryManager from '../components/admin/GalleryManager';
import DownloadManager from '../components/admin/DownloadManager';
import StructureManager from '../components/admin/StructureManager';
import ServicesManager from '../components/admin/ServicesManager';
import FormSubmissions from '../components/admin/FormSubmissions';
import DonationManager from '../components/admin/DonationManager';
import SettingsManager from '../components/admin/SettingsManager';
import ProfileManager from '../components/admin/ProfileManager';
import { type StructureData } from '../App';

interface AdminDashboardProps {
  onLogout: () => void;
  structures: StructureData[];
  setStructures: React.Dispatch<React.SetStateAction<StructureData[]>>;
}

type AdminSection = 'dashboard' | 'profil' | 'berita' | 'agenda' | 'galeri' | 'download' | 'struktur' | 'layanan' | 'donasi' | 'submissions' | 'pengaturan';


const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout, structures, setStructures }) => {
    const [activeSection, setActiveSection] = useState<AdminSection>('dashboard');
    
    // Simulating database with state
     const [profilePosts, setProfilePosts] = useState([
        { id: 1, title: "Sejarah Singkat Masjid Nur Al-Iman", content: "Masjid Nur-Aliman didirikan atas semangat gotong royong...", image: "https://picsum.photos/800/400?random=mosque1" },
        { id: 2, title: "Visi & Misi Kami", content: "<p>Visi...</p><ul><li>Misi 1...</li></ul>", image: "https://picsum.photos/800/400?random=mosque2" },
    ]);
    const [news, setNews] = useState([
        { id: 1, title: "Pemasangan Kubah Utama Selesai", category: "Pembangunan", tags: "masjid, kubah", date: "2024-05-20" },
        { id: 2, title: "Kajian Akbar Fiqih Muamalah", category: "Kajian", tags: "fiqih, ekonomi", date: "2024-05-18" },
    ]);
    const [agenda, setAgenda] = useState([
        { id: 1, title: "Kajian Bulanan: Tafsir Al-Quran", date: "2024-12-25", time: "19.30 WIB" },
        { id: 2, title: "Mabit & Muhasabah Akhir Tahun", date: "2024-12-31", time: "20.00 WIB" },
    ]);
    const [galleryItems, setGalleryItems] = useState([
        { id: 1, url: "https://picsum.photos/600/400?random=10", title: "Kegiatan 1" },
        { id: 2, url: "https://picsum.photos/600/400?random=11", title: "Kegiatan 2" },
    ]);
    const [downloadableFiles, setDownloadableFiles] = useState([
        { id: 1, title: "Jadwal Imam & Khotib - Desember 2024", type: "PDF", size: "2.3 MB" },
        { id: 2, title: "Laporan Keuangan - Q3 2024", type: "PDF", size: "5.1 MB" },
    ]);
     const [services, setServices] = useState([
        { id: 1, title: 'Kajian Rutin', description: 'Program pengajian rutin mingguan dan bulanan untuk memperdalam ilmu agama bersama ustadz-ustadz terkemuka.' },
        { id: 2, title: 'Layanan ZISWAF', description: 'Penerimaan dan penyaluran Zakat, Infaq, Shodaqoh, dan Wakaf untuk membantu masyarakat yang membutuhkan.' },
    ]);

    const renderContent = () => {
        switch (activeSection) {
            case 'dashboard': return <DashboardHome />;
            case 'profil': return <ProfileManager items={profilePosts} setItems={setProfilePosts} />;
            case 'berita': return <ContentManager contentType="Berita" items={news} setItems={setNews} />;
            case 'agenda': return <ContentManager contentType="Agenda" items={agenda} setItems={setAgenda} />;
            case 'galeri': return <GalleryManager items={galleryItems} setItems={setGalleryItems} />;
            case 'download': return <DownloadManager items={downloadableFiles} setItems={setDownloadableFiles} />;
            case 'struktur': return <StructureManager items={structures} setItems={setStructures} />;
            case 'layanan': return <ServicesManager items={services} setItems={setServices} />;
            case 'donasi': return <DonationManager />;
            case 'submissions': return <FormSubmissions />;
            case 'pengaturan': return <SettingsManager />;
            default: return <DashboardHome />;
        }
    };

    return (
        <div className="flex min-h-screen bg-slate-100">
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} onLogout={onLogout} />
            <main className="flex-1 p-6 lg:p-10">
                {renderContent()}
            </main>
        </div>
    );
};

export default AdminDashboard;