import React from "react";
import buttonStyle from '../styles/components/button.module.scss';


function handleClick() {
    console.log('testing button');
}

const CustomButton = ({title, color}) => {
    return(
        <button
            className={buttonStyle[`${color}`]}
            onClick={handleClick}>
                {title}
            </button>
    );
}

export default CustomButton;