import React, { useState } from "react";
import { HeartIcon, WhatsAppIcon } from "./common/Icons";
import { WEDDING_DATA } from "../constants/weddingData";

export function RSVPSection() {
  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");
  const [guestCount, setGuestCount] = useState("2");
  const [attendance, setAttendance] = useState("Joyfully accepting");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = [
      "Wedding RSVP — Apoorva & Shivam",
      `Guest Name: ${guestName}`,
      `Phone Number: ${phone}`,
      `Number of Guests: ${guestCount}`,
      `Attendance: ${attendance}`,
      `Message: ${message || "—"}`,
    ].join("\n");
    const url = `https://wa.me/${WEDDING_DATA.whatsappRawNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="family-section py-16 md:py-20 px-6 relative overflow-hidden text-center">
      <div className="max-w-md mx-auto relative z-10">
        <HeartIcon className="w-7 h-7 mx-auto text-primary mb-3" />
        <p className="event-eyebrow">We would be delighted to have you with us</p>
        <h2 className="font-calligraphy text-4xl md:text-5xl text-primary mb-2">Kindly RSVP</h2>
        <p className="rsvp-intro">Please share your response for the wedding celebrations</p>
        <form className="rsvp-form" onSubmit={handleSubmit}>
          <label className="rsvp-field">
            <span>Guest Name</span>
            <input value={guestName} onChange={(e) => setGuestName(e.target.value)} placeholder="Enter your name" required />
          </label>
          <label className="rsvp-field">
            <span>Phone Number</span>
            <input type="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" required />
          </label>
          <label className="rsvp-field">
            <span>Number of Guests</span>
            <select value={guestCount} onChange={(e) => setGuestCount(e.target.value)}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <option key={n} value={String(n)}>{n}</option>)}
            </select>
          </label>
          <label className="rsvp-field">
            <span>Attendance</span>
            <select value={attendance} onChange={(e) => setAttendance(e.target.value)}>
              <option>Joyfully accepting</option>
              <option>Regretfully declining</option>
              <option>Yet to confirm</option>
            </select>
          </label>
          <label className="rsvp-field">
            <span>Message</span>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Add a note (optional)" rows={3} />
          </label>
          <button className="whatsapp-btn rsvp-submit" type="submit">
            <WhatsAppIcon className="w-5 h-5 text-white" /> <span>Send RSVP on WhatsApp</span>
          </button>
        </form>
        <span className="rsvp-number">RSVP: {WEDDING_DATA.whatsappNumber}</span>
      </div>
    </section>
  );
}
