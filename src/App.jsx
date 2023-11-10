import "./App.css";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProduDetails from "./Pages/ProduDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:id" element={<ProduDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
