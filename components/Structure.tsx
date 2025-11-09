import React from 'react';

interface StructureCardProps {
  id: string;
  icon: React.ReactElement;
  title: string;
  description: string;
}

const StructureCard: React.FC<StructureCardProps> = ({ id, icon, title, description }) => (
  <div id={id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border border-transparent hover:border-brand-emerald-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-emerald-100 text-brand-emerald-700 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);


const Structure: React.FC = () => {
    const structures = [
        {
          id: 'dkm',
          icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a3.004 3.004 0 01-2.71-2.226l-.213-.638a1 1 0 01.52-1.265l.98-.392a1 1 0 011.266.52l.213.638a3.004 3.004 0 01-2.71 2.226zM12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>,
          title: 'Struktur & Profil DKM',
          description: 'Lihat struktur kepengurusan Dewan Kemakmuran Masjid yang amanah dan profesional dalam melayani jamaah.',
        },
        {
          id: 'irmas',
          icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0A4.998 4.998 0 0112 13a4.998 4.998 0 015.356 3.143M12 13a3 3 0 100-6 3 3 0 000 6z" /></svg>,
          title: 'Ikatan Remaja Masjid (IRMAS)',
          description: 'Wadah kreativitas dan kegiatan positif bagi generasi muda masjid untuk berkembang dalam nuansa Islami.',
        },
        {
          id: 'majelis-ibu',
          icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
          title: 'Majelis Taklim Ibu-Ibu',
          description: 'Forum silaturahmi dan pengajian khusus untuk para ibu dan muslimah, memperkuat iman dan ukhuwah.',
        },
        {
            id: 'majelis-bapak',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
            title: "Majelis Ta'lim Bapak-bapak",
            description: "Wadah kajian dan diskusi mendalam bagi para bapak-bapak untuk meningkatkan wawasan keislaman dan mempererat persaudaraan."
        }
    ];

    return (
        <section id="struktur" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-cairo text-brand-emerald-800">Struktur Organisasi Masjid</h2>
                <p className="text-gray-600 mt-2">Mengenal lebih dekat para penggerak kegiatan di Masjid Nur-Aliman.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {structures.map((item) => (
                        <StructureCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Structure;
