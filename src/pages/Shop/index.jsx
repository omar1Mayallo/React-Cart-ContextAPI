import React from "react";
import SearchBar from "../../components/SearchBar";
import SectionContainer from "../../components/SectionContainer";
import ShopDirectory from "../../components/ShopDirectory";
import SortBar from "../../components/SortBar";
import {useGetShopHook} from "../../hooks/useGetShop";

const Shop = () => {
  const [shop, loading, handleSearch, handleSortChange] = useGetShopHook();
  return (
    <SectionContainer secClassName={"shop-section"} withMargin>
      <SearchBar handleSearch={handleSearch} />
      <div className="my-5">
        <SortBar handleSortChange={handleSortChange} results={shop.length} />
      </div>
      <ShopDirectory products={shop} loading={loading} />
    </SectionContainer>
  );
};

export default Shop;
