import "./App.scss";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Shops from "./components/Shops/Shops";
import { Header } from "../src/components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./store/index";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Router> */}
        <div>
          <Header />
          <Shops />
          {/* <Routes>
              <Route path="/" element={<Shops />} />
            </Routes> */}
        </div>
        {/* </Router> */}
      </div>
    </Provider>
  );
}

export default App;
