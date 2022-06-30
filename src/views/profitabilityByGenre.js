import { BarChart } from "../components/charts/barChart";
import { rollup, sum } from "d3";

export const ProfitabilityByGenre = ({ dataSet }) => {
  let profitabilityByGenre = Array.from(
    rollup(
      dataSet,
      (v) => {
        return sum(v, (d) => d.Profitability);
      },
      (d) => d.Genre
    ),
    ([genre, profitability]) => ({
      genre,
      profitability,
    })
  );

  const data = {
    labels: profitabilityByGenre.map((d) => d.genre),
    datasets: [
      {
        label: "Profitability",
        data: profitabilityByGenre.map((d) => d.profitability),
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: Math.round,
        font: { weigth: "bold", size: 10 },
      },
    },
    scales: { yAxis: { display: false } },
  };
  return <BarChart data={data} options={options} />;
};
