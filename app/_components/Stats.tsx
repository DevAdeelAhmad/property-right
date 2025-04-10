/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState, useRef } from "react";
import { Building2, Users, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "@/lib/animations";
import { AnimationWrapper } from "./AnimationWrapper";

const stats = [
  {
    icon: Building2,
    value: 5000,
    label: "Verified Properties",
    prefix: "+",
  },
  {
    icon: Users,
    value: 350,
    label: "Certified Agents",
    prefix: "+",
  },
  {
    icon: Award,
    value: 98,
    label: "Client Satisfaction",
    suffix: "%",
  },
  {
    icon: Clock,
    value: 24,
    label: "Hour Support",
    suffix: "/7",
  },
];

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const animationRef = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Only run animation once and when section is visible
    if (!isVisible || animationRef.current) return;
    
    // Mark animation as started
    animationRef.current = true;
    
    // Simple animation approach
    stats.forEach((stat, index) => {
      let current = 0;
      const target = stat.value;
      const duration = 2000; // 2 seconds
      const framesPerSecond = 60;
      const totalFrames = Math.floor(duration / 1000 * framesPerSecond);
      let frame = 0;
      
      const interval = setInterval(() => {
        frame++;
        
        // Use easing function to make animation more natural
        const progress = frame / totalFrames;
        const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        current = Math.min(Math.round(target * easedProgress), target);
        
        // Update this specific counter
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = current;
          return newCounters;
        });
        
        // Stop when reached target or max frames
        if (frame >= totalFrames || current >= target) {
          // Ensure we reach exactly the target value
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = target;
            return newCounters;
          });
          clearInterval(interval);
        }
      }, 1000 / framesPerSecond);
      
      // Cleanup
      return () => clearInterval(interval);
    });
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 bg-gradient-to-tr from-primary to-primary/80 text-primary-foreground overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper variants={zoomIn} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            PropertyRight by the Numbers
          </h2>
          <p className="text-lg opacity-90">
            Our platform continues to grow with satisfied clients and quality properties.
          </p>
        </AnimationWrapper>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              variants={zoomIn}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 overflow-hidden transition-all duration-300"
            >
              {/* Background glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              
              <div className="relative">
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center shadow-inner"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="h-9 w-9" />
                </motion.div>
                
                <div className="relative">
                  <span className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    {stat.prefix && <span>{stat.prefix}</span>}
                    {counters[index].toLocaleString()}
                    {stat.suffix && <span>{stat.suffix}</span>}
                  </span>
                  <motion.div 
                    className="h-1 w-12 bg-white/30 mx-auto my-4 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  ></motion.div>
                  <p className="text-lg font-medium">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 