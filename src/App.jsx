import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import { IndexLayout } from "./layouts/IndexLayout";
import Login from "./pages/Login";
import Home from "./pages/Principal/Home";
import Registrar from "./Registrar";
import About from "./pages/About";
import FormularioC from "./pages/FormularioC";
import PoliticasdePrivacidad from "./pages/PoliticasdePrivacidad";
import Servicios from "./pages/Servicios";
import Pricing from "./components/Pricing";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IndexLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="formularioC" element={<FormularioC />} />
          <Route path="politicasdeprivacidad" element={<PoliticasdePrivacidad />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="error" element={<Error />} /> 
          

              
        </Route>
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
