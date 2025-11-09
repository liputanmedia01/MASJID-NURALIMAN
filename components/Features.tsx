import React from 'react';

interface FeatureCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border border-transparent hover:border-brand-emerald-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-emerald-100 text-brand-emerald-700 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" /></svg>,
      title: 'Kajian Rutin',
      description: 'Program pengajian rutin mingguan dan bulanan untuk memperdalam ilmu agama bersama ustadz-ustadz terkemuka.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      title: 'Layanan ZISWAF',
      description: 'Penerimaan dan penyaluran Zakat, Infaq, Shodaqoh, dan Wakaf untuk membantu masyarakat yang membutuhkan.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>,
      title: 'Pendidikan Al-Quran',
      description: 'Kelas Tahsin dan Tahfidz Al-Quran untuk anak-anak dan dewasa, dibimbing oleh pengajar yang kompeten.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" /></svg>,
      title: 'Fasilitas Aula & Penginapan',
      description: 'Fasilitas aula serbaguna dan penginapan sederhana untuk musafir yang dapat dipesan secara online.',
    },
     {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a3.004 3.004 0 01-2.71-2.226l-.213-.638a1 1 0 01.52-1.265l.98-.392a1 1 0 011.266.52l.213.638a3.004 3.004 0 01-2.71 2.226zM12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>,
      title: 'Struktur & Profil DKM',
      description: 'Lihat struktur kepengurusan Dewan Kemakmuran Masjid yang amanah dan profesional dalam melayani jamaah.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0A4.998 4.998 0 0112 13a4.998 4.998 0 015.356 3.143M12 13a3 3 0 100-6 3 3 0 000 6z" /></svg>,
      title: 'Ikatan Remaja Masjid (IRMAS)',
      description: 'Wadah kreativitas dan kegiatan positif bagi generasi muda masjid untuk berkembang dalam nuansa Islami.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      title: 'Majelis Taklim Ibu-Ibu',
      description: 'Forum silaturahmi dan pengajian khusus untuk para ibu dan muslimah, memperkuat iman dan ukhuwah.',
    },
     {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      title: 'Pengumuman & Laporan',
      description: 'Informasi terkini kegiatan masjid dan laporan keuangan yang transparan dapat diakses oleh seluruh jamaah.',
    },
  ];
  return (
    <section id="features" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-cairo text-brand-emerald-800">Program, Layanan & Fasilitas</h2>
          <p className="text-gray-600 mt-2">Menyediakan yang terbaik untuk kenyamanan ibadah dan kegiatan umat.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;