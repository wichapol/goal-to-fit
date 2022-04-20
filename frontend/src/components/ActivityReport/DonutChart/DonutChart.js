import React from "react";
import "./DonutChart.css"

function DonutChart() {
    return (
        <>
            <div className="col-12 order-3  mt-3"
                id="donut">
                <div className="card">
                    <div className="card-body  justify-content-center align-items-center text-center">
                        {/* <!-- Donut chart --> */}
                        <svg className="m-1 circle-chart-day"
                            viewBox="0 0 33.83098862 33.83098862"
                            width="160"
                            height="160"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle className="circle-chart-day-background"
                                stroke="#efefef"
                                strokeWidth="2"
                                fill="none"
                                cx="16.91549431"
                                cy="16.91549431"
                                r="15.91549431" />
                            <circle className="circle-chart-day-circle circle-chart-day-circle-negative"
                                stroke="#00acc1"
                                strokeWidth="2"
                                strokeDasharray="60,100"
                                strokeLinecap="round"
                                fill="none"
                                cx="16.91549431"
                                cy="16.91549431"
                                r="15.91549431" />
                            <g className="circle-chart-day-info">
                                <text className="circle-chart-day-percent"
                                    x="16.91549431"
                                    y="15.5"
                                    alignmentBaseline="central"
                                    textAnchor="middle"
                                    fontSize="8">
                                    60%
                                </text>
                                <text className="circle-chart-day-subline"
                                    x="16.91549431"
                                    y="20.5"
                                    alignmentBaseline="central"
                                    textAnchor="middle"
                                    fontSize="2.5">
                                    Today
                                </text>
                            </g>
                        </svg>
                        <svg className="m-1 circle-chart-week"
                            viewBox="0 0 33.83098862 33.83098862"
                            width="160"
                            height="160"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle className="circle-chart-week-background"
                                stroke="#efefef"
                                strokeWidth="2"
                                fill="none"
                                cx="16.91549431"
                                cy="16.91549431"
                                r="15.91549431" />
                            <circle className="circle-chart-week-circle"
                                stroke="#00acc1"
                                strokeWidth="2"
                                strokeDasharray="30,100"
                                strokeLinecap="round"
                                fill="none"
                                cx="16.91549431"
                                cy="16.91549431"
                                r="15.91549431" />
                            <g className="circle-chart-week-info">
                                <text className="circle-chart-week-percent"
                                    x="16.91549431"
                                    y="15.5"
                                    alignmentBaseline="central"
                                    textAnchor="middle"
                                    fontSize="8">
                                    30%
                                </text>
                                <text className="circle-chart-week-subline"
                                    x="16.91549431"
                                    y="20.5"
                                    alignmentBaseline="central"
                                    textAnchor="middle"
                                    fontSize="2.5">
                                    Last week
                                </text>
                            </g>
                        </svg>
                        <svg className="m-1 circle-chart-year"
                            viewBox="0 0 33.83098862 33.83098862"
                            width="160"
                            height="160"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle className="circle-chart-year-background"
                                stroke="#efefef"
                                strokeWidth="2"
                                fill="none"
                                cx="16.91549431"
                                cy="16.91549431"
                                r="15.91549431" />
                            <circle className="circle-chart-year-circle"
                                stroke="#00acc1"
                                strokeWidth="2"
                                strokeDasharray="10,100"
                                strokeLinecap="round"
                                fill="none"
                                cx="16.91549431"
                                cy="16.91549431"
                                r="15.91549431" />
                            <g className="circle-chart-year-info">
                                <text className="circle-chart-year-percent"
                                    x="16.91549431"
                                    y="15.5"
                                    alignmentBaseline="central"
                                    textAnchor="middle"
                                    fontSize="8">
                                    10%
                                </text>
                                <text className="circle-chart-year-subline"
                                    x="16.91549431"
                                    y="20.5"
                                    alignmentBaseline="central"
                                    textAnchor="middle"
                                    fontSize="2.5">
                                    This year
                                </text>
                            </g>
                        </svg>
                        {/* <!-- Donut chart --> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonutChart;