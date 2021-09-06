import { useState } from 'react';

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { titleVariants, contentVariants } from '../components/motionVariants';

import { useRouter } from 'next/router';
import Link from 'next/link';

import clientPromise from "../lib/mongodb";

import books from '../books.json';

const bookVariants = {
    enter: {
        opacity: 1,
        transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96] }
    },
    exit: {
        opacity: 1,
        transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96] }
    }
}

function ExpandedBook({ book, onCollapse }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="overlay"
                onClick={onCollapse}
            >
            </motion.div>
            <motion.div variants={bookVariants} className="col-md-4">
                <motion.div layoutId={`bookContainer`} className="bookContainer expanded">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <motion.div layoutId={`book-${book.id}`} variants={bookVariants} className="book">
                                <div className="row">
                                    <div className="col-md-4">
                                        <motion.div layoutId={`image-${book.id}`} className="imageContainer">
                                            <img layoutId={`image-${book.id}`} src={book.image} />
                                        </motion.div>
                                    </div>
                                    <div className="col-md-8">
                                        <motion.div layoutId={`details-${book.id}`} className="details">
                                            <span className="close" onClick={onCollapse}></span>
                                            <h1>{book.title}</h1>
                                            <p>Nga <Link href="/authors/id"><a>{book.author}</a></Link></p>
                                            <motion.div className="description">
                                                <p>
                                                    {book.description}
                                                </p>
                                                <hr />
                                                <br />
                                                <div class="links">
                                                    <a target="_blank" href={book.link} className="btn-main noborder" >
                                                        Lexo {book.publisher !== "" ? `në ${book.publisher}` : ""}
                                                    </a>
                                                    <a target="_blank" download href={book.link} className="btn-main noborder" >
                                                        PDF
                                                    </a>
                                                    <a target="_blank" download href={book.link} className="btn-main noborder" >
                                                        EPUB
                                                    </a>

                                                </div>

                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>

    )
}

function CompactBook({ book, onExpand, disabled }) {
    return (
        <motion.div variants={contentVariants} className="col-md-4" onClick={disabled ? undefined : onExpand} style={{ marginBottom: "2em" }}>
            <motion.div className="bookContainer" layoutId={`bookContainer`} variants={bookVariants}>
                <motion.div layoutId={`book-${book.id}`} className="book">
                    <motion.div layoutId={`image-${book.id}`} className="imageContainer">
                        <img src={book.image} />
                    </motion.div>
                    <motion.div layoutId={`details-${book.id}`} className="details">
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
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
        <AnimateSharedLayout type="crossfade">
            {isExpanded ? (
                <ExpandedBook onCollapse={collapse} book={book}>
                </ExpandedBook>
            ) : (
                <CompactBook onExpand={expand} disabled={disabled} book={book}>
                </CompactBook>
            )}
        </AnimateSharedLayout>
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
        <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="container">
            <motion.h1 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="bigtitle"><span>Të Gjitha Librat</span></motion.h1>
            <motion.div variants={titleVariants} className="search">
                <div className="row">
                    <div className="col-md-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1" stroke="#cccccc" fill="none" strokeLinecap="square" strokeLinejoin="round">
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
                    {/* <div className="col-md-6">
                        <div className="categories">
                            <ul>
                                <li>
                                    <button className="btn-second">Klasika</button>
                                </li>
                                <li>
                                    <button className="btn-second">Poezi</button>
                                </li>
                                <li>
                                    <button className="btn-second">Trillim</button>
                                </li>
                                <li>
                                    <button className="btn-second">Histori</button>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>

            </motion.div>

            <div className="row">
                {filteredList.map(book => (
                    <Book
                        key={book}
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
        .toArray();

    return {
        props: {
            books: JSON.parse(JSON.stringify(books)),
        },
    };
}

export default Books;