import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'YouTube Thumbnail Grabber | Download High-Quality Thumbnails | AntaTube',
    description: 'Download high-quality thumbnails from any YouTube video for free. Easy-to-use tool to extract and save YouTube video thumbnails in HD quality.',
    keywords: 'YouTube thumbnail downloader, YouTube thumbnail grabber, download YouTube thumbnails, YouTube thumbnail extractor, HD thumbnail download, YouTube tools, youtube thumbnail grabber, thumbnail grabber youtube, download youtube thumbnail, download thumbnail from youtube, youtube thumbnail download, youtube shorts thumbnail downloader, youtube thumbnail downloader',
    openGraph: {
        title: 'YouTube Thumbnail Grabber | Download High-Quality Thumbnails',
        description: 'Download high-quality thumbnails from any YouTube video for free. Get HD thumbnails instantly with our easy-to-use tool.',
        type: 'website',
        url: 'https://antatube.com/youtube-thumbnail-grabber',
        images: [
            {
                url: '/imgs/og-thumbnail-grabber.png',
                width: 1200,
                height: 630,
                alt: 'YouTube Thumbnail Grabber Tool'
            }
        ],
        siteName: 'AntaTube'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'YouTube Thumbnail Grabber | Download High-Quality Thumbnails',
        description: 'Download high-quality thumbnails from any YouTube video for free. Get HD thumbnails instantly.',
        images: ['/imgs/og-thumbnail-grabber.png'],
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
        canonical: 'https://antatube.com/youtube-thumbnail-grabber'
    }
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 