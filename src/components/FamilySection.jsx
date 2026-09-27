import React from 'react';

export const FamilySection = () => {
  return (
    <section className="paper-section family-paper-section" aria-labelledby="family-title">
      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">02 · WITH OUR FAMILIES &amp; BLESSINGS</p>
        <h2 className="paper-section-title" id="family-title">
          United by Tradition &amp; Divine Grace
        </h2>
        <p className="paper-section-subtitle">
          With the divine blessings of Lord Sri Venkateswara Swamy &amp; Sri Padmavathi Devi, two families unite in joy, love, and sacred rituals.
        </p>
      </div>

      <div className="family-cards-grid reveal">
        <div className="family-royal-card">
          <span className="family-card-kicker">With love from the Bride’s Family</span>
          <strong className="family-parent-names">The Varma Family</strong>
          <p style={{ marginTop: '8px', fontSize: '0.98rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>
            Cordially seeking your presence for our beloved daughter Dr. Yogita
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
          <span className="family-card-kicker">With love from the Groom’s Family</span>
          <strong className="family-parent-names">The Vardhan Family</strong>
          <p style={{ marginTop: '8px', fontSize: '0.98rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>
            Welcoming you with warm hearts to bless our dear son Dr. Sai Vardhan
          </p>
        </div>
      </div>
    </section>
  );
};
