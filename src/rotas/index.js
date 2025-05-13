import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Cadastrar from "../pages/cadastrar";
import Home from '../pages/home';

// Configuração de rotas
const RoutersApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/cadastrar/" element={<Cadastrar />} />
        <Route path="/home/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersApp;
