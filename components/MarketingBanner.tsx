"use client";

import { X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";


const MarketingBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div
            id="marketing-banner"
            tabIndex={-1}
            className="fixed z-50 bottom-4 right-4 w-[300px] bg-[#1a1a1a] text-white rounded-lg shadow-lg border border-gray-800"
        >
            <div className="p-4">
                {/* Clickable Container */}
                <a
                    href="https://buy.stripe.com/dR64ht331bBS4CI7sw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                    <div className="flex items-start space-x-4 group cursor-pointer">
                        {/* Image */}
                        <Image
                            src="/imgs/500videos.webp"
                            alt="Marketing Icon"
                            width={80}
                            height={80}
                            className="w-20 h-20 rounded"
                        />

                        {/* Text Content */}
                        <div className="flex-1 text-left">
                            <h3 className="text-sm font-medium group-hover:text-gray-300 transition-colors">
                                500+ Motivational Videos!
                            </h3>
                            <p className="text-xs text-gray-400 mt-1">
                                Take your YouTube Shorts to the next level with our collection of over 500 animated videos.
                            </p>
                        </div>
                    </div>
                </a>

                {/* Close Button - Outside the clickable area */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setIsVisible(false);
                    }}
                    type="button"
                    className="absolute top-2 right-4 text-gray-400 hover:text-gray-300 transition-colors"
                >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close banner</span>
                </button>

                {/* Carbon Ads Label */}
                <div className="mt-3 text-[10px] uppercase tracking-wider text-gray-500 text-left">
                    Boost Your YouTube Shorts & Start Earning!
                </div>
            </div>
        </div>
    );
};

export default MarketingBanner;