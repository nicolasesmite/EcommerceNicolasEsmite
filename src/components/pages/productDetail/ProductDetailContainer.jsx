import React from "react";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import ProductDetail from "./productDetail";

const productDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let ProductSelected = products.find((element) => element.id === +id);
    const tarea = new Promise((resolve, reject) => {
      resolve(ProductSelected);
    });

    tarea.then((res) => setProduct(res));
  }, [id]);

  return <ProductDetail product={product} />;
};

export default productDetailContainer;
