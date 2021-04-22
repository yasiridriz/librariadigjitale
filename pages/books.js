import { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import books from '../books.json';

const titleVariants = {
    initial: { scale: 1.07, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition: { duration: .5, ease: [0.48, 0.15, 0.25, 0.96], when: "beforeChildren", staggerChildren: .035 } },
    exit: {
        x: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96], staggerChildren: .02 }
    }
};
const contentVariants = {
    initial: { scale: 1, y: 60, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96], when: "beforeChildren", staggerChildren: .035 } },
    exit: {
        x: 0,
        opacity: 0,
        transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
    },
}
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
                                                <a target="_blank" href={book.link} className="btn-main noborder" >
                                                    Lexo 
                                                </a>
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
        <motion.div variants={contentVariants} className="col-md-4" onClick={disabled ? undefined : onExpand} style={{"margin-bottom":"2em"}}>
            <motion.div className="bookContainer" layoutId={`bookContainer`} variants={bookVariants}>
                <motion.div layoutId={`book-${book.id}`} className="book">
                    <motion.div layoutId={`image-${book.id}`} className="imageContainer">
                        <img layoutId={`image-${book.id}`} src={book.image} />
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

const Books = () => {
    const [expandedBook, setCollapsedBook] = useState();

    return (
        <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="container">
            <motion.h1 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="bigtitle"><span>Librat</span></motion.h1>
            <div className="row">
                {books.map(book => (
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

export default Books;