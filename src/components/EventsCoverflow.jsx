import React, { useState, useEffect } from 'react';
import { Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    title: 'Mehfil-e-Shaam',
    date: '19 February · 7:00 pm',
    place: 'The Courtyard',
    description: 'An evening of old songs, new stories, and the first toast to the weekend that brought us all here.',
    image: '/images/couple-flowers.jpg',
  },
  {
    title: 'Rang Barse',
    date: '20 February · 11:00 am',
    place: 'Rang Mahal',
    description: 'Colour, rhythm, and an open invitation to dance before the serious business of forever begins.',
    image: '/images/event-hands.jpg',
  },
  {
    title: 'Saat Phere',
    date: '21 February · 5:30 pm',
    place: 'The Lake Pavilion',
    description: 'Seven promises beside the water, surrounded by the people who made our story possible.',
    image: '/images/event-saat-phere.jpg',
  },
  {
    title: 'Vidaai Brunch',
    date: '22 February · 10:30 am',
    place: 'The Garden Terrace',
    description: 'One last slow morning together, with sunlight, sweet things, and a little reluctance to say goodbye.',
    image: '/images/couple-nikkah.jpg',
  },
];

export const EventsCoverflow = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % events.length);
    }, 3800);
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
        <p className="paper-section-eyebrow">05 · CELEBRATION ITINERARY</p>
        <h2 className="paper-section-title" id="events-title">
          The Royal Movements
        </h2>
        <p className="paper-section-subtitle">
          Four extraordinary celebrations. The deck advances automatically — tap any event to explore.
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
                    <span className="card-event-badge">MOVEMENT 0{idx + 1}</span>
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
              aria-label={`Jump to event 0${idx + 1}`}
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
