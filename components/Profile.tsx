import React from 'react';

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const Profile: React.FC = () => {
    const missions = [
        "Menyelenggarakan ibadah yang berkualitas, nyaman, dan khusyuk.",
        "Mengembangkan program dakwah dan pendidikan Islam yang efektif dan relevan.",
        "Memberdayakan ekonomi umat melalui program produktif seperti Bank Sampah dan Bank Shodaqoh.",
        "Memberikan pelayanan prima berbasis teknologi untuk kemudahan jamaah.",
        "Menciptakan lingkungan masjid yang bersih, asri, dan damai."
    ];

    return (
        <section id="profil" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-cairo text-brand-emerald-800">Profil Masjid Nur-Aliman</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Mengenal lebih dekat rumah ibadah kita, pusat peradaban dan kebaikan umat.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="prose max-w-none text-gray-700">
                        <h3>Sejarah Singkat</h3>
                        <p>
                            Masjid Nur-Aliman didirikan atas semangat gotong royong dan kebersamaan masyarakat Desa Wonosari. Berawal dari sebuah mushola sederhana, masjid ini terus berkembang menjadi pusat kegiatan keagamaan dan sosial bagi masyarakat sekitar. Dengan setiap tahap pembangunannya, Masjid Nur-Aliman menjadi simbol ukhuwah Islamiyah dan semangat untuk menebar manfaat seluas-luasnya.
                        </p>
                        
                        <h3>Visi Kami</h3>
                        <p className="text-xl font-semibold text-brand-emerald-700 italic border-l-4 border-brand-emerald-500 pl-4">
                            "Menjadi pusat ibadah, dakwah, dan pemberdayaan umat yang modern, dirindukan, dan membawa keberkahan bagi semua."
                        </p>
                    </div>
                    <div>
                        <div className="bg-slate-50 p-8 rounded-lg shadow-md border border-slate-200">
                            <h3 className="text-2xl font-semibold mb-6 text-brand-emerald-800">Misi Masjid</h3>
                            <ul className="space-y-4">
                                {missions.map((mission, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckIcon />
                                        <span className="ml-3 text-gray-700">{mission}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
