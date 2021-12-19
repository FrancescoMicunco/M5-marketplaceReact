import "./App.css";
import NavBar from "./Components/NavBar";
import Backoffice from "./Components/Backoffice.jsx";
import Body from "./Components/Body";
import Cart from "./Components/Cart";
import DetailsProduct from "./Components/DetailsProduct.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/backoffice" element={<Backoffice />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<DetailsProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
