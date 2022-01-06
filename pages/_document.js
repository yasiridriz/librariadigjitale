import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
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
          <Script
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
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
          <link rel='stylesheet' href="/ArgentCF-Thin/style.css" />

          {/* Global Styles */}
          <link rel='stylesheet' href="/styles/main.css" />
          <link rel='stylesheet' href="/styles/nprogress.css" />
          <link rel="stylesheet" type="text/css" media="screen" href="/styles/main.css" />
          <link rel="stylesheet" href="/styles/bootstrap/bootstrap-grid.min.css" />
          <link rel='stylesheet' media='screen' type='text/css' href="/styles/forms.css" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}