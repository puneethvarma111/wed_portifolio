import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      if (urlLang === 'te' || urlLang === 'en') {
        return urlLang;
      }
      const saved = localStorage.getItem('wedding_lang');
      if (saved === 'te' || saved === 'en') {
        return saved;
      }
    }
    return 'en';
  });

  const setLanguage = (newLang) => {
    if (newLang !== 'en' && newLang !== 'te') return;
    setLanguageState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('wedding_lang', newLang);
      document.documentElement.lang = newLang;
      if (newLang === 'te') {
        document.body.classList.add('lang-telugu');
      } else {
        document.body.classList.remove('lang-telugu');
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
      if (language === 'te') {
        document.body.classList.add('lang-telugu');
      } else {
        document.body.classList.remove('lang-telugu');
      }
    }
  }, [language]);

  const t = translations[language] || translations.en;
  const isTelugu = language === 'te';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isTelugu }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
