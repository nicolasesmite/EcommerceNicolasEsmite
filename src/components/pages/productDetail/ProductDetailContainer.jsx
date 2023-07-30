import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./productDetail";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ProductDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setItem({ ...res.data(), id: res.id });
    });
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
