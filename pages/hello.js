import clientPromise from '../lib/mongodb'

export default function Home({ isConnected }) {
  return (
    <div className="container">
      {isConnected ? (
      <p> You are connected</p>

      ) : (
          <p>You aren't connected.</p>
      )}

    </div>
  )
}

export async function getServerSideProps(context) {

  let isConnected;
  try {
    const client = await clientPromise
    isConnected = true;
  } catch(e) {
    console.log(e);
    isConnected = false;
  }

  return {
    props: { isConnected },
  }
}