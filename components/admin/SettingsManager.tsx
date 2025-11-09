import React from 'react';

const SettingsManager: React.FC = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Pengaturan berhasil disimpan!');
    };

    return (
        <div>
            <h1 className="text-3xl font-bold font-cairo text-gray-800 mb-6">Pengaturan Umum</h1>
            
            <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
                 <h2 className="text-xl font-semibold mb-6 text-gray-800">Kontrol Teks Berjalan (Header)</h2>
                 <form onSubmit={handleSubmit}>
                     <div className="mb-6">
                        <label htmlFor="running_text" className="block text-gray-700 font-medium mb-2">Teks Pengumuman</label>
                        <textarea 
                            id="running_text" 
                            name="running_text" 
                            rows={3} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500"
                            defaultValue="Kajian Akbar malam ini pukul 19.30 | Infaq pembangunan tahap 3 sudah mencapai 85% | Jadwal Qurban akan diumumkan tanggal 10 Dzulhijjah."
                        ></textarea>
                        <p className="text-xs text-gray-500 mt-1">Gunakan tanda "|" untuk memisahkan antar pengumuman.</p>
                    </div>
                     <button type="submit" className="w-full bg-brand-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-emerald-700 transition duration-300">
                        Simpan Teks
                    </button>
                 </form>
            </div>
        </div>
    );
};

export default SettingsManager;
