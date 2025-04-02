import React from 'react';
import { PieChart, Pie } from "recharts";

const data01 = [
    { name: "Group A", value: 410 },
    { name: "Group B", value: 370 },
    { name: "Group C", value: 140 },
    { name: "Group D", value: 360 },
];  

const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 200 },
    { name: "B2", value: 100 },
    { name: "B3", value: 300 },
    { name: "B4", value: 300 },
    { name: "B5", value: 300 },
    { name: "C1", value: 200 },
    { name: "C2", value: 200 },
    { name: "D1", value: 300 },
    { name: "D2", value: 300 },
];

const ChartSmall = ({chartSmall}) => {
    return (
        <article key={chartSmall.id} style={styles.card}>
            <h1 style={styles.h1}>{chartSmall.chartHeader}</h1>
            <PieChart width={200} height={100}>
            <Pie
            dataKey="value"
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#fee440ff"
          />
          <Pie
            dataKey="value"
            data={data02}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#f15bb5ff"
            label
          />
        </PieChart>
      </article>
    );
};

export default ChartSmall;

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
    minHeight: '100%',
    // width: '350px',
    margin: "1%",
    paddingLeft: "1%",
    paddingRight: '1%',
    borderRadius: "5px",
    backgroundColor: "whitesmoke",
    //textAlign: "center",
    color: "#f15bb5ff",
    border: "1px solid #ccc",
  },
  h1: {
    borderBottom: "1px solid #00bbf9ff",
    padding: "1%",
    color: "#00bbf9ff",
  },
};
