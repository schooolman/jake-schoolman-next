import Layout from "../components/layout";
import PortfolioItem from "../components/project";

export default function Projects() {
    return (
        <Layout>
            <div>Projects</div>

            <section className="w-1/2">
                <PortfolioItem title={'test'} description={'This is a project description'} imageUrl={'/images/logos/trulieve-logo.svg'} />
            </section>
        </Layout>
    )
  }