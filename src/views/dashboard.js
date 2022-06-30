import { BarChart } from "../components/dashboard/barChart";
export const Dashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "March"],
    datasets: [
      {
        label: "Sales",
        data: [86, 67, 91],
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: Math.round,
        font: { weigth: "bold", size: 16 },
      },
    },
    scales: { yAxis: { display: false } },
  };

  return (
    <>
      <BarChart data={data} options={options} />
    </>
  );
};
