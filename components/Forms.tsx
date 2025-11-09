import React from 'react';

const Forms: React.FC = () => {
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, formName: string) => {
        e.preventDefault();
        alert(`Terima kasih! Formulir '${formName}' Anda telah kami terima.`);
        (e.target as HTMLFormElement).reset();
    };
    
    return (
        <section id="layanan" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-cairo text-brand-emerald-800">Layanan Umat Digital</h2>
                    <p className="text-gray-600 mt-2">Interaksi dan layanan digital untuk kemudahan jamaah.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Saran & Masukan Form */}
                    <div className="bg-slate-50 p-8 rounded-lg shadow-md border border-slate-200">
                        <h3 className="text-2xl font-semibold mb-6 text-brand-emerald-800">Formulir Saran & Masukan</h3>
                        <form onSubmit={(e) => handleSubmit(e, 'Saran & Masukan')}>
                             <div className="mb-4">
                                <label htmlFor="name_saran" className="block text-gray-700 font-medium mb-2">Nama</label>
                                <input type="text" id="name_saran" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="kategori_saran" className="block text-gray-700 font-medium mb-2">Kategori</label>
                                <select id="kategori_saran" name="kategori" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required>
                                    <option>Kritik</option>
                                    <option>Saran</option>
                                    <option>Aspirasi</option>
                                    <option>Doa</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan Anda</label>
                                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-emerald-700 transition duration-300">Kirim Masukan</button>
                        </form>
                    </div>

                    {/* Booking Penginapan */}
                    <div className="bg-slate-50 p-8 rounded-lg shadow-md border border-slate-200">
                        <h3 className="text-2xl font-semibold mb-6 text-brand-emerald-800">Booking Penginapan Musafir</h3>
                            <p className="text-gray-600 mb-4 -mt-4">Fasilitas penginapan sederhana bagi musafir. Silakan isi form untuk reservasi. Tiket digital akan dikirimkan.</p>
                        <form onSubmit={(e) => handleSubmit(e, 'Booking Penginapan')}>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <input type="text" placeholder="Nama Lengkap" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                                <input type="tel" placeholder="Nomor WhatsApp" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                            </div>
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <input type="text" placeholder="Tanggal Check-in" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required/>
                                    <input type="number" placeholder="Jumlah Orang" min="1" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                            </div>
                            <button type="submit" className="w-full bg-brand-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-emerald-700 transition duration-300">Booking & Dapatkan Tiket Digital</button>
                        </form>
                    </div>
                    
                    {/* Bank Sampah */}
                    <div className="bg-slate-50 p-8 rounded-lg shadow-md border border-slate-200">
                        <h3 className="text-2xl font-semibold mb-6 text-brand-emerald-800">Setor Sampah (Bank Sampah)</h3>
                        <p className="text-gray-600 mb-4 -mt-4">Jadikan sampah anorganik sebagai sedekah produktif. Catat setoran Anda di sini.</p>
                        <form onSubmit={(e) => handleSubmit(e, 'Setor Sampah')}>
                            <div className="mb-4">
                                <label htmlFor="nama_penyetor" className="block text-gray-700 font-medium mb-2">Nama Penyetor</label>
                                <input type="text" id="nama_penyetor" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                            </div>
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label htmlFor="jenis_sampah" className="block text-gray-700 font-medium mb-2">Jenis Sampah</label>
                                    <select id="jenis_sampah" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required>
                                        <option>Plastik Botol</option>
                                        <option>Kardus</option>
                                        <option>Logam</option>
                                        <option>Lainnya</option>
                                    </select>
                                </div>
                                <div>
                                     <label htmlFor="berat_sampah" className="block text-gray-700 font-medium mb-2">Berat (kg)</label>
                                     <input type="number" id="berat_sampah" step="0.1" placeholder="Contoh: 1.5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-brand-gold-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-gold-700 transition duration-300">Catat Setoran Sampah</button>
                        </form>
                    </div>

                     {/* Bank Shodaqoh */}
                    <div className="bg-slate-50 p-8 rounded-lg shadow-md border border-slate-200">
                        <h3 className="text-2xl font-semibold mb-6 text-brand-emerald-800">Pengajuan Pinjaman Kebaikan</h3>
                        <p className="text-gray-600 mb-4 -mt-4">Layanan pinjaman syariah (tanpa bunga) untuk jamaah yang membutuhkan. Dikelola dari dana shodaqoh.</p>
                        <form onSubmit={(e) => handleSubmit(e, 'Pengajuan Pinjaman')}>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <input type="text" placeholder="Nama Lengkap Peminjam" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                                <input type="tel" placeholder="Nomor WhatsApp Aktif" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                            </div>
                            <div className="mb-4">
                                <input type="number" placeholder="Jumlah Pinjaman (IDR)" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                            </div>
                             <div className="mb-6">
                                <textarea placeholder="Tuliskan tujuan penggunaan dana pinjaman secara singkat." rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand-gold-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-gold-700 transition duration-300">Ajukan Pinjaman</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Forms;