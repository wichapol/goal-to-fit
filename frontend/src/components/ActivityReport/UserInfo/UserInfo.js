import React from "react";
import "./UserInfo.css"

function UserInfo({ src, alt, userName, headRow1 = ["Name", "Start", "Actual", "Goal"]
    , headRow2 = ["Name", "Start", "Actual", "Goal"]
    , headRow3 = ["Name", "Start", "Actual", "Goal"] }) {
    return (
        <>
            <div className="act-user-profile ">
                <div className="act-user-image ">
                    <img src={src} alt={alt} />
                </div>
                <div className="act-user-info">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="4" className="font-head bolder-font primary-text-color">{userName}</th>
                            </tr>
                            <tr className="font-detail secondary-text-color middle-font font-sm-detail text-center">
                                <th >&nbsp;</th>
                                <th>Start</th>
                                <th>Actual</th>
                                <th>Goal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="font-detail secondary-text-color middle-font font-sm-detail text-left">{headRow1[0]}</th>
                                <td className="font-detail font-sm-detail text-center">{headRow1[1]}</td>
                                <td className="font-detail font-sm-detail text-center">{headRow1[2]}</td>
                                <td className="font-detail font-sm-detail text-center">{headRow1[3]}</td>
                            </tr>
                            <tr>
                                <th className="font-detail secondary-text-color middle-font font-sm-detail text-left">{headRow2[0]}</th>
                                <td className="font-detail font-sm-detail text-center">{headRow2[1]}</td>
                                <td className="font-detail font-sm-detail text-center">{headRow2[2]}</td>
                                <td className="font-detail font-sm-detail text-center">{headRow2[3]}</td>
                            </tr>
                            <tr>
                                <th className="font-detail secondary-text-color middle-font font-sm-detail text-left">{headRow3[0]}</th>
                                <td className="font-detail font-sm-detail text-center">{headRow3[1]}</td>
                                <td className="font-detail font-sm-detail text-center">{headRow3[2]}</td>
                                <td className="font-detail font-sm-detail text-center">{headRow3[3]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserInfo;