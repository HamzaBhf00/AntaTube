'use client';

import { useState, useEffect, useCallback } from 'react';
import { continents, countriesByContinent } from '@/lib/regions';
import VideoCard from '@/components/VideoCard';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function YoutubeTrendsExplorer() {
    const [selectedContinent, setSelectedContinent] = useState<keyof typeof countriesByContinent | null>(null);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [videos, setVideos] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchTrendingVideos = useCallback(async (regionCode: string) => {
        setLoading(true);
        try {
            const response = await fetch(`/api/trending?regionCode=${regionCode}&maxResults=3`);
            if (!response.ok) {
                throw new Error('Failed to fetch videos');
            }
            const data = await response.json();
            setVideos(data.items);
        } catch (error) {
            console.error('Error fetching trending videos:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            fetchTrendingVideos(selectedCountry);
        }
    }, [selectedCountry, fetchTrendingVideos]);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Section with Ad-Copy */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <div className="flex justify-center mb-8">
                    <Badge variant="secondary" className="px-4 py-1 text-sm flex items-center gap-2">
                        <Youtube className="h-4 w-4" />
                        YouTube Trends Explorer
                    </Badge>
                </div>
                <div className="space-y-2 mb-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Discover Global YouTube Trends
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
                        In Real-Time
                    </h1>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    Track trending YouTube videos across 100+ countries and 6 continents. Stay updated with real-time insights to enhance your content strategy.
                </p>
            </motion.section>

            {/* Continent and Country Selection */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
                <div className="bg-card rounded-xl border shadow-2xl p-6">
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Select Continent</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.entries(continents).map(([code, name]) => (
                            <motion.button
                                key={code}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    setSelectedContinent(code as keyof typeof countriesByContinent);
                                    setSelectedCountry(null);
                                    setVideos([]);
                                }}
                                className={`flex items-center justify-center p-4 rounded-xl transition-all duration-200 focus:ring-2 focus:ring-primary/50 outline-none ${selectedContinent === code
                                    ? 'bg-primary text-primary-foreground shadow-lg'
                                    : 'bg-secondary hover:bg-secondary/80 text-foreground'
                                    }`}
                            >
                                {name}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {selectedContinent && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-card rounded-xl border shadow-2xl p-6"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-foreground">Select Country</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {countriesByContinent[selectedContinent].map((country) => (
                                <motion.button
                                    key={country.code}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCountry(country.code)}
                                    className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-200 focus:ring-2 focus:ring-primary/50 outline-none ${selectedCountry === country.code
                                        ? 'bg-primary text-primary-foreground shadow-lg'
                                        : 'bg-secondary hover:bg-secondary/80 text-foreground'
                                        }`}
                                >
                                    <Image
                                        src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                        alt={country.name}
                                        width={24}
                                        height={16}
                                        className="rounded-sm"
                                        onLoadingComplete={(img) => {
                                            if (img.naturalWidth === 0) img.style.display = 'none';
                                        }}
                                    />
                                    <span>{country.name}</span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.div>

            {/* Loading State */}
            {loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12 space-y-4"
                >
                    <div className="animate-pulse text-primary text-6xl">🎥</div>
                    <p className="text-muted-foreground text-lg">Loading trending videos...</p>
                </motion.div>
            )}

            {/* Trending Videos Section */}
            {!loading && videos.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card rounded-xl border shadow-2xl p-6"
                >
                    <h2 className="text-3xl font-bold mb-8 text-foreground">
                        Top 3 Trending Videos in {countriesByContinent[selectedContinent!].find(c => c.code === selectedCountry)?.name}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {videos.map((video, index) => (
                            <VideoCard key={video.id} video={video} index={index} />
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
}
