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
        <div id="layout-container">
          <Navbar />
          {children}
          <Footer />
        </div>
        <style jsx>
          {`
            #layout-container {
              display: flex;
              flex-direction: column;
            }
          `}
        </style>
      </main>
    </div>
  );
};

export default Layout;
