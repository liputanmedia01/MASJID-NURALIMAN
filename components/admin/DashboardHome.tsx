import React from 'react';

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
        <div className="p-3 rounded-full bg-brand-emerald-100 text-brand-emerald-700 mr-4">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
);

const DashboardHome: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold font-cairo text-gray-800 mb-6">Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard 
                    title="Total Donasi (Bulan Ini)" 
                    value="Rp 12.5 Jt" 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                />
                <StatCard 
                    title="Pesan & Saran Baru" 
                    value="8" 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>}
                />
                <StatCard 
                    title="Agenda Akan Datang" 
                    value="2" 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                />
                <StatCard 
                    title="Pengunjung Hari Ini" 
                    value="241" 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" /></svg>}
                />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Aktivitas Terbaru</h2>
                <ul className="divide-y divide-gray-200">
                    <li className="py-3 flex justify-between items-center">
                        <div>
                            <p className="text-sm font-medium text-gray-900">Artikel berita baru dipublikasikan: "Pemasangan Kubah..."</p>
                            <p className="text-sm text-gray-500">Oleh: Admin - 2 jam yang lalu</p>
                        </div>
                        <span className="text-sm text-gray-500">Berita</span>
                    </li>
                     <li className="py-3 flex justify-between items-center">
                        <div>
                            <p className="text-sm font-medium text-gray-900">Testimoni baru dari "Siti Aisyah" menunggu persetujuan.</p>
                            <p className="text-sm text-gray-500">4 jam yang lalu</p>
                        </div>
                        <span className="text-sm text-gray-500">Testimoni</span>
                    </li>
                    <li className="py-3 flex justify-between items-center">
                        <div>
                            <p className="text-sm font-medium text-gray-900">Donasi baru diterima sebesar Rp 250.000.</p>
                             <p className="text-sm text-gray-500">Kemarin</p>
                        </div>
                         <span className="text-sm text-gray-500">Donasi</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardHome;
