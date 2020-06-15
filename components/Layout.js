import {Provider} from 'react-redux';
import Head from 'next/head';

import store from '../store';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div>
      <Provider store={store}>
        <Head>
          <title>Kins</title>
        </Head>
        <Navbar />
        {children}
        <Footer />
        <style jsx>{``}</style>
      </Provider>
    </div>
  );
};

export default Layout;
