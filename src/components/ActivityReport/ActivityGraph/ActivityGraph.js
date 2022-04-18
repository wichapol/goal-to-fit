import React from "react";
import "./ActivityGraph.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index' ,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
        },
    },
    scales: {
        y: {
            type: 'linear' ,
            display: true,
            position: 'left' ,
        },
        y1: {
            type: 'linear' ,
            display: true,
            position: 'right' ,
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1',
        },
    ],
};

function ActivityGraph(prop) {
    return (
        <>
            <div className="col-12  order-3 mb-3 " id="graph-title">
                <div className="row justify-content-between align-items-center">
                    <div className="col-12 font-subhead text-left ">
                        Total progress
                        <div className="bar-in "></div>
                    </div>
                </div>
            </div>
            <div className="chart-line">
                <Line options={options} data={data} />
            </div>
            {/* <div className="col-12  order-3 " id="graph">
                <div className="card">
                    <div className="card-body">
                        <div className="meter">
                            <ul>
                                <li>100</li>
                                <li>65</li>
                                <li>35</li>
                                <li>15</li>
                            </ul>
                            <ul>
                                <li>40</li>
                                <li>30</li>
                                <li>20</li>
                                <li>10</li>
                            </ul>
                        </div>
                        <div className="graph-container">
                            <svg className="graph-user" xmlns="http://www.w3.org/2000/svg" viewbox="0 -20 1440 320">
                                <path className="color-graph-weight" fillOpacity="1" d="M0,224L57.6,256L115.2,224L172.8,224L230.4,160L288,224L345.6,192L403.2,192L460.8,224L518.4,256L576,160L633.6,64L691.2,224L748.8,96L806.4,96L864,128L921.6,64L979.2,64L1036.8,256L1094.4,32L1152,128L1209.6,160L1267.2,96L1324.8,288L1382.4,96L1440,256L1440,320L1382.4,320L1324.8,320L1267.2,320L1209.6,320L1152,320L1094.4,320L1036.8,320L979.2,320L921.6,320L864,320L806.4,320L748.8,320L691.2,320L633.6,320L576,320L518.4,320L460.8,320L403.2,320L345.6,320L288,320L230.4,320L172.8,320L115.2,320L57.6,320L0,320Z"></path>
                            </svg>
                            <svg className="graph-user" xmlns="http://www.w3.org/2000/svg" viewbox="0 -20 1440 320">
                                <path className="color-graph-calories" fillOpacity="1" d="M0,96L24,96C48,96,96,96,144,85.3C192,75,240,53,288,80C336,107,384,181,432,208C480,235,528,213,576,186.7C624,160,672,128,720,144C768,160,816,224,864,234.7C912,245,960,203,1008,170.7C1056,139,1104,117,1152,122.7C1200,128,1248,160,1296,165.3C1344,171,1392,149,1416,138.7L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
                            </svg>
                        </div>
                        <div className="d-flex label-container">
                            <div className="font-detail color-graph-weight label-graph">Weight(Kg)</div>
                            <div className="font-detail color-graph-calories label-graph">Calories</div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default ActivityGraph; 