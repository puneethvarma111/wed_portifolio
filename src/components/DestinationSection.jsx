import React from 'react';
import { MapPin, Navigation, Landmark } from 'lucide-react';

export const DestinationSection = () => {
  return (
    <section className="paper-section venue-paper-section" aria-labelledby="venue-title">
      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">06 · THE SACRED DESTINATION</p>
        <h2 className="paper-section-title" id="venue-title">
          Tirupati · Abode of Lord Venkateswara
        </h2>
        <p className="paper-section-subtitle">
          At the sacred foothills of the Seven Hills, where holy bells chime and divine blessings shower upon every new journey.
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
            We are overjoyed to welcome you to holy Tirupati. May you carry the divine blessings of Lord Sri Balaji and Goddess Sri Padmavathi Devi as you join our celebrations and bless the newly wedded couple.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '18px' }}>
            <div className="venue-address-tag">
              <Landmark size={18} strokeWidth={1.5} color="var(--royal-wine)" />
              <div>
                <strong style={{ display: 'block', color: 'var(--royal-wine)', fontSize: '1rem' }}>
                  Marriage &amp; Reception Venue:
                </strong>
                <span>Rahul Convention, Yogimallavaram, Tiruchanur, Tirupati, Andhra Pradesh 517503</span>
              </div>
            </div>

            <div className="venue-address-tag">
              <MapPin size={18} strokeWidth={1.5} color="var(--royal-wine)" />
              <div>
                <strong style={{ display: 'block', color: 'var(--royal-wine)', fontSize: '1rem' }}>
                  Engagement Venue:
                </strong>
                <span>Ekante Bliss (IHCL SeleQtions), Near Ramanuja Circle, Renigunta Road, Tirupati</span>
              </div>
            </div>
          </div>

          <div className="venue-map-wrapper">
            <iframe
              className="venue-map-iframe"
              title="Google Map showing Rahul Convention in Tirupati"
              src="https://www.google.com/maps?q=Rahul+Convention+Tiruchanur+Tirupati&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
