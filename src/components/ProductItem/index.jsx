import React from "react";
import Rating from "../Rating";
import {StyledProductItem} from "./productItem.styled";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {useCartDispatch} from "../../contexts/cart/cart.context";
import {handleAddToCart} from "../../contexts/cart/cart.actions";
import {useWish, useWishDispatch} from "../../contexts/wish/wish.context";
import {
  handleAddToWishlist,
  handleDeleteWishlist,
} from "../../contexts/wish/wish.actions";

const ProductItem = ({product}) => {
  const {id, imgUrl, name, price, rating, reviews} = product;
  const wish = useWish();
  const navigate = useNavigate();
  const dispatch = useCartDispatch();
  const wishDispatch = useWishDispatch();

  const productExistInsideWish = wish.find((item) => item.id === id)
    ? true
    : false;
  return (
    <StyledProductItem className="bg-light mx-auto my-2 p-3">
      <div className="img-box text-center mb-3">
        <div className="img-overlay" />
        <div className="img-icons">
          <div
            className="icoEl-box"
            onClick={() => dispatch(handleAddToCart(product))}
          >
            <AiOutlineShoppingCart />
          </div>
          {productExistInsideWish ? (
            <div
              className="icoEl-box added-to-wishlist"
              onClick={() => wishDispatch(handleDeleteWishlist(id))}
            >
              <AiFillHeart />
            </div>
          ) : (
            <div
              className="icoEl-box"
              onClick={() => wishDispatch(handleAddToWishlist(product))}
            >
              <AiOutlineHeart />
            </div>
          )}
        </div>
        <img src={imgUrl} alt="product-img" />
      </div>
      <div className="rating-box my-2">
        <Rating rating={rating} numOfRev={reviews} />
      </div>
      <h3 className="product-name" onClick={() => navigate(`/shop/${id}`)}>
        {name}
      </h3>
      <div className="price-box">
        <span className="text-muted">${price}</span>
      </div>
    </StyledProductItem>
  );
};

export default ProductItem;
