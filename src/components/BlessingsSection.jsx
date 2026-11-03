import React from "react";
import { OrnateDivider, HeartIcon, WhatsAppIcon } from "./common/Icons";
import { WEDDING_DATA } from "../constants/weddingData";

export function BlessingsSection() {
  const message = encodeURIComponent("Hello! We would love to RSVP for Apoorva & Shivam's wedding celebrations.\n\nName(s):\nNumber of guests:");
  return (
    <section className="family-section py-16 md:py-24 px-6 relative overflow-hidden text-center">
      <div className="max-w-md mx-auto relative z-10">
        <HeartIcon className="w-7 h-7 mx-auto text-primary mb-3" />
        <p className="event-eyebrow">With the blessings of our elders</p>
        <h2 className="font-calligraphy text-4xl md:text-5xl text-primary mb-2">The Mohta Family</h2>
        <OrnateDivider />
        <div className="family-list">
          {WEDDING_DATA.brideFamily.map((person) => (
            <div className="family-person" key={person.relation}>
              <span>{person.relation}</span>
              <strong>{person.name}</strong>
            </div>
          ))}
        </div>
        <div className="rsvp-block">
          <p>We look forward to celebrating with you</p>
          <a className="whatsapp-btn" href={`https://wa.me/${WEDDING_DATA.whatsappRawNumber}?text=${message}`} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="w-5 h-5 text-white" /> <span>RSVP on WhatsApp</span>
          </a>
          <span className="rsvp-number">{WEDDING_DATA.whatsappNumber}</span>
        </div>
      </div>
    </section>
  );
}
