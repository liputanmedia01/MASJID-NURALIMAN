import React, { useState } from 'react';

interface ContentItem {
    id: number;
    title: string;
    [key: string]: any;
}

interface ContentManagerProps {
    contentType: 'Berita' | 'Agenda';
    items: ContentItem[];
    setItems: React.Dispatch<React.SetStateAction<any[]>>;
}

const ContentManager: React.FC<ContentManagerProps> = ({ contentType, items, setItems }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<ContentItem | null>(null);

    const handleOpenModal = (item: ContentItem | null = null) => {
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
        const newItemData = Object.fromEntries(formData.entries());

        if (currentItem) {
            // Update existing item
            setItems(items.map(item => item.id === currentItem.id ? { ...item, ...newItemData } : item));
        } else {
            // Add new item
            const newItem = {
                id: Date.now(),
                ...newItemData,
            };
            setItems([...items, newItem]);
        }
        handleCloseModal();
    };

    const handleDelete = (id: number) => {
        if (window.confirm(`Apakah Anda yakin ingin menghapus item ini?`)) {
            setItems(items.filter(item => item.id !== id));
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold font-cairo text-gray-800">Manajemen {contentType}</h1>
                <button onClick={() => handleOpenModal()} className="bg-brand-emerald-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-emerald-700 transition">
                    Tambah {contentType} Baru
                </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3">Judul</th>
                            {contentType === 'Berita' && <th className="p-3">Kategori</th>}
                            <th className="p-3">Tanggal</th>
                            <th className="p-3">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id} className="border-b hover:bg-slate-50">
                                <td className="p-3 font-medium">{item.title}</td>
                                {contentType === 'Berita' && <td className="p-3">{item.category}</td>}
                                <td className="p-3 text-sm text-gray-600">{item.date}</td>
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
                    <div className="bg-white rounded-lg p-8 w-full max-w-lg">
                        <h2 className="text-2xl font-bold mb-6">{currentItem ? `Edit ${contentType}` : `Tambah ${contentType} Baru`}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Judul</label>
                                <input type="text" id="title" name="title" defaultValue={currentItem?.title} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald-500" required />
                            </div>
                            
                            {contentType === 'Berita' && (
                                <>
                                    <div className="mb-4">
                                        <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Kategori</label>
                                        <input type="text" id="category" name="category" defaultValue={currentItem?.category} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="tags" className="block text-gray-700 font-medium mb-2">Tags (pisahkan dengan koma)</label>
                                        <input type="text" id="tags" name="tags" defaultValue={currentItem?.tags} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                                    </div>
                                </>
                            )}

                             <div className="mb-4">
                                <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Tanggal</label>
                                <input type="date" id="date" name="date" defaultValue={currentItem?.date} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
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

export default ContentManager;
