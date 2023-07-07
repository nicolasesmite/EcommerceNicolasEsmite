import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/products/ItemListContainer";
import NotFound from "./components/pages/notFound/NotFound";
import CartContainer from "./components/pages/cart/cartContainer";
import Layout from "./components/layout/Layout";
import ProductDetailContainer from "./components/pages/productDetail/productDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route
            path="/ProductDetail/:id"
            element={<ProductDetailContainer />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
