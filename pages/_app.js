import Layout from '../components/layout';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Router from 'next/router';
import NProgress from 'nprogress';
import * as gtag from '../lib/gtag';

// Router.events.on('routeChangeStart', () => {
//   NProgress.start();
// })
// Router.events.on('routeChangeComplete', () => {
//   NProgress.done();
//   gtag.pageview(location.pathname)
// })
// Router.events.off('routeChangeComplete', () => {
//   gtag.pageview(location.pathname)
// })
// Router.events.on('routeChangeError', () => NProgress.done())

function Libraria({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimateSharedLayout type="crossfade">
        <Component {...pageProps} key={router.route} />
      </AnimateSharedLayout>
    </Layout>
  )
}

export default Libraria
