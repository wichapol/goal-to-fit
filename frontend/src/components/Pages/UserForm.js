import React, { useState, useEffect } from "react";
import ImageTitle from "../ImageTitle/ImageTitle";
import Input from "../Input/Input";
import SwitchButton from "../SwitchButton/SwitchButton";
import CheckDateBox from "../CheckDateBox/CheckDateBox";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import "../UserForm/UserForm.css";
import { Navigate } from "react-router-dom";
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
    if (calculateAge <= 12) {
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
    console.log(value);
    if (value.length === 2 || value.length === 5) {
      value = value + ":";
    } else if (value.length > 8) {
      return;
    }
    setDurationTime(value);
  }

  // user userSubmit
  useEffect(() => {
    if (userGoal.goal !== "" && allExerciseDay.length !== 0) {
      setDisabledSubmit(false);
      return;
    } else {
      setDisabledSubmit(true);
    }
  }, [userGoal, allExerciseDay]);

  function userSubmit() {
    setIsChecked(!isChecked)    
  }

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
    setIsChecked(!isChecked);
  }

  return (
    <>
      <section className="container-userfrom ">
        <form>
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
                <label>Exercise day</label>
                <p
                  className="primary-text-color"
                  hidden={allExerciseDay.length > 0 ? { color: "red" } : null}
                >
                  *
                </p>
              </span>
              <div className="data-goal">
                {dataExerciseDay.map((text) => {
                  return (
                    <CheckDateBox
                      key={text.name}
                      name={text.name}
                      value={[text.value]}
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
                onSubmit={userSubmit}
                disabled={disabledSubmit}
                style={
                    disabledSubmit
                      ? { backgroundColor: "var( --secondary-icon-color)" }
                      : null
                  }
              >
                Save
              </Button>
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
              {isChecked ? <Navigate to="/activity-report" /> : null}
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default UserForm;
