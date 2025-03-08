import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { defaultMetadata } from './metadata';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <ErrorBoundary>
              <Navbar />
              <main className="flex-grow pt-16">
                {children}
              </main>
              <Footer />
            </ErrorBoundary>
          </div>
        </Providers>
      </body>
    </html>
  );
}