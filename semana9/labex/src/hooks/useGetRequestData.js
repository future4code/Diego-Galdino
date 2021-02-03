import { useState, useEffect } from "react";
import axios from "axios";

export function useGetRequestData(url, initialState) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        console.log("url",url, "initialState",initialState, res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return data;
}