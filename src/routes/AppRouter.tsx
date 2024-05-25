import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LoginForm from "../components/login/login";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>} />
    </Routes>
  );
};

export default AppRouter;
