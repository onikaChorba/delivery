import "./App.scss";
import Shops from "./components/Shops/Shops";
import { Header } from "../src/components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./store/index";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Shops />
      </div>
    </Provider>
  );
}

export default App;
