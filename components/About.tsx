"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] mb-12 lg:mb-0"
          >
            <Image
              src="/imgs/about.png"
              alt="AntaTube Platform"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg shadow-xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:pl-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Lightweight YouTube Experience for Everyone
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              AntaTube was designed to address the challenges many users face – from slow internet connections to low laptop performance and distractions. We provide a streamlined, lightweight platform for those who want to enjoy YouTube content without interruptions or frustration.            </p>
            <p className="text-lg text-muted-foreground mb-8">
              AntaTube is here to solve real-world problems, offering a smooth, distraction-free experience that lets users focus on what matters most – the content. We’re committed to making YouTube accessible, enjoyable, and easy to use, no matter the device or connection.
            </p>

            <Button size="lg" className="group" onClick={() => {
              const element = document.getElementById('video-player');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Watch Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}