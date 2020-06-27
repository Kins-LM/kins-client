import Head from 'next/head';

import Navbar from './navbars/Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Kins</title>
      </Head>
      <main>
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Layout;
