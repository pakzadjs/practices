import "./App.css";
import { Routes, Route } from "react-router-dom";

import Users from "./components/Users";

function App() {
  return (
    // <UsersContextProvider>
    <Routes>
      <Route path="/" element={<Users />} />
    </Routes>
    // </UsersContextProvider>
  );
}

export default App;
