import React from 'react';

const FloatingButtons: React.FC = () => {
    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-3">
            <a 
                href="https://wa.me/621234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center group"
                aria-label="Chat with Admin on WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.006.014z"/>
                </svg>
                <span className="absolute right-full mr-3 w-32 text-center bg-gray-700 text-white text-xs rounded-md py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Chat Admin
                </span>
            </a>
            <a 
                href="tel:+621234567890" 
                className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center group"
                aria-label="Call Center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="absolute right-full mr-3 w-32 text-center bg-gray-700 text-white text-xs rounded-md py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Call Center
                </span>
            </a>
        </div>
    );
};

export default FloatingButtons;
