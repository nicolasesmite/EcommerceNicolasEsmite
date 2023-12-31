import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContain";
import ItemListContainer from "../components/pages/products/ItemListContainer";
import CheckOutContainer from "../components/pages/checkOut/CheckOutContainer";
import MiOrden from "../components/pages/miOrden/MiOrden";
import CartContainer from "../components/pages/cart/CartContain";

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
  {
    id: "checkOut",
    path: "/checkOut",
    Element: CheckOutContainer,
  },
  {
    id: "miOrden",
    path: "/miOrden",
    Element: MiOrden,
  },
];
