import NavBar from "./components/pages/home/NavBar/NavBar";
import ItemListContainer from "./components/pages/home/NavBar/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="Bienvenidos, en esta seccion se mostraran los productos" />
    </>
  );
}

export default App;
