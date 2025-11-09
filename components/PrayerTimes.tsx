import React, { useState, useEffect, useMemo } from 'react';
import { type PrayerTimesData, type AlAdhanResponse } from '../types';

const PrayerTimeIcon: React.FC<{ prayer: string }> = ({ prayer }) => {
    const icons: { [key: string]: React.ReactElement } = {
        Fajr: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L8 6h8l-4-4zM4 10h16M6 14h12M8 18h8"/></svg>,
        Dhuhr: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
        Asr: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16.5l-4-4h8l-4 4zM12 3v13.5"/></svg>,
        Maghrib: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 16.5l-4-4h8l-4 4zM4 16.5l4-4h-8l4 4zM12 3v13.5"/></svg>,
        Isha: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
    };
    return icons[prayer] || <div />;
};

const PrayerTimes: React.FC = () => {
  const [times, setTimes] = useState<PrayerTimesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: Date } | null>(null);
  const [countdown, setCountdown] = useState('');
  const [currentPrayerPeriod, setCurrentPrayerPeriod] = useState<string>('Isha');

  const prayerOrder: (keyof PrayerTimesData)[] = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  const prayerColors: { [key: string]: string } = {
    Fajr: 'from-blue-100 to-indigo-100',
    Dhuhr: 'from-sky-100 to-blue-100',
    Asr: 'from-amber-100 to-orange-100',
    Maghrib: 'from-orange-200 to-rose-200',
    Isha: 'from-indigo-200 to-slate-200'
  };

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      const latitude = -3.25;
      const longitude = 103.0;
      const method = 2;
      const today = new Date();
      const dateString = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
      
      try {
        const response = await fetch(`https://api.aladhan.com/v1/timings/${dateString}?latitude=${latitude}&longitude=${longitude}&method=${method}`);
        if (!response.ok) throw new Error('Failed to fetch prayer times.');
        
        const data: AlAdhanResponse = await response.json();
        const relevantTimes: PrayerTimesData = {
          Fajr: data.data.timings.Fajr,
          Dhuhr: data.data.timings.Dhuhr,
          Asr: data.data.timings.Asr,
          Maghrib: data.data.timings.Maghrib,
          Isha: data.data.timings.Isha,
        };
        setTimes(relevantTimes);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  useEffect(() => {
    if (!times) return;

    const intervalId = setInterval(() => {
      const now = new Date();
      
      const prayerDateObjects = prayerOrder.map(prayer => {
        const [hour, minute] = times[prayer].split(':');
        const date = new Date();
        date.setHours(parseInt(hour), parseInt(minute), 0, 0);
        return { name: prayer, time: date };
      });

      let next = prayerDateObjects.find(p => p.time > now);

      if (!next) {
        const fajrTomorrow = new Date(prayerDateObjects[0].time);
        fajrTomorrow.setDate(fajrTomorrow.getDate() + 1);
        next = { name: 'Fajr', time: fajrTomorrow };
      }
      
      const currentPeriod = [...prayerDateObjects].reverse().find(p => p.time <= now)?.name || 'Isha';
      setCurrentPrayerPeriod(currentPeriod);
      
      setNextPrayer(next);

      if (next) {
        const diff = next.time.getTime() - now.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setCountdown(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
      }

    }, 1000);

    return () => clearInterval(intervalId);
  }, [times]);

  return (
    <section id="prayer-times" className={`py-16 bg-gradient-to-br ${prayerColors[currentPrayerPeriod]} transition-colors duration-1000`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2 font-cairo text-brand-emerald-800">Jadwal Sholat</h2>
        <p className="text-gray-600 mb-6">Untuk Wilayah Musi Rawas, Sumatera Selatan</p>
        
        {nextPrayer && (
          <div className="mb-10 p-4 max-w-md mx-auto bg-white/50 backdrop-blur-sm rounded-lg shadow-md border">
            <p className="font-semibold text-lg text-brand-emerald-700">Menuju Waktu Sholat Berikutnya:</p>
            <p className="text-4xl font-bold text-brand-emerald-900 font-mono tracking-wider">{nextPrayer.name}</p>
            <p className="text-5xl font-bold text-brand-emerald-900 font-mono tracking-widest my-2">{countdown}</p>
            <button className="mt-2 bg-white text-brand-emerald-700 font-bold py-2 px-4 rounded-full text-sm shadow hover:bg-gray-50 transition">
              🔔 Ingatkan Saya
            </button>
          </div>
        )}

        {loading && <p>Loading prayer times...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        
        {times && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {prayerOrder.map((prayer) => (
              <div key={prayer} className={`bg-white/70 backdrop-blur-sm border rounded-lg p-6 shadow-sm transition-all duration-300 ${nextPrayer?.name === prayer ? 'border-brand-gold-500 scale-105 shadow-xl' : 'border-slate-200'}`}>
                <div className="flex justify-center items-center text-brand-emerald-600 mb-3">
                  <PrayerTimeIcon prayer={prayer} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{prayer}</h3>
                <p className="text-2xl font-bold text-brand-emerald-800 mt-1">{times[prayer]}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PrayerTimes;
