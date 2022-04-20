import React from "react";
import './Button.css'

const Button = ( { className="button-submit",children, ...props }) => {
    return (
            <span>
                <button className={className} {...props} > {children} </button>
            </span>
    );
}

export default Button;