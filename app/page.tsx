import dynamic from 'next/dynamic';
import { websiteSchema, organizationSchema } from './structured-data'

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Features = dynamic(() => import('@/components/Features'));
const HowToUse = dynamic(() => import('@/components/HowToUse'));
const About = dynamic(() => import('@/components/About'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const FAQ = dynamic(() => import('@/components/FAQ'));

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <main className="min-h-screen">
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="how-to-use">
          <HowToUse />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq">
          <FAQ />
        </section>
      </main>
    </>
  );
}