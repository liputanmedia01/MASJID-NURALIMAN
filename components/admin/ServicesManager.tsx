import React, { useState } from 'react';

interface ServiceItem {
    id: number;
    title: string;
    description: string;
}

interface ServicesManagerProps {
    items: ServiceItem[];
    setItems: React.Dispatch<React.SetStateAction<ServiceItem[]>>;
}

const ServicesManager: React.FC<ServicesManagerProps> = ({ items, setItems }) => {
    const [editingItem, setEditingItem] = useState<ServiceItem | null>(null);

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!editingItem) return;
        
        const formData = new FormData(e.currentTarget);
        const updatedItem = {
            ...editingItem,
            title: formData.get('title') as string,
            description: formData.get('description') as string,
        };
        
        setItems(items.map(item => item.id === editingItem.id ? updatedItem : item));
        setEditingItem(null);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold font-cairo text-gray-800 mb-6">Manajemen Program & Layanan</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-4">
                    {items.map(item => (
                        <div key={item.id} className="border p-4 rounded-lg flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            </div>
                            <button onClick={() => setEditingItem(item)} className="text-sm text-blue-600 font-semibold ml-4">Edit</button>
                        </div>
                    ))}
                </div>
            </div>

            {editingItem && (
                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 w-full max-w-lg">
                        <h2 className="text-2xl font-bold mb-6">Edit: {editingItem.title}</h2>
                        <form onSubmit={handleSave}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Judul</label>
                                <input type="text" id="title" name="title" defaultValue={editingItem.title} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
                            </div>
                             <div className="mb-6">
                                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Deskripsi</label>
                                <textarea id="description" name="description" rows={4} defaultValue={editingItem.description} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required></textarea>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button type="button" onClick={() => setEditingItem(null)} className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg">Batal</button>
                                <button type="submit" className="bg-brand-emerald-600 text-white font-bold py-2 px-4 rounded-lg">Simpan Perubahan</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesManager;
