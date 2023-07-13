import utilStyles from '../styles/utils.module.css';
import typography from '../styles/typography.module.scss';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

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
      <div className=''>
        <section className={utilStyles.headingMd}>
            <h3 className={typography.subHeading}>Front End developer</h3>
            <h3 className={typography.subHeading}>Chicago</h3>
        </section>
      </div>
    </Layout>
  );
}
