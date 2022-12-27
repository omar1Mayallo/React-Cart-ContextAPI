//AddToCart & Increase quantity
export const addToCart = (product, cart) => {
  const itemExistInCart = cart?.find((item) => item.id === product.id);
  if (!itemExistInCart) {
    return [...cart, {...product, quantity: 1}];
  } else {
    return cart.map((item) => {
      if (item.id === product.id) {
        return {...item, quantity: item.quantity + 1};
      } else {
        return item;
      }
    });
  }
};

//Delete cart item
export const deleteCartItem = (cart, productId) =>
  cart.filter((item) => item.id !== productId);

//removeFromCart & decrease quantity
export const removeFromCart = (productId, cart) => {
  const itemExistInCart = cart?.find((item) => item.id === productId);
  if (itemExistInCart?.quantity === 1) {
    return deleteCartItem(cart, productId);
  } else if (!itemExistInCart) {
    return;
  } else {
    return cart.map((item) => {
      if (item.id === productId) {
        return {...item, quantity: item.quantity - 1};
      } else {
        return item;
      }
    });
  }
};

export const clearCart = (cart) => {
  if (cart.length <= 0) {
    return;
  } else {
    return [];
  }
};
