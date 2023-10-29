import React from "react";
import pageTitleStyle from '../styles/components/page-title.module.scss';

  const PageTitle = ({title, description, accentColor, name}) => {
    const accent = accentColor ? accentColor : '';
    return (
        <div className={pageTitleStyle.titleContainer}>
            {accentColor ? (
                <>
                    <h1 style={{marginBottom: '0'}}>{name}</h1>
                    <h1 style={{marginTop: '0'}} className={pageTitleStyle[`${accentColor}`]}>{title}</h1>
                    <p>{description}</p>
                </>
            ) : (
                <>
                    <h1>{name}</h1>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </>
            )}
        </div>
    );
  }

  export default PageTitle;