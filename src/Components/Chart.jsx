import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,

} from "chart.js";
import { Bar } from "react-chartjs-2";

//adding plugins
ChartJS.register(CategoryScale, LinearScale, BarElement);

const Chart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

//   this useEffect will update the states with the data before rendering
// we can achieve it using const but for future aspect if we want to update data then state will be help full
  useEffect(() => {
    setChartData({
      labels: ["Ram", "Hari", "Gopal", "Krishna", "Suresh"],
      datasets: [
        {
          label: "Number of points earned",
          data: [122, 255, 340, 120, 520],
          borderColor: "#0040ff",
          backgroundColor: "#99b3ff",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Employee Point Chart",
        },
      },
    });
  }, []);

  return (
    <div>
        {/* below component is from "react-chartjs-2" npm which help in creating "Bar Chat" */}
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
};

export default Chart;
