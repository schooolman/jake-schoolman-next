import React from "react";
import bannerStyles from '../styles/components/banner.module.scss';

const Banner = () => {
    console.log('testing banner');

    // TODO: Figure out how to use Notion to author blocks?

    return(
        <section className={bannerStyles.bannerContainer}>
            <div>
                <h4>Block 1</h4>
                <p>Interesting information, Interesting information, Interesting information, Interesting information, </p>
            </div>
            <div>
                <h4>Block 2</h4>
                <p>Interesting information, Interesting information, Interesting information, Interesting information, </p>
            </div>
            <div>
                <h4>Block 3</h4>
                <p>Interesting information, Interesting information, Interesting information, Interesting information, </p>
            </div>
        </section>
    );
}

export default Banner;