import React from "react";
import { CornerOrnament, WavyDivider } from "./common/Icons";
import { WEDDING_DATA } from "../constants/weddingData";

export function FooterSection() {
  return (
    <footer className="luxe-footer py-16 md:py-20 px-6 text-center border-t relative overflow-hidden">
      <CornerOrnament className="absolute top-2 left-2 w-12 h-12 text-primary opacity-25" />
      <CornerOrnament className="absolute top-2 right-2 w-12 h-12 text-primary opacity-25 -scale-x-100" />
      <div className="max-w-lg mx-auto relative z-10">
        <WavyDivider className="text-primary mb-6" />
        <p className="font-calligraphy text-4xl md:text-5xl text-primary leading-tight mb-4">With love &amp; blessings</p>
        <h3 className="font-dancing text-4xl md:text-5xl text-primary mt-2">Apoorva &amp; Shivam</h3>
        <p className="text-xs md:text-sm tracking-widest text-muted-foreground uppercase font-display mt-4">{WEDDING_DATA.datesSummary}</p>
        <WavyDivider className="text-primary mt-8 rotate-180" />
      </div>
    </footer>
  );
}
