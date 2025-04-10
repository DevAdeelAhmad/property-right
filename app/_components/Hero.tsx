"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const heroImages = [
  "/images/house (4).jpg",
  "/images/house (3).jpg",
  "/images/house (2).jpg",
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[85vh] overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <motion.div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            initial={{ scale: index === 0 ? 1 : 1.1 }}
            animate={{ 
              scale: index === currentImage ? [1.1, 1] : 1.1,
              opacity: index === currentImage ? 1 : 0 
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="h-full w-full relative">
              {/* Using next/image with placeholder to avoid layout shift */}
              <Image
                src={img}
                alt={`PropertyRight - Hero Image ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col items-start justify-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Find Your Perfect Property in the UAE
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl"
          >
            PropertyRight connects you with verified agents and exclusive listings
            for buying, renting, or investing in properties across the Emirates.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Browse Properties
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Meet Our Agents
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom indicator dots */}
      <motion.div 
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
        className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2"
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentImage 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>
    </div>
  );
}