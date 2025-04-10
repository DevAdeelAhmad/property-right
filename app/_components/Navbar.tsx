"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Buy", href: "/buy" },
  { title: "Rent", href: "/rent" },
  { title: "Off-Plan", href: "/off-plan" },
  { title: "Agents", href: "/agents" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}
          >
            PropertyRight
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isScrolled
                    ? "text-foreground hover:bg-secondary"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              className={`${isScrolled ? '' : 'text-white hover:bg-white/10'}`}
            >
              Sign In
            </Button>
            <Button 
              className={`${isScrolled ? 'bg-primary text-primary-foreground' : 'bg-white text-black hover:bg-white/90'}`}
            >
              List Property
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? '' : 'text-white hover:bg-white/10'}`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-foreground rounded-md hover:bg-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <div className="pt-4 pb-2 flex flex-col gap-2">
              <Button variant="outline" className="w-full justify-start">
                Sign In
              </Button>
              <Button className="w-full justify-start">
                List Property
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 