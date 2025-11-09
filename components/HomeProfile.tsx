import React from 'react';

interface HomeProfileProps {
    onNavigate: (page: 'home' | 'profile', sectionId?: string) => void;
}

const HomeProfile: React.FC<HomeProfileProps> = ({ onNavigate }) => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <img src="https://picsum.photos/800/600?random=mosque_front" alt="Masjid Nur Al-Iman" className="w-full h-auto" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <h2 className="text-3xl font-bold font-cairo text-brand-emerald-800 mb-4">Selamat Datang di Masjid Nur-Aliman</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Berdiri atas semangat kebersamaan, Masjid Nur-Aliman berkomitmen menjadi pusat ibadah, dakwah, dan pemberdayaan umat di Musi Rawas. Kami mengundang Anda untuk mengenal lebih dekat sejarah, visi, dan program-program kami yang bertujuan untuk memakmurkan rumah Allah dan menebar manfaat bagi sesama.
                        </p>
                        <button 
                            onClick={() => onNavigate('profile')}
                            className="bg-brand-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-emerald-700 transition duration-300 transform hover:-translate-y-0.5"
                        >
                            Lihat Profil Lengkap &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeProfile;