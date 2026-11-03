import React from "react";
import { HeartIcon } from "./common/Icons";
import { WEDDING_DATA } from "../constants/weddingData";

export function WelcomeSection() {
  return (
    <section className="welcome-luxe-section relative px-6 py-20 md:py-28 overflow-hidden text-center">
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="luxe-ornament"><span /> <HeartIcon size={15} /> <span /></div>
        <p className="font-calligraphic text-2xl md:text-3xl leading-relaxed italic whitespace-pre-wrap" style={{ color: "#fff7f5" }}>
          {WEDDING_DATA.welcomeMessage}
        </p>
        <div className="luxe-ornament mt-7"><span /> <HeartIcon size={15} /> <span /></div>
      </div>
    </section>
  );
}
