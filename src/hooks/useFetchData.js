import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (endpoint) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const url = import.meta.env.VITE_API + "/" + endpoint;

  // Fetch Products Data
  useEffect(() => {
    setIsFetching(true);
    const fetchData = async () => {
      const data = await axios.get(url);
      setFetchedData(data.data);
      setIsFetching(false);
    };
    fetchData();
  }, [endpoint]);

  return [fetchedData, isFetching];
};

export default useFetchData;
