import Image from "next/image";

import { getPage, getBlocks } from "../utils/notion";
import { getParagraphs } from "../utils/utilities";

import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import aboutPageStyles from '../styles/pages/about-page.module.scss';

export default function About({ block }) {
    const paragraphContent = getParagraphs(block);

    const downloadResume = () => {
        alert('Working on it! 😄');
    }

    return (
        <Layout pageName="about">
            <div className={aboutPageStyles.aboutPageContainer}>
                <div className={aboutPageStyles.aboutImage}>
                    <Image
                        priority
                        src="/images/dirty-130.jpg"
                        className={utilStyles.borderCircle}
                        fill={true}
                        style={{objectFit: "contain"}}
                        alt="Picture of Jake Schoolmeesters"
                    />
                </div>
                <section className={utilStyles.paragraph}>
                    <h1>A little about me...</h1>
                    {
                        paragraphContent.map((block) => {
                            if (block.paragraph.rich_text.length > 0) {
                                return (
                                    <p key={block.id}>{block.paragraph.rich_text[0].text.content}</p>
                                )
                            }
                        })
                    }

                    <button onClick={downloadResume}>Download Resume</button>

                </section>
            </div>
        </Layout>
    )
  }

export async function getStaticProps() {
    const pageId = 'c678a1a1149d484b8467305f41b594b9'
    const page = await getPage(pageId);
    const block = await getBlocks(pageId);
    return { props: { page, block } };
}