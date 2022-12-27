import {CartContext, CartDispatchContext} from "./cart.context";
import {useEffect, useReducer} from "react";
import {cartReducer, initialState} from "./cart.reducer";

export const CartProvider = ({children}) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};
