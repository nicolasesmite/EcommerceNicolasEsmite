import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const exist = isInCart(product.id);

    if (exist) {
      let cartArray = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity + quantity };
        } else {
          return cartProduct;
        }
      });

      setCart(cartArray);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const deleteAnUnit = (product) => {
    if (product.quantity == 1) {
      let productFiltered = cart.filter((e) => e.name !== product.name);
      setCart(productFiltered);
      /*Agrega sweet alert para indicar que el carrito esta vacio*/
    } else {
      let cartArray = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity - 1 };
        } else {
          return cartProduct;
        }
      });
      setCart(cartArray);
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((product) => product.id === id);
    return exist;
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((element) => {
      total += element.price * element.quantity;
    });
    return total;
  };

  const getQuantityById = (id) => {
    const product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };
  const clearCart = () => {
    setCart([]);
  };
  let data = {
    cart,
    addToCart,
    clearCart,
    deleteAnUnit,
    getTotal,
    getQuantityById,
    clearCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
