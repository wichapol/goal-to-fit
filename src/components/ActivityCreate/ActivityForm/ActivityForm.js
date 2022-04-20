import React, { useState, useEffect } from "react";
import "./ActivityForm.css";
import IconAct from "../../IconAct/IconAct";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import { getRecordById } from "../../../api";



function ActivityForm({ showFrom, closeForm, id }) {
  const [actRec ,setActRec] = useState("")
  const [dateRec ,setDateRec] = useState("")
  const [quantityRec ,setQuantityRec] = useState("")
  const [durationRec ,setDurationRec] = useState("")

  

  const close = () => {
    closeForm(false);
  };

  useEffect(() => {
    if (!showFrom){
      (async () => {
        const getRecByID = await getRecordById(id);
        console.log(getRecByID.status);
        console.log(getRecByID.statusText);
        console.log(getRecByID.data);
  
        if (getRecByID.status === 200) {             
          setActRec(getRecByID.data.activity);
          setDateRec(getRecByID.data.actDate);
          setQuantityRec(getRecByID.data.quantity);
          setDurationRec(getRecByID.data.duration);
        } else {
          alert("Cannot connect to server");
        }


      })(); //IIFE
     
    }
  }, [showFrom]);
 
  function handlerRecDate(event) {
    const editDateRec = event.target.value;
    setDateRec(editDateRec)    
    
  }
  function handlerRecQuantity(event) {
    const editQuanRec = event.target.value;
    setQuantityRec(editQuanRec)    
    
  }
  function handlerDurationRec(event) {
    const editQuanRec = event.target.value;
    setDurationRec(editQuanRec)    
    
  }

  

  return (
    <section hidden={showFrom}>
      <div className="act-from-background">
        <div className="container-act-form">
          <div className="middle-font font-large-head  act-form-title">
            Activity name
            <div className="button-close" onClick={close}>
              <i className="fa fa-plus"></i>
            </div>
          </div>

          <div className="act-form">
            <div className="act-form-icon ">
              {Array.isArray(actRec) &&
                actRec.map((actRec) => {
                  return (
                    <IconAct
                      key={actRec._id}
                      src={actRec.src}
                      alt={actRec.name}
                      actType={actRec.type}
                      iconName={actRec.name}                      
                    />
                  );
                })}
            </div>
            <div className="act-form-input ">
              <Input
                htmlFor="activity-date"
                label="activity-date"
                style={dateRec === "" ? { borderColor: "red" } : null}
                type="date"
                name="activity-date"
                onChange={handlerRecDate}
                value={dateRec}
              >
                {/* {actDate === "" ? `please insert activity date` : null} */}
              </Input>
            </div>
            <div className="act-form-input">
              <Input
                htmlFor="quantity"
                label="quantity"
                // style={actQuantity === "" ? { borderColor: "red" } : null}
                type="text"
                placeholder="add you quantity"
                name="weight"
                onChange={handlerRecQuantity}
                value={quantityRec}
              >
                {/* {actQuantity === "" ? `please insert activity quantity ` : null} */}
              </Input>
            </div>
            <div className="act-form-input">
              <Input
                htmlFor="act-duration-time"
                label="duration-time"
                placeholder="HH:mm:ss"
                // style={actDurationTime === "" ? { borderColor: "red" } : null}
                onChange={ handlerDurationRec }
                maxLength="8"
                type="text"
                id="duration-time"
                name="act-duration-time"
                value={durationRec}
              >
                *It takes about 15 minutes or more.
              </Input>
            </div>
            <div className="act-form-button">
              <Button
                type="submit"
                value="submit"
                // onClick={actSubmit}
                // disabled={actDisabledSubmit}
                // style={
                //   actDisabledSubmit
                //     ? { backgroundColor: "var( --secondary-icon-color)" }
                //     : null
                // }
              >
                Save
              </Button>

              <Button
                className="button-reset"
                type="reset"
                onClick={close}
                value="Reset"
              >
                cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActivityForm;
