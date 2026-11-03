import React, { useEffect, useRef, useState } from "react";
import { HeartIcon } from "./common/Icons";
import { WEDDING_DATA } from "../constants/weddingData";

export function WelcomeSection() {
  const frameRef = useRef(null);
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const element = frameRef.current;
    if (!element || !("IntersectionObserver" in window)) {
      setEntered(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="welcome-luxe-section relative px-6 py-20 md:py-24 overflow-hidden text-center">
      <div className="welcome-glow welcome-glow-one" aria-hidden="true" />
      <div className="welcome-glow welcome-glow-two" aria-hidden="true" />
      <div ref={frameRef} className={`welcome-frame max-w-2xl mx-auto relative z-10 ${entered ? "welcome-entered" : ""}`}>
        <div className="welcome-topline">A joyful union · November 2026</div>
        <div className="luxe-ornament"><span /> <HeartIcon size={17} /> <span /></div>
        <p className="welcome-blessing">With the blessings of</p>
        <h2 className="welcome-elder">Mrs. Indumati Mohta</h2>
        <p className="welcome-relation">W/o Lt. Mahabir Prasad Mohta</p>
        <p className="welcome-invite">cordially invite you to celebrate the</p>
        <p className="welcome-celebration">Wedding Celebrations</p>
        <p className="welcome-granddaughter">of their granddaughter</p>
        <h3 className="welcome-couple">Apoorva</h3>
        <p className="welcome-parent-line">D/o Mrs. Pushpa &amp; Mr. Arun Mohta</p>
        <div className="welcome-with"><span /> with <span /></div>
        <h3 className="welcome-couple">Shivam</h3>
        <p className="welcome-parent-line">S/o Mrs. Asha &amp; Mr. Mukesh Moda</p>
        <div className="luxe-ornament welcome-bottom-ornament"><span /> <HeartIcon size={14} /> <span /></div>
        <p className="welcome-closing">Your presence will make our celebrations even more special</p>
      </div>
    </section>
  );
}
