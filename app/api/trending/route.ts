import { NextResponse } from 'next/server';

// Cache YouTube API responses for 1 hour
const CACHE_TTL = 3600; // 1 hour in seconds
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/videos';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const regionCode = searchParams.get('regionCode');
    const maxResults = searchParams.get('maxResults') || '3';
    const apiKey = process.env.YOUTUBE_API_KEY; // Use server-side environment variable

    // Validate input parameters
    if (!regionCode || !/^[A-Z]{2}$/.test(regionCode)) {
        return NextResponse.json(
            { error: 'Invalid or missing region code' },
            { status: 400 }
        );
    }

    if (isNaN(Number(maxResults)) || Number(maxResults) > 50 || Number(maxResults) < 1) {
        return NextResponse.json(
            { error: 'Invalid maxResults parameter' },
            { status: 400 }
        );
    }

    try {
        const url = new URL(YOUTUBE_API_URL);
        url.searchParams.set('part', 'snippet,statistics');
        url.searchParams.set('chart', 'mostPopular');
        if (regionCode) url.searchParams.set('regionCode', regionCode);
        if (maxResults) url.searchParams.set('maxResults', maxResults);
        if (apiKey) url.searchParams.set('key', apiKey);

        const response = await fetch(url.toString(), {
            next: { revalidate: CACHE_TTL } // Enable ISR caching
        });

        if (!response.ok) {
            throw new Error(`YouTube API responded with status ${response.status}`);
        }

        const data = await response.json();

        // Sanitize and limit the response data
        const sanitizedData = {
            items: data.items.map((item: any) => ({
                id: item.id,
                snippet: {
                    title: item.snippet?.title,
                    channelTitle: item.snippet?.channelTitle,
                    thumbnails: item.snippet?.thumbnails
                },
                statistics: item.statistics
            }))
        };

        return NextResponse.json(sanitizedData, {
            headers: {
                'Cache-Control': `public, max-age=${CACHE_TTL}, stale-while-revalidate=300`,
                'Content-Security-Policy': "default-src 'self'; script-src 'none';"
            }
        });
    } catch (error) {
        console.error('Error fetching trending videos:', error);
        return NextResponse.json(
            { error: 'Failed to fetch trending videos' },
            { status: 500 }
        );
    }
} 