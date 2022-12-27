import {
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
  CLEAR_WISHLIST,
} from "./wish.action.types";
import {addToWishList, clearWishList, deleteWishListItem} from "./wish.utils";

export const initialState = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];

export const wishlistReducer = (wishlist = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return addToWishList(action.payload, wishlist);

    case DELETE_FROM_WISHLIST:
      return deleteWishListItem(action.payload, wishlist);

    case CLEAR_WISHLIST:
      return clearWishList(wishlist);

    default:
      return wishlist;
  }
};
