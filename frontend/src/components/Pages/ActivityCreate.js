import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Input from "../Input/Input";
import Button from "../Button/Button";
import SwitchButton from "../SwitchButton/SwitchButton";
import "font-awesome/css/font-awesome.min.css";
import "../ActivityCreate/ActivityCreate.css";
import IconAct from "../IconAct/IconAct";
import dataIconAct from "./DataToTast/dateActIcon.json";
import { Navigate } from "react-router-dom";
import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:4000",
  });

function ActivityCreate() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isIndoor, setIsIndoor] = useState(false);
  const [resultIcon, setResultIcon] = useState([]);
  const [actSelect, setActSelect] = useState("");
  const [isShowFrom, setisShowFrom] = useState(false);
  const [disabledCf, setDisabledCf] = useState(true);
  const [addActivity, setAddActivity] = useState("");

  function addResul(result) {
    setIsIndoor(result);
  }

  useEffect(() => {
    const iconIndoor = dataIconAct.filter((icon) => icon.type === "indoor");
    const iconOutdoor = dataIconAct.filter((icon) => icon.type === "outdoor");

    setResultIcon(isIndoor ? iconIndoor : iconOutdoor);
  }, [isIndoor]);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    event.preventDefault();
  }

  function addSelect(event) {
    const value = event.target.name;
    const resultSelect = resultIcon.filter((act) => act.name === value);

    setDisabledCf(false);
    setActSelect(
      resultSelect.map((valSel) => ({
        id: `${valSel.id}`,
        name: valSel.name,
        src: valSel.src,
        type: valSel.type,
      }))
    );
    setAddActivity(
      resultSelect.map((icon) => ({
        id: `${icon.id}`,
        name: icon.name,
        src: icon.src,
        type: icon.type,
      }))
    );
    event.preventDefault();
  }

  function removeSelect(event) {
    setActSelect("");
    setisShowFrom(false);
    setDisabledCf(true);
    event.preventDefault();
  }

  function handleCfClick(event) {
    setisShowFrom(true);
    setDisabledCf(true);
    event.preventDefault();
  }

  // set sate activity form

  const [actDate, setActDate] = useState("");
  function handleActDate(event) {
    const actDateString = event.target.value;
    setActDate(actDateString);
  }
  const [actQuantity, setActQuantity] = useState("");

  function addActQuantit(event) {
    const value = event.target.value;
    setActQuantity(value);
  }

  const [actDurationTime, setActDurationTime] = useState("");
  function addActDurationTime(event) {
    let value = event.target.value;

    if (value.length === 2 || value.length === 5) {
      value = value + ":";
    } else if (value.length > 8) {
      return;
    }
    setActDurationTime(value);
  }

  const [isChecked, setIsChecked] = useState(false);
  const [actDisabledSubmit, setActDisabledSubmit] = useState(true);

  // user userSubmit
  useEffect(() => {
    if (
      addActivity !== "" &&
      actDate !== "" &&
      actQuantity !== "" &&
      actDurationTime !== ""&& actDurationTime.length  === 8
    ) {
      setActDisabledSubmit(false);
      return;
    } else {
      setActDisabledSubmit(true);
    }
  }, [addActivity, actDate, actQuantity, actDurationTime]);

  async function actSubmit(event) {
    const prostResponse = await client.post("/users/me/records", {
      activity: actSelect,
      actDate: actDate,
      quantity: actQuantity,
      duration: `${actDurationTime} hrs`,
      timestamp: new Date(),
    });

    if (prostResponse.status === 201) {
        console.log(prostResponse.data)
      setIsChecked(true);
      setInterval(() => {
        <Navigate to="/activity-report" />;
      }, 5000);
    }else {
        alert('activity is not valid');
    }

    event.preventDefault();
  }

  function actResetFrom(event) {
    event.preventDefault();
    setAddActivity("");
    setActDate("");
    setActQuantity("");
    setActDurationTime("");
    setIsChecked(true);
  }

  return (
    <>
      <div className="wrapper">
        <NavBar pageTitle="Activity Create" />

        <section className="container container-activity-create">
          <div className="container-css-50">
            <Input
              className="add-input"
              type="text"
              id="Search"
              placeholder="Search.."
              title="SearchActivity"
              onChange={handleSearch}
            />

            <div className="activity-select ">
              <div className="activity-select-icon">
                {actSelect === ""
                  ? null
                  : Array.isArray(actSelect) &&
                    actSelect.map((icon, index) => {
                      return (
                        <IconAct
                          key={index}
                          num={`${icon.id}`}
                          src={icon.src}
                          alt={icon.name}
                          actType={icon.type}
                          iconName={icon.name}
                          setSelect={removeSelect}
                        />
                      );
                    })}
              </div>

              <Button
                className="button-cf"
                type="button"
                onClick={handleCfClick}
                disabled={disabledCf}
              >
                Confirm
              </Button>
            </div>
            <SwitchButton
              classLabel="display-none"
              textLeft="Indoor"
              textRight="Outdoor"
              textOnSwitch="indoor-outdoor"
              inputName="toggle-1"
              addResul={addResul}
            />
            <div className="container-list ">
              <div className="activity-list">
                {resultIcon
                  .filter((value) => {
                    if (searchTerm === "") {
                      return value;
                    } else if (
                      value.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return value;
                    }
                    return value;
                  })
                  .map((icon, index) => {
                    return (
                      <IconAct
                        key={index}
                        num={icon.id}
                        src={icon.src}
                        alt={icon.name}
                        name={icon.name}
                        iconName={icon.name}
                        setSelect={addSelect}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="container-act-sel-from " hidden={!isShowFrom}>
            <div className="middle-font font-large-head  act-create-title">
              Activity name
              <div
                className="button-close"
                onClick={removeSelect}                
              >
                <i className="fa fa-plus"></i>
              </div>
            </div>

            <div className="act-create ">
              <div className="act-create-icon ">
                {Array.isArray(addActivity) &&
                  addActivity.map((icon, index) => {
                    return (
                      <IconAct
                        key={index}
                        src={icon.src}
                        alt={icon.name}
                        actType={icon.type}
                        iconName={icon.name}
                        num={`${icon.id}`}
                        setSelect={removeSelect}
                      />
                    );
                  })}
              </div>
              <div className="act-create-input ">
                <Input
                  htmlFor="activity-date"
                  label="activity-date"
                  style={actDate === "" ? { borderColor: "red" } : null}
                  type="date"
                  name="activity-date"
                  onChange={handleActDate}
                  value={actDate}
                >
                  {actDate === "" ? `please insert activity date` : null}
                </Input>
              </div>
              <div className="act-create-input">
                <Input
                  htmlFor="quantity"
                  label="quantity"
                  style={actQuantity === "" ? { borderColor: "red" } : null}
                  type="text"
                  placeholder="add you quantity"
                  name="weight"
                  onChange={addActQuantit}
                  value={actQuantity}
                >
                  {actQuantity === ""
                    ? `please insert activity quantity `
                    : null}
                </Input>
              </div>
              <div className="act-create-input">
                <Input
                  htmlFor="act-duration-time"
                  label="duration-time"
                  placeholder="HH:mm:ss"
                  style={actDurationTime === "" ? { borderColor: "red" } : null}
                  onChange={addActDurationTime}
                  maxLength="8"
                  type="text"
                  id="duration-time"
                  name="act-duration-time"
                  value={actDurationTime}
                >
                  *It takes about 15 minutes or more.
                </Input>
              </div>
              <div className="act-create-button">
                <Button
                  type="submit"
                  value="submit"
                  onClick={actSubmit}
                  disabled={actDisabledSubmit}
                  style={
                    actDisabledSubmit
                      ? { backgroundColor: "var( --secondary-icon-color)" }
                      : null
                  }
                >
                  Save
                </Button>

                <Button
                  className="button-reset"
                  type="reset"
                  onClick={actResetFrom}
                  value="Reset"
                >
                  cancel
                </Button>
                {isChecked ? <Navigate to="/activity-report" /> : null}
              </div>
            </div>
          </div>
        </section>

        <div className="push"></div>
      </div>
      <Footer />
    </>
  );
}
export default ActivityCreate;
