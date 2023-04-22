import { getPage, getBlocks, getParagraphs } from "../utils/notion";

import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css';

export default function About({ block }) {
    const paragraphContent = getParagraphs(block);

    return (
        <Layout>
            <section className={utilStyles.paragraph}>
                {
                    paragraphContent.map((block) => {
                        if (block.paragraph.rich_text.length > 0) {
                            return (
                                <p key={block.id}>{block.paragraph.rich_text[0].text.content}</p>
                            )
                        }
                    })
                }
            </section>
        </Layout>
    )
  }

export async function getStaticProps() {
    const pageId = 'c678a1a1149d484b8467305f41b594b9'
    const page = await getPage(pageId);
    const block = await getBlocks(pageId);
    return { props: { page, block } };
}