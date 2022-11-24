import "./App.css";
import { Provider } from "react-redux";

import Users from "./components/Users";

import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Users />
      </Provider>
    </>
  );
}

export default App;
