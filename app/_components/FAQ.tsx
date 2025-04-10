"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { AnimationWrapper } from "./AnimationWrapper";

const faqs = [
  {
    question: "How does PropertyRight verify property listings?",
    answer: "All properties on PropertyRight go through a thorough verification process. Our team checks property documentation, confirms ownership details, and validates property specifications before a listing goes live. We also conduct routine checks to ensure listings remain accurate and up-to-date.",
  },
  {
    question: "Is there a fee to list my property on PropertyRight?",
    answer: "Basic property listings are free of charge. We offer premium listing options with enhanced visibility and promotional features for a competitive fee. Agency accounts have different subscription plans with varying features and listing allowances.",
  },
  {
    question: "How do I connect with an agent through PropertyRight?",
    answer: "You can connect with agents directly through our platform. Each listing has a 'Contact Agent' button that allows you to send messages, schedule viewings, or request a call back. Our agent profiles include ratings, reviews, and verification badges to help you make informed decisions.",
  },
  {
    question: "What areas in the UAE does PropertyRight cover?",
    answer: "PropertyRight covers all seven emirates of the UAE, including Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah. We have extensive listings in major metropolitan areas as well as emerging communities.",
  },
  {
    question: "How often are new properties added to PropertyRight?",
    answer: "New properties are added to our platform daily. Our database is constantly updated with fresh listings from individual property owners and real estate agencies across the UAE. You can set up alerts to be notified when new properties matching your criteria are listed.",
  },
  {
    question: "Can I search for off-plan properties on PropertyRight?",
    answer: "Yes, PropertyRight has a dedicated section for off-plan properties. You can explore upcoming developments, view floor plans, check construction progress, and connect with developers or their authorized sales representatives directly through our platform.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimationWrapper variants={fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <HelpCircle className="mr-1 h-3.5 w-3.5" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about PropertyRight&apos;s services and how we can help you with your real estate needs.
            </p>
          </AnimationWrapper>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ scale: 1.01 }}
                className="border border-border rounded-lg overflow-hidden transition-all duration-200"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className={`flex justify-between items-center w-full p-4 text-left ${
                    openIndex === index ? "bg-secondary/50" : "hover:bg-secondary/20"
                  }`}
                  whileTap={{ scale: 0.98 }}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 flex-shrink-0 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    )}
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div 
                        className="p-4 pt-0 text-muted-foreground"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <AnimationWrapper variants={fadeInUp} className="mt-10 text-center" delay={0.3}>
            <p className="text-muted-foreground mb-4">
              Still have questions? We&apos;re here to help.
            </p>
            <Button className="mx-auto">
              Contact Support
            </Button>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
} 