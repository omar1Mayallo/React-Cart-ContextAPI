import React from "react";
import Alert from "../../components/Alert";
import ProductItem from "../../components/ProductItem";
import SectionContainer from "../../components/SectionContainer";
import {handleClearWishlist} from "../../contexts/wish/wish.actions";
import {useWish, useWishDispatch} from "../../contexts/wish/wish.context";

const Wish = () => {
  const wish = useWish();
  const dispatch = useWishDispatch();
  return (
    <SectionContainer secClassName={"wish-section"} withMargin>
      <div className="row">
        {wish.length === 0 ? (
          <Alert message={"Wishlist Is Empty"} />
        ) : (
          <>
            {wish?.map((item) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                <ProductItem product={item} />
              </div>
            ))}
            <div className="mt-4 text-center">
              <button
                className="btn btn-danger"
                onClick={() => dispatch(handleClearWishlist(wish))}
              >
                Clear Wishlist
              </button>
            </div>
          </>
        )}
      </div>
    </SectionContainer>
  );
};

export default Wish;
