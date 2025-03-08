"use client";

import { useState } from "react";
import { Menu, X, Play } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  // For mobile menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto flex flex-wrap p-3 flex-col md:flex-row">
        {/* Logo and Mobile Menu Button */}
        <div className="flex flex-row items-center justify-between">
          <Link href="/" className="flex text-xl font-bold">
            <Play className="h-6 w-6 text-primary" />
            <span className="ml-2">AntaTube</span>
          </Link>
          <button
            className="text-foreground cursor-pointer leading-none px-2 py-1 md:hidden outline-none focus:outline-none"
            type="button"
            aria-label="button"
            onClick={toggleMobileMenu}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Nav Links and Tools Dropdown */}
        <div className={`md:flex flex-grow items-center ${navbarOpen ? "flex" : "hidden"}`}>
          <div className="md:ml-auto md:mr-auto pt-1 md:pl-10 pl-1 flex flex-wrap items-center md:text-base text-sm md:justify-center justify-items-start">
            {/* Sections */}
            <Link href="/#features" className="mr-6 pr-2 cursor-pointer text-muted-foreground hover:text-primary font-semibold transition-colors duration-200">
              Features
            </Link>
            <Link href="/#how-to-use" className="mr-6 pr-2 cursor-pointer text-muted-foreground hover:text-primary font-semibold transition-colors duration-200">
              How to Use
            </Link>
            <Link href="/#about" className="mr-6 pr-2 cursor-pointer text-muted-foreground hover:text-primary font-semibold transition-colors duration-200">
              About
            </Link>
            <Link href="/#testimonials" className="mr-6 pr-2 cursor-pointer text-muted-foreground hover:text-primary font-semibold transition-colors duration-200">
              Testimonials
            </Link>
            <Link href="/#faq" className="mr-6 pr-2 cursor-pointer text-muted-foreground hover:text-primary font-semibold transition-colors duration-200">
              FAQ
            </Link>

            {/* Tools Dropdown */}
            <div className="relative">
              <button
                type="button"
                className="group rounded-md text-muted-foreground inline-flex items-center text-base font-medium focus:outline-none hover:text-primary transition-colors duration-200"
                onClick={() => setToolsOpen(!toolsOpen)}
                onMouseEnter={() => setToolsOpen(true)}
              >
                <span>Tools</span>
                <svg
                  className={toolsOpen ? "transform rotate-180 ml-2 h-4 w-4 transition ease-out duration-200" : "ml-2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200"}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div
                onMouseEnter={() => setToolsOpen(true)}
                onMouseLeave={() => setToolsOpen(false)}
                className={toolsOpen ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform w-screen max-w-xs sm:px-0" : "hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform w-screen max-w-xs sm:px-0"}
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-4 bg-card p-4 sm:gap-6">
                    <Link href="/youtube-trends-explorer" className="-m-3 p-3 flex items-start rounded-lg hover:bg-secondary transition-colors duration-200">
                      <div className="ml-0">
                        <p className="text-base font-medium text-foreground">YouTube Trends Explorer</p>
                        <p className="mt-1 text-sm text-muted-foreground">Discover trending videos by country</p>
                      </div>
                    </Link>
                    <Link href="/youtube-thumbnail-grabber" className="-m-3 p-3 flex items-start rounded-lg hover:bg-secondary transition-colors duration-200">
                      <div className="ml-0">
                        <p className="text-base font-medium text-foreground">YouTube Thumbnail Grabber</p>
                        <p className="mt-1 text-sm text-muted-foreground">Download high-quality thumbnails</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Navigation Links */}
            <Link href="/#features" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              Features
            </Link>
            <Link href="/#how-to-use" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              How to Use
            </Link>
            <Link href="/#about" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              About
            </Link>
            <Link href="/#testimonials" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              Testimonials
            </Link>
            <Link href="/#faq" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              FAQ
            </Link>

            {/* Tools Section */}
            <div className="px-3 py-2">
              <p className="text-base font-medium text-foreground mb-2">Tools</p>
              <Link href="/youtube-trends-explorer" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                YouTube Trends Explorer
              </Link>
              <Link href="/youtube-thumbnail-grabber" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                YouTube Thumbnail Grabber
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
