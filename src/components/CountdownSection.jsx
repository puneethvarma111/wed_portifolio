import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

function useCountdown(targetIso = '2026-11-25T08:00:00+05:30') {
  const getRemainingTime = () => {
    const diff = Math.max(0, new Date(targetIso).getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getRemainingTime);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 1000);
    return () => window.clearInterval(interval);
  }, [targetIso]);

  return timeLeft;
}

export const CountdownSection = () => {
  const timeLeft = useCountdown('2026-11-25T08:00:00+05:30');
  const { t } = useLanguage();

  const dials = [
    { key: 'days', label: t.countdown.units.days, value: timeLeft.days, max: 365 },
    { key: 'hrs', label: t.countdown.units.hrs, value: timeLeft.hours, max: 24 },
    { key: 'min', label: t.countdown.units.min, value: timeLeft.minutes, max: 60 },
    { key: 'sec', label: t.countdown.units.sec, value: timeLeft.seconds, max: 60 },
  ];

  return (
    <section className="paper-section countdown-celestial-section reveal" id="waiting" aria-labelledby="waiting-title">
      <div className="section-header-centered">
        <p className="paper-section-eyebrow">{t.countdown.eyebrow}</p>
        <h2 className="paper-section-title" id="waiting-title">
          {t.countdown.title}
        </h2>
        <p className="paper-section-subtitle">
          {t.countdown.subtitle}
        </p>
      </div>

      <div className="celestial-countdown-container" data-testid="countdown-wedding">
        <div className="celestial-orbit-glow" />
        <div className="celestial-dials-grid">
          {dials.map((dial) => {
            const circumference = 2 * Math.PI * 54;
            const progress = (dial.value / dial.max) * circumference;
            return (
              <div
                className="celestial-dial-card"
                data-testid={`countdown-${dial.key}`}
                key={dial.key}
              >
                <div className="dial-svg-box">
                  <svg className="dial-ring-svg" viewBox="0 0 130 130">
                    <circle
                      className="dial-bg-track"
                      cx="65"
                      cy="65"
                      r={54}
                      fill="none"
                      stroke="#e8dbc7"
                      strokeWidth="3.5"
                    />
                    <circle
                      className="dial-progress-stroke"
                      cx="65"
                      cy="65"
                      r={54}
                      fill="none"
                      stroke="url(#goldGradient)"
                      strokeWidth="4"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference - progress}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d4af37" />
                        <stop offset="50%" stopColor="#f3e5ab" />
                        <stop offset="100%" stopColor="#aa771c" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="dial-center-content">
                    <span className="dial-number-val">{String(dial.value).padStart(2, '0')}</span>
                    <span className="dial-unit-name">{dial.label}</span>
                  </div>
                </div>
                <div className="dial-pulse-ring" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
