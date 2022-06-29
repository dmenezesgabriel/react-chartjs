import { BarChart } from "./dashboard/barChart";

export const Dashboard = () => (
  <>
    <BarChart
      label={"Sales"}
      labels={["Jan", "Feb", "March"]}
      data={[86, 67, 91]}
    />
  </>
);
