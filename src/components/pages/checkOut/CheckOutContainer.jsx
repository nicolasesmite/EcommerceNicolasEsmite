import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

import { Link } from "react-router-dom";

const CheckOutContainer = () => {
  const [orderId, setOrderId] = useState("");

  const { cart, getTotal, clearCart } = useContext(CartContext);

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  let total = getTotal();

  const handleSubmit = (evento) => {
    evento.preventDefault();
    let order = {
      buyer: data,
      items: cart,
      total,
      estado: "En preparacion",
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });

    clearCart();
  };

  const handleChange = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });
  };

  return (
    <div
      style={{
        margin: "100px 0 50px 25px",
        width: "300px",
        backgroundColor: "rgb(17, 186, 0)",
        height: orderId ? "300px" : "350px",
        padding: "20px",
      }}
    >
      {orderId ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <h2>Detalles de su compra</h2>
          <div style={{ marginTop: "15px" }}>
            <h4>Su numero de comprar es: {orderId}</h4>
            <h3>
              Puede consultar el estado de su compra en la seccion "Mi orden"
            </h3>
            <Link to="/">
              <button style={{ width: "150px" }}>Volver a comprar</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h1 style={{ margin: "10px" }}>Finalizar compra</h1>
          <div
            style={{
              margin: "10px",
              padding: "5px",
              display: "flex",
              gap: "5px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <input
                style={{ height: "30px", width: "100%", margin: "1px" }}
                type="text"
                placeholder="Ingrese su nombre"
                name="name"
                onChange={handleChange}
              />
              <input
                style={{ height: "30px", width: "100%", margin: "1px" }}
                type="text"
                placeholder="Ingrese su telefono"
                name="phone"
                onChange={handleChange}
              />
              <input
                style={{ height: "30px", width: "100%", margin: "1px" }}
                type="email"
                placeholder="Ingrese su email"
                name="email"
                onChange={handleChange}
              />
              <button
                type="submit"
                style={{ height: "30px", width: "100%", margin: "1px" }}
              >
                Comprar
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckOutContainer;
