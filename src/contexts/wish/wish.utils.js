export const addToWishList = (product, wishlist) => {
  const itemExist = wishlist.find((item) => item.id === product.id);
  if (!itemExist) {
    return [...wishlist, product];
  } else {
    return wishlist;
  }
};
export const deleteWishListItem = (productId, wishlist) => {
  const itemExist = wishlist.find((item) => item.id === productId);
  if (itemExist) {
    return wishlist.filter((item) => item.id !== productId);
  } else {
    return wishlist;
  }
};
export const clearWishList = (wishlist) => {
  if (wishlist.length > 0) {
    return [];
  } else {
    return;
  }
};
