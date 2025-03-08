export interface YouTubeVideo {
    id: string;
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            default: { url: string; width: number; height: number };
            medium: { url: string; width: number; height: number };
            high: { url: string; width: number; height: number };
            standard?: { url: string; width: number; height: number };
            maxres?: { url: string; width: number; height: number };
        };
        channelTitle: string;
        publishedAt: string;
    };
    statistics?: {
        viewCount: string;
        likeCount: string;
        commentCount: string;
    };
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export interface TrendingResponse {
    items: YouTubeVideo[];
    nextPageToken?: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
} 