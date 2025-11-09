import React from 'react';

interface FileItem {
    id: number;
    title: string;
    type: string;
    size: string;
}

interface DownloadManagerProps {
    items: FileItem[];
    setItems: React.Dispatch<React.SetStateAction<FileItem[]>>;
}

const DownloadManager: React.FC<DownloadManagerProps> = ({ items, setItems }) => {

    const handleDelete = (id: number) => {
        if (window.confirm('Yakin ingin menghapus file ini?')) {
            setItems(items.filter(item => item.id !== id));
        }
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const newFile = e.target.files[0];
            const newItem = {
                id: Date.now(),
                title: newFile.name,
                type: newFile.type.split('/')[1].toUpperCase(),
                size: `${(newFile.size / 1024 / 1024).toFixed(2)} MB`,
            };
            setItems([...items, newItem]);
        }
    };
    
    return (
        <div>
            <h1 className="text-3xl font-bold font-cairo text-gray-800 mb-6">Manajemen Unduhan</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">Unggah File Baru</h2>
                <input 
                    type="file" 
                    onChange={handleFileUpload}
                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-emerald-50 file:text-brand-emerald-700 hover:file:bg-brand-emerald-100"
                />
            </div>
            
             <div className="bg-white p-6 rounded-lg shadow-md">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3">Nama File</th>
                            <th className="p-3">Tipe</th>
                            <th className="p-3">Ukuran</th>
                            <th className="p-3">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id} className="border-b hover:bg-slate-50">
                                <td className="p-3 font-medium">{item.title}</td>
                                <td className="p-3">{item.type}</td>
                                <td className="p-3 text-sm text-gray-600">{item.size}</td>
                                <td className="p-3">
                                    <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-800 font-semibold">Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DownloadManager;
