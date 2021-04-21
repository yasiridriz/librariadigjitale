import { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
                                            <img src={book.image} />
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
                                                <button className="btn-main" >
                                                    Lexo
                                                </button>
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

const Books = () => {
    const books =
        [{
            "id": "1",
            "title": "Anna Karenina",
            "author": "Leo Tolstoy",
            "image": "https://i.postimg.cc/bJ1wrh7h/image.jpg",
            "description": "Anna Karenina (Анна Каренина), e njohur edhe me emrin Ana Karenin, është një ndër novelat më të njohura ruse e shkruar nga Leo Tolstoy gjatë viteve 1873 deri më 1877. Në këtë vepër trajton stilin realist, duke treguar për familjet aristokrate në Rusi në atë kohë. Personazhi Ana Karenina është inspiruar nga vajza e Aleksandër Pushkinit, Maria Hartungu."
        },
        {
            "id": "2",
            "title": "1984",
            "author": "George Orwell",
            "image": "https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg",
            "description": "1984 (angl. Nineteen Eighty-Four) është një novele e publikuar ne vitin 1949 nga shkrimtari Xhorxh Oruell. Novela bën fjale për një bote distopike, ku ngjarjet zhvillohen ne një te ardhme imagjinare ne Airstrip One (qe njihet ne te shkuarën ne libër si Britania e Madhe), një province e supershtetit Oceania (Oqeania). Ne këtë libër, bota përshkruhet ne lufte te vazhdueshme, ku Partia ne fuqi është ne kontroll te çdo gjeje, dhe duke përdorur teknologji te avancuar arrijnë te kontrollojnë te gjitha lëvizjet e qytetareve ne mënyre qe te mbajnë gjithçka nen kontroll dhe te jene gjithmonë ne fuqi."
        },
        {
            "id": "3",
            "title": "Kush e Solli Doruntinën",
            "author": "Ismail Kadare",
            "image": "https://b3c4r2f7.stackpathcdn.com/9131-large_default/kush-e-solli-doruntinen.jpg",
            "description": "Kush e solli Doruntinën është një roman nga Ismail Kadare në fund të viteve 70ta dhe i botuar për herë të parë në vitin 1980 në përmbledhjen me titull 'Gjakftohtësia'. Romani bazohet mbi baladën e Konstantinit dhe Doruntinës."
        }]
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

