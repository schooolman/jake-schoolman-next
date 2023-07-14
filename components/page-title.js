import React from "react";
import pageTitleStyle from '../styles/components/page-title.module.scss';

  const PageTitle = ({title, description}) => {
    return (
        <div className={pageTitleStyle.titleContainer}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
  }

  export default PageTitle;