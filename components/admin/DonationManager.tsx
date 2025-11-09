import React from 'react';

const DonationManager: React.FC = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Data laporan donasi berhasil diperbarui!');
    };

    return (
        <div>
            <h1 className="text-3xl font-bold font-cairo text-gray-800 mb-6">Manajemen Laporan Donasi</h1>
            
            <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Perbarui Data Laporan Donasi Publik</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="terkumpul" className="block text-gray-700 font-medium mb-2">Dana Terkumpul (IDR)</label>
                        <input type="number" id="terkumpul" name="terkumpul" defaultValue="85000000" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="target" className="block text-gray-700 font-medium mb-2">Target Dana (IDR)</label>
                        <input type="number" id="target" name="target" defaultValue="100000000" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                    </div>
                     <div className="mb-6">
                        <label htmlFor="donatur" className="block text-gray-700 font-medium mb-2">Jumlah Donatur</label>
                        <input type="number" id="donatur" name="donatur" defaultValue="1253" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                    </div>
                     <button type="submit" className="w-full bg-brand-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-emerald-700 transition duration-300">
                        Simpan Perubahan
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DonationManager;
