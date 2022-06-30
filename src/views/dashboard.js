import { ProfitabilityByGenre } from "./profitabilityByGenre";
import { useData } from "../utils/getData";

const csvUrl =
  "https://gist.githubusercontent.com/dmenezesgabriel/d138a218e5d6d064b40b45f693c27b42/raw/3919b288f6663e8c406d7286a78f23f0721fc752/HollywoodsMostProfitableStories.csv";

export const Dashboard = () => {
  const dataSet = useData(csvUrl);

  if (!dataSet) {
    return <pre>'loading...'</pre>;
  }

  return <ProfitabilityByGenre dataSet={dataSet} />;
};
