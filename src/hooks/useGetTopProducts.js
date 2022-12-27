import {useState, useEffect} from "react";

export const useGetTopProductsHook = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch(
        `${process.env.REACT_APP_JSON_SERVER_URL}/products?_sort=rating&_order=desc&_limit=8`
      );
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return [products, loading];
};
