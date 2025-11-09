import React, { useState } from 'react';

const StarRating: React.FC<{ rating: number; setRating?: (rating: number) => void }> = ({ rating, setRating }) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={ratingValue}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating && setRating(ratingValue)}
                            className="sr-only"
                        />
                        <svg
                            className={`w-6 h-6 cursor-pointer ${ratingValue <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.447a1 1 0 00-1.175 0l-3.368 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                        </svg>
                    </label>
                );
            })}
        </div>
    );
};

const Testimonials: React.FC = () => {
    const [rating, setRating] = useState(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Terima kasih atas testimoni Anda! Ulasan Anda akan kami tinjau sebelum ditampilkan.");
        (e.target as HTMLFormElement).reset();
        setRating(0);
    };

    const testimonials = [
        { name: "Muhammad Iqbal", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", rating: 5, text: "Layanan penginapan untuk musafir sangat membantu. Tempatnya bersih, nyaman, dan pengurusnya ramah. Jazakumullah khairan.", category: "Layanan" },
        { name: "Siti Aisyah", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d", rating: 5, text: "Program kajian rutinnya sangat mencerahkan dan mudah dipahami. Selalu menantikan setiap jadwal kajian di sini.", category: "Program" },
        { name: "Keluarga Hasan", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d", rating: 4, text: "Pengurus DKM sangat responsif dan amanah. Laporan keuangan yang transparan membuat kami tenang dalam berinfaq.", category: "Pengurus" },
        { name: "Abdullah (Musafir)", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026707d", rating: 5, text: "MasyaAllah, fasilitas wudhunya sangat terjaga kebersihannya. Membuat ibadah menjadi lebih khusyuk.", category: "Layanan" },
        { name: "Rizki Amelia", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026708d", rating: 5, text: "Anak saya senang sekali ikut program Tahfidz Quran. Pengajarnya sabar dan metodenya menyenangkan. Terima kasih DKM Nur-Aliman.", category: "Program" },
        { name: "Sulaiman", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026709d", rating: 4, text: "Bank Sampah adalah ide brilian! Mengajarkan kami untuk bersedekah sekaligus menjaga lingkungan. Pengurusnya sangat membantu dalam prosesnya.", category: "Program" },
        { name: "Dewi Lestari", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026710d", rating: 5, text: "Saya merasa sangat terbantu dengan adanya Bank Shodaqoh. Prosesnya mudah dan benar-benar tanpa bunga. Semoga program ini terus berjalan.", category: "Layanan" },
        { name: "Yusuf Al-Ghifari", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026711d", rating: 5, text: "Para pengurus, terutama petugas keamanan, sangat ramah dan sigap. Membuat kami merasa aman dan nyaman beribadah kapan pun.", category: "Pengurus" },
        { name: "Ahmad & Keluarga", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026712d", rating: 5, text: "Proses donasi online via website sangat mudah dan cepat. Laporan donasinya juga update, jadi kami bisa lihat progresnya langsung.", category: "Layanan" },
        { name: "IRMAS Nur-Aliman", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026713d", rating: 5, text: "Kami sebagai remaja masjid merasa sangat didukung oleh para pengurus DKM. Setiap proposal kegiatan kami selalu disambut baik dan dibimbing.", category: "Pengurus" },
    ];

    return (
        <section id="testimoni" className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-cairo text-brand-emerald-800">Testimoni Jamaah</h2>
                    <p className="text-gray-600 mt-2">Dengarkan apa kata mereka tentang layanan, program, dan kepengurusan Masjid Nur-Aliman.</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Testimonial Form */}
                    <div className="lg:col-span-1 bg-white p-8 rounded-lg shadow-lg border border-slate-200">
                        <h3 className="text-2xl font-semibold mb-6 text-brand-emerald-800">Bagikan Pengalaman Anda</h3>
                        <form onSubmit={handleSubmit}>
                             <div className="mb-4">
                                <label htmlFor="testi_name" className="block text-gray-700 font-medium mb-2">Nama Anda</label>
                                <input type="text" id="testi_name" placeholder="Nama lengkap" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="testi_category" className="block text-gray-700 font-medium mb-2">Kategori Testimoni</label>
                                <select id="testi_category" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required>
                                    <option>Layanan Masjid</option>
                                    <option>Program Kegiatan</option>
                                    <option>Pengurus DKM</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Rating Anda</label>
                                <StarRating rating={rating} setRating={setRating} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="testi_message" className="block text-gray-700 font-medium mb-2">Ulasan Anda</label>
                                <textarea id="testi_message" rows={4} placeholder="Tuliskan pengalaman Anda di sini..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required></textarea>
                            </div>
                             <div className="mb-4">
                                <label htmlFor="testi_photo" className="block text-gray-700 font-medium mb-2">Unggah Foto (Opsional)</label>
                                <input type="file" id="testi_photo" accept="image/*" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-emerald-50 file:text-brand-emerald-700 hover:file:bg-brand-emerald-100" />
                            </div>
                             <div className="mb-6">
                                <label htmlFor="testi_video" className="block text-gray-700 font-medium mb-2">Link Video (Opsional)</label>
                                <input type="url" id="testi_video" placeholder="https://youtube.com/..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" />
                            </div>
                            <button type="submit" className="w-full bg-brand-gold-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-gold-700 transition duration-300">Kirim Testimoni</button>
                        </form>
                    </div>
                    {/* Testimonials Gallery */}
                    <div className="lg:col-span-2">
                        <div className="grid md:grid-cols-2 gap-6">
                            {testimonials.map((testi, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-slate-200 flex flex-col">
                                    <div className="flex items-center mb-4">
                                        <img src={testi.avatar} alt={testi.name} className="w-12 h-12 rounded-full mr-4" />
                                        <div>
                                            <p className="font-bold text-gray-800">{testi.name}</p>
                                            <StarRating rating={testi.rating} />
                                        </div>
                                    </div>
                                    <blockquote className="text-gray-600 italic border-l-4 border-brand-emerald-200 pl-4 flex-grow">
                                        "{testi.text}"
                                    </blockquote>
                                    <div className="mt-4">
                                        <span className="text-xs font-semibold bg-brand-emerald-100 text-brand-emerald-800 px-2 py-1 rounded-full">{testi.category}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
