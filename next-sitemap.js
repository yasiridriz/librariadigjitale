module.exports = {
  siteUrl: 'localhost:3000',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], 
  robotsTxtOptions: {
    additionalSitemaps: [
      'localhost:3000/server-sitemap.xml',
    ],
  },
  priority: 1,
  // ...other options
}