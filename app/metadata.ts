import { Metadata } from 'next'

export const defaultMetadata: Metadata = {

  metadataBase: new URL('https://antatube.com'),
  title: { default: 'AntaTube - Your Lightweight YouTube Experience', template: '%s | AntaTube' },
  description: 'Enjoy videos in a lightweight mode. Simply paste any YouTube URL.',
  keywords: [
    'download youtube shorts', 'youtube ad free', 'youtube converter', 'youtube player no ads',
    'youtube lightweight', 'youtube content', 'youtube alternative', 'youtube to mp4', 'youtube trends explorer', 'best youtube downloader',
    'youtube video downloader', 'youtube to mp3 converter', 'watch youtube without ads',
    'lightweight youtube player', 'youtube fast loading', 'youtube high quality download',
    'youtube short downloader', 'youtube videos without ads', 'best youtube alternative'
  ],

  authors: [{
    name: 'Antatube', url: 'https://antatube.com'
  }],
  creator: 'Antatube',
  publisher: 'AntaTube',
  formatDetection: {
    email: false, address: false, telephone: false
  },
  robots: {
    index: true, follow: true, googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    type: 'website', locale: 'en_US', url: 'https://antatube.com', siteName: 'AntaTube',
    title: 'AntaTube - Your Lightweight YouTube Experience',
    description: 'Enjoy videos in a lightweight mode. Simply paste any YouTube URL.',
    images: [{
      url: '/imgs/og-image.png',
      width: 1200,
      height: 630,
      alt: 'AntaTube Platform Preview'
    }]
  },
  twitter: {
    card: 'summary_large_image', title: 'AntaTube - Your Lightweight YouTube Experience',
    description: 'Enjoy videos in a lightweight mode. Simply paste any YouTube URL.',
    creator: '@antatube',
    images: [
      {
        url: '/imgs/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AntaTube Platform Preview'
      }
    ]
  },
  alternates: {
    canonical: 'https://antatube.com',
    languages: {
      'en-US': 'https://antatube.com'
    }
  },
  category: 'technology'
}
