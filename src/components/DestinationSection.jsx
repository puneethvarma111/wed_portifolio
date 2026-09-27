import React from 'react';
import { MapPin } from 'lucide-react';

export const DestinationSection = () => {
  return (
    <section className="paper-section venue-paper-section" aria-labelledby="venue-title">
      <div className="section-header-centered reveal">
        <p className="paper-section-eyebrow">06 · THE DESTINATION</p>
        <h2 className="paper-section-title" id="venue-title">
          Rang Mahal · Udaipur
        </h2>
        <p className="paper-section-subtitle">
          On the eastern shore of Lake Pichola, the old palace glows rose-gold as dusk falls.
        </p>
      </div>

      <div className="venue-paper-grid reveal">
        <figure className="venue-visual-frame">
          <img
            src="/images/udaipur-venue-twilight.jpg"
            alt="Rang Mahal glowing beside Lake Pichola at twilight"
          />
          <figcaption>Rang Mahal Palace, Lake Pichola</figcaption>
        </figure>

        <div className="venue-info-box">
          <p className="venue-blurb">
            Come for the golden sunset over the lake, stay for an unforgettable evening under starlit palace arches. We cannot wait to welcome you to the Udaipur we love.
          </p>

          <div className="venue-address-tag">
            <MapPin size={16} strokeWidth={1.5} />
            <span>Lake Pichola, Udaipur, Rajasthan 313001</span>
          </div>

          <div className="venue-map-wrapper">
            <iframe
              className="venue-map-iframe"
              title="Map showing Rang Mahal on Lake Pichola, Udaipur"
              src="https://www.google.com/maps?q=Rang+Mahal+Lake+Pichola+Udaipur&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
