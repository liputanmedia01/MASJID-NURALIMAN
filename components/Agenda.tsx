import React from 'react';

interface AgendaItemProps {
  date: string;
  title: string;
  time: string;
  description: string;
  status: 'upcoming' | 'past';
}

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const AgendaItem: React.FC<AgendaItemProps> = ({ date, title, time, description, status }) => {
    const isUpcoming = status === 'upcoming';
    return (
        <div className={`p-6 rounded-lg shadow-md border-l-4 ${isUpcoming ? 'bg-white border-brand-emerald-500' : 'bg-slate-50 border-gray-400'}`}>
            <div className="flex justify-between items-start">
                <div>
                    <h3 className={`text-xl font-semibold ${isUpcoming ? 'text-brand-emerald-800' : 'text-gray-700'}`}>{title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-2">
                        <div className="flex items-center mr-4"><CalendarIcon /> {date}</div>
                        <div className="flex items-center"><ClockIcon /> {time}</div>
                    </div>
                </div>
                {isUpcoming && <span className="bg-brand-emerald-100 text-brand-emerald-800 text-xs font-bold px-3 py-1 rounded-full">SEGERA</span>}
                 {!isUpcoming && <span className="bg-gray-200 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">SELESAI</span>}
            </div>
            <p className="text-gray-600 mt-4">{description}</p>
        </div>
    );
};

const Agenda: React.FC = () => {
    const upcomingEvents: AgendaItemProps[] = [
        {
            date: "Sabtu, 25 Desember 2024",
            title: "Kajian Bulanan: Tafsir Al-Quran",
            time: "19.30 WIB - Selesai",
            description: "Kajian rutin bulanan bersama Ustadz Abdullah, membahas tafsir Surat Al-Kahfi. Terbuka untuk umum, ikhwan dan akhwat.",
            status: "upcoming",
        },
        {
            date: "Jum'at, 31 Desember 2024",
            title: "Mabit & Muhasabah Akhir Tahun",
            time: "20.00 WIB - Subuh",
            description: "Malam Bina Iman dan Taqwa (MABIT) untuk para remaja masjid (IRMAS) dan jamaah umum, diisi dengan qiyamul lail dan tausiyah.",
            status: "upcoming",
        },
    ];

    const pastEvents: AgendaItemProps[] = [
         {
            date: "Senin, 20 November 2024",
            title: "Peringatan Maulid Nabi Muhammad SAW 1446 H",
            time: "08.00 WIB - 12.00 WIB",
            description: "Perayaan Maulid Nabi diisi dengan pembacaan shalawat, ceramah hikmah maulid, dan santunan anak yatim.",
            status: "past",
        },
        {
            date: "Ahad, 12 November 2024",
            title: "Kerja Bakti & Penghijauan Area Masjid",
            time: "07.00 WIB - 10.00 WIB",
            description: "Kegiatan gotong royong membersihkan dan menanam pohon di lingkungan masjid untuk menciptakan suasana yang asri dan nyaman.",
            status: "past",
        },
    ];

    return (
        <section id="agenda" className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-cairo text-brand-emerald-800">Agenda Kegiatan</h2>
                    <p className="text-gray-600 mt-2">Informasi jadwal kegiatan yang akan datang dan yang telah berlangsung di Masjid Nur-Aliman.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 border-b-2 border-brand-emerald-500 pb-2">Kegiatan Akan Datang</h3>
                        <div className="space-y-6">
                            {upcomingEvents.map((event, index) => <AgendaItem key={index} {...event} />)}
                        </div>
                    </div>
                     <div>
                        <h3 className="text-2xl font-semibold mb-6 border-b-2 border-gray-400 pb-2">Kegiatan Terdahulu</h3>
                        <div className="space-y-6">
                            {pastEvents.map((event, index) => <AgendaItem key={index} {...event} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agenda;
