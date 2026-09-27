import React from 'react';
import { ArrowDown } from 'lucide-react';
import { BalajiEmblem } from './BalajiEmblem';
import { useLanguage } from '../context/LanguageContext';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="hero-paper-section" id="welcome" tabIndex={-1} aria-labelledby="welcome-title">
      <div className="hero-paper-inner reveal">
        {/* Divine Lord Balaji Shankha Chakra Namam Header */}
        <div style={{ marginBottom: '28px' }}>
          <BalajiEmblem size="medium" showMantra={true} />
        </div>

        <div className="hero-floral-frame-wrapper">
          <div className="hero-floral-arch-box">
            <img
              src="/images/gold-floral-corner.png"
              alt=""
              className="hero-frame-flower flower-top-left"
              aria-hidden="true"
            />
            <img
              src="/images/gold-floral-corner.png"
              alt=""
              className="hero-frame-flower flower-top-right"
              aria-hidden="true"
            />
            <div className="hero-portrait-img-card">
              <img
                src="/images/couple-arched-hero-tirupati.jpg"
                alt="Dr. Yogita Varma and Dr. Sai Vardhan divine engagement announcement with Tirumala Gopuram"
                className="couple-arch-photo hover-lift-img"
              />
            </div>
            <img
              src="/images/gold-floral-corner.png"
              alt=""
              className="hero-frame-flower flower-bottom-left"
              aria-hidden="true"
            />
            <img
              src="/images/gold-floral-corner.png"
              alt=""
              className="hero-frame-flower flower-bottom-right"
              aria-hidden="true"
            />
          </div>
        </div>

        <p className="hero-calligraphy-subtitle">{t.hero.subtitle}</p>
        <p className="hero-eyebrow">{t.hero.eyebrow}</p>

        <h1 id="welcome-title" className="hero-stylish-names">
          {t.hero.names}
        </h1>

        <div className="doctor-credentials-banner">
          <span className="credential-pill">{t.hero.brideCred}</span>
          <span className="credential-divider">✦</span>
          <span className="credential-pill">{t.hero.groomCred}</span>
        </div>

        <p className="hero-invitation-message">{t.hero.message}</p>

        <a
          className="hero-scroll-pill"
          href="#waiting"
          aria-label={t.hero.ctaAria}
          data-testid="link-scroll-countdown"
        >
          <span>{t.hero.cta}</span>
          <ArrowDown size={14} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
