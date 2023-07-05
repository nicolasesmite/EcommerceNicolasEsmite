import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error));
  }, []);

  return <ItemList products={items} />;
}

export default ItemListContainer;
