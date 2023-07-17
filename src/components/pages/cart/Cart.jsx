import React from "react";

const Cart = ({ cartProduct }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5%",
      }}
    >
      <img src={cartProduct.img} style={{ width: "10vh" }} />
      <p>{cartProduct.name}</p>
      <p>${cartProduct.price}</p>
      <p>Cantidad solicitada {cartProduct.quantity}</p>
      <div>
        <button>Add another</button>
        <button>Delete article</button>
      </div>
    </div>
  );
};

export default Cart;
