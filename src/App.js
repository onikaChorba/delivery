import "./App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Shop from "./sections/Shop/Shop";
import ShopingCards from "./sections/ShopingCards/ShopingCards";
import { Header } from "../src/components/Header/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shoppingCards" element={<ShopingCards />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
