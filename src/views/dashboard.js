import { ProfitabilityByGenre } from "./profitabilityByGenre";
import { useData } from "../utils/getData";
import { Dropdown } from "../components/form/dropdown";
import { useEffect, useState } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/dmenezesgabriel/d138a218e5d6d064b40b45f693c27b42/raw/3919b288f6663e8c406d7286a78f23f0721fc752/HollywoodsMostProfitableStories.csv";

export const Dashboard = () => {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("Drama");

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  if (!data) {
    return <pre>'loading...'</pre>;
  }

  const handleChange = (event) => {
    setValue(event.target.value);
    let filteredData = data.filter((d) => {
      if (d.Genre == event.target.value) {
        return d;
      }
    });
    setData(filteredData);
    console.log(event.target.value);
  };

  return (
    <>
      <Dropdown
        label={"Genre"}
        options={[...new Set(data.map((d) => d.Genre))]}
        value={value}
        // onChange={handleChange}
      />
      <ProfitabilityByGenre dataSet={data} />
    </>
  );
};
