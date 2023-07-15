import CartContainer from "../components/pages/cart/cartContainer";
import ProductDetailContainer from "../components/pages/productDetail/productDetailContainer";
import ItemListContainer from "../components/pages/products/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "categoryName",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "productDetail",
    path: "/ProductDetail/:id",
    Element: ProductDetailContainer,
  },
];
