"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is AntaTube free to use?",
    answer: "Yes! AntaTube is completely free to use. Simply paste any YouTube URL and start enjoying your content without interruptions."
  },
  {
    question: "How does AntaTube work?",
    answer: "AntaTube works by providing a streamlined interface for YouTube content. Just copy and paste any YouTube URL into our player, and we'll handle the rest."
  },
  {
    question: "Is it legal to use AntaTube?",
    answer: "AntaTube respects content creators and copyright laws. We simply provide an alternative player for existing YouTube content, similar to how you might use an embedded player on any website."
  },
  {
    question: "Can I save my favorite videos?",
    answer: "Currently, AntaTube focuses on providing the best possible streaming experience. We recommend using YouTube's native features for saving and managing your favorite videos."
  },
  {
    question: "Does AntaTube work on mobile devices?",
    answer: "Yes! AntaTube is fully responsive and works great on all devices, including smartphones and tablets."
  }
];

export default function FAQ() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about AntaTube
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}