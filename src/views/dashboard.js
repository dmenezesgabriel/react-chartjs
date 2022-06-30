import { BarChart } from "../components/dashboard/barChart";
import { useData } from "../utils/useData";

const csvUrl =
  "https://gist.githubusercontent.com/dmenezesgabriel/d138a218e5d6d064b40b45f693c27b42/raw/3919b288f6663e8c406d7286a78f23f0721fc752/HollywoodsMostProfitableStories.csv";

export const Dashboard = () => {
  const dataSet = useData(csvUrl);
  if (!dataSet) {
    return <pre>'loading...'</pre>;
  }
  const data = {
    labels: dataSet.map((data) => data.Genre),
    datasets: [
      {
        label: "Sales",
        data: dataSet.map((data) => data.Profitability),
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

  return (
    <>
      <BarChart data={data} options={options} />
    </>
  );
};
