import {WishContext, WishDispatchContext} from "./wish.context";
import {useEffect, useReducer} from "react";
import {wishlistReducer, initialState} from "./wish.reducer";

export const WishProvider = ({children}) => {
  const [wish, dispatch] = useReducer(wishlistReducer, initialState);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wish));
  }, [wish]);
  return (
    <WishContext.Provider value={wish}>
      <WishDispatchContext.Provider value={dispatch}>
        {children}
      </WishDispatchContext.Provider>
    </WishContext.Provider>
  );
};
