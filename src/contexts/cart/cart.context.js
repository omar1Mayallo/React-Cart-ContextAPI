import {createContext, useContext} from "react";

export const CartContext = createContext({cart: []});
export const CartDispatchContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}
