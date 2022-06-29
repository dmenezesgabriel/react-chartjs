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

  const options = {};

  return (
    <>
      <BarChart data={data} options={options} />
    </>
  );
};
