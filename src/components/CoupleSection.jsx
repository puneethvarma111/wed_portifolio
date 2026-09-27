import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CoupleSection = ({ expandedProfile, setExpandedProfile }) => {
  const { t } = useLanguage();

  const coupleData = {
    yogita: {
      name: t.couple.bride.name,
      role: t.couple.bride.role,
      image: '/images/bride-makeup.jpg',
      alt: `Portrait of ${t.couple.bride.name}`,
      short: t.couple.bride.short,
      fullDetail: t.couple.bride.fullDetail,
    },
    saivardhan: {
      name: t.couple.groom.name,
      role: t.couple.groom.role,
      image: '/images/groom-sherwani.jpg',
      alt: `Portrait of ${t.couple.groom.name}`,
      short: t.couple.groom.short,
      fullDetail: t.couple.groom.fullDetail,
    },
  };

  const activeProfile = expandedProfile ? coupleData[expandedProfile] : null;

  return (
    <section className="paper-section couple-paper-section" aria-labelledby="couple-title">
      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">{t.couple.eyebrow}</p>
        <h2 className="paper-section-title" id="couple-title">
          {t.couple.title}
        </h2>
        <p className="paper-section-subtitle">
          {t.couple.subtitle}
        </p>
      </div>

      <div className="couple-large-cards-container reveal">
        <article className="couple-large-card">
          <button
            type="button"
            className="couple-arch-button"
            onClick={() => setExpandedProfile('yogita')}
            aria-label={`View portrait and story of ${coupleData.yogita.name}`}
          >
            <div className="arch-photo-box hover-lift-img">
              <img src={coupleData.yogita.image} alt={coupleData.yogita.alt} />
              <div className="arch-hover-badge">{t.couple.viewStory}</div>
            </div>
          </button>
          <div className="couple-card-text">
            <span className="couple-role-tag">{coupleData.yogita.role}</span>
            <h3 className="couple-person-name">{coupleData.yogita.name}</h3>
            <p className="couple-short-bio-large">{coupleData.yogita.short}</p>
          </div>
        </article>

        <article className="couple-large-card">
          <button
            type="button"
            className="couple-arch-button"
            onClick={() => setExpandedProfile('saivardhan')}
            aria-label={`View portrait and story of ${coupleData.saivardhan.name}`}
          >
            <div className="arch-photo-box hover-lift-img">
              <img src={coupleData.saivardhan.image} alt={coupleData.saivardhan.alt} />
              <div className="arch-hover-badge">{t.couple.viewStory}</div>
            </div>
          </button>
          <div className="couple-card-text">
            <span className="couple-role-tag">{coupleData.saivardhan.role}</span>
            <h3 className="couple-person-name">{coupleData.saivardhan.name}</h3>
            <p className="couple-short-bio-large">{coupleData.saivardhan.short}</p>
          </div>
        </article>
      </div>

      {activeProfile &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="profile-modal-backdrop"
            role="dialog"
            aria-modal="true"
            onClick={() => setExpandedProfile(null)}
          >
            <div className="profile-modal-card" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close-btn"
                type="button"
                onClick={() => setExpandedProfile(null)}
                aria-label={t.couple.closeModal}
              >
                <X size={18} strokeWidth={1.5} />
              </button>

              <div className="modal-inner-grid">
                <div className="modal-img-col">
                  <img src={activeProfile.image} alt={activeProfile.alt} />
                </div>
                <div className="modal-copy-col">
                  <span className="couple-role-tag">{activeProfile.role}</span>
                  <h3>{activeProfile.name}</h3>
                  <p className="modal-bio-text">{activeProfile.fullDetail}</p>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
