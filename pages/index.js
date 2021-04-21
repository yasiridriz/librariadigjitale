import { motion } from 'framer-motion';
import Link from 'next/link';
import Router from 'next/router';

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