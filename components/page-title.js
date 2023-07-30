import React from "react";
import pageTitleStyle from '../styles/components/page-title.module.scss';

  const PageTitle = ({title, description, accentColor}) => {
    return (
        <div className={pageTitleStyle.titleContainer}>
            {accentColor ? (
                <>
                    <h1 className='purple'>{title}</h1>
                    <p>{description}</p>
                </>
            ) : (
                <>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </>
            )}
        </div>
    );
  }

  export default PageTitle;