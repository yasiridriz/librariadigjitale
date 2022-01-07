import Layout from '../components/layout';
import Router from 'next/router';
import NProgress from 'nprogress';

import { AnimatePresence } from 'framer-motion';


NProgress.configure({ ease: 'ease-out', speed: 500 })
Router.events.on('routeChangeStart', () => {
  NProgress.start();
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
})

Router.events.on('routeChangeError', () => {
  NProgress.done();
  NProgress.configure({ ease: 'ease', speed: 1000 });
})

function Libraria({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  )
}

export default Libraria;
