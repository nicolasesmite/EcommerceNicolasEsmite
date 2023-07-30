import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, getTotal } = useContext(CartContext);
  return (
    <>
      <div style={{ marginBottom: "10rem", marginTop: "100px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
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
              height: "15%",
            }}
          >
            <h2 style={{ marginLeft: "20px" }}>
              Total de la compra ${getTotal()}
            </h2>
            <div
              style={{
                width: "100%",
                display: "flex",
                margin: "10px",
                gap: "5px",
              }}
            >
              <Link to={"/checkOut"}>
                <button style={{ width: "100px", height: "100%" }}>
                  Finalizar compra
                </button>
              </Link>

              <button
                style={{ width: "100px", height: "50px" }}
                onClick={clearCart}
              >
                Vaciar carrito
              </button>

              <Link to={"/"}>
                <button style={{ width: "100px", height: "100%" }}>
                  Seguir Comprando
                </button>
              </Link>
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
