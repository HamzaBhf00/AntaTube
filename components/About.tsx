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
              src="/about.png"
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
              Empowering Content Creators Since 2024
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              AntaTube began with a vision to revolutionize how we experience YouTube content. 
              Today, we're proud to serve thousands of users worldwide, helping them enjoy 
              their favorite content without interruptions.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our platform combines cutting-edge technology with intuitive design,
              ensuring that everyone can enjoy a seamless streaming experience that
              puts content first.
            </p>
            <Button size="lg" className="group">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}