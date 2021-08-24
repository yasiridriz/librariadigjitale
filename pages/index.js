import { motion } from 'framer-motion';
import Link from 'next/link';
import Router from 'next/router';
import books from '../books.json';
import { titleVariants, contentVariants } from '../components/motionVariants';

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
          {books.slice(Math.max(books.length - 3, 0)).map(book => (
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
      <motion.div variants={contentVariants} className="container" className="box">
        <h1 className="title"> Libri i javës: </h1>
        <motion.div variants={contentVariants} className="thisweek">
          <div className="row justify-content-center">
            <div variants={contentVariants} className="book">
              <div className="row">
                <div className="col-md-4">
                  <div className="imageContainer">
                    <img layoutId={`image-${books[2].id}`} src={books[2].image} />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="details">
                    <h1>{books[2].title}</h1>
                    <p>Nga <Link href="/authors/id"><a>{books[2].author}</a></Link></p>
                    <motion.div className="description">
                      <p>
                        {books[2].description}
                      </p>
                      <hr />
                      <br />
                      <a target="_blank" href={books[3].link} className="btn-main noborder" >
                        Lexo {books[2].publisher !== "" ? `në ${books[2].publisher}` : ""}
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* <motion.div variants={contentVariants} className="container" className="box">
        <h1 className="title">Abonohu në librin e javës</h1>
        <div className="form-box col-md-12">
                    <form method="POST" action="/subscribe" className="form-box">
                        <div className="group subscribe">
                            <input type="email" placeholder="Email" className="input-default" required />
                            <button type="submit" className="btn-main" >
                                Abonohu tani! <span class="far fa-paper-plane"></span>
                            </button>
                        </div>
                    </form>
                </div>
      </motion.div> */}
    </motion.div>
  )
}

export default Home;