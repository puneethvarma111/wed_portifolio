import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, setLanguage, isTelugu } = useLanguage();

  return (
    <div
      className="royal-language-switcher"
      role="radiogroup"
      aria-label="Language selection"
    >
      <div className="lang-globe-icon" aria-hidden="true">
        <Globe size={13} strokeWidth={1.75} />
      </div>

      <button
        type="button"
        role="radio"
        aria-checked={!isTelugu}
        className={`lang-option-btn ${!isTelugu ? 'is-active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
      >
        <span>English</span>
      </button>

      <span className="lang-separator" aria-hidden="true">|</span>

      <button
        type="button"
        role="radio"
        aria-checked={isTelugu}
        className={`lang-option-btn ${isTelugu ? 'is-active' : ''}`}
        onClick={() => setLanguage('te')}
        aria-label="తెలుగు భాషకు మార్చండి"
      >
        <span className="telugu-text">తెలుగు</span>
      </button>
    </div>
  );
};
