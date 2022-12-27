import {useState, useEffect} from "react";

export const useGetProductDetailsHook = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch(
        `${process.env.REACT_APP_JSON_SERVER_URL}/products/${id}`
      );
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  return [product, loading];
};
