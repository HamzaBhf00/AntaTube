"use client";

import { motion } from "framer-motion";
import { 
  Youtube, 
  Shield, 
  Zap, 
  Share2,
  Globe,
  Palette
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Ad-Free Experience",
    description: "No need for an ad blocker – enjoy uninterrupted streaming.",
    details: [
      "No mid-roll ads",
      "No pre-roll ads",
      "Clean interface"
    ]
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience instant loading and smooth playback every time.",
    details: [
      "Instant video loading",
      "No buffering delays",
      "Optimized performance"
    ]
  },
  {
    icon: Youtube,
    title: "Universal Compatibility",
    description: "Works with all types of YouTube content seamlessly.",
    details: [
      "Support for all videos",
      "Playlist compatibility",
      "Live stream support"
    ]
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your favorite content across any platform instantly.",
    details: [
      "One-click sharing",
      "Custom timestamps",
      "Direct link copying"
    ]
  },
  {
    icon: Globe,
    title: "Cross-Platform Access",
    description: "Access your content from any device, anywhere, anytime.",
    details: [
      "Mobile responsive",
      "Desktop optimized",
      "Tablet friendly"
    ]
  },
  {
    icon: Palette,
    title: "Customizable Player",
    description: "Personalize your viewing experience to your preferences.",
    details: [
      "Custom playback speeds",
      "Quality selection",
      "Theater mode"
    ]
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose AntaTube
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Powerful features designed for the ultimate streaming experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}