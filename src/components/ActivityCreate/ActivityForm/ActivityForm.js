import React, { useState } from "react";
import "./ActivityForm.css";
import IconAct from "../../IconAct/IconAct";
import Input from "../../Input/Input";

function ActivityForm({ actCreate = "",setSelect }) {
    const [actDate, setactdate] = useState("")
    function handleActDate(event) {

        const actDateString = event.target.value
        setactdate(actDateString)     

    }
    return (
        <>
            <p className="secondary-text-color middle-font font-large-head">Activity name</p>

            <div className="act-form-name">
                {Array.isArray(actCreate) && actCreate.map((icon) => {
                    return (
                        <>
                            <IconAct  src={icon.src} alt={icon.name} actType={icon.type} iconName={icon.name} onClick={setSelect}/>
                           
                        </>
                    );
                })
                }
                <div>
                    <Input className="secondary-text-color" htmlFor="activity-date" label="activity-date"
                        style={actDate === "" ? { borderColor: "red" } : null}
                        type="date" name="activity-date" onChange={handleActDate} value={actDate}
                    >
                        {actDate === "" ? `please insert activity date` : null}
                    </Input>



                </div>
            </div>

        </>
    );
}

export default ActivityForm;