import React, { useEffect, useRef, useState } from "react";
import { OrnateDivider, MapPinIcon, NavigationIcon, ExternalLinkIcon } from "./common/Icons";
import { WEDDING_DATA } from "../constants/weddingData";

const venueDetails = [
  { title: "22 November 2026", events: "Satsang & Mehendi", name: "Pundrik Vihar", address: "Pitampura, New Delhi", maps: WEDDING_DATA.venues[0].maps },
  { title: "23 November 2026", events: "Haldi · Bhaat · Lunch · Gurchadi", name: "3rd Floor, City Park Hotel", address: "Pitampura, New Delhi", maps: WEDDING_DATA.venues[1].maps },
  { title: "23 November 2026", events: "Tilak & Sangeet", name: "Rajmahal Hall, City Park Hotel", address: "Pitampura, New Delhi", maps: WEDDING_DATA.venues[2].maps },
];

export function VenueSection() {
  const sectionRef = useRef(null);
  const [journeyProgress, setJourneyProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const frame = section.closest(".mobile-phone-frame");
    const scrollTarget = frame && window.matchMedia("(min-width: 768px)").matches ? frame : window;
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const sectionRect = section.getBoundingClientRect();
        const viewportTop = frame && scrollTarget === frame ? frame.getBoundingClientRect().top : 0;
        const viewportHeight = scrollTarget === frame ? frame.clientHeight : window.innerHeight;
        const progress = (viewportTop + viewportHeight * 0.68 - sectionRect.top) / Math.max(sectionRect.height, 1);
        setJourneyProgress(Math.max(0, Math.min(1, progress)));
      });
    };
    scrollTarget.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      cancelAnimationFrame(raf);
      scrollTarget.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={sectionRef} className="venue-luxe-section py-16 md:py-24 px-5 relative overflow-hidden text-center" style={{ "--journey-progress": `${journeyProgress * 100}%` }}>
      <div className="max-w-xl mx-auto relative z-10">
        <MapPinIcon className="w-7 h-7 mx-auto text-primary mb-3" />
        <p className="event-eyebrow">Follow the journey of our celebrations</p>
        <h2 className="font-calligraphy text-4xl md:text-5xl text-primary mb-2">The Venues</h2>
        <OrnateDivider />
        <div className="venue-journey">
          <div className="venue-journey-track" aria-hidden="true"><span /></div>
          <div className="venue-luxe-list">
            {venueDetails.map((venue, index) => (
              <article className="venue-luxe-card" key={`${venue.title}-${index}`}>
                <span className="venue-date">{venue.title}</span>
                <span className="venue-events">{venue.events}</span>
                <h3>{venue.name}</h3>
                <p>{venue.address}</p>
                <a href={venue.maps} target="_blank" rel="noreferrer">
                  <NavigationIcon className="w-4 h-4" /> View on map <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
