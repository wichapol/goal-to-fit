import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ActivityCard.css";
import { deleteRec } from "../../../api";
import ActivityForm from "../../ActivityCreate/ActivityForm/ActivityForm";

function ActivityCard({ actDate, actQuantity, actDuration, actArray, recID }) {
  const [isShowFrom, setisShowFrom] = useState(false);
 

  const navigate = useNavigate();
  const actType = actArray[0].type;

  function iconType(actType) {
    if (actType === "indoor") {
      return <i className="fa-solid fa-house primary-button-color"></i>;
    } else if (actType === "outdoor") {
      return <i className="fa-solid fa-sun secondary-button-color"></i>;
    } else {
      return null;
    }
  }

  async function handleShowForm() {
    setisShowFrom(true);
  }

  const handleShowClose = (showForm) => {
    setisShowFrom(showForm);
  };

  const id = recID.toString();

  async function handleRecDelete() {
    const delRec = await deleteRec(id);

    console.log(delRec.statusText);

    if (delRec.status === 204) {
      navigate(0);
    } else {
      alert("activity is not valid");
    }
  }

  return (
    <>
      <div className="col-12 card-act border">
        <div className="row justify-content-around w-100 mx-auto">
          <div className="col-3 act-icon ">
            <div className="act-type-report">{iconType(actType)}</div>
            <img
              className="mx-auto"
              src={actArray[0].src}
              alt={actArray[0].name}
            />
          </div>
          <div className="col-9 justify-content-between">
            <div className="row">
              <div className="col-4 text-left">
                <strong className="col-12 d-block p-0 text-left">
                  {actArray[0].name}
                </strong>
                <small className="col-12 d-block p-0 text-left">
                  {actDate}
                </small>
              </div>
              <div className="col-6 activity-result try">
                <strong className="col-12 d-block p-0 text-center">
                  {actQuantity}
                </strong>
                <small className="col-12 d-block p-0 text-center">
                  {actDuration}
                </small>
              </div>
              <div className="col-2  activity-UD">
                <div onClick={handleShowForm}>
                  <i className="fas fa-edit"></i>
                </div>
                <button
                  type="button"
                  className="but-rec-del"
                  onClick={handleRecDelete}
                  name={recID}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
              {/* <!-- Change to modal or other way to shown up detail in future --> */}
              <details className="col-12 mx-auto d-block font-detail">
                <summary className="weight-300">details</summary>
                <p className="ml-2">Lorem ipsum dolor sit amet.</p>
              </details>
            </div>
          </div>
        </div>
      </div>
      <ActivityForm
        showFrom={!isShowFrom}
        closeForm={handleShowClose}
        id={id}        
      />
    </>
  );
}

export default ActivityCard;
