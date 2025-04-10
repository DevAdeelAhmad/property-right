"use client";

import {
  Building,
  Search,
  Shield,
  UserCheck,
  BarChart,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, bounceIn } from "@/lib/animations";
import { AnimationWrapper } from "./AnimationWrapper";

const features = [
  {
    icon: Building,
    title: "Verified Listings",
    description:
      "Every property is verified by our team to ensure accuracy and legitimacy.",
  },
  {
    icon: Search,
    title: "Advanced Search",
    description:
      "Find your ideal property with powerful filters for location, price, amenities, and more.",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description:
      "End-to-end encrypted communication and secure payment processing.",
  },
  {
    icon: UserCheck,
    title: "Vetted Agents",
    description:
      "Connect with licensed real estate professionals with verified credentials and reviews.",
  },
  {
    icon: BarChart,
    title: "Market Insights",
    description:
      "Access detailed market analytics, trends, and property valuations.",
  },
  {
    icon: Globe,
    title: "Bilingual Support",
    description:
      "Full platform support in both English and Arabic for a seamless experience.",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper variants={bounceIn} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why Choose PropertyRight
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform offers comprehensive tools and verified listings to
            make your property journey smooth and successful.
          </p>
        </AnimationWrapper>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={bounceIn}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
