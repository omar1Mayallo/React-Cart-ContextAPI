import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
//Styles
import "bootswatch/dist/lux/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import {CartProvider} from "./contexts/cart/cart.provider";
import {WishProvider} from "./contexts/wish/wish.provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <WishProvider>
          <App />
        </WishProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);
