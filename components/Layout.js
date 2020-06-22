import {Provider} from 'react-redux';
import Head from 'next/head';

import store from '../store';
import Navbar from './navbars/Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div>
      <Provider store={store}>
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
        <style jsx>{``}</style>
      </Provider>
    </div>
  );
};

export default Layout;
