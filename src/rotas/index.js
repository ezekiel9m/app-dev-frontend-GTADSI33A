import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Cadastrar from "../pages/cadastrar";

// Configuração de rotas
const RoutersApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/cadastrar/" element={<Cadastrar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersApp;
