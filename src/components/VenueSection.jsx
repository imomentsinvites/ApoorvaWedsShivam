import React from "react";
import { OrnateDivider, MapPinIcon, NavigationIcon, ExternalLinkIcon } from "./common/Icons";
import { WEDDING_DATA } from "../constants/weddingData";

const venueDetails = [
  { title: "22 November", name: "Pundrik Vihar", address: "Pitampura, New Delhi", maps: WEDDING_DATA.venues[0].maps },
  { title: "23 November", name: "3rd Floor, City Park Hotel", address: "Haldi · Pitampura, New Delhi", maps: WEDDING_DATA.venues[1].maps },
  { title: "23 November", name: "Rajmahal Hall, City Park Hotel", address: "Tilak & Sangeet · Pitampura, New Delhi", maps: WEDDING_DATA.venues[2].maps },
  { title: "23 November", name: "3rd Floor, City Park Hotel", address: "Bhaat, Lunch & Gurchadi · Pitampura, New Delhi", maps: WEDDING_DATA.venues[1].maps },
];

export function VenueSection() {
  return (
    <section className="venue-luxe-section py-16 md:py-24 px-5 relative overflow-hidden text-center">
      <div className="max-w-xl mx-auto relative z-10">
        <MapPinIcon className="w-7 h-7 mx-auto text-primary mb-3" />
        <p className="event-eyebrow">Find your way to the celebrations</p>
        <h2 className="font-calligraphy text-4xl md:text-5xl text-primary mb-2">The Venues</h2>
        <OrnateDivider />
        <div className="venue-pearl-track" aria-hidden="true"><span /></div>
        <div className="venue-luxe-list">
          {venueDetails.map((venue, index) => (
            <article className="venue-luxe-card" key={`${venue.title}-${index}`}>
              <span className="venue-date">{venue.title}</span>
              <h3>{venue.name}</h3>
              <p>{venue.address}</p>
              <a href={venue.maps} target="_blank" rel="noreferrer">
                <NavigationIcon className="w-4 h-4" /> View on map <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
