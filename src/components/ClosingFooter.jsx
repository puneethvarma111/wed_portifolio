import React from 'react';
import { BalajiEmblem } from './BalajiEmblem';
import { useLanguage } from '../context/LanguageContext';

export const ClosingFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="paper-section closing-paper-footer" aria-labelledby="closing-title">
      <div className="closing-paper-card reveal">
        <img
          className="closing-floral-line"
          src="/images/flower-line.png"
          alt=""
          aria-hidden="true"
        />

        <div style={{ marginBottom: '16px' }}>
          <BalajiEmblem size="small" showMantra={false} />
        </div>

        <p className="paper-section-eyebrow">{t.footer.eyebrow}</p>
        <h2 className="closing-monogram-names" id="closing-title">
          {t.footer.names}
        </h2>
        <p className="closing-note-lead">{t.footer.lead}</p>
        <p className="closing-note-body">
          {t.footer.body}
        </p>

        <div className="closing-date-badge">{t.footer.dateBadge}</div>
        <span className="closing-signoff-line">{t.footer.signoff}</span>
        <img
          className="closing-gold-lotus"
          src="/images/flower-gold.png"
          alt=""
          aria-hidden="true"
        />
      </div>
    </footer>
  );
};
