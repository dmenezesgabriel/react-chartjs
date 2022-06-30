import { rollup, sum } from "d3";

export const profitabilityByGenre = (data) => {
  let profitabilityByGenre = Array.from(
    rollup(
      data,
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

  return {
    labels: profitabilityByGenre.map((d) => d.genre),
    datasets: [
      {
        label: "Profitability",
        data: profitabilityByGenre.map((d) => d.profitability),
      },
    ],
  };
};
