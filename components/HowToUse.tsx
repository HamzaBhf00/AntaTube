"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube, PlaySquare, Headphones } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Watch Your YouTube Videos",
    description: "Instantly stream any YouTube video without interruptions. Perfect for tutorials, entertainment, or educational content!",
    icon: Youtube,
    thumbnail: "/imgs/video.webp"
  },
  {
    title: "Enjoy Your Playlists",
    description: "From educational courses to your favorite music playlists - enjoy continuous playback without distractions.",
    icon: PlaySquare,
    thumbnail: "/imgs/playlist.webp"
  },
  {
    title: "Listen to Podcasts",
    description: "Turn YouTube into your podcast player! Perfect for long-form content and educational series without interruptions.",
    icon: Headphones,
    thumbnail: "/imgs/podcast.webp"
  }
];

export default function HowToUse() {
  return (
    <section id="how-to-use" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How to Use AntaTube
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your YouTube experience in three simple ways
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden">
                <CardHeader className="space-y-4 pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 p-0">
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>

                  {feature.thumbnail && (
                    <div className="relative w-full aspect-video">
                      <Image
                        src={feature.thumbnail}
                        alt={feature.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                          <PlaySquare className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}