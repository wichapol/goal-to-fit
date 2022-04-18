import React from "react";
import "./ActivityCard.css"

function ActivityCard({ src, alt, actName, actDate, actQuantity, actDuration, actType }) {

    function iconType(actType) {
        if (actType === "indoor") {
            return <i className="fa-solid fa-house primary-button-color"></i>;
        } else if (actType === "outdoor") {
            return <i className="fa-solid fa-sun secondary-button-color"></i>;
        } else {
            return null;
        }
    }


    return (
        <>
            <div className="col-12 card-act">
                <div className="row justify-content-around w-100 mx-auto">
                    <div className="col-3 act-icon ">
                        <div className="act-type-report">
                            {iconType(actType)}
                        </div>
                        <img className="mx-auto" src={src} alt={alt} />
                    </div>
                    <div className="col-9 justify-content-between">
                        <div className="row">
                            <div className="col-4 text-left">
                                <strong className="col-12 d-block p-0 text-center">{actName}</strong>
                                <small className="col-12 d-block p-0 text-center">{actDate}</small>
                            </div>
                            <div className="col-8 activity-result try">
                                <strong className="col-12 d-block p-0 text-center">{actQuantity}</strong>
                                <small className="col-12 d-block p-0 text-center">{actDuration}</small>
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
        </>
    )
}

export default ActivityCard;