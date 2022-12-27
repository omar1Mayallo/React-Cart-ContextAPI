import {useState, useEffect} from "react";

export const useGetShopHook = () => {
  const [shop, setShop] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch(
        `${process.env.REACT_APP_JSON_SERVER_URL}/products?name_like=${searchQuery}&_sort=${sortBy}`
      );
      const data = await res.json();
      setShop(data);
      setLoading(false);
    }
    fetchData();
  }, [searchQuery, sortBy]);

  //SEARCH
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  //SORT
  const handleSortChange = (e) => {
    if (e.target.value === "Default sort") {
      setSortBy("");
    }
    if (e.target.value === "Price high to low") {
      setSortBy("price&_order=desc");
    }
    if (e.target.value === "Price low to high") {
      setSortBy("price&_order=asc");
    }
    if (e.target.value === "Rating high to low") {
      setSortBy("rating&_order=desc");
    }
    if (e.target.value === "Rating low to high") {
      setSortBy("rating&_order=asc");
    }
    if (e.target.value === "Name alphabetical") {
      setSortBy("name&_order=asc");
    }
  };

  return [shop, loading, handleSearch, handleSortChange];
};
