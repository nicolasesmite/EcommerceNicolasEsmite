import { createContext, useState } from "react";
import { products } from "../productsMock";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isInCart = (id) => {
      let exist = cart.some((product) => product.id === id);
      return exist;
    };

    const exist = isInCart(product.id);
    console.log(exist);
    if (exist) {
      let cartArray = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: 1,
          };
        } else {
          return cartProduct;
        }
      });

      setCart(cartArray);
    } else {
      setCart([...cart, product]);
    }

    console.log(cart);
  };

  const clearCart = () => {};

  let data = { addToCart, clearCart };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
