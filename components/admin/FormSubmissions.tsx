import React, { useState } from 'react';

type Tab = 'saran' | 'booking' | 'sampah' | 'pinjaman' | 'forum' | 'testimoni';

const FormSubmissions: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('saran');

    const renderContent = () => {
        // In a real app, this data would come from state/props
        switch (activeTab) {
            case 'saran':
                return <p>Tampilkan daftar saran dan masukan di sini.</p>;
            case 'booking':
                return <p>Tampilkan daftar booking penginapan musafir di sini.</p>;
            case 'sampah':
                return <p>Tampilkan daftar setoran bank sampah di sini.</p>;
            case 'pinjaman':
                return <p>Tampilkan daftar pengajuan pinjaman kebaikan di sini.</p>;
            case 'forum':
                return <p>Tampilkan daftar topik diskusi forum yang menunggu persetujuan di sini.</p>;
            case 'testimoni':
                return <p>Tampilkan daftar testimoni yang menunggu persetujuan di sini.</p>;
            default:
                return null;
        }
    };
    
    const TabButton: React.FC<{tab: Tab; label: string}> = ({tab, label}) => (
        <button
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === tab ? 'bg-brand-emerald-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
        >
            {label}
        </button>
    );

    return (
        <div>
            <h1 className="text-3xl font-bold font-cairo text-gray-800 mb-6">Form Submissions</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="border-b border-gray-200 mb-4">
                    <div className="flex flex-wrap -mb-px space-x-4">
                        <TabButton tab="saran" label="Saran & Masukan" />
                        <TabButton tab="booking" label="Booking Musafir" />
                        <TabButton tab="sampah" label="Bank Sampah" />
                        <TabButton tab="pinjaman" label="Pinjaman" />
                        <TabButton tab="forum" label="Forum Diskusi" />
                        <TabButton tab="testimoni" label="Testimoni" />
                    </div>
                </div>
                
                <div className="mt-6">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default FormSubmissions;
