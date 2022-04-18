import React from "react";
import './CheckDateBox.css'

const CheckDateBox = ({ children = "Please Add Title",...props }) => {
    return (
        <div className="check-date-box ">
            <label htmlFor={children.toLocaleLowerCase()}>
                <input type="checkbox" {...props} />
                <p>{children}</p>
            </label>            
        </div>
    );
}

export default CheckDateBox;