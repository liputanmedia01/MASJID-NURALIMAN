import React from 'react';

const News: React.FC = () => {
    const newsArticles = [
        {
            image: "https://picsum.photos/600/400?random=1",
            category: "Pembangunan",
            title: "Alhamdulillah, Pemasangan Kubah Utama Masjid Telah Selesai",
            excerpt: "Proses pemasangan kubah utama Masjid Nur-Aliman telah rampung. Ini adalah langkah besar dalam penyelesaian pembangunan tahap akhir..."
        },
        {
            image: "https://picsum.photos/600/400?random=2",
            category: "Kajian",
            title: "Kajian Akbar Bersama Ustadz Ternama Mengupas Fiqih Muamalah",
            excerpt: "Ratusan jamaah memadati ruangan utama masjid untuk mengikuti kajian akbar yang membahas prinsip-prinsip ekonomi syariah dalam kehidupan sehari-hari."
        },
        {
            image: "https://picsum.photos/600/400?random=3",
            category: "Sosial",
            title: "Program Berbagi Jumat Berkah Sukses Salurkan 200 Paket Sembako",
            excerpt: "Melalui donasi para jamaah, tim sosial Masjid Nur-Aliman berhasil menyalurkan paket bantuan kepada keluarga dhuafa di sekitar lingkungan masjid."
        },
    ];

    return (
        <section id="berita" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-cairo text-brand-emerald-800">Berita & Informasi Terkini</h2>
                    <p className="text-gray-600 mt-2">Ikuti perkembangan dan kegiatan terbaru dari Masjid Nur-Aliman.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsArticles.map((article, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group flex flex-col">
                            <div className="relative">
                                <img src={article.image} alt={article.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                                <span className="absolute top-2 right-2 bg-brand-emerald-600 text-white text-xs font-semibold px-2 py-1 rounded">{article.category}</span>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{article.title}</h3>
                                <p className="text-gray-600 text-sm flex-grow">{article.excerpt}</p>
                                <a href="#" className="text-brand-emerald-600 hover:text-brand-emerald-800 font-semibold mt-4 self-start">
                                    Baca Selengkapnya &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
