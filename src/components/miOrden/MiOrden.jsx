import React, { useState } from "react";
import { db } from "../../firebaseConfig";
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
    <div>
      {order ? (
        <div style={{ marginTop: "150px" }}>
          <h1>{order.id}</h1>
          <h2>{order.buyer.name}</h2>
          <h3>{order.estado}</h3>
          <h3>{order.total}</h3>
        </div>
      ) : (
        <div style={{ marginTop: "150px" }}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="ingrese el numero de orden"
              onChange={handleChange}
            ></input>
            <button type="submit">Consultar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MiOrden;
