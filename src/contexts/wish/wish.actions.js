import {
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
  CLEAR_WISHLIST,
} from "./wish.action.types";

export const handleAddToWishlist = (product) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product,
  };
};

export const handleDeleteWishlist = (productId) => {
  return {
    type: DELETE_FROM_WISHLIST,
    payload: productId,
  };
};
export const handleClearWishlist = (wish) => {
  return {
    type: CLEAR_WISHLIST,
    payload: wish,
  };
};
