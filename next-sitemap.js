module.exports = {
  siteUrl: 'https://librariadigjitale.co',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], 
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://librariadigjitale.co/server-sitemap.xml',
    ],
  },
  priority: 1,
  // ...other options
}