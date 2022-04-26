import React, { useState, useEffect } from "react";
import "./ActivityForm.css";
import IconAct from "../../IconAct/IconAct";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import { getRecordById, updateRec } from "../../../api";

function ActivityForm({ showFrom, closeForm, id }) {
  const [actRec, setActRec] = useState("");
  const [dateRec, setDateRec] = useState("");
  const [quantityRec, setQuantityRec] = useState("");
  const [durationRec, setDurationRec] = useState("");

  const navigate = useNavigate();

  const close = () => {
    closeForm(false);
  };

  useEffect(() => {
    if (!showFrom) {
      (async () => {
        const getRecByID = await getRecordById(id);
        console.log(getRecByID.status);
        console.log(getRecByID.statusText);
        console.log(getRecByID.data);

        if (getRecByID.status === 200) {
          setActRec(getRecByID.data.activity);
          setDateRec(getRecByID.data.actDate);
          setQuantityRec(getRecByID.data.quantity);
          setDurationRec(getRecByID.data.duration.slice(0, 8));
        } else {
          alert("Cannot connect to server");
        }
      })(); //IIFE
    }
  }, [showFrom]);

  function handlerRecDate(event) {
    const editDateRec = event.target.value;
    setDateRec(editDateRec);
  }
  function handlerRecQuantity(event) {
    const editQuanRec = event.target.value;
    setQuantityRec(editQuanRec);
  }

  function handlerDurationRec(event) {
    let editDuraRec = event.target.value;

    if (editDuraRec.length === 2 || editDuraRec.length === 5) {
      editDuraRec = editDuraRec + ":";
    } else if (editDuraRec.length > 8) {
      return;
    }
    console.log(editDuraRec.length);
    setDurationRec(editDuraRec);
  }

  async function recUpdate(event) {
    const validEditDate = dateRec !== "" && dateRec.length === 10;
    const validEditQuan = quantityRec !== "" && quantityRec.length < 20;
    const validEditDura = durationRec !== "";

    if (validEditDate && validEditQuan && validEditDura) {
      const newRecord = {
        activity: actRec,
        actDate: dateRec,
        quantity: quantityRec,
        duration: `${durationRec} hrs`,
        timestamp: new Date(),
      };

      const updatRec = await updateRec(id, newRecord);

      if (updatRec.status === 201) {
        console.log(updatRec.statusText);
        close();
        navigate(0);
      } else {
        alert("activity is not valid");
      }
    } else {
      alert(`Incorrect information, please check.`);
    }

    event.preventDefault();
  }

  return (
    <section hidden={showFrom}>
      <div className="act-from-background">
        <div className="container-act-form">
          <div className="middle-font font-large-head  act-form-title">
            Activity Edit
            <div className="button-close-edit" onClick={close}>
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
                style={
                  dateRec !== "" && dateRec.length === 10
                    ? null
                    : { borderColor: "red" }
                }
                type="date"
                name="activity-date"
                onChange={handlerRecDate}
                value={dateRec}
              >
                {dateRec !== "" && dateRec.length === 10
                  ? null
                  : `please insert activity date`}
              </Input>
            </div>
            <div className="act-form-input">
              <Input
                htmlFor="quantity"
                label="quantity"
                style={
                  quantityRec !== "" && quantityRec.length < 20
                    ? null
                    : { borderColor: "red" }
                }
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
                onChange={handlerDurationRec}
                maxLength="8"
                type="text"
                id="duration-time"
                name="act-duration-time"
                value={durationRec.slice(0, 8)}
                style={durationRec !== "" ? null : { borderColor: "red" }}
              >
                {durationRec.length === 8
                  ? null
                  : `please insert activity quantity `}
                <br />
                *It takes about 15 minutes or more.
              </Input>
            </div>
            <div className="act-form-button">
              <Button type="submit" value="submit" onClick={recUpdate}>
                Update
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
