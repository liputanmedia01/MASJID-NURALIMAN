export interface PrayerTimesData {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

export interface AlAdhanResponse {
  data: {
    timings: PrayerTimesData;
  };
}
