"use client";

import Image from 'next/image';
import { cn } from "@/lib/utils";

interface VideoCardProps {
    video: {
        id: string;
        snippet: {
            title: string;
            channelTitle: string;
            thumbnails: {
                high: { url: string };
                default: { url: string };
            };
        };
        statistics: {
            viewCount: string;
            likeCount: string;
        };
    };
    index?: number;
}

export default function VideoCard({ video, index = 0 }: VideoCardProps) {
    return (
        <div className="max-w-sm w-full group/card">
            <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
                {/* Thumbnail */}
                <div className="relative aspect-video group-hover/card:brightness-90 transition-all duration-300">
                    {/* Position Badge */}
                    {index !== undefined && (
                        <div className="absolute top-2 left-2 bg-primary text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-md z-10">
                            #{index + 1}
                        </div>
                    )}
                    <Image
                        src={video.snippet.thumbnails.high.url}
                        alt={video.snippet.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
                        {Math.floor(Math.random() * 10 + 1)}:00
                    </div>
                </div>

                {/* Video Details */}
                <div className="p-3 bg-background">
                    <h3 className="font-medium text-base text-foreground line-clamp-2 mb-1 group-hover/card:text-primary transition-colors duration-300">
                        {video.snippet.title}
                    </h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                        <p className="line-clamp-1">{video.snippet.channelTitle}</p>
                        <div className="flex items-center text-xs text-muted-foreground space-x-4">
                            <div className="flex items-center gap-1">
                                <span>👁️</span>
                                <span>{parseInt(video.statistics.viewCount).toLocaleString()} views</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span>👍</span>
                                <span>{parseInt(video.statistics.likeCount).toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
} 