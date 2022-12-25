import axios from "axios";
import { useEffect, useState } from "react";

const useGetProducts = () => {
  const [productsArray, setProductsArray] = useState([]);
  const url = import.meta.env.VITE_API;
  // Fetch Products Data
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`${url}/products`);
      setProductsArray(data.data);
    };
    fetchData();
  }, []);

  return productsArray;
};

export default useGetProducts;
