/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://antatube.com',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/404'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
}
