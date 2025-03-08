import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'YouTube Trends Explorer | Discover Trending Videos by Country | AntaTube',
    description: 'Explore trending YouTube videos from 100+ countries. Real-time insights into what\'s popular on YouTube across different regions and continents.',
    keywords: 'YouTube trends, trending videos, YouTube analytics, country-specific trends, global YouTube trends, viral videos, YouTube explorer, YouTube trends explorer, youtube trend explorer. Youtube trending videos, youtube trending videos by country',
    openGraph: {
        title: 'YouTube Trends Explorer | Discover Global Trending Videos',
        description: 'Track trending YouTube videos across 100+ countries and 6 continents. Get real-time insights into what\'s popular on YouTube worldwide.',
        type: 'website',
        url: 'https://antatube.com/youtube-trends-explorer',
        images: [
            {
                url: '/imgs/og-trends-explorer.png',
                width: 1200,
                height: 630,
                alt: 'YouTube Trends Explorer Tool'
            }
        ],
        siteName: 'AntaTube'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'YouTube Trends Explorer | Discover Global Trending Videos',
        description: 'Explore trending YouTube videos from different countries. Stay updated with real-time global YouTube trends.',
        images: ['/imgs/og-trends-explorer.png'],
        creator: '@antatube'
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
    alternates: {
        canonical: 'https://antatube.com/youtube-trends-explorer'
    }
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 