import React from 'react';

const Forum: React.FC = () => {
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Terima kasih! Ide atau topik Anda telah berhasil dikirimkan dan akan ditinjau oleh DKM.");
        (e.target as HTMLFormElement).reset();
    };

    const forumTopics = [
        {
            author: "Ahmad Ridwan",
            title: "Ide Program Tahsin Online untuk Jamaah yang Sibuk",
            excerpt: "Assalamualaikum, saya punya usul bagaimana jika kita adakan kelas tahsin Al-Quran secara online via Zoom setiap akhir pekan? Mungkin ini bisa membantu jamaah yang punya keterbatasan waktu...",
            replies: 5,
            date: "2 hari yang lalu"
        },
        {
            author: "Fatimah Azzahra",
            title: "Usulan Pengadaan Tempat Bermain Anak yang Edukatif",
            excerpt: "Melihat banyaknya jamaah yang membawa anak kecil, alangkah baiknya jika di area taman masjid disediakan pojok bermain anak yang aman dan edukatif. Ini bisa membuat anak-anak betah di masjid.",
            replies: 12,
            date: "5 hari yang lalu"
        },
        {
            author: "DKM Masjid",
            title: "Diskusi Rencana Kegiatan Selama Bulan Ramadhan 1446 H",
            excerpt: "Kepada para jamaah, mari kita diskusikan bersama rencana kegiatan untuk menyemarakkan bulan suci Ramadhan tahun ini. Silakan sampaikan aspirasi dan masukan Anda di sini.",
            replies: 28,
            date: "1 minggu yang lalu"
        },
    ];

    return (
        <section id="forum" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-cairo text-brand-emerald-800">Forum Diskusi Jamaah</h2>
                    <p className="text-gray-600 mt-2">Wadah untuk berbagi ide, gagasan, dan masukan untuk kemajuan masjid kita bersama.</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1 bg-slate-50 p-8 rounded-lg shadow-md border border-slate-200">
                        <h3 className="text-2xl font-semibold mb-6 text-brand-emerald-800">Mulai Topik Baru</h3>
                        <form onSubmit={handleSubmit}>
                             <div className="mb-4">
                                <label htmlFor="forum_name" className="block text-gray-700 font-medium mb-2">Nama Anda</label>
                                <input type="text" id="forum_name" placeholder="Nama lengkap atau panggilan" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                            </div>
                             <div className="mb-4">
                                <label htmlFor="forum_title" className="block text-gray-700 font-medium mb-2">Judul Topik</label>
                                <input type="text" id="forum_title" placeholder="Contoh: Ide Lomba Anak Sholeh" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="forum_message" className="block text-gray-700 font-medium mb-2">Isi Pesan / Ide Anda</label>
                                <textarea id="forum_message" rows={5} placeholder="Jelaskan ide Anda secara rinci di sini..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-emerald-700 transition duration-300">Kirim Topik</button>
                        </form>
                    </div>
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-semibold mb-6">Diskusi Terkini</h3>
                        <div className="space-y-4">
                            {forumTopics.map((topic, index) => (
                                <div key={index} className="bg-white p-5 rounded-lg border hover:border-brand-emerald-300 transition-colors duration-300 shadow-sm">
                                    <a href="#" className="text-lg font-bold text-brand-emerald-700 hover:underline">{topic.title}</a>
                                    <p className="text-sm text-gray-500 mt-1">oleh <span className="font-semibold">{topic.author}</span> - {topic.date}</p>
                                    <p className="text-gray-600 mt-2 text-sm">{topic.excerpt}</p>
                                    <div className="mt-3">
                                        <a href="#" className="text-sm font-semibold text-brand-emerald-600 hover:text-brand-emerald-800">{topic.replies} Balasan &rarr;</a>
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

export default Forum;
