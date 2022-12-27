import React from "react";
import {Link} from "react-router-dom";
import Rating from "../../components/Rating";
import SectionContainer from "../../components/SectionContainer";
import Spinner from "../../components/Spinner";
import {useParams} from "react-router-dom";
import {useGetProductDetailsHook} from "../../hooks/useGetProductDetails";
import {useCartDispatch} from "../../contexts/cart/cart.context";

const Product = () => {
  const {id} = useParams();
  const dispatch = useCartDispatch();

  const [product, loading] = useGetProductDetailsHook(id);
  return (
    <SectionContainer secClassName={"product-details-section"} withMargin>
      <Link
        to={"/shop"}
        as={"button"}
        className="mb-3 btn btn-primary"
        style={{background: "var(--re-identity)"}}
      >
        Continue Shopping
      </Link>
      {loading ? (
        <div className="text-center my-5">
          <Spinner />
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <img
              src={product?.imgUrl}
              alt="product-img"
              width="100%"
              height="auto"
            />
          </div>

          <div className="col-lg-7 col-md-6 list-group list-group-flush">
            <div className="list-group-item">
              <h2>{product?.name}</h2>
            </div>
            <div className="list-group-item">
              <span className="lead">${product?.price}</span>
            </div>
            <div className="list-group-item">
              <Rating rating={product?.rating} numOfRev={product?.reviews} />
            </div>
            <div className="list-group-item">{product?.description}</div>
            <div className="list-group-item">
              {product?.qtyInStock ? (
                <form className="d-flex align-items-center justify-content-between">
                  <div className="form-group" style={{minWidth: "120px"}}>
                    <select className="form-select" id="quantity">
                      {[...Array(product?.qtyInStock).keys()].map((i) => (
                        <option key={i}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="btn btn-primary w-100"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({type: "ADD_TO_CART", payload: product});
                    }}
                  >
                    Add To Cart
                  </button>
                </form>
              ) : (
                <button
                  className="btn btn-primary w-100"
                  type="button"
                  disabled
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  );
};

export default Product;
