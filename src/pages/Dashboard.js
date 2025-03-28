//Parent/Smart Hooks Component: Dashboard.js
import React, { useState } from 'react';
import  ChartHorz  from "../components/charts/ChartHorz.js";
import  ChartSmall  from '../components/charts/ChartSmall.js';
import ChartMedium  from '../components/charts/ChartMedium.js';



function Dashboard() {
    const [chartHorz] = useState([
        { chartHeader: 'Income Overview'},
        { chartHeader: 'Savings Overview'}, 
    ]);
    const [chartSmall] = useState([
        { chartHeader: 'Income' },
        { chartHeader: 'Savings' },
        { chartHeader: 'Spending' },
    ]);
    const [chartMedium] = useState([
        {   
            chartHeader: 'Savings Overview' ,
            chartSubHeader: 'Start saving today'
        },
        {
            chartHeader: 'Spending Overview',
            chartSubHeader: 'Stop spending today'
        }
])
        return (
            <section style={styles.container}>
                    <h1>Dashboard</h1>
                <p style={styles.chartHorz}>
                {chartHorz.map((chartHorz, id) => (
                    <ChartHorz key={id}
                    id={id}
                    chartHorz={chartHorz}
                    />
                ))}
                </p>
                <p style={styles.row}>
                {chartSmall.map((chartSmall, id) => (
                    <ChartSmall key={id}
                    id={id}
                    chartSmall={chartSmall}
                    />
                ))}
                </p>
                <p style={styles.row}>
                {chartMedium.map((chartMedium, id) => (
                    <ChartMedium key={id}
                    id={id}
                    chartMedium={chartMedium}
                    />
                ))}
                </p>
            </section>
        );
    }

    export default Dashboard;

    const styles = {
container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2%",
        fontSize: "1.5rem",
},
row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "2%",
        backgroundColor: "whitesmoke",
        color: "#333",
        border: "1px solid #ccc",
        },
    };