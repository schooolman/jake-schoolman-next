import { getBlocks, getPage } from "../utils/notion";

export default function Home({ page, block }) {
    console.log(page);
    console.log(block);

    // block.forEach((item) => {
    //     console.log(item.paragraph != undefined)
    // })

    const paragraphContent = block.filter(paragraph => paragraph.paragraph != undefined);
    console.log(paragraphContent);
    
    // block.map((item) =>  {
    //     console.log(item.paragraph.rich_text[0].text.content);
    // });

    return (
        <div>
            <header>
                <h1>{page.properties.Name.title[0].text.content}</h1>
                <p>{page.properties.Description.rich_text[0].text.content}</p>
            </header>
        <section className="page-content"> {
            paragraphContent.map(block => {
                return (
                    <p key={block.paragraph.rich_text[0].text.content}>{block.paragraph.rich_text[0].text.content}</p>
                )
            })
        }
        </section>
        </div>

    );
}

    export async function getStaticProps() {
        const page = await getPage('c8d8adcde66a44019d21df8fd6b7f3b0');
        const block = await getBlocks('c8d8adcde66a44019d21df8fd6b7f3b0');
        return { props: { page, block } };
    }