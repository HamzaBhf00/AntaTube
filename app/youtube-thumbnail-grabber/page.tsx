"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function YoutubeThumbnailGrabber() {
    const [videoUrl, setVideoUrl] = useState('');
    const [videoId, setVideoId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const extractVideoId = (url: string) => {
        const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const id = extractVideoId(videoUrl);
        if (id) {
            setVideoId(id);
            setError(null);
        } else {
            setError('Invalid YouTube URL. Please try again.');
            setVideoId(null);
        }
    };

    const getThumbnailUrl = () => {
        if (!videoId) return '';
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    };

    const handleDownload = async () => {
        const thumbnailUrl = getThumbnailUrl();
        if (!thumbnailUrl) return;

        try {
            const response = await fetch(thumbnailUrl);
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `thumbnail.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error('Error downloading thumbnail:', error);
            alert('Failed to download thumbnail. Please try again.');
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <div className="flex justify-center mb-8">
                    <Badge variant="secondary" className="px-4 py-1 text-sm flex items-center gap-2">
                        <Youtube className="h-4 w-4" />
                        YouTube Thumbnail Grabber
                    </Badge>
                </div>
                <div className="space-y-2 mb-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Download High-Quality
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
                        YouTube Thumbnails
                    </h1>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    Easily download high-quality thumbnails from any YouTube video. Just paste the URL and click "Get Thumbnail".
                </p>
            </motion.section>

            {/* Thumbnail Grabber Card */}
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                        Get Your Thumbnail
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col space-y-2">
                            <Input
                                type="text"
                                placeholder="Enter YouTube Video URL"
                                value={videoUrl}
                                onChange={(e) => setVideoUrl(e.target.value)}
                                className="w-full"
                            />
                            <Button type="submit" className="w-full">
                                Get Thumbnail
                            </Button>
                        </div>
                    </form>

                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}

                    {videoId && (
                        <div className="mt-6">
                            <div className="relative group aspect-video">
                                <Image
                                    src={getThumbnailUrl()}
                                    alt="YouTube Thumbnail"
                                    fill
                                    className="rounded-lg shadow-md object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <Button
                                    onClick={handleDownload}
                                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                    size="sm"
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Download
                                </Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
