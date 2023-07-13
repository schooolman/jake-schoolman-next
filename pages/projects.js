import { getPage, getBlocks } from "../utils/notion";
import { getChildPages } from "../utils/utilities";
import { Client } from '@notionhq/client';
const notion = new Client({ auth: process.env.NOTION_API_KEY});

import Layout from "../components/layout";
import PortfolioItem from "../components/project";

export default function Projects({ page, block }) {
    // console.log(page, 'projects page');
    console.log(block, 'page blocks');
    console.log(getChildPages(block));

    
    const projectNames = getChildPages(block);
    
    projectNames.forEach((page) => {
        console.log(page.id, '577172614f364e52ada6519bcb3f2d5f');
        // <PortfolioItem
        //     title={}
        // />
        // fetchPageDetails('577172614f364e52ada6519bcb3f2d5f');
        // let pageDetails = await getBlocks(page.id);
        // console.log(pageDetails);
    });

    return (
        <Layout>
            <div>Projects</div>

            {
                projectNames.map(project => {
                    return(
                        <h3 key={project.id}>{project.child_page.title}</h3>
                    )
                })
            }

            <section className="w-1/2">
                {/* <PortfolioItem title={'test'} description={'This is a project description'} imageUrl={'/images/logos/trulieve-logo.svg'} id={'577172614f364e52ada6519bcb3f2d5f'}
                /> */}
            </section>
        </Layout>
    )
  }

  const fetchPageDetails = async (id) => {
    const details = await getBlocks(id);
    console.log(details)
    return details;
}

  export async function getStaticProps() {
    const pageId = '6e38e380dbf94c94b7467f4b3716a087';
    const page = await getPage(pageId);
    const block = await getBlocks(pageId);
    return { props: { page, block }};
  }