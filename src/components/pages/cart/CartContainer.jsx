import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  return cart.map((product) => {
    return (
      <div
        style={{
          margin: "2vh",
          minWidth: "90%",
          backgroundColor: "rgb(85,139,6,0.3)",
        }}
      >
        <Cart cartProduct={product} key={product.id} />
      </div>
    );
  });
};

export default CartContainer;
