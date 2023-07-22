import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = isInCart(product.id);

    if (exist) {
      let cartArray = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        } else {
          return cartProduct;
        }
      });

      setCart(cartArray);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => {};

  const isInCart = (id) => {
    let exist = cart.some((product) => product.id === id);
    return exist;
  };

  let data = { cart, addToCart, clearCart };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
