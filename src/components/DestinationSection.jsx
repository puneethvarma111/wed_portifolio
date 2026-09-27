import React from 'react';
import { MapPin, Landmark } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const DestinationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="paper-section venue-paper-section" aria-labelledby="venue-title">
      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">{t.destination.eyebrow}</p>
        <h2 className="paper-section-title" id="venue-title">
          {t.destination.title}
        </h2>
        <p className="paper-section-subtitle">
          {t.destination.subtitle}
        </p>
      </div>

      <div className="venue-paper-grid reveal">
        <figure className="venue-visual-frame">
          <img
            src="/images/tirumala-maha-dwaram.jpg"
            alt="Maha Dwaram of the sacred Tirumala Venkateswara Temple"
          />
          <figcaption>Sacred Maha Dwaram · Tirumala Tirupati</figcaption>
        </figure>

        <div className="venue-info-box">
          <p className="venue-blurb">
            {t.destination.blurb}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '18px' }}>
            <div className="venue-address-tag">
              <Landmark size={18} strokeWidth={1.5} color="var(--royal-wine)" />
              <div>
                <strong style={{ display: 'block', color: 'var(--royal-wine)', fontSize: '1rem' }}>
                  {t.destination.marriageLabel}
                </strong>
                <span>{t.destination.marriageAddress}</span>
              </div>
            </div>

            <div className="venue-address-tag">
              <MapPin size={18} strokeWidth={1.5} color="var(--royal-wine)" />
              <div>
                <strong style={{ display: 'block', color: 'var(--royal-wine)', fontSize: '1rem' }}>
                  {t.destination.engLabel}
                </strong>
                <span>{t.destination.engAddress}</span>
              </div>
            </div>
          </div>

          <div className="venue-map-wrapper">
            <iframe
              className="venue-map-iframe"
              title={t.destination.mapTitle}
              src="https://www.google.com/maps?q=Rahul+Convention+Tiruchanur+Tirupati&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
