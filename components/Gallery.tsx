import React from 'react';

const Gallery: React.FC = () => {
    const images = [
        "https://picsum.photos/600/400?random=10",
        "https://picsum.photos/600/400?random=11",
        "https://picsum.photos/600/400?random=12",
        "https://picsum.photos/600/400?random=13",
        "https://picsum.photos/600/400?random=14",
        "https://picsum.photos/600/400?random=15",
    ];

    return (
        <section id="gallery" className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Galeri Kegiatan</h2>
                    <p className="text-gray-600 mt-2">Momen-momen kebersamaan di Masjid Nur-Aliman.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                            <img src={src} alt={`Kegiatan Masjid ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                             <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-bold text-lg">Judul Kegiatan {index + 1}</h3>
                                <p className="text-sm">Deskripsi singkat foto.</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <a href="#" className="bg-brand-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-700 transition duration-300">Lihat Semua Foto & Video</a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
