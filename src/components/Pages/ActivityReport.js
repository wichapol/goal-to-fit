import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "../ActivityReport/ActivityReport.css";
import ActivityCard from "../ActivityReport/ActivityCard/ActivityCard";
import { NavLink } from "react-router-dom";
import UserInfo from "../ActivityReport/UserInfo/UserInfo";
import dataUser from "./DataToTast/dataUserInfo.json";
import DonutChart from "../ActivityReport/DonutChart/DonutChart";
import ActivityGraph from "../ActivityReport/ActivityGraph/ActivityGraph";

import { getRecords } from "../../api";

// function Component

const ActivityReport = () => {
  const [actCardsResult, setActCardsResult] = useState("");
  

  useEffect(() => {
    (async () => {
      const respons = await getRecords();
      console.log(respons.status);
      console.log(respons.statusText);
      console.log(respons.data);

      if (respons.status === 200) {
        const dataRec = respons.data.reverse();
        setActCardsResult(dataRec);
      } else {
        alert("Cannot connect to server");
      }
    })(); //IIFE
  }, []);


 

 

  return (
    <>
      {/* <!-- ใส่ background พื้นหลังทั้งหน้าจอ ที่ tag body --> */}
      <div className="wrapper">
        <NavBar pageTitle="Activity Report" />
        {/* <!-- TOP NAV END --> */}

        {/* <!-- -------------------------------------------------------------------------- -->

                        <!-- MAIN CONTENT SECTION START --> */}
        <section className="container-activity-report ">
          <div className="container-css-50 ">
            <div className="header-act-ls ">
              <p className="secondary-text-color middle-font">Activity lists</p>
              <p className="third--text-color">Today</p>
              <p className="third--text-color">Workout days 92</p>
            </div>
            <div>
              <div className="card-user-profile ">
                <div className="create-act-button ">
                  <NavLink
                    to="/ativity-create"
                    className="d-flex justify-content-center secondary-text-color align-items-center"
                  >
                    {/* <!-- Right Button --> */}
                    <i className="fa fa-plus"></i>
                    {/* <!-- Right Button --> */}
                    <p
                      className="weight-300 primary-text-color ml-2 my-0"
                      htmlFor="nav-btn-plus"
                    >
                      Create activity
                    </p>
                  </NavLink>
                </div>

                {Array.isArray(dataUser) &&
                  dataUser.map((info) => {
                    return (
                      <UserInfo
                        key={info.id}
                        src={info.src}
                        alt={info.image}
                        userName={info.userName}
                        headRow1={info.weigth}
                        headRow2={info.BMI}
                        headRow3={info.duration}
                      />
                    );
                  })}
              </div>
            </div>
            <div>
              {/* <div className="activity-title bolder-font font-subhead mt-3 mb-3">Activity lists</div> */}
              <div className="act-container">
                <div className="act-lists ">
                  {Array.isArray(actCardsResult) &&
                    actCardsResult.map((act) => {
                      return (
                        <ActivityCard
                          key={act._id}
                          recID={act._id}
                          actArray={act.activity}
                          actDate={act.actDate}
                          actQuantity={act.quantity}
                          actDuration={act.duration}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="container-css-50">
            <div>
              <ActivityGraph />
            </div>
            <div>
              <DonutChart />
            </div>
            <div>
              <div className="col-12  px-0" id="ads">
                <div className="ads-fit">
                  <img
                    src="./img/Masters-Sprint.jpg"
                    alt="master athlete sprint"
                    className="ads-img"
                  />
                  <h3 className="ads-head weight-900 p-2 text-right">
                    GO
                    <br />
                    TO BE
                    <br />
                    MASTER
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        {/* <!-- MAIN CONTENT SECTION END --> */}
        <div className="push"></div>
        <Footer />
      </div>
    </>
  );
};

export default ActivityReport;
