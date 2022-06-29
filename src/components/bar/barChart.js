import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import classes from "./barChart.module.css";

Chart.register(...registerables);
export const BarChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    let myChart = new Chart(myChartRef, {
      type: "bar",
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March"],
        datasets: [
          {
            label: "Sales",
            data: [86, 67, 91],
          },
        ],
      },
      options: {
        //Customize chart options
      },
    });
    // when component unmounts
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className={classes.graphContainer}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};
