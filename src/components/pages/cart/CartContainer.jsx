import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "5rem",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {cart.map((product) => {
          return (
            <div>
              <Cart cartProduct={product} key={product.id} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartContainer;
