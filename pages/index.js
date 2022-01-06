import Link from 'next/link';
import Router from 'next/router';

import clientPromise from '../lib/mongodb';

const Home = ({books}) => {
  return (
    <div className="container" key={"Homepage"}>
      <div className="landing container" className="box">
        <h1>
          Mirëseerdhët në <br />Librarinë Digjitale <a href='#latest'>scroll</a>
          <p>
            Burimi më i madh i librave digjitale në gjuhën Shqipe.
          </p>
        </h1>
      </div>
      <div className="box latestbooks" id="latest">
        <h1 className="title"> Librat e Fundit: </h1>
        <p style={{ textAlign: "right" }}><Link href="/librat"><a> Shih të gjitha <span className="shift">&rarr;</span></a></Link></p>
        <div className="row">
          {books.map(book => (
            <div className="col-md-4" onClick={() => Router.push('/librat')} style={{ "marginBottom": "2em" }}>
              <div className="bookContainer" layoutId={`bookContainer`}>
                <div layoutId={`book-${book.id}`} className="book">
                  <div layoutId={`image-${book.id}`} className="imageContainer">
                    <img src={book.image} />
                  </div>
                  <div layoutId={`details-${book.id}`} className="details">
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      {/* <div className="container" className="box">
        <h1 className="title"> Libri i javës: </h1>
        <div className="thisweek">
          <div className="row justify-content-center">
            <div className="book">
              <div className="row">
                <div className="col-md-4">
                  <div className="imageContainer">
                    <img src={books[1].image} />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="details">
                    <h1>{books[1].title}</h1>
                    <p>Nga <Link href="/authors/id"><a>{books[1].author}</a></Link></p>
                    <div className="description">
                      <p>
                        {books[1].description}
                      </p>
                      <hr />
                      <br />
                      <a target="_blank" href={books[3].link} className="btn-main noborder" >
                        Lexo {books[1].publisher !== "" ? `në ${books[1].publisher}` : ""}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="container" className="box">
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
      </div> */}
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