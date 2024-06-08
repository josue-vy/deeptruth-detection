import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LoginForm from "../components/login/login";
import Solucionamos from "../components/solucionamos/solucionamos";
import Scaner from "../components/scaner/scaner";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>} />
      <Route path="/solucionamos" element={<Solucionamos />} />
      <Route path="/scaner" element={<Scaner />} />
    </Routes>
  );
};

export default AppRouter;
