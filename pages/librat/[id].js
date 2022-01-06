import { useRouter } from "next/router";

import Head from "next/head";

import clientPromise from "../../lib/mongodb";

const ExpandedBook = ({ book }) => {
    return (
        <div className="container">
            <Head>
                <title>
                    {book.author} - {book.title} | Libraria Digjitale
                </title>
                <meta property="og:url" content={`https://librariadigjitale.co/librat/${book.title}`} />
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content={`${book.author} - ${book.title} | Libraria Digjitale`}
                />
                <meta name="twitter:card" content={`summary_large_image`} />
                <meta
                    property="og:description"
                    content={`Shkarko librin ${book.title} nga ${book.author} në formatin EPUB dhe PDF. `}
                />
                <meta property="og:image" content={book.image} />
            </Head>
            <div id="bookContainer" className="page">
                <div className="row">
                    <div className="col-md-4">
                        <div className="imageContainer">
                            <img src={book.image} />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="details" key="details">
                            <h1>{book.title}</h1>
                            <p>Nga {book.author}</p>
                            <div className="description">
                                <p>
                                    {book.description}
                                </p>
                                <hr />
                                <div className="links">
                                    <p> Shkarko: </p>
                                    {book.links.map(link => (
                                        <a key={link.link} target="_blank" download href={link.link} className="btn-main noborder" >
                                            {link.type} {book.publisher !== "" ? `në ${book.publisher}` : ""}
                                        </a>
                                    ))}

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpandedBook;

export async function getServerSideProps(context) {
    const client = await clientPromise;

    var db = client.db();

    const books = await db
        .collection("books")
        .find({ title: context.query.id })
        .toArray();
    return {
        props: {
            book: JSON.parse(JSON.stringify(books[0])),
        },
    };
}