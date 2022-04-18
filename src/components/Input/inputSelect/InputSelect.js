import React, { useState, useEffect } from "react";
import './InputSelect.css'
import goalOption from './goalSelector.json'
import Input from "../Input";

const InputSelect = ({ children = "", addUserGoal }) => {
    const [selectGoal, setSelectGoal] = useState("");
    const [quantityGoal, setQuantityGoal] = useState("");
    const [durationGoal, setDurationGoal] = useState("");

    function addSelectGoal(event) {
        const resultSelectGoal = event.target.value
        setSelectGoal(resultSelectGoal)
        setQuantityGoal("")
        setDurationGoal("")
    }

    function showInputGoal(resultSelectGoal) {
        if (selectGoal === "weight") {
            return (<>
                <Input htmlFor="weight-goal" label="Weight" min="1" onChange={addQuantityt}
                    style={quantityGoal === "" ? { borderColor: "red" } : null} value={quantityGoal}
                    type="number" placeholder="(kg)" name="weight-goal" />
                <Input htmlFor="duration" label="Duration" min="7" onChange={addDurationGoal}
                    style={durationGoal === "" ? { borderColor: "red" } : null} value={durationGoal}
                    type="number" placeholder="(day)" name="duration-goal" />
            </>
            )
        } else if (selectGoal === "distance") {
            return (<>
                <Input htmlFor="distance-goal" label="distance" min="1" onChange={addQuantityt}
                    style={quantityGoal === "" ? { borderColor: "red" } : null} value={quantityGoal}
                    type="number" placeholder="(km)" name="distance-goal" />
                <Input htmlFor="duration" label="Duration" min="7" onChange={addDurationGoal}
                    style={durationGoal === "" ? { borderColor: "red" } : null} value={durationGoal}
                    type="number" placeholder="(day)" name="duration-goal" />
            </>
            )

        } else if (selectGoal === "calories") {
            return (<>
                <Input htmlFor="calories-goal" label="Calories" min="1" onChange={addQuantityt}
                    style={quantityGoal === "" ? { borderColor: "red" } : null} value={quantityGoal}
                    type="number" placeholder="(cal)" name="calories-goal" />
                <Input htmlFor="duration" label="Duration" min="7" onChange={addDurationGoal}
                    style={durationGoal === "" ? { borderColor: "red" } : null} value={durationGoal}
                    type="number" placeholder="(day)" name="duration-goal" />
            </>
            )
        } else if (selectGoal === "Add you Goal") {
            setSelectGoal("")    
            return
        }

    }

    function addQuantityt(event) {
        const resultQuantityt = event.target.value;
        setQuantityGoal(resultQuantityt)

    }

    function addDurationGoal(event) {
        const resultDuration = event.target.value;
        setDurationGoal(resultDuration)

    }

    useEffect(() => {

        addUserGoal({
            "goal": selectGoal,
            "quantity": quantityGoal,
            "duration": durationGoal
        })

    }, [selectGoal, quantityGoal, durationGoal])




    return (
        <span className="input-select">
            <div >
                <label className="primary-text-color"
                    htmlFor={children.toLocaleLowerCase()}
                >
                    {children}
                </label>
                <select id={children.toLocaleLowerCase()} className={`display-block`} onChange={addSelectGoal} required
                    style={selectGoal === "" || quantityGoal === "" || durationGoal === "" ? { borderColor: "red" } : null}
                >
                    {goalOption.map((text) => {
                        return (<option key={text} value={text}> {text} </option>)
                    })
                    }
                </select>
            </div>
            <div className=" show-input-gal ">
                {showInputGoal()}
            </div>
        </span>
    );
}

export default InputSelect;