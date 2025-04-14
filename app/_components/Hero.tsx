"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Search, Building, Home, MapPin, DollarSign, ArrowDownUp, Filter } from "lucide-react";

const heroImages = [
  "/images/house (4).jpg",
  "/images/house (3).jpg",
  "/images/house (2).jpg",
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState("buy");
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

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
              opacity: index === currentImage ? 1 : 0,
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
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
      <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-center"
          >
            Find Your Perfect Property in the UAE
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto text-center"
          >
            PropertyRight connects you with verified agents and exclusive
            listings for buying, renting, or investing in properties across the
            Emirates.
          </motion.p>

          {/* Property Search Form */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="w-full backdrop-blur-md bg-black/40 rounded-xl p-6 shadow-xl border border-white/30"
          >
            {/* Tabs */}
            <div className="flex flex-wrap mb-5 border-b border-white/30 pb-3">
              {["buy", "rent", "projects", "commercial", "agents", "developers"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize text-sm font-medium whitespace-nowrap px-5 py-2.5 rounded-lg mr-2 mb-2 transition-all ${
                    activeTab === tab
                      ? "bg-primary text-white shadow-lg"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Main Search Form - First Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-4">
              <div className="md:col-span-6">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
                    <MapPin size={18} />
                  </div>
                  <Input
                    placeholder="City, community or building"
                    className="h-9 bg-white/20 border-white/40 pl-10 text-white placeholder:text-white focus-visible:bg-white/30 focus-visible:border-white w-full"
                  />
                </div>
              </div>

              <div className="md:col-span-3">
                <Select>
                  <SelectTrigger className="h-12 w-full bg-white/20 border-white/40 text-white focus:bg-white/30 data-[placeholder]:text-white [&_svg:not([class*='text-'])]:text-white">
                    <div className="flex items-center gap-2">
                      <Building size={18} className="text-white" />
                      <SelectValue placeholder="Property type" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/20 text-white">
                    <SelectItem
                      value="apartment"
                      className="focus:bg-primary/80 focus:text-white"
                    >
                      Apartment
                    </SelectItem>
                    <SelectItem
                      value="villa"
                      className="focus:bg-primary/80 focus:text-white"
                    >
                      Villa
                    </SelectItem>
                    <SelectItem
                      value="townhouse"
                      className="focus:bg-primary/80 focus:text-white"
                    >
                      Townhouse
                    </SelectItem>
                    <SelectItem
                      value="penthouse"
                      className="focus:bg-primary/80 focus:text-white"
                    >
                      Penthouse
                    </SelectItem>
                    <SelectItem
                      value="land"
                      className="focus:bg-primary/80 focus:text-white"
                    >
                      Land
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-3">
                <Select>
                  <SelectTrigger className="h-12 w-full bg-white/20 border-white/40 text-white focus:bg-white/30 data-[placeholder]:text-white [&_svg:not([class*='text-'])]:text-white">
                    <div className="flex items-center gap-2">
                      <Home size={18} className="text-white" />
                      <SelectValue placeholder="Beds & Baths" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/20 text-white">
                    <SelectItem
                      value="studio"
                      className="focus:bg-primary/80 focus:text-white"
                    >
                      Studio
                    </SelectItem>
                    <SelectItem
                      value="1br"
                      className="focus:bg-primary/80 focus:text-white"
                    >
                      1 Bedroom
                    </SelectItem>
                    <SelectItem
                      value="2br"
                      className="focus:bg-primary/80 focus:text-white"
                    >
                      2 Bedrooms
                    </SelectItem>
                    <SelectItem
                      value="3br"
                      className="focus:bg-primary/80 focus:text-white"
                    >
                      3 Bedrooms
                    </SelectItem>
                    <SelectItem
                      value="4br"
                      className="focus:bg-primary/80 focus:text-white"
                    >
                      4+ Bedrooms
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Advanced Options Row */}
            {showAdvancedOptions && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-4"
              >
                <div className="md:col-span-3">
                  <Select>
                    <SelectTrigger className="h-12 w-full bg-white/20 border-white/40 text-white focus:bg-white/30 data-[placeholder]:text-white [&_svg:not([class*='text-'])]:text-white">
                      <div className="flex items-center gap-2">
                        <DollarSign size={18} className="text-white" />
                        <SelectValue placeholder="Price Range" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/20 text-white">
                      <SelectItem
                        value="any"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        Any Price
                      </SelectItem>
                      <SelectItem
                        value="under500k"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        Under 500,000 AED
                      </SelectItem>
                      <SelectItem
                        value="500k-1m"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        500,000 - 1M AED
                      </SelectItem>
                      <SelectItem
                        value="1m-2m"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        1M - 2M AED
                      </SelectItem>
                      <SelectItem
                        value="2m-5m"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        2M - 5M AED
                      </SelectItem>
                      <SelectItem
                        value="5m+"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        5M+ AED
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="md:col-span-3">
                  <Select>
                    <SelectTrigger className="h-12 w-full bg-white/20 border-white/40 text-white focus:bg-white/30 data-[placeholder]:text-white [&_svg:not([class*='text-'])]:text-white">
                      <div className="flex items-center gap-2">
                        <ArrowDownUp size={18} className="text-white" />
                        <SelectValue placeholder="Sort By" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/20 text-white">
                      <SelectItem
                        value="newest"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        Newest First
                      </SelectItem>
                      <SelectItem
                        value="price-asc"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        Price (Low to High)
                      </SelectItem>
                      <SelectItem
                        value="price-desc"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        Price (High to Low)
                      </SelectItem>
                      <SelectItem
                        value="size-asc"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        Size (Small to Large)
                      </SelectItem>
                      <SelectItem
                        value="size-desc"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        Size (Large to Small)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="md:col-span-3">
                  <Select>
                    <SelectTrigger className="h-12 w-full bg-white/20 border-white/40 text-white focus:bg-white/30 data-[placeholder]:text-white [&_svg:not([class*='text-'])]:text-white">
                      <div className="flex items-center gap-2">
                        <Filter size={18} className="text-white" />
                        <SelectValue placeholder="Amenities" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/20 text-white">
                      <SelectItem
                        value="pool"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        Swimming Pool
                      </SelectItem>
                      <SelectItem
                        value="gym"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        Gym
                      </SelectItem>
                      <SelectItem
                        value="parking"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        Parking
                      </SelectItem>
                      <SelectItem
                        value="balcony"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        Balcony
                      </SelectItem>
                      <SelectItem
                        value="sea-view"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        Sea View
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="md:col-span-3">
                  <Select>
                    <SelectTrigger className="h-12 w-full bg-white/20 border-white/40 text-white focus:bg-white/30 data-[placeholder]:text-white [&_svg:not([class*='text-'])]:text-white">
                      <div className="flex items-center gap-2">
                        <Home size={18} className="text-white" />
                        <SelectValue placeholder="Property Size" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/20 text-white">
                      <SelectItem
                        value="any"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        Any Size
                      </SelectItem>
                      <SelectItem
                        value="under500"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        Under 500 sq.ft
                      </SelectItem>
                      <SelectItem
                        value="500-1000"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        500 - 1000 sq.ft
                      </SelectItem>
                      <SelectItem
                        value="1000-2000"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        1000 - 2000 sq.ft
                      </SelectItem>
                      <SelectItem
                        value="2000+"
                        className="focus:bg-primary/80 focus:text-white"
                      >
                        2000+ sq.ft
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>
            )}
            <div className="flex flex-col items-center gap-3">
              <Button
                size="lg"
                className="h-10 cursor-pointer bg-primary hover:bg-primary/90 text-white px-10 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full md:w-auto"
              >
                <Search size={20} className="mr-2 text-white" />
                Search
              </Button>
              
              <button 
                onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                className="text-white text-sm hover:text-white/80 cursor-pointer underline underline-offset-4 transition-colors font-medium flex items-center gap-1"
              >
                {showAdvancedOptions ? 'Hide advanced filters' : 'Show advanced filters'} <Filter size={14} className="inline" />
              </button>
            </div>
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
                : "bg-white hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>
    </div>
  );
}
