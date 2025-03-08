import NodeCache from 'node-cache';

const cache = new NodeCache({
    stdTTL: 300, // 5 minutes
    checkperiod: 60, // Check for expired keys every 1 minute
});

export const cacheData = <T>(key: string, data: T): void => {
    cache.set(key, data);
};

export const getCachedData = <T>(key: string): T | undefined => {
    return cache.get<T>(key);
};

export const invalidateCache = (key: string): void => {
    cache.del(key);
};

export default cache; 