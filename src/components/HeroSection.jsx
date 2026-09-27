import React from 'react';
import { ArrowDown } from 'lucide-react';
import { BalajiEmblem } from './BalajiEmblem';

export const HeroSection = () => {
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

        <p className="hero-calligraphy-subtitle">✦ Two Souls · One Journey · A Brighter Tomorrow ✦</p>
        <p className="hero-eyebrow">TIRUPATI · 25 NOVEMBER 2026</p>

        <h1 id="welcome-title" className="hero-stylish-names">
          Dr. Yogita <span className="stylish-ampersand">&amp;</span> Dr. Sai Vardhan
        </h1>

        <div className="doctor-credentials-banner">
          <span className="credential-pill">Dr. Yogita Varma · MBBS, MD (General Medicine)</span>
          <span className="credential-divider">✦</span>
          <span className="credential-pill">Dr. Sai Vardhan · MBBS, MD (Radio Diagnosis)</span>
        </div>

        <p className="hero-invitation-message">
          With the divine grace of Lord Sri Venkateswara Swamy and Sri Padmavathi Devi, under the sacred shadows of the Seshachalam Hills, we joyfully invite you to celebrate the holy union of our hearts in Tirupati.
        </p>

        <a
          className="hero-scroll-pill"
          href="#waiting"
          aria-label="Scroll to the countdown and auspicious muhurtham section"
          data-testid="link-scroll-countdown"
        >
          <span>Explore The Kalyanam</span>
          <ArrowDown size={14} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
