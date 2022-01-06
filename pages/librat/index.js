import { useState } from 'react';
import Link from 'next/link';

import Head from 'next/head';

import clientPromise from "../../lib/mongodb"; // mongo client

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
        <Link href={`/librat/[id]`} as={`/librat/${book.title}`} passHref>
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
        <div className="container">
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

            <h1 className="bigtitle"><span>Të Gjitha Librat</span></h1>

            {/* <h1 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="bigtitle"><span>Të Gjitha Librat</span></h1> */}

            {/* search */}
            <div className="search">
                <div className="group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="30" height="45" viewBox="0 0 24 24" strokeWidth="1" stroke="#bbb" fill="none" strokeLinecap="square" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                    <span className="input input--nao">
                        <input className="input__field input__field--nao" type="text" value={search} onChange={e => setSearch(e.target.value)} id="input-1" placeholder='"Distopi"' />
                        <svg className="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60"
                            preserveAspectRatio="none">
                            <path
                                d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0" />
                        </svg>
                    </span>
                </div>
            </div>


            <div className="row">
                {filteredList.map(book => (
                    <Book
                        key={`book-${book._id}`}
                        book={book}
                        disabled={expandedBook !== book && expandedBook !== undefined}
                        onExpand={() => setCollapsedBook(book)}
                        onCollapse={() => setCollapsedBook()}
                    />
                ))}
            </div>
        </div >
    )
}


export async function getServerSideProps(context) {
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
    };
}


export default Books;