import { useState } from 'react';
import Link from 'next/link';

import Head from 'next/head';
import Image from 'next/image';

import Search from '../../components/layout/search';

import clientPromise from "../../lib/mongodb"; // mongo client

import { motion } from 'framer-motion';
import { container, content } from '../../lib/motion/variants';

// // hook to stop body from scrolling when book is expanded
// function useLockBodyScroll() {
//     useLayoutEffect(() => {
//         const originalStyle = window.getComputedStyle(document.body).overflow;
//         document.body.style.overflow = "hidden";

//         return () => (document.body.style.overflow = originalStyle); // go back to scroll
//     }, []);
// }


function ExpandedBook({ book, onCollapse }) {
    useLockBodyScroll()
    function truncate(str, n) {
        if (str.length <= n) { return str; }
        const subString = str.substr(0, n - 1); // the original check
        return (subString.substr(0, subString.lastIndexOf(" ")).concat('... '))
    };
    return (
        <>
            <Head>
                <title>{book.title} - {book.author}</title>
            </Head>
            {/* <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="overlay"
            >
            </div> */}
            <div id="bookContainer" className="bookContainer expanded">
                <div className="container-fluid px-0">
                    <div className="row justify-content-center no-gutters">
                        <div className="book col-xl-8 col-md-12">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <div className="imageContainer">
                                        <img src={book.image} />
                                    </div>
                                </div>
                                <div className="col-md-8">

                                    <div initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2, delay: 0.25 }} className="details">
                                        <Link href="/librat/" scroll={false}><span className="close" onClick={onCollapse}></span></Link>
                                        <h1>{book.title}</h1>
                                        <p>Nga {book.author}</p>
                                        <div className="description">
                                            <p>
                                                {truncate(book.description, 250)}
                                                <br /><br />
                                                <Link href="/librat/[id].js" as={`/librat/${book.title}`}><a>Lexo më shumë <span className="shift"> &rarr; </span></a></Link>
                                            </p>
                                            <hr />
                                            <div className="links">
                                                <p> Shkarko: </p>
                                                {book.links.map(link => (
                                                    <a target="_blank" download href={link.link} className="btn-main noborder" >
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
                </div>
            </div>
        </>
    )
}

function CompactBook({ book, onExpand, disabled }) {
    //  Link for no routing
    return (
        <Link href={`/librat/?book=${book.title}`} as={`/librat/${book.title}`} scroll={false} passHref>
            {/* onClick={disabled ? undefined : onExpand} --> FOR FRAMER CARD EXPAND ANIMATION */}
            <div className="col-md-4 compact">
                <div className="bookContainer" >
                    <div className="book" >
                        <div className="imageContainer">
                            <img src={book.image} />
                        </div>
                        {/* <div className="details">
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                    </div> */}
                    </div>
                </div>
            </div>
        </Link>
    );
}

const Book = ({ book, onCollapse, onExpand, disabled }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const collapse = () => {
        setIsExpanded(false);
        onCollapse();
    };

    const expand = () => {
        setIsExpanded(true);
        onExpand();

    };

    return (
        // <AnimateSharedLayout type="crossfade">
        //     {isExpanded ? (
        //         <ExpandedBook onCollapse={collapse} book={book}>
        //         </ExpandedBook>
        //     ) : (
        //         <CompactBook onExpand={expand} disabled={disabled} book={book}>
        //         </CompactBook>
        //     )}
        // </AnimateSharedLayout>
        //         <Link key={book.id} href={`/librat/?book=${book.title}`} as={`/librat/${book.title}`} scroll={false} passHref>
        <Link href={`/librat/[slug]`} as={`/librat/${book.slug}`} passHref>
            {/* onClick={disabled ? undefined : onExpand} --> FOR FRAMER CARD EXPAND ANIMATION */}
            <motion.div variants={content} className="col-md-4 compact">
                <div className="bookContainer">
                    <div className="book">
                        <div className="imageContainer">
                            <Image src={book.image} quality={100} width={2564} height={4000} placeholder='blur' blurDataURL='data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkkAQAAB8AG7jymN8AAAAASUVORK5CYII=' />
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

const Books = ({ books }) => {


    const [expandedBook, setCollapsedBook] = useState();

    const [search, setSearch] = useState("");
    let tokens = search
        .toLowerCase()
        .split(' ')
        .filter(function (token) {
            return token.trim() !== '';
        });
    var searchTermRegex = new RegExp(tokens.join(`|`), `gim`);
    var filteredList = books.filter(function (book) {
        var searchString = '';
        for (var key in book) {
            if (book.hasOwnProperty(key) && book[key] !== '') {
                searchString += book[key].toString().toLowerCase().trim() + ' ';
            }
        }
        return searchString.match(searchTermRegex);

    })


    return (
        <motion.div initial="initial" animate="enter" exit="exit" variants={container} className="container">
            <Head>
                <title>
                    Të gjitha librat | Libraria Digjitale
                </title>
                <meta property="og:url" content={`https://librariadigjitale.co/librat/`} />
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content={`Të gjitha librat | Libraria Digjitale`}
                />
                <meta name="twitter:card" content={`summary_large_image`} />
                <meta
                    property="og:description"
                    content={`Shkarko libra shqip në formatin EPUB dhe PDF nga libraria më e madhe digjitale. `}
                />
                <meta property="og:image" content="https://i.postimg.cc/G2dtq6bP/logo.png" />
            </Head>

            <motion.h1 variants={content} className="bigtitle"><span>Të Gjitha Librat</span></motion.h1>

            {/* <h1 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="bigtitle"><span>Të Gjitha Librat</span></h1> */}

            {/* search */}
            <Search search={search} setSearch={setSearch} />


            <div className="row">
                {filteredList.map(book => (
                    <Book
                        key={book.title}
                        book={book}
                        disabled={expandedBook !== book && expandedBook !== undefined}
                        onExpand={() => setCollapsedBook(book)}
                        onCollapse={() => setCollapsedBook()}
                    />
                ))}
            </div>
        </motion.div>
    )
}


export async function getStaticProps() {
    const client = await clientPromise;

    var db = client.db();

    const books = await db
        .collection("books")
        .find({})
        .sort({ $natural: -1 })
        .toArray();

    return {
        props: {
            books: JSON.parse(JSON.stringify(books)),
        },
        revalidate: 60 * 60 * 12
    };
}


export default Books;