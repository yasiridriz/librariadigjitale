import { getServerSideSitemap } from 'next-sitemap'
import clientPromise from '../lib/mongodb';

export async function getServerSideProps(context) {

    const client = await clientPromise;

    var db = client.db();

    const books = await db
        .collection("books")
        .find({})
        .sort({ $natural: -1 })
        .toArray();

    const fields = [
        books.map(book => (
            {
                loc: `https://librariadigjitale.co/librat/${book.title}`,
                lastmod: new Date().toISOString(),
                changefreq: daily,
                priority: 1
            }
        ))
    ]

    return getServerSideSitemap(context, fields)
}

// Default export to prevent next.js errors
const ServerSideSitemap = () => { }
export default ServerSideSitemap;