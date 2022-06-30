import { BarChart } from "../components/charts/barChart";
import { Dropdown } from "../components/form/dropdown";
import { profitabilityByGenre } from "../utils/calculations/profitabilityByGenre";
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

  const getOptions = (data, columnName) => {
    return ["All", ...new Set(data.map((d) => d[columnName]))];
  };

  useEffect(() => {
    csv(csvUrl).then((data) => {
      setData(data);
      setDataSet(data);
      setGenres(getOptions(data, "Genre"));
      setStudios(getOptions(data, "Lead Studio"));
    });
  }, []);

  if (!data) {
    return <pre>'loading...'</pre>;
  }

  const handleChange = (event, column) => {
    filters[column] = event.target.value;
    let filteredData = data.filter((d) => {
      // all([true, false, true])
      let shouldReturn = Object.keys(filters)
        .map((key) => filters[key].includes(d[key]) || filters[key] == "All")
        .every((element) => element === true);
      if (shouldReturn) {
        return d;
      }
    });
    setDataSet(filteredData);
    setFilters(filters);
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
      <BarChart data={profitabilityByGenre(dataSet)} options={options} />;
    </>
  );
};
