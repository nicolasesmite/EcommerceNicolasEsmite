import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  /*useEffect(() => {
    let data = axios.get("http://localhost:5000/products");

    data.then((res) => setProducts(res.data));
  }, []);*/

  useEffect(() => {
    setItems(products);
  });

  return <ItemList products={items} />;
}

export default ItemListContainer;
