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
import Lottie from "react-lottie-player";
import animationsData from "./DataToTast/loading/animationsLoading";


import { getRecords } from "../../api";

// function Component

const ActivityReport = () => {
  const [actCardsResult, setActCardsResult] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const pageIsLoading = (status) => {
    setIsLoading(status);
  };

  useEffect(() => {
    (async () => {
      pageIsLoading(true);
      const respons = await getRecords();
      console.log(respons.status);
      console.log(respons.statusText);
      console.log(respons.data);

      setTimeout(() => {
        if (respons.status === 200) {
          const dataRec = respons.data.reverse();
          setActCardsResult(dataRec);
          pageIsLoading(false);
        } else {
          alert("Cannot connect to server");
        }
      }, 2000);
    })(); //IIFE
  }, []);

  return (
    <>
      {isLoading ? (
        <section className="loading-page">
          <Lottie
            loop
            animationData={animationsData[Math.floor(Math.random() * animationsData.length)]}
            play
            style={{ width: "50%", height: "50%"}}
          />
          <p className="animate__animated animate__pulse animate__infinite ">Loading...</p>
        </section>
      ) : (
        <div className="wrapper">
          <NavBar pageTitle="Activity Report" />
          {/* <!-- TOP NAV END --> */}

          {/* <!-- -------------------------------------------------------------------------- -->

                        <!-- MAIN CONTENT SECTION START --> */}
          <section className="container container-activity-report">
            <div className="container-mobile">
              <div className="mobile-header">
                <NavLink
                  to="/ativity-create"
                  className="d-flex justify-content-center secondary-text-color align-items-center"
                >
                  {/* <!-- Right Button --> */}
                  <i className="fa fa-plus"></i>
                  {/* <!-- Right Button --> */}
                  <p className="ml-2 my-0">Create activity</p>
                </NavLink>
              </div>
              <div className="mobile-title">
                <h5>Activity Reports</h5>
              </div>
              <div className="header-act-ls ">
                <p className="third--text-color">{date}</p>
                <p className="third--text-color">Workout days 92</p>
              </div>
              <div className="mobile-user-profile">
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
              <div>
                <ActivityGraph />
              </div>
              <div>
                <DonutChart />
              </div>
              <div>
                <p className="secondary-text-color font-large-head middle-font mt-3 mb-2 ">
                  Activity lists
                </p>
                <p className="border-Bottom"></p>
              </div>
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

            {/* destop */}
            <div className="title-content">
              <p>Activity Report</p>
            </div>
            <div className="container-report">
              <div className="header-act-ls">
                <p className="secondary-text-color middle-font">
                  Activity lists
                </p>
                <p className="third--text-color">{date}</p>
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
            <div className="container-report">
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
          <Footer />
        </div>
      )}
    </>
  );
};

export default ActivityReport;
