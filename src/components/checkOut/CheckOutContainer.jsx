import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
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
    <div style={{ marginTop: "150px" }}>
      <h1>Finalizar compra</h1>

      {orderId ? (
        <div>
          <h3>Gracias por preferirnos</h3>
          <h4>Su numero de comprar es: {orderId}</h4>
          <h3>
            Puede consultar el estado de su compra en la seccion "Mi orden"
          </h3>
          <Link to="/">Volver a comprar</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su telefono"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Ingrese su email"
            name="email"
            onChange={handleChange}
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};

export default CheckOutContainer;
