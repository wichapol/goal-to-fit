import React from "react";
import { NavLink } from "react-router-dom";
import './NoAccount.css'

const NoAccount = ({ tagtitle, textA1, textA2, href1 = '#', href2 = '#', hidden= false }) => {
    return (
        <>
            <p className="secondary-text-color no-account" hidden={hidden}  >
                {tagtitle}
            </p>
            <div className="social-profiles">
                <div>
                    <NavLink to={href1} className="secondary-text-color">{textA1}</NavLink>
                </div>
                <div>
                    <NavLink to={href2} className="primary-text-color">{textA2}</NavLink>
                    
                </div>
            </div>

        </>
    );
}

export default NoAccount;