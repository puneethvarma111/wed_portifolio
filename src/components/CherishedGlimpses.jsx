import React from 'react';

const galleryItems = [
  {
    image: '/images/couple-flowers.jpg',
    alt: 'Aarav and Meera among flowers',
    caption: 'The beginning of a garden',
  },
  {
    image: '/images/couple-temple.jpg',
    alt: 'Aarav and Meera outside a temple',
    caption: 'Under old arches',
  },
  {
    image: '/images/couple-nikkah.jpg',
    alt: 'Aarav and Meera in a quiet wedding moment',
    caption: 'The quiet yes',
  },
  {
    image: '/images/event-hands.jpg',
    alt: 'Hands gathered together at the wedding',
    caption: 'Many hands, one day',
  },
];

export const CherishedGlimpses = () => {
  return (
    <section className="paper-section dump-paper-section" aria-labelledby="dump-title">
      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">04 · MOMENTS IN TIME</p>
        <h2 className="paper-section-title" id="dump-title">
          Cherished Glimpses
        </h2>
        <p className="paper-section-subtitle">
          Unfiltered frames from our story together.
        </p>
      </div>

      <div className="photo-dump-refined-grid reveal">
        {galleryItems.map((item, index) => (
          <figure className="refined-photo-card" key={index}>
            <div className="photo-inner-crop">
              <img src={item.image} alt={item.alt} />
            </div>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
