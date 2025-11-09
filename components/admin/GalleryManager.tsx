import React from 'react';

interface GalleryItem {
    id: number;
    url: string;
    title: string;
}

interface GalleryManagerProps {
    items: GalleryItem[];
    setItems: React.Dispatch<React.SetStateAction<GalleryItem[]>>;
}

const GalleryManager: React.FC<GalleryManagerProps> = ({ items, setItems }) => {

    const handleDelete = (id: number) => {
        if (window.confirm('Yakin ingin menghapus item galeri ini?')) {
            setItems(items.filter(item => item.id !== id));
        }
    };
    
    // This is a dummy handler. In a real app, this would handle file uploads.
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const newFile = e.target.files[0];
            const newItem = {
                id: Date.now(),
                url: URL.createObjectURL(newFile),
                title: newFile.name,
            };
            setItems([...items, newItem]);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold font-cairo text-gray-800 mb-6">Manajemen Galeri</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">Unggah Media Baru</h2>
                <input 
                    type="file" 
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-emerald-50 file:text-brand-emerald-700 hover:file:bg-brand-emerald-100"
                />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map(item => (
                    <div key={item.id} className="relative group bg-slate-200 rounded-lg overflow-hidden shadow">
                        <img src={item.url} alt={item.title} className="w-full h-40 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                             <button onClick={() => handleDelete(item.id)} className="opacity-0 group-hover:opacity-100 bg-red-600 text-white rounded-full p-2 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-xs p-2 w-full truncate">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryManager;
