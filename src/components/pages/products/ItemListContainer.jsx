import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let data = axios.get("http://localhost:5000/products");

    data.then((res) => setProducts(res.data));
  }, []);

  return <ItemList products={products} />;
}

export default ItemListContainer;
