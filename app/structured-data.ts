export const websiteSchema = {

  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AntaTube',
  description: 'AntaTube is a lightweight video streaming platform that offers a simple, fast, and distraction-free viewing experience.',
  url: 'https://antatube.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://antatube.com/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  },
  sameAs: [
    //'https://x.com/antatube',
    //'https://facebook.com/antatube',
    //'https://instagram.com/antatube',
  ]
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AntaTube',
  url: 'https://antatube.com',
  description: 'AntaTube is a lightweight video streaming platform that offers a simple, fast, and distraction-free viewing experience.',
  foundingDate: '2024',
  founders: [{ '@type': 'Person', name: 'AntaTube' }],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@antatube.com'
  }
}
