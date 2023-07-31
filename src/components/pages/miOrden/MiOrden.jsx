import React, { useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const MiOrden = () => {
  const [value, setValue] = useState();
  const [order, setOrder] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    let orderCollection = collection(db, "orders");
    let orderRef = doc(orderCollection, value);
    getDoc(orderRef).then((res) => {
      setOrder({ ...res.data(), id: res.id });
    });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div
      style={{
        margin: "100px 0 50px 25px",
        width: order ? "300px" : "300px",
        backgroundColor: "rgb(17, 186, 0)",
        height: order ? "300px" : "350px",
        padding: "20px",
      }}
    >
      {order ? (
        <div>
          <h4 style={{ height: "30px", width: "100%", margin: "15px" }}>
            Numero de orden: {order.id}
          </h4>
          <h3 style={{ height: "30px", width: "100%", margin: "15px" }}>
            Comprador: <br></br>
            {order.buyer.name}
          </h3>
          <h3 style={{ height: "30px", width: "100%", margin: "15px" }}>
            Estado de pedido: <br></br>
            {order.estado}
          </h3>
          <h3 style={{ height: "30px", width: "100%", margin: "15px" }}>
            Total de compra :${order.total}
          </h3>
        </div>
      ) : (
        <div style={{ marginTop: "150px" }}>
          <form onSubmit={handleSubmit}>
            <input
              style={{ height: "30px", width: "100%", margin: "5px" }}
              type="text"
              placeholder="ingrese el numero de orden"
              onChange={handleChange}
            ></input>
            <button
              type="submit"
              style={{ height: "30px", width: "100%", margin: "5px" }}
            >
              Consultar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MiOrden;
