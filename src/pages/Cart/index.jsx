import React from "react";
import SectionContainer from "../../components/SectionContainer";
import CartTable from "./CartTable";

const Cart = () => {
  return (
    <SectionContainer secClassName={"cart-section"} withMargin>
      <CartTable />
    </SectionContainer>
  );
};

export default Cart;
