import React from "react";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import ProductDetail from "./productDetail";

const ProductDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productSelected = products.find((element) => element.id === +id);
    const tarea = new Promise((resolve, reject) => {
      resolve(productSelected);
    });

    tarea.then((res) => setItem(res));
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
        backgroundColor: "rgb(85,139,6,0.3)",
        marginTop: "3rem",
      }}
    >
      <ProductDetail product={item} />
    </div>
  );
};

export default ProductDetailContainer;
