import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FamilySection = () => {
  const { t } = useLanguage();

  return (
    <section className="paper-section family-paper-section" aria-labelledby="family-title">
      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">{t.families.eyebrow}</p>
        <h2 className="paper-section-title" id="family-title">
          {t.families.title}
        </h2>
        <p className="paper-section-subtitle">
          {t.families.subtitle}
        </p>
      </div>

      <div className="family-cards-grid reveal">
        <div className="family-royal-card">
          <span className="family-card-kicker">{t.families.brideKicker}</span>
          <strong className="family-parent-names">{t.families.brideFamily}</strong>
          <p style={{ marginTop: '8px', fontSize: '0.98rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>
            {t.families.brideNote}
          </p>
        </div>

        <div className="family-center-jharokha">
          <img
            src="/images/golden-jharokha.png"
            alt="Gold carved temple ornament"
            className="jharokha-ornament-img"
          />
        </div>

        <div className="family-royal-card">
          <span className="family-card-kicker">{t.families.groomKicker}</span>
          <strong className="family-parent-names">{t.families.groomFamily}</strong>
          <p style={{ marginTop: '8px', fontSize: '0.98rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>
            {t.families.groomNote}
          </p>
        </div>
      </div>
    </section>
  );
};
