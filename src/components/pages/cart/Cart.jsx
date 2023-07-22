import React from "react";

const Cart = ({ cartProduct }) => {
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
        <button style={{ width: "100%", height: "50%" }}>Add another</button>
        <button style={{ width: "100%", height: "50%" }}>Delete article</button>
      </div>
    </div>
  );
};

export default Cart;
