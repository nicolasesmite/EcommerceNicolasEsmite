import React from "react";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import ProductDetail from "./productDetail";

const productDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let ProductSelected = products.find((element) => element.id === +id);
    const tarea = new Promise((resolve, reject) => {
      resolve(ProductSelected);
    });

    tarea.then((res) => setItem(res));
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        marginLeft: "5px",
      }}
    >
      <ProductDetail product={item} />
    </div>
  );
};

export default productDetailContainer;
