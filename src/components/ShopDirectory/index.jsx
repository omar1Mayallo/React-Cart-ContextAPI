import React from "react";
import Alert from "../Alert";
import ProductItem from "../ProductItem";
import Spinner from "../Spinner";

const ShopDirectory = ({products, loading}) => {
  return (
    <div className="row">
      {loading ? (
        <div className="my-5 text-center">
          <Spinner />
        </div>
      ) : (
        <>
          {products?.length > 0 ? (
            products?.map((item) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                <ProductItem product={item} />
              </div>
            ))
          ) : (
            <Alert message={"No Product Found !"} />
          )}
        </>
      )}
    </div>
  );
};

export default ShopDirectory;
