import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import LoginForm from "../components/login/login";
import Solucionamos from "../components/solucionamos/solucionamos";
import Scaner from "../components/scaner/scaner";
import Resultado from "../components/resultado/resultado";
import GestionarUsuario from "../components/gestionarUsuario/gestionarUsuario";
import DocumentacionApi from "../components/api/api";
import Home from "../components/inicio/inicio";
import { auth } from "../components/login/firebaseConfig";
import Footer from "../components/footer/Footer";
import Header from "../components/header/header";

const AppRouter: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const checkAuthStatus = () => {
    const user = auth.currentUser;
    setIsLoggedIn(!!user);
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onLoginClick={handleLoginClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solucionamos" element={<Solucionamos />} />
        <Route path="/scaner" element={<Scaner />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="/gestionarUsuarios" element={<GestionarUsuario />} />
        <Route path="/api" element={<DocumentacionApi />} />
      </Routes>
      <Footer />
      {isLoginOpen && <LoginForm onClose={handleCloseLogin} setIsLoggedIn={setIsLoggedIn} />}
    </>
  );
};

export default AppRouter;
