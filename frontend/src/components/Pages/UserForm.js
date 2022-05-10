import React, { useState, useEffect } from "react";
import ImageTitle from "../ImageTitle/ImageTitle";
import Input from "../Input/Input";
import SwitchButton from "../SwitchButton/SwitchButton";
import CheckDateBox from "../CheckDateBox/CheckDateBox";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import "../UserForm/UserForm.css";
import { Navigate, NavLink } from "react-router-dom";
import InputSelect from "../Input/inputSelect/InputSelect";
import DATATEST from "./DataToTast/UserTest.json";
import dataExerciseDay from "./DataToTast/dataExerciseDay.json";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [takenName, setTakenName] = useState(false);
  const [gender, setGender] = useState("female");
  const [userBirthDay, setUserBirthDay] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userHeight, setUserHeight] = useState("");
  const [userWeight, setUserWeight] = useState("");
  const [userBMI, setUserBMI] = useState("");
  const [userGoal, setUserGoal] = useState([
    {
      goal: "",
      quantity: "",
      duration: "",
    },
  ]);
  const [newExerciseDay, setNewExerciseDay] = useState({});
  const [allExerciseDay, setAllExerciseDay] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [durationTime, setDurationTime] = useState("");
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [isSubmit, setIsSunmit] = useState(false);

  // validate username
  let nameToCheck = "";
  let userNameLength = userName.length < 4;

  function handleChange(event) {
    nameToCheck = event.target.value.toLocaleLowerCase();

    // console.log(nameToCheck)

    if (
      DATATEST.find(
        (data) => data.username === nameToCheck || nameToCheck.length > 10
      )
    ) {
      setTakenName(true);

      return;
    }
    setTakenName(false);
    setUserName(nameToCheck);
  }
  // add gender
  function addResul(result) {
    if (result) {
      setGender("male");
    } else {
      setGender("female");
    }
  }
  // add birth && calculate age
  function handleBirthDay(event) {
    const birthDateString = event.target.value;
    setUserBirthDay(birthDateString);
    // birthday string to  birth date
    const birthDate = new Date(birthDateString);
    const toddy = new Date();

    const calculateAge = toddy.getFullYear() - birthDate.getFullYear();
    if (calculateAge <= 0) {
      setUserAge("");
      return;
    }
    setUserAge(calculateAge);
  }
  // add Height
  function addHeigh(event) {
    const heighCM = event.target.value;
    setUserHeight(Number(heighCM));
  }

  // add Weight
  function addWeight(event) {
    const weightKg = event.target.value;
    setUserWeight(Number(weightKg));
  }

  useEffect(() => {
    const heighM = userHeight / 100;
    const calculateBMI = (userWeight / Math.pow(heighM, 2)).toFixed(1);

    setUserBMI(Number(calculateBMI));
  }, [userHeight, userWeight]);

  // exerciseDay

  function addNewExerciseDay({ target }) {
    const { name, value } = target;
    setNewExerciseDay({ name: name, value: value });
  }

  // if(newExerciseDay.find(exerciseDay=> exerciseDay.name === name)){
  //     console.log(name)
  //     const test = newExerciseDay.filter((currentGoal) => currentGoal.name !== name);
  //     console.log(test)
  //     setNewExerciseDay(test)
  // }

  useEffect(() => {
    if (Object.keys(newExerciseDay).length === 0) {
      return;
    } else if (
      allExerciseDay.find(
        (exerciseDay) => exerciseDay.name === newExerciseDay.name
      )
    ) {
      setAllExerciseDay((prev) => {
        return prev.filter((item) => item.name !== newExerciseDay.name);
      });
    } else {
      setAllExerciseDay((prev) => {
        return [...prev, newExerciseDay];
      });
    }
    setNewExerciseDay({});
  }, [newExerciseDay]);

  // add Duration Time
  function addDurationTime(event) {
    let value = event.target.value;

    if (value.length === 2 || value.length === 5) {
      value = value + ":";
    } else if (value.length > 8) {
      return;
    }
    setDurationTime(value);
  }

  // varidate form

  // user userSubmit
  useEffect(() => {
    if (userGoal.goal !== "" && allExerciseDay.length !== 0) {
      setDisabledSubmit(false);
      return;
    } else {
      setDisabledSubmit(true);
    }
  }, [userGoal, allExerciseDay]);

  function userSubmit(event) {
    event.preventDefault();

    setInterval(setIsSunmit(!isSubmit), 10000);
  }

  // Reset form

  function resetFrom(event) {
    event.preventDefault();
    setUserName("");
    setTakenName(false);
    setGender("female");
    setUserBirthDay("");
    setUserAge("");
    setUserHeight("");
    setUserWeight("");
    setUserBMI("");
    setUserGoal([
      {
        goal: "",
        quantity: "",
        duration: "",
      },
    ]);
    setNewExerciseDay({});
    setAllExerciseDay([]);
    setDurationTime("");
    setDisabledSubmit(true);
    setInterval(setIsChecked(!isChecked), 10000);
  }

  return (
    <>
      <section className="container container-userfrom animate__animated animate__fadeIn ">
        <div className="mobile-header-userfrom">
          <p className="ml-2 my-0">Goal to fit</p>
          <NavLink to="/activity-report">
            <div className="button-close">
              <i className="fa fa-plus"></i>
            </div>
          </NavLink>
        </div>
        <form onSubmit={userSubmit}>
          <div className="user-profile secondary-text-color ">
            <ImageTitle
              imgSrc={"./img/gtf-logo.png"}
              classDiv={"profile-name-image_title"}
              alt={"img-user"}
              classImg={"icon-logo"}
            >
              {userName}
            </ImageTitle>
            <Input
              htmlFor="create user name"
              label="Create user name"
              placeholder="Add User Name "
              maxLength="10"
              type="text"
              name="username"
              onChange={handleChange}
              value={userName}
              style={userNameLength ? { borderColor: "red" } : null}
            >
              {userNameLength ? "username is length 4-10" : null}
              {takenName ? `username is already taken please Change.` : null}
            </Input>
          </div>
          <div className="user-infomation">
            <div>
              <SwitchButton
                textLeft="MALE"
                textRight="FEMELE"
                textOnSwitch="gender"
                inputName="gender"
                addResul={addResul}
                value={gender}
              >
                gender
              </SwitchButton>
              <p className="p-input primary-text-color">you'r {gender}</p>
            </div>
            <div className="profile-year-of-birth">
              <Input
                htmlFor="user-birthday"
                label="your birthday"
                style={
                  userBirthDay === "" || userAge === ""
                    ? { borderColor: "red" }
                    : null
                }
                type="date"
                name="user-birthday"
                onChange={handleBirthDay}
                value={userBirthDay}
              >
                {userAge === ""
                  ? `please insert your birthday`
                  : `your age is  ${userAge}`}
              </Input>
            </div>
            <div>
              <Input
                htmlFor="height"
                label="Height"
                min="1"
                max="220"
                style={
                  userHeight === "" && userHeight < 100
                    ? { borderColor: "red" }
                    : null
                }
                type="number"
                placeholder="(cm)"
                name="height"
                onChange={addHeigh}
                value={userHeight}
              >
                {userHeight === "" && userHeight < 100
                  ? `please insert your heigh`
                  : `your height is  ${userHeight}`}
              </Input>
            </div>
            <div>
              <Input
                htmlFor="weight"
                label="Weight"
                min="1"
                style={userWeight === "" ? { borderColor: "red" } : null}
                type="number"
                placeholder="(kg)"
                name="weight"
                onChange={addWeight}
                value={userWeight}
              >
                {userWeight === ""
                  ? `please insert your weight(kg)`
                  : `your weight is  ${userWeight} & BMI ${userBMI}`}
              </Input>
            </div>
          </div>
          <div className="user-goal">
            <InputSelect addUserGoal={setUserGoal}>Goal</InputSelect>
          </div>
          <div className="goal-date-time">
            <div className="exercise-day">
              <span>
                <label className="secondary-text-color middle-font mb-0">
                  Exercise day
                </label>
                <p
                  className="primary-text-color p-input m-0"
                  hidden={allExerciseDay.length > 0}
                >
                  * please seclect exercise day
                </p>
              </span>
              <div className="data-goal">
                {dataExerciseDay.map((text) => {
                  return (
                    <CheckDateBox
                      key={text.name}
                      name={text.name}
                      value={[text.value]}
                      data-ate={text.children}
                      onChange={addNewExerciseDay}
                    >
                      {text.children}
                    </CheckDateBox>
                  );
                })}
              </div>
            </div>

            <Input
              className="start-time"
              htmlFor="duration-time"
              label="Duration Time"
              placeholder="HH:mm:ss"
              style={durationTime === "" ? { borderColor: "red" } : null}
              onChange={addDurationTime}
              maxLength="8"
              type="text"
              id="duration-time"
              name="duration-time"
              value={durationTime}
            >
              *It takes about 15 minutes or more.
            </Input>
          </div>
          <div className="active-form">
            <div>
              <Button
                type="submit"
                value="submit"
                disabled={disabledSubmit}
                style={
                  disabledSubmit
                    ? { backgroundColor: "var( --secondary-icon-color)" }
                    : null
                }
              >
                Save
              </Button>
              {isSubmit && <Navigate to="/activity-report" />}
            </div>
            <div>
              <Button
                className="button-reset"
                type="reset"
                onClick={resetFrom}
                value="Reset"
              >
                cancel
              </Button>
              {isChecked ? <Navigate to="/signup" /> : null}
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default UserForm;
