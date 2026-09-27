import React, { useState, useEffect } from 'react';
import { Clock, MapPin, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const events = [
  {
    title: 'Engagement Ceremony',
    tag: 'CEREMONY 01',
    date: '1 November 2026 · 10:30 am - 12:00 noon',
    place: 'Ekante Bliss, Tirupati',
    subnote: 'Followed by Lunch',
    description: 'Two hearts, one promise. The auspicious ring exchange and betrothal celebrating Dr. Yogita Varma & Dr. Sai Vardhan.',
    image: '/images/couple-arched-hero-tirupati.jpg',
  },
  {
    title: 'Nalugu / Pellikuthuru',
    tag: 'CEREMONY 02',
    date: '22 November 2026 · 9:30 am onwards',
    place: 'At Home',
    subnote: 'Auspicious Pasupu Rituals',
    description: 'Sacred turmeric, rosewater, and traditional Telugu Mangala Snanam blessings as our beloved Dr. Yogita is adorned as the bride.',
    image: '/images/event-hands.jpg',
  },
  {
    title: 'Mehendi Celebration',
    tag: 'CEREMONY 03',
    date: '23 November 2026 · Daytime',
    place: 'At Home',
    subnote: 'Music & Fragrant Henna',
    description: 'Intricate deep crimson bridal mehendi, filled with hidden names, fragrant jasmine strings, and cheerful celebration.',
    image: '/images/couple-flowers.jpg',
  },
  {
    title: 'Sangeet & Cocktail Party',
    tag: 'CEREMONY 04',
    date: '23 November 2026 · 6:30 pm onwards',
    place: 'Memories Box, Tirupati',
    subnote: 'Music, Cocktails & Dancing',
    description: 'An electric evening of live music, joyous family dance choreographies, cocktails, and cheerful toasts into the night!',
    image: '/images/couple-nikkah.jpg',
  },
  {
    title: 'The Wedding Reception',
    tag: 'CEREMONY 05',
    date: '24 November 2026 · 7:30 pm onwards',
    place: 'Rahul Convention, Tirupati',
    subnote: 'Grand Dinner & Felicitations',
    description: 'A magnificent royal evening welcoming guests, dignitaries, and loved ones with a sumptuous feast and musical melodies.',
    image: '/images/golden-vimana-tirupati.jpg',
  },
  {
    title: 'Sacred Kalyanam (Marriage)',
    tag: 'CEREMONY 06',
    date: '25 November 2026 · 8:00 am - 12:00 pm',
    place: 'Rahul Convention, Tirupati',
    subnote: 'Holy Muhurtham & Talambralu',
    description: 'The divine Srinivasa Kalyanam, sacred Jeelakarra Bellam, Mangalya Dharana, and holy Saptapadi under Vedic chants and Lord Balaji’s grace.',
    image: '/images/event-saat-phere.jpg',
  },
];

export const EventsCoverflow = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % events.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + events.length) % events.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % events.length);
  };

  return (
    <section
      className="paper-section events-coverflow-section"
      aria-labelledby="events-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">05 · THE AUSPICIOUS ITINERARY</p>
        <h2 className="paper-section-title" id="events-title">
          The Wedding Celebrations
        </h2>
        <p className="paper-section-subtitle">
          Six joyous milestones from Engagement to the Holy Kalyanam. The deck advances automatically — tap any event to explore.
        </p>
      </div>

      <div className="coverflow-stage-viewport">
        <div className="coverflow-track">
          {events.map((event, idx) => {
            const total = events.length;
            let offset = idx - activeIdx;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isCenter = offset === 0;
            let cardClass = 'coverflow-card';
            if (isCenter) cardClass += ' is-center';
            else if (offset < 0) cardClass += ' is-left';
            else if (offset > 0) cardClass += ' is-right';
            if (Math.abs(offset) >= 2) cardClass += ' is-far';

            return (
              <div
                key={event.title}
                className={cardClass}
                style={{ '--offset': offset }}
                onClick={() => setActiveIdx(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Event: ${event.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIdx(idx);
                  }
                }}
              >
                <div className="card-glass-panel">
                  <div className="card-image-header">
                    <img src={event.image} alt={event.title} />
                    <div className="card-image-gradient" />
                    <span className="card-event-badge">{event.tag}</span>
                  </div>

                  <div className="card-body-content">
                    <div className="card-details-expanded">
                      <h3 className="card-title-heading">{event.title}</h3>
                      <div className="card-meta-pills-row">
                        <div className="event-meta-pill">
                          <Clock size={14} strokeWidth={1.75} />
                          <span>{event.date}</span>
                        </div>
                        <div className="event-meta-pill">
                          <MapPin size={14} strokeWidth={1.75} />
                          <span>{event.place}</span>
                        </div>
                      </div>
                    </div>
                    <p className="card-description-text">{event.description}</p>
                  </div>

                  <div className="card-details-compact">
                    <h4 className="compact-side-title">{event.title}</h4>
                    <span className="compact-date-badge">{event.date.split('·')[0]}</span>
                    <span className="compact-tap-hint">✦ Tap to view details ✦</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="coverflow-nav-controls">
        <button
          type="button"
          className="coverflow-arrow-btn"
          onClick={handlePrev}
          aria-label="Previous celebration"
        >
          <ChevronLeft size={22} strokeWidth={1.5} />
        </button>

        <div className="coverflow-dots-track">
          {events.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`coverflow-dot ${idx === activeIdx ? 'is-active' : ''}`}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Jump to event ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="coverflow-arrow-btn"
          onClick={handleNext}
          aria-label="Next celebration"
        >
          <ChevronRight size={22} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
};
