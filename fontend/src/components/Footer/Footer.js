import React from "react";
import "./Footer.css"

const Footer = ( { children = "© Right 2022 : Goal to fit" }) => {
    return (
          <>
            <div className="push"></div>
            <footer>
                <div className="container font-large-subhead secondary-text-color">
                    {children}
                </div>
            </footer>
          </>  
    );
}

export default Footer;