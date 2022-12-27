import {useState, useEffect} from "react";
import {useCart} from "../contexts/cart/cart.context";

export const useGetCartInfo = () => {
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useCart();

  useEffect(() => {
    // QTY
    const handleCartTotalQty = () => {
      const qty = cart.reduce((acc, item) => {
        return acc + Math.ceil(item.quantity);
      }, 0);
      setTotalQty(qty);
    };
    handleCartTotalQty();
    // Price
    const handleCartTotalPrice = () => {
      const price = cart.reduce((acc, item) => {
        return acc + (Math.ceil(item.price) || 0) * item.quantity;
      }, 0);
      setTotalPrice(price);
    };
    handleCartTotalPrice();
  }, [cart]);

  return [totalQty, totalPrice, cart];
};
