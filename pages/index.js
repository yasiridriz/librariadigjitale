import Link from 'next/link';
import Image from 'next/image';
import clientPromise from '../lib/mongodb';

import { motion } from 'framer-motion';

import { container, content } from '../lib/motion/variants';

const Home = ({ books }) => {
  return (
    <motion.div initial="initial" animate="enter" exit="exit" variants={container} className="container">

      <motion.div variants={container} className="box"> 
        <motion.h1 variants={content}>
          Mirëseerdhët në <br /> Librarinë Digjitale
          <p>
            Burimi më i madh i librave digjitale në gjuhën Shqipe.
          </p>
        </motion.h1>
      </motion.div>

      <motion.div variants={container} className="box" id="libratefundit">

        <h1 className="title"> Librat e Fundit: </h1>

        <p style={{ textAlign: "right" }}>
          <Link href="/librat">
            <a>
              Shih të gjitha <span className="shift">&rarr;</span>
            </a>
          </Link>
        </p>

        <motion.div variants={content} className="row">
          {books.map(book => (
            <Link key={`book-${book._id}`} href={`/librat/[id]`} as={`/librat/${book.title}`} passHref scroll={false}>
              <div className="col-md-4 bookContainer" style={{ "marginBottom": "2em" }}>
                <div className="book">
                  <div className="imageContainer">
                    <Image src={book.image} quality={100} width={2564} height={4000} placeholder='blur' blurDataURL='data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkkAQAAB8AG7jymN8AAAAASUVORK5CYII=' alt={`Kopertina - ${book.title}`} />
                  </div>
                </div>
              </div>
            </Link>
          ))}

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  var db = client.db();

  const books = await db
    .collection("books")
    .find({})
    .toArray();
  return {
    props: {
      books: JSON.parse(JSON.stringify(books.slice(Math.max(books.length - 3, 0)))),
    },
  };
}

export default Home;