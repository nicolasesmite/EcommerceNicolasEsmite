import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = ({ cartProduct }) => {
  const { addToCart, deleteAnUnit } = useContext(CartContext);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={cartProduct.img} style={{ width: "5rem", margin: "1rem" }} />
      <p>{cartProduct.name}</p>
      <p>${cartProduct.price}</p>
      <p>Quantity {cartProduct.quantity}</p>
      <div style={{ gap: "2rem" }}>
        <button
          onClick={() => addToCart(cartProduct, 1)}
          style={{ width: "100%", height: "50%" }}
        >
          Add another
        </button>
        <button
          onClick={() => deleteAnUnit(cartProduct)}
          style={{ width: "100%", height: "50%" }}
        >
          Delete an unit
        </button>
      </div>
    </div>
  );
};

export default Cart;
