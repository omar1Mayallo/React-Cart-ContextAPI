import React from "react";
import {NavLink} from "react-router-dom";
import {FaShoppingCart, FaHeart} from "react-icons/fa";
import {StyledNavList} from "./navIcons.styled";
import {useGetCartInfo} from "../../hooks/useGetCartInfo";
import {useWish} from "../../contexts/wish/wish.context";

const NavIcons = ({ulClass}) => {
  const [totalQty] = useGetCartInfo();
  const wish = useWish();
  return (
    <StyledNavList className={`navbar-nav ${ulClass}`}>
      <li className="nav-item ico">
        <NavLink
          as="div"
          className="nav-link"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <FaShoppingCart />
          <span className="item-num">{totalQty}</span>
        </NavLink>
      </li>
      <li className="nav-item ico">
        <NavLink className="nav-link" to={"/wish"}>
          <FaHeart />
          <span className="item-num">{wish.length}</span>
        </NavLink>
      </li>
    </StyledNavList>
  );
};

export default NavIcons;
