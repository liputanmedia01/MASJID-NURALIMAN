import React from 'react';

const ProfilePage: React.FC = () => {
    const profilePosts = [
        {
            image: "https://picsum.photos/800/400?random=mosque1",
            title: "Sejarah Singkat Masjid Nur Al-Iman",
            content: "Masjid Nur-Aliman didirikan atas semangat gotong royong dan kebersamaan masyarakat Desa Wonosari. Berawal dari sebuah mushola sederhana pada tahun 1990, masjid ini terus berkembang menjadi pusat kegiatan keagamaan dan sosial bagi masyarakat sekitar. Dengan setiap tahap pembangunannya, Masjid Nur-Aliman menjadi simbol ukhuwah Islamiyah dan semangat untuk menebar manfaat seluas-luasnya di Kecamatan Megang Sakti.",
        },
        {
            image: "https://picsum.photos/800/400?random=mosque2",
            title: "Visi & Misi Kami",
            content: "<p class='mb-4 text-xl font-semibold text-brand-emerald-700 italic border-l-4 border-brand-emerald-500 pl-4'>\"Menjadi pusat ibadah, dakwah, dan pemberdayaan umat yang modern, dirindukan, dan membawa keberkahan bagi semua.\"</p><h4 class='font-semibold mt-6 mb-2'>Misi:</h4><ul class='list-disc list-inside space-y-2'><li>Menyelenggarakan ibadah yang berkualitas, nyaman, dan khusyuk.</li><li>Mengembangkan program dakwah dan pendidikan Islam yang efektif dan relevan.</li><li>Memberdayakan ekonomi umat melalui program produktif.</li><li>Memberikan pelayanan prima berbasis teknologi untuk kemudahan jamaah.</li><li>Menciptakan lingkungan masjid yang bersih, asri, dan damai.</li></ul>",
        },
        {
            image: "https://picsum.photos/800/400?random=mosque3",
            title: "Sambutan Ketua DKM",
            content: "Assalamualaikum Warahmatullahi Wabarakatuh. Puji syukur kehadirat Allah SWT yang senantiasa melimpahkan rahmat-Nya kepada kita semua. Kami, segenap pengurus DKM Masjid Nur-Aliman, menyambut baik kehadiran platform digital ini sebagai jembatan informasi dan silaturahmi antara pengurus dan jamaah. Website ini adalah wujud komitmen kami untuk terus berinovasi dalam memberikan pelayanan terbaik. Kami berharap, melalui media ini, informasi kegiatan, laporan transparansi, dan program-program pemberdayaan umat dapat tersampaikan dengan lebih luas dan efektif. Mari bersama-sama kita makmurkan rumah Allah ini. Wassalamualaikum Warahmatullahi Wabarakatuh.",
        }
    ];

    return (
        <main className="bg-slate-50 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-cairo text-brand-emerald-800">Profil Masjid Nur-Aliman</h1>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Mengenal lebih dekat rumah ibadah kita, pusat peradaban dan kebaikan umat.</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {profilePosts.map((post, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                           {post.image && <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />}
                            <div className="p-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h2>
                                <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ProfilePage;
