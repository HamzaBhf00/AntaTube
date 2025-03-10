"use client";

import { X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const AnnouncementBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gradient-to-r from-[#271A1A] to-[#C72525] px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            {/* Decorative background elements */}
            <div
                aria-hidden="true"
                className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                    }}
                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#271A1A] to-[#C72525] opacity-30"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                    }}
                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#271A1A] to-[#C72525] opacity-30"
                />
            </div>

            {/* Content */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 w-full sm:w-auto">
                <p className="text-sm leading-6 text-white text-center">
                    <strong className="font-semibold">🎉 New Release</strong>
                    <span className="mx-2">•</span>
                    Try Youtube Thumbnail Downloader!
                </p>
                <Link
                    href="/youtube-thumbnail-grabber"
                    className="flex-none rounded-full bg-white px-3.5 py-1 text-sm font-semibold text-[#271A1A] shadow-sm hover:bg-white/90 transition-colors"
                >
                    Try now <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>

            {/* Close button */}
            <div className="flex flex-1 justify-end">
                <button
                    onClick={() => setIsVisible(false)}
                    type="button"
                    className="-m-3 p-3 focus-visible:outline-offset-[-4px] text-white hover:text-white/90 transition-colors"
                >
                    <span className="sr-only">Dismiss</span>
                    <X className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default AnnouncementBanner;