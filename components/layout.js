import Header from './header';
import Footer from './footer';
import Menu from './menu';

const Layout = ({ children }) => (
  <>
      <Header />
      <Menu />
        {children}
      <Footer />
  </>
);

export default Layout;