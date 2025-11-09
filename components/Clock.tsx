import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatDate = (d: Date, calendar: 'gregory' | 'islamic-umalqura') => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      calendar: calendar,
    };
    const locale = calendar === 'gregory' ? 'id-ID' : 'ar-SA-u-ca-islamic-umalqura-nu-latn';
    return new Intl.DateTimeFormat(locale, options).format(d);
  };
  
  const formatTime = (d: Date) => {
    return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="font-semibold tracking-wider text-base">
        {formatTime(date)} WIB
      </div>
      <div className="hidden sm:block border-l border-white/30 pl-4">
        <div className="text-xs font-medium">
          {formatDate(date, 'gregory')}
        </div>
        <div className="text-xs text-gray-300">
          {formatDate(date, 'islamic-umalqura')}
        </div>
      </div>
    </div>
  );
};

export default Clock;