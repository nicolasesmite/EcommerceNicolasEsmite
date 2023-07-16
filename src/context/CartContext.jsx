import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState();

  const addToCart = () => {
    console.log("hola");
  };

  const clearCart = () => {};

  let data = { addToCart, clearCart };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
