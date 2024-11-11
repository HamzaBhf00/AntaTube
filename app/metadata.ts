import { Metadata } from 'next'



export const defaultMetadata: Metadata = {

  metadataBase: new URL('https://antatube.com'),

  title: {

    default: 'AntaTube - Your Lightweight YouTube Experience',

    template: '%s | AntaTube'

  },

  description: 'Enjoy videos in a lightweight mode. Simply paste any YouTube URL.',

  keywords: [

    'video platform',

    'streaming',

    'entertainment',

    'youTube videos',

    'youtube player',

    'online videos',

    'youtube content'

  ],

  authors: [{ name: 'Antatube', url: 'https://github.com/HamzaBhf00/AntaTube' }],

  creator: 'Antatube',

  publisher: 'AntaTube',

  formatDetection: {

    email: false,

    address: false,

    telephone: false,

  },

  robots: {

    index: true,

    follow: true,

    googleBot: {

      index: true,

      follow: true,

      'max-video-preview': -1,

      'max-image-preview': 'large',

      'max-snippet': -1,

    },

  },

  openGraph: {

    type: 'website',

    locale: 'en_US',

    url: 'https://antatube.com',

    siteName: 'AntaTube',

    title: 'AntaTube - Your Lightweight YouTube Experience',

    description: 'Enjoy videos in a lightweight mode. Simply paste any YouTube URL.',

    images: [

      {

        url: '/imgs/og-image.png',

        width: 1200,

        height: 630,

        alt: 'AntaTube Platform Preview',

      }

    ]

  },

  twitter: {

    card: 'summary_large_image',

    title: 'AntaTube - Your Lightweight YouTube Experience',

    description: 'Enjoy videos in a lightweight mode. Simply paste any YouTube URL.',

    creator: '@antatube',

    images: ['/imgs/og-image.png'],

  },

  alternates: {

    canonical: 'https://antatube.com',

    languages: {

      'en-US': 'https://antatube.com',
    },

  },

  category: 'technology'

} 
