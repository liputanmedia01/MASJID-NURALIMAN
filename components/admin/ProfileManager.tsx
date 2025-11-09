import React, { useState } from 'react';

interface ProfilePost {
    id: number;
    title: string;
    content: string;
    image?: string;
}

interface ProfileManagerProps {
    items: ProfilePost[];
    setItems: React.Dispatch<React.SetStateAction<ProfilePost[]>>;
}

const ProfileManager: React.FC<ProfileManagerProps> = ({ items, setItems }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<ProfilePost | null>(null);

    const handleOpenModal = (item: ProfilePost | null = null) => {
        setCurrentItem(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentItem(null);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newItemData = {
            title: formData.get('title') as string,
            content: formData.get('content') as string,
        };

        if (currentItem) {
            setItems(items.map(item => item.id === currentItem.id ? { ...item, ...newItemData } : item));
        } else {
            const newItem = {
                id: Date.now(),
                ...newItemData,
                image: "https://picsum.photos/800/400?random=" + Date.now(),
            };
            setItems([...items, newItem]);
        }
        handleCloseModal();
    };

    const handleDelete = (id: number) => {
        if (window.confirm(`Apakah Anda yakin ingin menghapus postingan ini?`)) {
            setItems(items.filter(item => item.id !== id));
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold font-cairo text-gray-800">Manajemen Halaman Profil</h1>
                <button onClick={() => handleOpenModal()} className="bg-brand-emerald-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-emerald-700 transition">
                    Tambah Postingan Baru
                </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3">Judul Postingan</th>
                            <th className="p-3">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id} className="border-b hover:bg-slate-50">
                                <td className="p-3 font-medium">{item.title}</td>
                                <td className="p-3 space-x-2">
                                    <button onClick={() => handleOpenModal(item)} className="text-blue-600 hover:text-blue-800 font-semibold">Edit</button>
                                    <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-800 font-semibold">Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 w-full max-w-2xl">
                        <h2 className="text-2xl font-bold mb-6">{currentItem ? `Edit Postingan` : `Tambah Postingan Baru`}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Judul Postingan</label>
                                <input type="text" id="title" name="title" defaultValue={currentItem?.title} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Foto Header (Opsional)</label>
                                <input type="file" id="image" name="image" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-emerald-50 file:text-brand-emerald-700 hover:file:bg-brand-emerald-100" />
                                {currentItem?.image && <img src={currentItem.image} alt="Preview" className="mt-2 rounded w-40 h-auto" />}
                            </div>
                            
                             <div className="mb-6">
                                <label htmlFor="content" className="block text-gray-700 font-medium mb-2">Isi Konten (HTML didukung)</label>
                                <textarea id="content" name="content" rows={10} defaultValue={currentItem?.content} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required></textarea>
                            </div>
                            
                            <div className="flex justify-end space-x-4 mt-8">
                                <button type="button" onClick={handleCloseModal} className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300">Batal</button>
                                <button type="submit" className="bg-brand-emerald-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-emerald-700">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileManager;
