import React, { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import './AgreeMent.css'


const AgreeMent = ({ ...props }) => {

    const [showService, setShowService] = useState(true);
    // * Terms of Services detail.
    const servicesClose = () => {
        setShowService(true);
    }
    const servicesShow = () => {
        setShowService(false);
    }


    return (
        <div className="AgreeMent">
            <input {...props} />
            <label htmlFor="checkbox"> I agree to the<span onClick={servicesShow} > Terms of Services</span>and <span onClick={servicesShow}> Privacy Policy</span>.
            </label>
            <PrivacyPolicy  dispalyState={showService}
                            servicesClose={servicesClose}
            
            />
            
        </div>
    );
}

export default AgreeMent;