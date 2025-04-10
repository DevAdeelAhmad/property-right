"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "Properties",
    links: [
      { label: "Buy", href: "/buy" },
      { label: "Rent", href: "/rent" },
      { label: "Off-plan", href: "/off-plan" },
      { label: "Commercial", href: "/commercial" },
      { label: "New Projects", href: "/new-projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
      { label: "Partner With Us", href: "/partner" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Articles", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Market Reports", href: "/reports" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "DMCA Policy", href: "/dmca" },
      { label: "Fair Housing", href: "/fair-housing" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold mb-3 inline-block">
              PropertyRight
            </Link>
            <p className="text-muted-foreground mb-4 text-sm max-w-md">
              Your trusted partner for finding the perfect property in the UAE.
              We connect property seekers with verified agents for a seamless experience.
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <p className="text-xs">
                  PropertyRight Tower, Sheikh Zayed Road<br />
                  Dubai, United Arab Emirates
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <p className="text-xs">+971 4 123 4567</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <p className="text-xs">info@propertyright.ae</p>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-2 mt-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="h-3.5 w-3.5 text-foreground" />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-base mb-3">{group.title}</h3>
              <ul className="space-y-1.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div>
              <h3 className="font-semibold text-base mb-1">Stay Up-to-Date</h3>
              <p className="text-xs text-muted-foreground">
                Subscribe to our newsletter for the latest property listings, market updates, and exclusive offers.
              </p>
            </div>
            <div className="flex gap-2 max-w-md">
              <Input
                type="email"
                placeholder="Your email address"
                className="h-9 text-sm"
              />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-border mt-6 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-muted-foreground">
            © {currentYear} PropertyRight. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
            <Link 
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
            <Link 
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 