import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import PageTitle from '../components/page-title';
import headerStyles from '../styles/components/header.module.scss';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Poppins:wght@100;300;400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <section className={utilStyles.headingMd}>
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
          <PageTitle
            title={'Jake Schoolmeesters, Front End Developer'}
            description={'Hi, my name is Jake Schoolmeesters and I\'m a Front End web developer based in Chicago, Illinois. I have over 8 years of experience working in different agencies, and startups. I\’ve been working with Adobe Experience Manager for the past 5 years, while helping to develop apprenticeship programs and mentor juniors'}
            accentColor={'purple'}/>
        </section>
      </div>
    </Layout>
  );
}
