import React from "react";
import { OrnateDivider } from "./common/Icons";
import { WEDDING_DATA } from "../constants/weddingData";

export function TimelineSection() {
  const assetBase = import.meta.env.BASE_URL;
  return (
    <section className="event-gallery-section relative overflow-hidden px-5 py-16 md:py-24 text-center">
      <div className="max-w-md mx-auto">
        <p className="event-eyebrow">A celebration of love</p>
        <h2 className="font-calligraphy text-4xl md:text-5xl text-primary mb-2">The Celebrations</h2>
        <OrnateDivider />
        <div className="event-image-list">
          {WEDDING_DATA.events.map((event) => (
            <div className="event-image-frame" key={event.id}>
              <img
                src={`${assetBase}assets/events/${event.image}`}
                alt=""
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
