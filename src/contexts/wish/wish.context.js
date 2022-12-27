import {createContext, useContext} from "react";

export const WishContext = createContext({wish: []});
export const WishDispatchContext = createContext();

export function useWish() {
  return useContext(WishContext);
}

export function useWishDispatch() {
  return useContext(WishDispatchContext);
}
