"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Youtube } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/watch?v=4SNThp0YiU4&pp=ygUPbXJiZWFzdCBlbmdsaXNo");
  const [inputUrl, setInputUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setInputUrl(newUrl);
    
    if (newUrl && newUrl.includes('youtube.com')) {
      setVideoUrl(newUrl);
      setIsPlaying(true);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-8 mt-8">
            <Badge variant="secondary" className="px-4 py-1 text-sm flex items-center gap-2">
              <Youtube className="h-4 w-4" />
              Watch YouTube Videos
            </Badge>
          </div>

          <div className="space-y-2 mb-4 mt-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Transform Your Content with
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              AntaTube
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience seamless video streaming and sharing. Paste any YouTube URL
            to preview how your content will look on our platform.
          </p>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="relative">
              <Youtube className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="url"
                placeholder="Paste YouTube URL here..."
                value={inputUrl}
                onChange={handleUrlChange}
                className="pl-10 h-11 pr-4"
                id="video-player"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-lg overflow-hidden shadow-2xl bg-card max-w-4xl mx-auto"
        >
          <div className="aspect-video">
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              playing={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls={true}
              className="rounded-lg"
              config={{
                youtube: {
                  playerVars: { showinfo: 1 }
                }
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}