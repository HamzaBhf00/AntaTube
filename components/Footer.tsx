"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-auto border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AntaTube. All rights reserved.
          </div>

          <nav className="flex items-center space-x-6">
            {/*
            <a
              href="https://gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Shop
            </a>
            */}
            <Link
              href="/youtube-trends-explorer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Youtube Trends Explorer
            </Link>
            <Link
              href="/youtube-thumbnail-grabber"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Youtube Thumbnail Grabber
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}