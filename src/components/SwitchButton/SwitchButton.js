import React, { useState } from "react";
import "./SwitchButton.css"


const SwitchButton = ({ children = "", textLeft = "textLeft", textRight = "textRight",
    textOnSwitch, classLabel = "display-block", inputName = "", addResul }) => {
    const [ischecked, setIsChecked] = useState(true)

    function  handleInputChange() {      

        setIsChecked(!ischecked)     
        addResul(ischecked)
       
    }

    return (
        <>
            <label className={classLabel} htmlFor={children}>{children}</label>
            <section>
                <label htmlFor={inputName} className="toggle-1">
                    <input type="checkbox" className="toggle-1__input"
                        name={inputName} id={inputName} onChange={handleInputChange}
                        value={ischecked}
                    />
                    <span className={` toggle-1__button ${textOnSwitch}`}>
                        <p>{textLeft}</p>
                        <p>{textRight}</p>
                    </span>
                </label>
            </section>
        </>
    );
}
export default SwitchButton;