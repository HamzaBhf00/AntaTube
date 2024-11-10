import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://antatube.com'),
  title: {
    default: 'AntaTube - Ad-Free YouTube Video Experience',
    template: '%s | AntaTube'
  },
  description: 'Transform your YouTube experience with AntaTube. Watch videos, playlists, and podcasts without ads. Enjoy seamless streaming and a clean interface.',
  keywords: [
    'youtube player',
    'ad-free youtube',
    'video streaming',
    'youtube playlist player',
    'podcast player',
    'youtube without ads',
    'video platform',
    'streaming service',
    'youtube alternative',
    'online video player'
  ],
  authors: [{ name: 'AntaTube Team' }],
  creator: 'AntaTube',
  publisher: 'AntaTube',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'AntaTube',
    title: 'AntaTube - Ad-Free YouTube Video Experience',
    description: 'Transform your YouTube experience with AntaTube. Watch videos, playlists, and podcasts without ads.',
    url: 'https://antatube.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AntaTube Platform Preview',
      }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AntaTube - Ad-Free YouTube Video Experience',
    description: 'Transform your YouTube experience with AntaTube. Watch videos, playlists, and podcasts without ads.',
    creator: '@antatube',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
    other: {
      'norton-safeweb': 'your-norton-verification',
    },
  },
  alternates: {
    canonical: 'https://antatube.com',
    languages: {
      'en-US': 'https://antatube.com',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icons/favicon.png', type: 'image/png'},
      { url: '/icons/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'AntaTube',
  },
  applicationName: 'AntaTube',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://youtube.com" />
        <meta name="application-name" content="AntaTube" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AntaTube" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}