import React, { useState, useEffect } from 'react';
import { useAmbientMusic } from './useAmbientMusic';
import { LanguageProvider } from './context/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { MusicToggle } from './components/MusicToggle';
import { OpeningCeremony } from './components/OpeningCeremony';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { FamilySection } from './components/FamilySection';
import { CoupleSection } from './components/CoupleSection';
import { CherishedGlimpses } from './components/CherishedGlimpses';
import { EventsCoverflow } from './components/EventsCoverflow';
import { DestinationSection } from './components/DestinationSection';
import { BlessingsSection } from './components/BlessingsSection';
import { ClosingFooter } from './components/ClosingFooter';

function WeddingInvitationApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedProfile, setExpandedProfile] = useState(null);
  const { isMuted, startMusic, toggleMute } = useAmbientMusic();

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll('.reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isOpen]);

  const handleOpenCeremony = () => {
    setIsOpen(true);
    startMusic();
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="wedding-app-root">
      {/* Royal Mandap Background with Vignette Overlay */}
      <div className="fixed-mandap-background" aria-hidden="true">
        <div className="mandap-vignette-overlay" />
      </div>

      {/* Floating Top Controls: Language Switcher (EN | తెలుగు) & Music Player */}
      <div className="royal-floating-controls">
        <LanguageSwitcher />
        <MusicToggle isMuted={isMuted} onToggle={toggleMute} />
      </div>

      {/* Opening Wax-Sealed Envelope Ceremony */}
      <OpeningCeremony isOpen={isOpen} onOpen={handleOpenCeremony} />

      {/* Scrollable Parchment Paper Viewport */}
      <div className={`scrollable-parchment-viewport ${isOpen ? 'paper-revealed' : ''}`}>
        <main className="royal-parchment-paper coarse-cream-texture">
          <div className="paper-coarse-noise-layer" aria-hidden="true" />

          {/* 4 Corner Floral Embellishments */}
          <img
            src="/images/gold-floral-corner.png"
            alt=""
            className="paper-corner-floral floral-top-left"
            aria-hidden="true"
          />
          <img
            src="/images/gold-floral-corner.png"
            alt=""
            className="paper-corner-floral floral-top-right"
            aria-hidden="true"
          />
          <img
            src="/images/gold-floral-corner.png"
            alt=""
            className="paper-corner-floral floral-bottom-left"
            aria-hidden="true"
          />
          <img
            src="/images/gold-floral-corner.png"
            alt=""
            className="paper-corner-floral floral-bottom-right"
            aria-hidden="true"
          />

          {/* Golden Inner Framing with Calligraphic Corner Flourishes */}
          <div className="parchment-inner-border" aria-hidden="true">
            <span className="corner-flourish top-left">❦</span>
            <span className="corner-flourish top-right">❦</span>
            <span className="corner-flourish bottom-left">❦</span>
            <span className="corner-flourish bottom-right">❦</span>
          </div>

          {/* Hero Section */}
          <HeroSection />

          <div className="royal-gold-divider" aria-hidden="true">
            <img src="/images/flower-gold.png" alt="" className="divider-floral-badge" />
          </div>

          {/* Countdown Section */}
          <CountdownSection />

          <div className="royal-gold-divider" aria-hidden="true">
            <img src="/images/flower-gold.png" alt="" className="divider-floral-badge" />
          </div>

          {/* Families Section */}
          <FamilySection />

          <div className="royal-gold-divider" aria-hidden="true">
            <img src="/images/flower-gold.png" alt="" className="divider-floral-badge" />
          </div>

          {/* Couple Profiles Section */}
          <CoupleSection
            expandedProfile={expandedProfile}
            setExpandedProfile={setExpandedProfile}
          />

          <div className="royal-gold-divider" aria-hidden="true">
            <img src="/images/flower-gold.png" alt="" className="divider-floral-badge" />
          </div>

          {/* Cherished Moments Photo Dump */}
          <CherishedGlimpses />

          <div className="royal-gold-divider" aria-hidden="true">
            <img src="/images/flower-gold.png" alt="" className="divider-floral-badge" />
          </div>

          {/* Royal Movements Itinerary (3D Coverflow) */}
          <EventsCoverflow />

          <div className="royal-gold-divider" aria-hidden="true">
            <img src="/images/flower-gold.png" alt="" className="divider-floral-badge" />
          </div>

          {/* Destination & Venue Map Section */}
          <DestinationSection />

          <div className="royal-gold-divider" aria-hidden="true">
            <img src="/images/flower-gold.png" alt="" className="divider-floral-badge" />
          </div>

          {/* Blessings & Digital Guestbook */}
          <BlessingsSection />

          {/* Closing Monogram Footer */}
          <ClosingFooter />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <WeddingInvitationApp />
    </LanguageProvider>
  );
}
