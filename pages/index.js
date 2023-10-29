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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
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
            name={'Jake Schoolmeesters'}
            title={'Front End Developer'}
            description={'Hi, my name is Jake Schoolmeesters and I\'m a Front End web developer based in Chicago, Illinois. I have over 8 years of experience working in different agencies, and startups. I\’ve been working with Adobe Experience Manager for the past 5 years, while helping to develop apprenticeship programs and mentor juniors'}
            accentColor={'purple'}/>
        </section>
      </div>
    </Layout>
  );
}
