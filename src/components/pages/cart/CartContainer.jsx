import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div style={{ marginBottom: "10rem" }}>
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
        <div
          style={{
            position: "fixed",
            width: "100%",
            backgroundColor: "red",
            bottom: "0",
            height: "10rem",
          }}
        >
          Hola
        </div>
      </div>
    </>
  );
};

export default CartContainer;
