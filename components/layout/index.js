import Menu from './menu';
import Head from 'next/head';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>
        Libraria Digjitale
      </title>
      <meta name="description" content="Burimi më i madh i librave digjitale në gjuhën Shqipe." />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>Libraria Digjitale</title>
      <meta name="description" content="Burimi më i madh i librave digjitale në gjuhën Shqipe." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="XMgr__FORNFgpyt4vRg0NlFaVWnfUlAwlZc_jLPeteI" />
      <link rel="stylesheet" type="text/css" media="screen" href="/styles/importer.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap-grid.min.css" integrity="sha512-cKoGpmS4czjv58PNt1YTHxg0wUDlctZyp9KUxQpdbAft+XqnyKvDvcGX0QYCgCohQenOuyGSl8l1f7/+axAqyg==" crossOrigin="anonymous" />
    </Head>

    <Menu />
    {children}
    <Footer />
  </>
);

export default Layout;