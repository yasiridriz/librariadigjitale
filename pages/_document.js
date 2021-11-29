import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <title>
            Libraria Digjitale 
          </title>
          <meta property="og:url" content="https://librariadigjitale.co/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Libraria Digjitale"
          />
          <meta name="twitter:card" content="summary" />
          <meta
            property="og:description"
            content="Burimi më i madh i librave digjitale në gjuhën Shqipe."
          />
          {/* <meta property="og:image" content={"url of image"} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}