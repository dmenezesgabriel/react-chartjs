import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import classes from "./barChart.module.css";

Chart.register(...registerables, ChartDataLabels);

export const BarChart = ({ data, width, height, options }) => {
  const ref = useRef();

  useEffect(() => {
    const canvasRef = ref.current.getContext("2d");

    let barChart = new Chart(canvasRef, {
      type: "bar",
      data: data,
      options: options,
    });
    // when component unmounts
    return () => {
      barChart.destroy();
    };
  }, []);

  return (
    <div className={classes.graphContainer}>
      <canvas ref={ref} width={width} height={height}></canvas>
    </div>
  );
};
