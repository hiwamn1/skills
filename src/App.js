import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Layout from "./components/layout/Layout";
import { getToken } from "./local-storage/LocalStorage";
import { token } from "./local-storage/KeysLocalStorage";

function App() {
  const userToken = getToken(token);
  return (
    <div className="App">
      <Routes>
        {userToken ? (
          <Route path="/login" element={<Navigate to="/profile" />} />
        ) : (
          <Route path="/login" element={<Login/>} />
        )}
        {userToken ? (
          <Route path="/register" element={<Navigate to="/profile" />} />
        ) : (
          <Route path="/register" element={<Register/>} />
        )}

        <Route path="/*" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
