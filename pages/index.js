import Link from 'next/link';
import Image from 'next/image';
import clientPromise from '../lib/mongodb';

const Home = ({ books }) => {
  return (
    <div className="container">

      <div className="landing container" className="box">
        <h1>
          Mirëseerdhët në <br /> Librarinë Digjitale
          <p>
            Burimi më i madh i librave digjitale në gjuhën Shqipe.
          </p>
        </h1>
      </div>

      <div className="box latestbooks" id="latest">

        <h1 className="title"> Librat e Fundit: </h1>

        <p style={{ textAlign: "right" }}>
          <Link href="/librat">
            <a>
              Shih të gjitha <span className="shift">&rarr;</span>
            </a>
          </Link>
        </p>

        <div className="row">
          {books.map(book => (
            <Link key={`book-${book._id}`} href={`/librat/[id]`} as={`/librat/${book.title}`} passHref>
              <div className="col-md-4 bookContainer" style={{ "marginBottom": "2em" }}>
                <div className="book">
                  <div className="imageContainer">
                    <Image src={book.image} quality={100} width={2564} height={4000} placeholder='blur' blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAE0lEQVR42mP8d5XhPwMaYKSBIABZAw4g3SrXdwAAAABJRU5ErkJggg==' />
                  </div>
                  {/* <div className="details">
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                  </div> */}
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
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