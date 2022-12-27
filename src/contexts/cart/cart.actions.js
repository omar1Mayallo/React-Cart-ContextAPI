import {
  ADD_TO_CART,
  CLEAR_CART,
  DELETE_CART_ITEM,
  REMOVE_FROM_CART,
} from "./cart.actions.types";

export const handleAddToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const handleRemoveFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};
export const handleDeleteCartItem = (productId) => {
  return {
    type: DELETE_CART_ITEM,
    payload: productId,
  };
};
export const handleClearCart = (cart) => {
  return {
    type: CLEAR_CART,
    payload: cart,
  };
};
