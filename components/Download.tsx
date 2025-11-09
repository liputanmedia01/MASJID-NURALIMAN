import React from 'react';

const FilePdfIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8.414a1 1 0 00-.293-.707l-4-4A1 1 0 0013.586 3H4zm7 2.5a1.5 1.5 0 011.5 1.5v.5h-3v-.5A1.5 1.5 0 0111 4.5zM9 14a1 1 0 001 1h.01a1 1 0 100-2H10a1 1 0 00-1 1z" clipRule="evenodd" />
        <path d="M10.894 11.106l-2.14 2.14a.5.5 0 00.708.708l2.14-2.14a.5.5 0 10-.708-.708zM12 9a1 1 0 10-2 0v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L12 11.586V9z" />
    </svg>
);

const FileImageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
    </svg>
);


const Download: React.FC = () => {
    const files = [
        {
            icon: <FilePdfIcon />,
            title: "Jadwal Imam & Khotib - Desember 2024",
            description: "Jadwal lengkap imam shalat lima waktu dan khotib shalat Jum'at untuk bulan ini.",
            fileType: "PDF",
            fileSize: "2.3 MB",
            href: "#"
        },
        {
            icon: <FilePdfIcon />,
            title: "Laporan Keuangan & Donasi - Kuartal 3 2024",
            description: "Laporan transparansi pemasukan dan pengeluaran dana infaq, shodaqoh, dan donasi dari jamaah.",
            fileType: "PDF",
            fileSize: "5.1 MB",
            href: "#"
        },
        {
            icon: <FileImageIcon />,
            title: "Spanduk Kegiatan Maulid Nabi 1446 H",
            description: "File desain spanduk (resolusi tinggi) untuk publikasi kegiatan Maulid Nabi Muhammad SAW.",
            fileType: "JPG",
            fileSize: "8.7 MB",
            href: "#"
        },
         {
            icon: <FilePdfIcon />,
            title: "Formulir Pendaftaran Qurban 1446 H",
            description: "Formulir yang dapat dicetak untuk pendaftaran peserta ibadah Qurban di Masjid Nur-Aliman.",
            fileType: "PDF",
            fileSize: "1.2 MB",
            href: "#"
        },
    ];
    return (
        <section id="download" className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-cairo text-brand-emerald-800">Pusat Unduhan</h2>
                    <p className="text-gray-600 mt-2">Unduh berbagai dokumen dan file penting yang disediakan oleh DKM Masjid Nur-Aliman.</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-md border">
                        <ul className="divide-y divide-slate-200">
                           {files.map((file, index) => (
                                <li key={index} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors duration-200">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">{file.icon}</div>
                                        <div className="ml-4">
                                            <p className="text-md font-semibold text-gray-800">{file.title}</p>
                                            <p className="text-sm text-gray-500">{file.description}</p>
                                            <p className="text-xs text-gray-400 mt-1">{file.fileType} &bull; {file.fileSize}</p>
                                        </div>
                                    </div>
                                    <a 
                                        href={file.href} 
                                        download 
                                        className="ml-4 bg-brand-emerald-100 text-brand-emerald-800 font-bold py-2 px-4 rounded-lg hover:bg-brand-emerald-200 transition duration-300 text-sm whitespace-nowrap"
                                    >
                                        Unduh File
                                    </a>
                                </li>
                           ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Download;
