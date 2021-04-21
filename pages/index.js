import { motion } from 'framer-motion';
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
          <a className=" lates book-tile" ng-repeat="book in books" href="/books/details/{{ book._id }}">
            <img ng-src="{{ book.piclink }}" />
            <div className="book-details">
              <h3></h3>
              <p>
                (Author)
                    </p>
              <div className="book-description">
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Home;