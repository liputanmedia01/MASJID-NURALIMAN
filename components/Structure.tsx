import React from 'react';
import { type StructureData } from '../App';

interface StructureProps {
  structures: StructureData[];
}

const Structure: React.FC<StructureProps> = ({ structures }) => {
    const icons: { [key: string]: React.ReactElement } = {
        dkm: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a3.004 3.004 0 01-2.71-2.226l-.213-.638a1 1 0 01.52-1.265l.98-.392a1 1 0 011.266.52l.213.638a3.004 3.004 0 01-2.71 2.226zM12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>,
        irmas: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0A4.998 4.998 0 0112 13a4.998 4.998 0 015.356 3.143M12 13a3 3 0 100-6 3 3 0 000 6z" /></svg>,
        'majelis-ibu': <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    };

    return (
        <section id="struktur" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-cairo text-brand-emerald-800">Struktur Organisasi Masjid</h2>
                <p className="text-gray-600 mt-2">Mengenal lebih dekat para penggerak kegiatan di Masjid Nur-Aliman.</p>
                </div>
                
                <div className="space-y-16">
                    {structures.map((structure) => (
                        <div key={structure.id} id={structure.id}>
                            <div className="text-center mb-8 p-4 bg-slate-50 rounded-lg">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-emerald-100 text-brand-emerald-700 mb-4 mx-auto">
                                  {icons[structure.id]}
                                </div>
                                <h3 className="text-2xl font-semibold mb-2">{structure.title}</h3>
                                <p className="text-gray-600 max-w-2xl mx-auto">{structure.description}</p>
                            </div>

                            {structure.members.length > 0 ? (
                                <div className="group relative w-full overflow-hidden">
                                    <div className="flex animate-scroll-x [animation-play-state:running] group-hover:[animation-play-state:paused]">
                                        {[...structure.members, ...structure.members].map((member, index) => (
                                            <div key={`${member.id}-${index}`} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-3">
                                                <div className="text-center bg-white p-4 rounded-lg shadow-sm border border-slate-200 h-full">
                                                    <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-brand-emerald-100" />
                                                    <h4 className="font-semibold text-gray-800">{member.name}</h4>
                                                    <p className="text-sm text-brand-emerald-600 font-medium">{member.position}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <p className="text-center text-gray-500 italic">Data pengurus untuk unit ini belum tersedia.</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Structure;