import Head from 'next/head';
import NavBar from './navbar';

import layoutStyles from '../styles/components/layout.module.scss';

export const siteTitle = 'Jake Schoolmeesters\' Portfolio';

export default function Layout({ children, home, pageName }) {
    console.log(pageName, 'home');

  return (
    <div className={layoutStyles[`${pageName}`]}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
            name="description"
            content="Jake Schoolmeesters' personal site."
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Poppins:wght@100;300;400;600;700&display=swap" rel="stylesheet" />
            <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
                siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <div className={`${layoutStyles.mainContainer}`}>
            <div className={layoutStyles.contentNavigation}>
                <NavBar />
            </div>
            <div className={layoutStyles.contentMaincontent}>
                {/* <header className="header">
                </header> */}
            <main>{children}</main>
            </div>
        </div>
    </div>
  );
}