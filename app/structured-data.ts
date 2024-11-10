export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AntaTube',
    applicationCategory: 'MultimediaApplication',
    description: 'Transform your content with AntaTube. Experience seamless video streaming and sharing.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'YouTube video streaming',
      'Ad-free experience',
      'Fast and lightweight',
      'Universal streaming support',
    ],
  };
}; 