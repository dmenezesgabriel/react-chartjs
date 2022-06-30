import { ProfitabilityByGenre } from "./profitabilityByGenre";
import { Dropdown } from "../components/form/dropdown";
import { useEffect, useState } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/dmenezesgabriel/d138a218e5d6d064b40b45f693c27b42/raw/3919b288f6663e8c406d7286a78f23f0721fc752/HollywoodsMostProfitableStories.csv";

export const Dashboard = () => {
  const [data, setData] = useState(null);
  const [dataSet, setDataSet] = useState(null);
  const [genres, setGenres] = useState([]);
  const [studios, setStudios] = useState([]);
  const [filters, setFilters] = useState({
    Genre: "All",
    "Lead Studio": "All",
  });

  useEffect(() => {
    csv(csvUrl).then((data) => {
      setData(data);
      setDataSet(data);
      setGenres(["All", ...new Set(data.map((d) => d.Genre))]);
      setStudios(["All", ...new Set(data.map((d) => d["Lead Studio"]))]);
    });
  }, []);

  if (!data) {
    return <pre>'loading...'</pre>;
  }

  const handleChange = (event, column) => {
    // Must implement recursion
    filters[column] = event.target.value;
    if (event.target.value == "All") {
      setDataSet(data);
    } else {
      let filteredData = data.filter((d) => {
        if (d[column] == event.target.value) {
          return d;
        }
      });
      setDataSet(filteredData);
      setFilters(filters);
    }
  };

  return (
    <>
      <Dropdown
        label={"Genre"}
        options={genres}
        value={filters["Genre"]}
        onChange={(event) => handleChange(event, "Genre")}
      />
      <Dropdown
        label={"Studio"}
        options={studios}
        value={filters["Lead Studio"]}
        onChange={(event) => handleChange(event, "Lead Studio")}
      />
      <ProfitabilityByGenre dataSet={dataSet} />
    </>
  );
};
