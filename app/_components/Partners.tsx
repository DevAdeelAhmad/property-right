"use client";

import { useRef } from "react";
import Image from "next/image";

// Partner company logos (these would be replaced with actual logos)
const partners = [
  { name: "Emirates Real Estate", logo: "/partner-1.svg" },
  { name: "Dubai Properties", logo: "/partner-2.svg" },
  { name: "Emaar", logo: "/partner-3.svg" },
  { name: "Damac Properties", logo: "/partner-4.svg" },
  { name: "Aldar Properties", logo: "/partner-5.svg" },
  { name: "Nakheel", logo: "/partner-6.svg" },
  { name: "Azizi Developments", logo: "/partner-7.svg" },
  { name: "Sobha Realty", logo: "/partner-8.svg" },
];

export function Partners() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-14 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-2">Trusted By Industry Leaders</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            PropertyRight partners with the UAE&apos;s most reputable developers and property management companies.
          </p>
        </div>

        <div ref={containerRef} className="relative overflow-hidden">
          {/* Static display for larger screens */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner) => (
              <div 
                key={partner.name}
                className="h-16 w-44 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <div className="bg-card shadow-sm rounded-md p-4 h-full w-full flex items-center justify-center">
                  {/* Use Image component with proper width/height */}
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Marquee effect for mobile */}
          <div className="md:hidden relative">
            <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
              {partners.concat(partners).map((partner, idx) => (
                <div 
                  key={`${partner.name}-${idx}`}
                  className="h-16 w-44 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 shrink-0"
                >
                  <div className="bg-card shadow-sm rounded-md p-4 h-full w-full flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="max-h-10 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 