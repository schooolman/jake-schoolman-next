import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from './navbar';

import layoutStyles from '../styles/components/layout.module.scss';
import typography from '../styles/typography.module.scss';
import utilStyles from '../styles/utils.module.css';
import headerStyles from '../styles/components/header.module.scss';
// import PageTitle from './page-title';

const name = 'Jake Schoolmeesters';
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
                <header className="header">
                    {home ? (
                        <>
                            {/* <Link href="/">
                                <div className={headerStyles.headerImage}>
                                    <Image
                                        priority
                                        src="/images/jake_selfie_scotland.jpg"
                                        className={utilStyles.borderCircle}
                                        fill={true}
                                        style={{objectFit: "contain"}}
                                        alt="Picture of Jake Schoolmeesters"
                                        />
                                </div>
                            </Link> */}
                            {/* <PageTitle></PageTitle> */}
                            {/* <h1 className={typography.title}>
                                <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                                </Link>
                            </h1> */}
                        </>
                    ) : (
                        <>
                            {/* <Link href="/">
                                <Image
                                    priority
                                    src="/images/jake_selfie_scotland.jpg"
                                    className={utilStyles.borderCircle}
                                    height={144}
                                    width={144}   
                                    alt="Picture of Jake Schoolmeesters"
                                />
                            </Link>
                            <h1 className={typography.title}>
                                <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                                </Link>
                            </h1> */}
                        </>
                    )}
                </header>
            <main>{children}</main>
        </div>
        {!home && (
            <div className={layoutStyles.backToHome}>
                <Link href="/"> Home</Link>
            </div>
        )}
        </div>
    </div>
  );
}