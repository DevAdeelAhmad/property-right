"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimationWrapper } from "./AnimationWrapper";

export function CTASection() {
  return (
    <section className="py-12 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-card/90 to-card backdrop-blur-md shadow-[0_20px_80px_-10px_rgba(0,0,0,0.1)] rounded-3xl p-8 md:p-12 border border-primary/10 relative overflow-hidden"
          >
            {/* Decorative floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-12 left-8 w-3 h-3 bg-primary rounded-full opacity-70"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-20 right-16 w-4 h-4 bg-primary/70 rounded-full opacity-60"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 left-[10%] w-2 h-2 bg-primary/80 rounded-full opacity-70"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute top-24 right-[15%] w-2 h-2 bg-primary/70 rounded-full opacity-70"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
            </div>

            <AnimationWrapper variants={fadeInUp} className="text-center mb-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 mb-6 text-primary font-medium text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                <span>Exclusive Property Listings</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Ready to Find Your Perfect Property?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Join thousands of satisfied clients who have found their dream
                properties through PropertyRight. Sign up for our newsletter to
                receive exclusive property listings and market insights.
              </p>
            </AnimationWrapper>

            <motion.form
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto relative z-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex-grow group">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 rounded-xl bg-background/50 backdrop-blur-sm border-primary/10 focus:border-primary/30 transition-all focus:bg-background/80 text-base"
                  required
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary opacity-20 blur-md rounded-xl transform scale-105"></div>
                <Button
                  className="h-14 px-8 w-full sm:w-auto rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 relative font-medium text-base"
                  type="submit"
                >
                  <span>Subscribe</span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.form>

            <AnimationWrapper
              variants={fadeInUp}
              className="mt-8 text-center text-sm text-muted-foreground"
              delay={0.3}
            >
              <p>
                By subscribing, you agree to our{" "}
                <span className="text-primary hover:underline cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-primary hover:underline cursor-pointer">
                  Privacy Policy
                </span>
                .
              </p>
            </AnimationWrapper>

            {/* Enhanced decorative glow elements */}
            <motion.div
              className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] opacity-80"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -left-20 -bottom-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px] opacity-70"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0.7, 0.6],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
