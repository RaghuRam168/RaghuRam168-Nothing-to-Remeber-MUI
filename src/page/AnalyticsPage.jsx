import React from "react";
import { Bar ,Line,Pie,Doughnut,} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const AnalyticsPage = () => {
  const data = {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [
      {
        data: [10, 20, 30, 40, 50, 60],
        label: "demo",
        backgroundColor: ["red"],
        borderColor:'#000',
        borderWidth:2,
        borderRadius:10
      },
    ],
  };
  return (
    <>
    
    <div style={{ width: "500px" }}>
      <Bar data={data} options={{
        animation:{
          duration:3000,
          
        }
      }} />
    </div>
    <div style={{ width: "500px" }}>
    <Line data={data} />
  </div>
  <div style={{ width: "500px" }}>
    <Pie data={data} />
  </div>
  <div style={{ width: "500px" }}>
    <Doughnut data={data} />
  </div>
  </>
  );
};

export default AnalyticsPage;
