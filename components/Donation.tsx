import React from 'react';

const Donation: React.FC = () => {
    const donationCategories = [
        "Infaq Pembangunan Masjid",
        "Anak Yatim & Dhuafa",
        "Beasiswa Tahfidz Quran",
        "Operasional & Dakwah",
        "Zakat Maal",
    ];

  return (
    <section id="donasi" className="py-16 bg-brand-emerald-50">
      <div className="container mx-auto px-4">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-bold font-cairo text-brand-emerald-800">Donasi Online untuk Rumah Allah</h2>
          <p className="text-gray-700 mt-2 max-w-2xl lg:mx-auto">
            Salurkan infaq dan shodaqoh terbaik Anda untuk mendukung program-program dakwah dan pemeliharaan Masjid Nur-Aliman. Setiap kontribusi Anda sangat berarti.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 items-stretch">
          
          <div className="w-full lg:w-7/12 px-4 mb-8 lg:mb-0">
             <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-semibold mb-1">Pilih Kategori Donasi</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {donationCategories.map(cat => (
                        <label key={cat} className="has-[:checked]:bg-brand-emerald-600 has-[:checked]:text-white has-[:checked]:border-brand-emerald-600 border rounded-full px-3 py-1 text-sm cursor-pointer transition-colors">
                            <input type="radio" name="donation_category" value={cat} className="sr-only" />
                            {cat}
                        </label>
                    ))}
                </div>

                <div className="mb-4">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Jumlah Donasi (IDR)</label>
                    <input type="number" id="amount" name="amount" placeholder="Contoh: 50000" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" />
                </div>
                
                <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Donatur (boleh dikosongkan)</label>
                    <input type="text" id="name" name="name" placeholder="Hamba Allah" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" />
                </div>
                
                <button type="submit" className="w-full bg-brand-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-emerald-700 transition duration-300">
                    Lanjutkan Pembayaran (QRIS)
                </button>
                 <p className="text-xs text-center mt-2 text-gray-500">Pembayaran aman via QRIS, mendukung semua E-Wallet & Mobile Banking.</p>
            </div>
          </div>
          
          <div className="w-full lg:w-5/12 px-4 flex flex-col">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center flex-grow flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2">Laporan Donasi Publik (Live)</h3>
                <p className="text-sm text-gray-500 mb-4">Dana Pembangunan Tahap 3</p>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                    <div className="bg-brand-gold-500 h-4 rounded-full" style={{width: '85%'}}></div>
                </div>
                <div className="flex justify-between text-sm font-semibold mb-4">
                    <span className="text-brand-emerald-800">Terkumpul: Rp 85.000.000</span>
                    <span className="text-gray-500">Target: Rp 100.000.000</span>
                </div>
                <div className="border-t pt-4 mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="text-left">
                        <p className="font-semibold text-gray-800">Donatur Terakhir:</p>
                        <p>Hamba Allah - <span className="font-bold">Rp 200.000</span></p>
                        <p>Fulan - <span className="font-bold">Rp 50.000</span></p>
                    </div>
                     <div className="text-left">
                        <p className="font-semibold text-gray-800">Total Donatur:</p>
                        <p className="text-2xl font-bold text-brand-emerald-700">1,253 Orang</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Donation;