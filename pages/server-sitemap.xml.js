import { getServerSideSitemap } from 'next-sitemap'

export async function getServerSideProps(context) {


  const fields = [
    {
      loc: 'https://example.com', // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://example.com/dynamic-path-2', // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ]

  return getServerSideSitemap(context, fields)
}

// Default export to prevent next.js errors
const ServerSideSitemap = () => {}
export default ServerSideSitemap;