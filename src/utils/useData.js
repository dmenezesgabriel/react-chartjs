import { useState, useEffect } from "react";
import { csv } from "d3";

export const useData = (csvUrl) => {
  const [data, setData] = useState(null);
  // useEffect will make request run only once,
  // without it will generate an infinity loop of
  // requests
  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);
  return data;
};
