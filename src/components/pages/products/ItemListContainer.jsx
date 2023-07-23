import React, { useContext } from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    let productFiltered = products.filter(
      (element) => element.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName === undefined ? products : productFiltered);
    });

    tarea.then((res) => setItems(res));
  }, [categoryName]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "50px",
        gap: "25px",
        justifyContent: "center",
        backgroundColor: "rgb(85,139,6,0.3)",
        marginTop: "2rem",
      }}
    >
      <ItemList products={items} addToCart={addToCart} />
    </div>
  );
}

export default ItemListContainer;
