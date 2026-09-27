import React from 'react';
import { BalajiEmblem } from './BalajiEmblem';

export const ClosingFooter = () => {
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

        <p className="paper-section-eyebrow">UNTIL WE MEET IN SACRED TIRUPATI</p>
        <h2 className="closing-monogram-names" id="closing-title">
          Dr. Yogita <em>&amp;</em> Dr. Sai Vardhan
        </h2>
        <p className="closing-note-lead">Thank you for being an indispensable part of our story.</p>
        <p className="closing-note-body">
          Your presence and blessings are the greatest gift. Until we gather under the holy hills of Tirumala, keep us in your prayers and warm thoughts!
        </p>

        <div className="closing-date-badge">25 November 2026 · Rahul Convention, Tirupati</div>
        <span className="closing-signoff-line">With heartfelt love, gratitude &amp; reverence</span>
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
