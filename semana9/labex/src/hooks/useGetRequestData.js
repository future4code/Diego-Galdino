import { useState, useEffect } from "react";
import axios from "axios";

export function useGetRequestData(url, initialState) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
  }, [url]);

  return data;
}