"use client";

import { useState } from "react";
import { Menu, X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Play className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">AntaTube</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Button variant="ghost" onClick={() => scrollToSection('features')}>
                Features
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('how-to-use')}>
                How to Use
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('about')}>
                About
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('testimonials')}>
                Testimonials
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('faq')}>
                FAQ
              </Button>
              <Button onClick={() => scrollToSection('video-player')}>
                Get Started
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Button 
              variant="ghost" 
              className="w-full text-left"
              onClick={() => scrollToSection('features')}
            >
              Features
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-left"
              onClick={() => scrollToSection('how-to-use')}
            >
              How to Use
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-left"
              onClick={() => scrollToSection('about')}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-left"
              onClick={() => scrollToSection('testimonials')}
            >
              Testimonials
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-left"
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </Button>
            <Button 
              className="w-full"
              onClick={() => scrollToSection('video-player')}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}