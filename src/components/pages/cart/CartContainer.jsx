import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
              <div key={product.id}>
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
          <div>
            {Swal.fire({
              showConfirmButton: false,
              imageUrl:
                "https://res.cloudinary.com/dxb4thu1x/image/upload/v1690685850/image_content_32105305_20181027153110_fou1mi.jpg",
              imageWidth: 400,
              title: "Parece que aun no hay productos en el carrito",
              footer: '<a href="/">Continuar comprando</a>',
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default CartContainer;
