import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import PedidoFinalizado from "./pages/PedidoFinalizado";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/finalizado" element={<PedidoFinalizado />} />
      </Routes>
    </BrowserRouter>
  );
}

