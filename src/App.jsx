import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Hero from "./components/Principal/Hero";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Registrar from "./Registrar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />}>
          
          <Route path="registrar" element={<Registrar />} />
      
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
