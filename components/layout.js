import Head from 'next/head';
import Image from 'next/image';
import layoutStyles from '../styles/components/layout.module.scss';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import NavBar from './navbar';

const name = 'Jake Schoolmeesters';
export const siteTitle = 'Jake Schoolmeesters\' Portfolio';

export default function Layout({ children, home }) {
  return (
    <div className={layoutStyles.mainContainer}>
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
        {/* <NavBar/> */}
        <div className=''>
            <header className="header">
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
                        <h1 className="text-white text-4xl weight-bold">{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/headshot.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt=""
                            />
                        </Link>
                        <h1 className="color-white">
                            <Link href="/" className={utilStyles.colorInherit}>
                            {name}
                            </Link>
                        </h1>
                    </>
                )}
            </header>
      <main>{children}</main>
        </div>
      {!home && (
        <div className={layoutStyles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}