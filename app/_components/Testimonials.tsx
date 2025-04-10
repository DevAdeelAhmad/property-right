"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { AnimationWrapper } from "./AnimationWrapper";

// Updated testimonials array with UI Avatars API
const testimonials = [
  {
    id: 1,
    name: "Mohammed Al-Farsi",
    role: "Property Buyer",
    // Using UI Avatars API for dynamic avatar generation
    avatar: `https://ui-avatars.com/api/?name=Mohammed+Al-Farsi&background=1a56db&color=fff&size=128`,
    content:
      "Using PropertyRight to find my dream apartment was incredibly easy. The verified listings saved me time, and I was able to connect with a professional agent who understood exactly what I was looking for.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Real Estate Investor",
    avatar: `https://ui-avatars.com/api/?name=Sarah+Williams&background=16a34a&color=fff&size=128`,
    content:
      "As an investor, I've used many property platforms, but PropertyRight stands out with its detailed analytics and verified agent information. The off-plan project details are comprehensive and helped me make informed decisions.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ali Hassan",
    role: "Rental Client",
    avatar: `https://ui-avatars.com/api/?name=Ali+Hassan&background=dc2626&color=fff&size=128`,
    content:
      "I needed to find a rental quickly after moving to Dubai for work. PropertyRight's filtering options and responsive agents made the process stress-free. I secured a great apartment within just one week!",
    rating: 4,
  },
  {
    id: 4,
    name: "Fatima Al-Mansouri",
    role: "Property Seller",
    avatar: `https://ui-avatars.com/api/?name=Fatima+Al-Mansouri&background=7c3aed&color=fff&size=128`,
    content:
      "Listing my property on PropertyRight connected me with serious buyers quickly. The platform's reach and marketing tools made a significant difference in getting competitive offers.",
    rating: 5,
  },
  {
    id: 5,
    name: "James Peterson",
    role: "Expat Home Buyer",
    avatar: `https://ui-avatars.com/api/?name=James+Peterson&background=ca8a04&color=fff&size=128`,
    content:
      "Being new to the UAE, I was concerned about navigating the property market. PropertyRight's bilingual support and trustworthy agents guided me through the entire process with ease.",
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerView = 3;
  const totalSlides = testimonials.length - (itemsPerView - 1);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const visibleTestimonials = testimonials.slice(
    activeIndex,
    activeIndex + itemsPerView
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Thousands of property seekers and agents trust PropertyRight to connect them with the right opportunities.
          </p>
        </AnimationWrapper>

        <div className="relative">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-6"
          >
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                className="bg-card border border-border rounded-xl p-6 flex-1 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="relative h-12 w-12 rounded-full overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                        unoptimized // Required for external image URLs
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        <Star
                          className={`h-4 w-4 ${
                            index < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {testimonial.content}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <AnimationWrapper variants={fadeInUp} className="flex justify-center mt-10 gap-2" delay={0.4}>
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full h-10 w-10"
              disabled={activeIndex === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full h-10 w-10"
              disabled={activeIndex === totalSlides - 1}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
} 