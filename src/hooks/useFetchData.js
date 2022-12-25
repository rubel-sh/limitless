import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (endpoint) => {
  const [productsArray, setProductsArray] = useState([]);
  const url = import.meta.env.VITE_API + "/" + endpoint;
  console.log(endpoint);
  // Fetch Products Data
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(url);
      setProductsArray(data.data);
    };
    fetchData();
  }, [endpoint]);

  return productsArray;
};

export default useFetchData;
