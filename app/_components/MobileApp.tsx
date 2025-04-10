"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Smartphone } from "lucide-react";

export function MobileApp() {
  const appFeatures = [
    "Search properties on the go",
    "Save favorites and set alerts",
    "Chat directly with agents",
    "Virtual tours and 3D viewings",
    "Neighborhood insights and maps",
    "Document signing and verification",
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <Smartphone className="mr-1 h-3.5 w-3.5" />
              <span>Mobile Experience</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Take PropertyRight With You Everywhere
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              Our mobile app puts the power of PropertyRight in your pocket. Search properties, connect with agents, and manage your real estate journey anytime, anywhere.
            </p>
            
            <ul className="space-y-3 mb-8">
              {appFeatures.map((feature) => (
                <li key={feature} className="flex items-start">
                  <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                className="pl-4 inline-flex h-14 items-center gap-2"
                variant="default"
              >
                <div className="h-8 w-8 rounded-full bg-background/90 flex items-center justify-center">
                  <svg viewBox="0 0 384 512" width="24" height="24">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs">Download on the</span>
                  <span className="text-base font-medium">App Store</span>
                </div>
              </Button>
              
              <Button
                className="pl-4 inline-flex h-14 items-center gap-2"
                variant="default"
              >
                <div className="h-8 w-8 rounded-full bg-background/90 flex items-center justify-center">
                  <svg viewBox="0 0 512 512" width="20" height="20">
                    <path
                      fill="currentColor"
                      d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-base font-medium">Google Play</span>
                </div>
              </Button>
            </div>
            
            <div className="inline-flex">
              <a 
                href="#" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                <span>Learn more about our app</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative h-[600px] w-full">
            <div className="absolute bottom-0 -right-10 lg:-right-16 w-[280px] h-[540px]">
              <div className="relative h-full w-full">
                <Image
                  src="/images/mobile (1).png"
                  alt="PropertyRight App - Property Listings"
                  fill
                  className="object-cover shadow-xl rounded-3xl"
                  priority
                />
              </div>
            </div>
            
            <div className="absolute top-0 -left-10 lg:-left-16 w-[280px] h-[540px]">
              <div className="relative h-full w-full">
                <Image
                  src="/images/mobile (1).png"
                  alt="PropertyRight App - Property Details"
                  fill
                  className="object-cover shadow-xl rounded-3xl"
                  priority
                />
              </div>
            </div>
            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[280px] h-[540px] z-10">
              <div className="relative h-full w-full">
                <Image
                  src="/images/mobile (2).png"
                  alt="PropertyRight App - Chat with Agents"
                  fill
                  className="object-cover shadow-xl rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 