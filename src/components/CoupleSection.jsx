import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

const coupleData = {
  yogita: {
    name: 'Dr. Yogita Varma',
    role: 'The Bride · MBBS, MD (General Medicine)',
    image: '/images/bride-makeup.jpg',
    alt: 'Portrait of Dr. Yogita Varma',
    short: 'A compassionate physician with a healing touch, Dr. Yogita brings radiant warmth, gentle wisdom, and grace to every life she touches.',
    fullDetail: 'Dedicated to the art and science of healing as an MD in General Medicine, Dr. Yogita believes that kindness and empathy are the greatest remedies. She cherishes family traditions, sacred rituals, and the warmth of loved ones gathered together.',
  },
  saivardhan: {
    name: 'Dr. Sai Vardhan',
    role: 'The Groom · MBBS, MD (Radio Diagnosis)',
    image: '/images/groom-sherwani.jpg',
    alt: 'Portrait of Dr. Sai Vardhan',
    short: 'A brilliant diagnostic radiologist with an eye for precision, Dr. Sai brings infectious joy, steady strength, and enduring devotion to their journey.',
    fullDetail: 'Specializing in Radio Diagnosis, Dr. Sai balances scientific precision with a warm, lively humor. He is adventurous, thoughtful, and deeply devoted, eagerly looking forward to starting this blessed chapter in holy Tirupati.',
  },
};

export const CoupleSection = ({ expandedProfile, setExpandedProfile }) => {
  const activeProfile = expandedProfile ? coupleData[expandedProfile] : null;

  return (
    <section className="paper-section couple-paper-section" aria-labelledby="couple-title">
      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">03 · TWO HEARTS · ONE DESTINY</p>
        <h2 className="paper-section-title" id="couple-title">
          Healers in Love
        </h2>
        <p className="paper-section-subtitle">
          Two dedicated doctors united by destiny, shared dreams, and the sacred blessings of Tirupati.
        </p>
      </div>

      <div className="couple-large-cards-container reveal">
        <article className="couple-large-card">
          <button
            type="button"
            className="couple-arch-button"
            onClick={() => setExpandedProfile('yogita')}
            aria-label="View portrait and story of Dr. Yogita Varma"
          >
            <div className="arch-photo-box hover-lift-img">
              <img src={coupleData.yogita.image} alt={coupleData.yogita.alt} />
              <div className="arch-hover-badge">View Story</div>
            </div>
          </button>
          <div className="couple-card-text">
            <span className="couple-role-tag">{coupleData.yogita.role}</span>
            <h3 className="couple-person-name">Dr. Yogita Varma</h3>
            <p className="couple-short-bio-large">{coupleData.yogita.short}</p>
          </div>
        </article>

        <article className="couple-large-card">
          <button
            type="button"
            className="couple-arch-button"
            onClick={() => setExpandedProfile('saivardhan')}
            aria-label="View portrait and story of Dr. Sai Vardhan"
          >
            <div className="arch-photo-box hover-lift-img">
              <img src={coupleData.saivardhan.image} alt={coupleData.saivardhan.alt} />
              <div className="arch-hover-badge">View Story</div>
            </div>
          </button>
          <div className="couple-card-text">
            <span className="couple-role-tag">{coupleData.saivardhan.role}</span>
            <h3 className="couple-person-name">Dr. Sai Vardhan</h3>
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
                aria-label="Close portrait modal"
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
