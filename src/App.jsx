import NavBar from "./components/layout/NavBar/NavBar";
import ItemListContainer from "./components/pages/products/ItemListContainer";

function App() {
  return (
    <NavBar>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "50px",
          gap: "15px",
          justifyContent: "center",
          backgroundColor: "rgb(85,139,6,0.3)",
        }}
      >
        <ItemListContainer />
      </div>
    </NavBar>
  );
}

export default App;
