import React, { useState, useMemo } from 'react';
import { type StructureData, type Member } from '../../App';

interface StructureManagerProps {
    items: StructureData[];
    setItems: React.Dispatch<React.SetStateAction<StructureData[]>>;
}

const StructureManager: React.FC<StructureManagerProps> = ({ items, setItems }) => {
    const [selectedStructureId, setSelectedStructureId] = useState<string>(items[0]?.id || '');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentMember, setCurrentMember] = useState<Member | null>(null);

    const selectedStructure = useMemo(() => {
        return items.find(s => s.id === selectedStructureId);
    }, [items, selectedStructureId]);

    const handleOpenModal = (member: Member | null = null) => {
        setCurrentMember(member);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentMember(null);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedStructure) return;

        const formData = new FormData(e.currentTarget);
        const memberData = {
            name: formData.get('name') as string,
            position: formData.get('position') as string,
            phone: formData.get('phone') as string,
            photo: currentMember?.photo || `https://i.pravatar.cc/150?u=${Date.now()}` // Handle photo upload later
        };
        
        const file = formData.get('photo') as File;
        if (file && file.size > 0) {
            memberData.photo = URL.createObjectURL(file);
        }

        let updatedMembers: Member[];

        if (currentMember) {
            // Update existing member
            updatedMembers = selectedStructure.members.map(m =>
                m.id === currentMember.id ? { ...m, ...memberData } : m
            );
        } else {
            // Add new member
            const newMember = { id: Date.now(), ...memberData };
            updatedMembers = [...selectedStructure.members, newMember];
        }

        const updatedStructures = items.map(s =>
            s.id === selectedStructureId ? { ...s, members: updatedMembers } : s
        );

        setItems(updatedStructures);
        handleCloseModal();
    };

    const handleDelete = (memberId: number) => {
        if (!selectedStructure) return;
        if (window.confirm('Apakah Anda yakin ingin menghapus pengurus ini?')) {
            const updatedMembers = selectedStructure.members.filter(m => m.id !== memberId);
            const updatedStructures = items.map(s =>
                s.id === selectedStructureId ? { ...s, members: updatedMembers } : s
            );
            setItems(updatedStructures);
        }
    };
    

    return (
        <div>
            <h1 className="text-3xl font-bold font-cairo text-gray-800 mb-6">Manajemen Struktur Organisasi</h1>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-6">
                    <label htmlFor="structure-select" className="block text-sm font-medium text-gray-700 mb-2">Pilih Unit Organisasi:</label>
                    <select
                        id="structure-select"
                        value={selectedStructureId}
                        onChange={(e) => setSelectedStructureId(e.target.value)}
                        className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500"
                    >
                        {items.map(s => (
                            <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                    </select>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Daftar Pengurus: {selectedStructure?.title}</h2>
                    <button onClick={() => handleOpenModal()} className="bg-brand-emerald-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-emerald-700 transition">
                        + Tambah Pengurus
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-3">Foto</th>
                                <th className="p-3">Nama</th>
                                <th className="p-3">Jabatan</th>
                                <th className="p-3">No. HP</th>
                                <th className="p-3">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedStructure?.members.map(member => (
                                <tr key={member.id} className="border-b hover:bg-slate-50">
                                    <td className="p-3"><img src={member.photo} alt={member.name} className="w-12 h-12 rounded-full object-cover"/></td>
                                    <td className="p-3 font-medium">{member.name}</td>
                                    <td className="p-3">{member.position}</td>
                                    <td className="p-3 text-sm text-gray-600">{member.phone}</td>
                                    <td className="p-3 space-x-2 whitespace-nowrap">
                                        <button onClick={() => handleOpenModal(member)} className="text-blue-600 hover:text-blue-800 font-semibold">Edit</button>
                                        <button onClick={() => handleDelete(member.id)} className="text-red-600 hover:text-red-800 font-semibold">Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                     {selectedStructure?.members.length === 0 && (
                        <p className="text-center text-gray-500 py-6">Belum ada data pengurus untuk unit ini.</p>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg p-8 w-full max-w-md max-h-full overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-6">{currentMember ? 'Edit Pengurus' : 'Tambah Pengurus Baru'}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                                <input type="text" id="name" name="name" defaultValue={currentMember?.name} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="position" className="block text-gray-700 font-medium mb-2">Jabatan</label>
                                <input type="text" id="position" name="position" defaultValue={currentMember?.position} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
                            </div>
                             <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Nomor HP</label>
                                <input type="tel" id="phone" name="phone" defaultValue={currentMember?.phone} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="photo" className="block text-gray-700 font-medium mb-2">Foto Profil</label>
                                <input type="file" id="photo" name="photo" accept="image/*" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-emerald-50 file:text-brand-emerald-700 hover:file:bg-brand-emerald-100" />
                                {currentMember?.photo && <img src={currentMember.photo} alt="Preview" className="w-20 h-20 rounded-full mt-3 object-cover"/>}
                            </div>
                            <div className="flex justify-end space-x-4 mt-8">
                                <button type="button" onClick={handleCloseModal} className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg">Batal</button>
                                <button type="submit" className="bg-brand-emerald-600 text-white font-bold py-2 px-4 rounded-lg">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StructureManager;