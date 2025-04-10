"use client";

import { Button } from "@/components/ui/button";
import { fadeInRight, fadeInUp, staggerFadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  Bath,
  Bed,
  ChevronLeft,
  ChevronRight,
  Heart,
  MapPin,
  Maximize,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AnimationWrapper } from "./AnimationWrapper";

const properties = [
  {
    id: 1,
    title: "Luxury Apartment with Marina View",
    location: "Dubai Marina, Dubai",
    price: "AED 2,500,000",
    type: "For Sale",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sqft",
    image: "/images/house (1).jpg",
  },
  {
    id: 2,
    title: "Modern Villa with Private Pool",
    location: "Palm Jumeirah, Dubai",
    price: "AED 12,000,000",
    type: "For Sale",
    bedrooms: 5,
    bathrooms: 6,
    area: "5,200 sqft",
    image: "/images/house (6).jpg",
  },
  {
    id: 3,
    title: "Spacious Townhouse in Gated Community",
    location: "Arabian Ranches, Dubai",
    price: "AED 120,000/year",
    type: "For Rent",
    bedrooms: 3,
    bathrooms: 3.5,
    area: "2,500 sqft",
    image: "/images/house (5).jpg",
  },
  {
    id: 4,
    title: "Elegant Penthouse with Panoramic Views",
    location: "Downtown Dubai",
    price: "AED 7,800,000",
    type: "For Sale",
    bedrooms: 4,
    bathrooms: 4,
    area: "3,800 sqft",
    image: "/images/house (4).jpg",
  },
  {
    id: 5,
    title: "Waterfront Studio with Beach Access",
    location: "Jumeirah Beach Residence, Dubai",
    price: "AED 950,000",
    type: "For Sale",
    bedrooms: 1,
    bathrooms: 1,
    area: "650 sqft",
    image: "/images/house (2).jpg",
  },
  {
    id: 6,
    title: "Luxury Office Space in Business Bay",
    location: "Business Bay, Dubai",
    price: "AED 180,000/year",
    type: "For Rent",
    bedrooms: 0,
    bathrooms: 2,
    area: "1,800 sqft",
    image: "/images/house (3).jpg",
  },
];

export function PropertyShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const visibleProperties = properties.slice(
    activeIndex * itemsPerPage,
    Math.min((activeIndex + 1) * itemsPerPage, properties.length)
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <AnimationWrapper variants={fadeInUp} className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our handpicked selection of premium properties across the
              UAE.
            </p>
          </AnimationWrapper>

          <AnimationWrapper variants={fadeInRight} className="flex items-center gap-2 mt-6 md:mt-0" delay={0.3}>
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full h-10 w-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full h-10 w-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </AnimationWrapper>
        </div>

        <motion.div
          variants={staggerFadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleProperties.map((property, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
                  {property.type}
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "tween", duration: 0.2 }}
                  className="absolute top-4 right-4 z-10"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/80 hover:bg-white text-foreground rounded-full h-8 w-8"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div
                  className="h-full w-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-1">
                  {property.title}
                </h3>
                <p className="text-lg font-bold text-primary mb-4">
                  {property.price}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center text-sm">
                    <Bed className="h-4 w-4 mr-1" />
                    <span className="mr-3">{property.bedrooms} Beds</span>
                    <Bath className="h-4 w-4 mr-1" />
                    <span className="mr-3">{property.bathrooms} Baths</span>
                    <Maximize className="h-4 w-4 mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimationWrapper variants={fadeInUp} className="flex justify-center mt-12" delay={0.4}>
          <Button size="lg">View All Properties</Button>
        </AnimationWrapper>
      </div>
    </section>
  );
}
