import React from 'react';

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
        <p className="paper-section-eyebrow">UNTIL WE MEET IN UDAIPUR</p>
        <h2 className="closing-monogram-names" id="closing-title">
          Aarav <em>&amp;</em> Meera
        </h2>
        <p className="closing-note-lead">Thank you for being part of our story.</p>
        <p className="closing-note-body">
          Your presence is the greatest gift. Until we gather beside the lake, keep a little room in your heart — and ready your dancing shoes!
        </p>
        <div className="closing-date-badge">21 February 2027 · Lake Pichola</div>
        <span className="closing-signoff-line">With all our love</span>
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
