import Layout from '../components/layout';
import { AnimatePresence } from 'framer-motion';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => { NProgress.start() })
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function Libraria({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
    </Layout>
  )
}

export default Libraria
