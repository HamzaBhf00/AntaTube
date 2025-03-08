"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "AntaTube has completely transformed how I enjoy YouTube content. The platform is intuitive and the ad-free experience is amazing.",
    author: "Sam Johnson",
    role: "Content Creator",
    avatar: "/avatars/sam.webp",
    avatarFallback: "SJ"
  },
  {
    quote: "The instant loading and clean interface make AntaTube my go-to platform for watching YouTube videos. It is simply brilliant!",
    author: "Michael Chen",
    role: "Tech Enthusiast",
    avatar: "/avatars/michael.webp",
    avatarFallback: "MC"
  },
  {
    quote: "Best YouTube streaming platform I have used. No ads, fast loading, and works perfectly on all my devices without interruptions.",
    author: "Emma Davis",
    role: "Digital Nomad",
    avatar: "/avatars/emma.webp",
    avatarFallback: "ED"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied users who trust AntaTube
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="relative">
                    <span className="absolute -left-4 -top-4 text-6xl text-primary opacity-20">&ldquo;</span>
                    <p className="text-lg relative z-10">{testimonial.quote}</p>
                  </div>
                </CardHeader>
                <CardFooter className="flex items-center gap-4">
                  <Avatar>
                    {testimonial.avatar && (
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.author}
                      />
                    )}
                    <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground">
            Experience the difference with AntaTube today
          </p>
        </motion.div>
      </div>
    </section>
  );
}