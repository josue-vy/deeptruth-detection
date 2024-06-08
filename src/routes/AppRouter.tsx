import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LoginForm from "../components/login/login";
import Solucionamos from "../components/solucionamos/solucionamos";
import Scaner from "../components/scaner/scaner";
import Resultado from "../components/resultado/resultado";
import GestionarUsuario from "../components/gestionarUsuario/gestionarUsuario";
import DocumentacionApi from "../components/api/api";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>} />
      <Route path="/solucionamos" element={<Solucionamos />} />
      <Route path="/scaner" element={<Scaner />} />
      <Route path="/resultado" element={<Resultado />} />
      <Route path="/gestionarUsuarios" element={<GestionarUsuario />} />
      <Route path="/api" element={<DocumentacionApi />} />
    </Routes>
  );
};

export default AppRouter;
