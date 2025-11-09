import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-cover bg-center h-[60vh] md:h-[80vh] text-white" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=mosque&grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div className="bg-black/20 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-cairo font-bold tracking-tight mb-4">
            Masjid Nur-Aliman
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-200 max-w-2xl">
            Membangun Ukhuwah, Menebar Kebaikan
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;