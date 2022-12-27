import {Routes, Route} from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Wish from "./pages/Wish";
import CartSidebar from "./components/CartSidebar";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <CartSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop">
            <Route index element={<Shop />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wish" element={<Wish />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
