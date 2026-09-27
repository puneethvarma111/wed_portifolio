import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const galleryImages = [
  {
    image: '/images/yogitha_sai_vardan_eng.jpeg',
    alt: 'Save The Date - Engagement Invitation of Dr. Yogita Varma & Dr. Sai Vardhan',
  },
  {
    image: '/images/list_of_venue.jpeg',
    alt: 'Wedding Itinerary and Venue Schedule of Dr. Yogita Varma & Dr. Sai Vardhan',
  },
  {
    image: '/images/golden-vimana-tirupati.jpg',
    alt: 'Ananda Nilayam Golden Vimanam of Tirumala Temple',
  },
  {
    image: '/images/event-saat-phere.jpg',
    alt: 'Sacred Kalyanam and Mangalya Dharana moments',
  },
];

export const CherishedGlimpses = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { t } = useLanguage();

  const galleryItems = galleryImages.map((imgObj, i) => ({
    ...imgObj,
    caption: t.glimpses.items[i]?.caption || '',
    tag: t.glimpses.items[i]?.tag || '',
  }));

  return (
    <section className="paper-section dump-paper-section" aria-labelledby="dump-title">
      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">{t.glimpses.eyebrow}</p>
        <h2 className="paper-section-title" id="dump-title">
          {t.glimpses.title}
        </h2>
        <p className="paper-section-subtitle">
          {t.glimpses.subtitle}
        </p>
      </div>

      <div className="photo-dump-refined-grid reveal">
        {galleryItems.map((item, index) => (
          <figure
            className="refined-photo-card"
            key={index}
            onClick={() => setSelectedPhoto(item)}
            style={{ cursor: 'pointer' }}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.caption}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedPhoto(item);
              }
            }}
          >
            <div className="photo-inner-crop" style={{ position: 'relative' }}>
              <img src={item.image} alt={item.alt} />
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'rgba(90, 10, 26, 0.75)',
                  color: '#FAF4E6',
                  borderRadius: '999px',
                  padding: '4px 10px',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.1em',
                  backdropFilter: 'blur(4px)',
                }}
              >
                {item.tag}
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  background: 'rgba(0,0,0,0.5)',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ZoomIn size={14} />
              </div>
            </div>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      {selectedPhoto &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="profile-modal-backdrop"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="profile-modal-card"
              style={{ maxWidth: '780px', textAlign: 'center', padding: '24px' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label={t.glimpses.closePhoto}
              >
                <X size={18} strokeWidth={1.5} />
              </button>

              <div style={{ maxHeight: '72vh', overflowY: 'auto', borderRadius: '14px', marginBottom: '14px' }}>
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.alt}
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
                />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--royal-wine)',
                  fontSize: '1.6rem',
                  margin: '8px 0 4px',
                }}
              >
                {selectedPhoto.caption}
              </h3>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.86rem', color: 'var(--royal-gold-deep)' }}>
                {selectedPhoto.tag}
              </p>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
