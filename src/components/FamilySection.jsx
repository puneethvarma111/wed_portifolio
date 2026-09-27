import React from 'react';

export const FamilySection = () => {
  return (
    <section className="paper-section family-paper-section" aria-labelledby="family-title">
      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">02 · WITH OUR FAMILIES</p>
        <h2 className="paper-section-title" id="family-title">
          Held by Many Hands
        </h2>
        <p className="paper-section-subtitle">
          Two families united with love, gratitude, and heartfelt blessings.
        </p>
      </div>

      <div className="family-cards-grid reveal">
        <div className="family-royal-card">
          <span className="family-card-kicker">With love from the Sharma family</span>
          <strong className="family-parent-names">Shri Raghav &amp; Smt. Kavita Sharma</strong>
        </div>

        <div className="family-center-jharokha">
          <img
            src="/images/golden-jharokha.png"
            alt="Gold carved Jharokha ornament"
            className="jharokha-ornament-img"
          />
        </div>

        <div className="family-royal-card">
          <span className="family-card-kicker">With love from the Rao family</span>
          <strong className="family-parent-names">Shri Devendra &amp; Smt. Nandini Rao</strong>
        </div>
      </div>
    </section>
  );
};
