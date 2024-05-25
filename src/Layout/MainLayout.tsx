// src/Layout/MainLayout.tsx
import React, { PropsWithChildren, useState } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/Footer';
import AnimatedText from '../utils/AnimatedText';
import DropAndBox from '../utils/DropAndBox';
import LoginForm from '../components/login/login'; // Asegúrate de que esta ruta sea correcta

const MainLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Estado para controlar la visibilidad del login

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <div>
      <Header onLoginClick={handleLoginClick} />
      <main>{children}</main>
      <AnimatedText />
      <DropAndBox />
      <Footer />
      {isLoginOpen && <LoginForm onClose={handleCloseLogin} />} {/* Mostrar LoginForm como modal */}
    </div>
  );
};

export default MainLayout;
