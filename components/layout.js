import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import NavBar from './navbar';

const name = 'Jake Schoolmeesters';
export const siteTitle = 'Jake Schoolmeesters\' Portfolio';

export default function Layout({ children, home }) {
  return (
    <div className='columns-1 m-40'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jake Schoolmeesters' personal site."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        <NavBar/>
        <div className='columns-2 m-8'>

            <header className="flex flex-col content-center flex-1">
            {/* <header className={styles.header}> */}
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/headshot.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}   
                            alt="Picture of Jake Schoolmeesters"
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={108}
                            width={108}
                            alt=""
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                            {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
      <main>{children}</main>
        </div>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}