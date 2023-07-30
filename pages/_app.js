// import { Poppins } from 'next/font/google';
// import styles from '../styles/globals.scss';

// const poppins = Poppins({
//   weight: ['300', '500', '700'],
//   style: ['normal'],
//   subsets: ['latin']
// })

import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }