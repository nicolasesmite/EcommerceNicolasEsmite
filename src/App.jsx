import NavBar from "./components/layout/NavBar/NavBar";
import ItemListContainer from "./components/pages/products/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="Bienvenidos, en esta seccion se mostraran los productos" />
    </>
  );
}

export default App;
