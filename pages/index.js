import { motion } from 'framer-motion';
import Link from 'next/link';
import Router from 'next/router';
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
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    x: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
  },
}

const Home = () => {
  return (
    <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="container">
      <motion.div variants={contentVariants} className="landing container" className="box">
        <h1>
          Mirëseerdhët në <br />Librarinë Digjitale
          <p>
            Burimi më i madh i librave digjitale në gjuhën Shqipe.
          </p>
        </h1>
      </motion.div>
      <motion.div variants={contentVariants} className="box latestbooks">
        <h1 className="title"> Librat e Fundit: </h1>
        <p style={{ textAlign: "right" }}><Link href="/books"><a> Shih të gjitha <span className="shift">&rarr;</span></a></Link></p>
        <div className="row">
          {books.map(book => (
            <motion.div variants={contentVariants} className="col-md-4" onClick={() => Router.push('/books')} style={{ "margin-bottom": "2em" }}>
            <motion.div className="bookContainer" layoutId={`bookContainer`}>
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
          ))}

        </div>
      </motion.div>
    </motion.div>
  )
}

export default Home;