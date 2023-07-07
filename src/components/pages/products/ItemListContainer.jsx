import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let productFiltered = products.filter(
      (element) => element.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName === undefined ? products : productFiltered);
    });

    console.log(products, productFiltered);

    tarea.then((res) => setItems(res));
  }, [categoryName]);

  return <ItemList products={items} />;
}

export default ItemListContainer;
