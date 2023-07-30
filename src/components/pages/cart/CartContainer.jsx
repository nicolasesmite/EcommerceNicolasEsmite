import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, getTotal } = useContext(CartContext);
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
        {cart.length > 0 ? (
          <div
            style={{
              position: "fixed",
              width: "100%",
              backgroundColor: "whitesmoke",
              bottom: "0",
              height: "10rem",
            }}
          >
            <h1>Total de la compra ${getTotal()}</h1>
            <div style={{ width: "" }}>
              <Link to={"/checkOut"}>
                <button>Finalizar compra</button>
              </Link>

              <Link to={"/"}>
                <button>Seguir Comprando</button>
              </Link>

              <button onClick={clearCart}>Vaciar carrito</button>
            </div>
          </div>
        ) : (
          <div>Sweet alert de carrito vacio</div>
        )}
      </div>
    </>
  );
};

export default CartContainer;
