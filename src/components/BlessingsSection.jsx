import React, { useState } from 'react';
import { Sparkles, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BlessingsSection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [petals, setPetals] = useState([]);
  const [petalsCount, setPetalsCount] = useState(251);
  const { t } = useLanguage();

  const blessingsData = t.blessings.quotes;

  const handleArrow = (direction) => {
    setCurrentIdx((prev) =>
      direction === 'next'
        ? (prev + 1) % blessingsData.length
        : (prev - 1 + blessingsData.length) % blessingsData.length
    );
  };

  const triggerPetalsShower = () => {
    setPetalsCount((prev) => prev + 1);
    const emojis = ['🪷', '🌾', '🌼', '✨', '🌿', '💛', '🌸', '🌹'];
    const newPetals = Array.from({ length: 14 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 80 + 10,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));

    setPetals((prev) => [...prev, ...newPetals]);
    window.setTimeout(() => {
      setPetals((prev) => prev.filter((p) => !newPetals.includes(p)));
    }, 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    triggerPetalsShower();
    e.currentTarget.reset();
  };

  const activeBlessing = blessingsData[currentIdx] || blessingsData[0];

  return (
    <section className="paper-section blessings-paper-section" aria-labelledby="blessings-title">
      <div className="petals-shower-container" aria-hidden="true">
        {petals.map((petal) => (
          <span
            key={petal.id}
            className="floating-petal-particle"
            style={{ left: `${petal.x}%` }}
          >
            {petal.emoji}
          </span>
        ))}
      </div>

      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">{t.blessings.eyebrow}</p>
        <h2 className="paper-section-title stylish-title" id="blessings-title">
          {t.blessings.title}
        </h2>
        <p className="paper-section-subtitle">
          {t.blessings.subtitle}
        </p>
      </div>

      <div className="animated-blessing-stage reveal">
        <button
          type="button"
          className="blessing-arrow-btn"
          onClick={() => handleArrow('previous')}
          aria-label="Previous blessing"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>

        <div className="luxury-blessing-card-animated">
          <span className="card-mini-flower flower-tl">❦</span>
          <span className="card-mini-flower flower-tr">❦</span>
          <span className="card-mini-flower flower-bl">❦</span>
          <span className="card-mini-flower flower-br">❦</span>

          <div className="blessing-quote-mark">“</div>
          <blockquote className="blessing-animated-quote">
            {activeBlessing.quote}
          </blockquote>
          <cite className="blessing-animated-cite">— {activeBlessing.cite}</cite>

          <div className="blessing-interaction-bar">
            <button
              type="button"
              className="shower-petals-btn"
              onClick={triggerPetalsShower}
              aria-label="Offer sacred Akshatha and flower petals"
            >
              <Sparkles size={14} className="sparkle-icon" />
              <span>{t.blessings.offerBtn}</span>
              <span className="petals-badge">🪷 {petalsCount}</span>
            </button>
          </div>
        </div>

        <button
          type="button"
          className="blessing-arrow-btn"
          onClick={() => handleArrow('next')}
          aria-label="Next blessing"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
      </div>

      <div className="blessing-dots-track">
        {blessingsData.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`blessing-dot ${i === currentIdx ? 'is-active' : ''}`}
            onClick={() => setCurrentIdx(i)}
            aria-label={`Blessing ${i + 1}`}
          />
        ))}
      </div>

      <form className="blessing-guestbook-form reveal" onSubmit={handleSubmit}>
        {isSubmitted ? (
          <div className="guestbook-success-box">
            <span className="success-icon">🪷</span>
            <p>{t.blessings.successMsg}</p>
          </div>
        ) : (
          <>
            <h3 className="form-heading">{t.blessings.formTitle}</h3>
            <p className="form-subheading">{t.blessings.formSub}</p>

            <div className="form-fields-row">
              <div className="field-group">
                <label htmlFor="guest-name">{t.blessings.nameLabel}</label>
                <input
                  id="guest-name"
                  name="name"
                  required
                  placeholder={t.blessings.namePlaceholder}
                />
              </div>

              <div className="field-group full-width">
                <label htmlFor="guest-note">{t.blessings.noteLabel}</label>
                <textarea
                  id="guest-note"
                  name="note"
                  required
                  rows={3}
                  placeholder={t.blessings.notePlaceholder}
                />
              </div>
            </div>

            <button className="guestbook-submit-btn" type="submit">
              <span>{t.blessings.submitBtn}</span>
              <Send size={14} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </>
        )}
      </form>
    </section>
  );
};
