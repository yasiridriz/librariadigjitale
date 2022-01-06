import Layout from '../components/layout';
import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ ease: 'ease', speed: 700 });
Router.events.on('routeChangeStart', () => {
  NProgress.start();
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done();

})
Router.events.on('routeChangeError', () => NProgress.done())

function Libraria({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default Libraria;
