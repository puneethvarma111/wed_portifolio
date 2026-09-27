import React, { useState, useEffect } from 'react';
import { Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const eventImages = [
  '/images/couple-arched-hero-tirupati.jpg',
  '/images/event-hands.jpg',
  '/images/couple-flowers.jpg',
  '/images/couple-nikkah.jpg',
  '/images/golden-vimana-tirupati.jpg',
  '/images/event-saat-phere.jpg',
];

export const EventsCoverflow = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useLanguage();

  const events = t.itinerary.events.map((ev, i) => ({
    ...ev,
    image: eventImages[i] || eventImages[0],
  }));

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % events.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, [isPaused, events.length]);

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
        <p className="paper-section-eyebrow">{t.itinerary.eyebrow}</p>
        <h2 className="paper-section-title" id="events-title">
          {t.itinerary.title}
        </h2>
        <p className="paper-section-subtitle">
          {t.itinerary.subtitle}
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
                key={idx}
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
                    <span className="compact-tap-hint">{t.itinerary.tapHint}</span>
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
          aria-label={t.itinerary.prevAria}
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
          aria-label={t.itinerary.nextAria}
        >
          <ChevronRight size={22} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
};
