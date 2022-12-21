import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Home from "./pages/Principal/Home";
import Registrar from "./Registrar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="registrar" element={<Registrar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
