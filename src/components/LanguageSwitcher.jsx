import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher = () => {
  const { setLanguage, isTelugu } = useLanguage();

  return (
    <div
      className="royal-language-switcher"
      role="radiogroup"
      aria-label="Language selection / భాష ఎంపిక"
    >
      <div className="lang-globe-icon" aria-hidden="true">
        <Globe size={13} strokeWidth={1.75} />
      </div>

      {/* Telugu Option First */}
      <button
        type="button"
        role="radio"
        aria-checked={isTelugu}
        className={`lang-option-btn ${isTelugu ? 'is-active' : ''}`}
        onClick={() => setLanguage('te')}
        aria-label="తెలుగు భాషను ఎంచుకోండి"
      >
        <span className="telugu-text">తెలుగు</span>
      </button>

      <span className="lang-separator" aria-hidden="true">|</span>

      {/* English Option Second */}
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
    </div>
  );
};
