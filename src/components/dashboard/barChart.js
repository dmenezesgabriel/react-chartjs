import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import classes from "./barChart.module.css";

Chart.register(...registerables);

export const BarChart = ({ label, labels, data }) => {
  const ref = useRef();

  useEffect(() => {
    const canvasRef = ref.current.getContext("2d");

    let barChart = new Chart(canvasRef, {
      type: "bar",
      data: {
        //Bring in data
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
    // when component unmounts
    return () => {
      barChart.destroy();
    };
  }, []);

  return (
    <div className={classes.graphContainer}>
      <canvas ref={ref}></canvas>
    </div>
  );
};
