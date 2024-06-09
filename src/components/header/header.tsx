import React from 'react';
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { signOut } from '../login/firebaseConfig'; // Importa la función de cerrar sesión

const Header = ({ isLoggedIn, setIsLoggedIn, onLoginClick }) => {
  const handleLogout = async () => {
    await signOut();
    setIsLoggedIn(false); // Actualiza el estado de autenticación
  };

  return (
    <header className="bg-black text-white flex justify-between items-center sticky top-0 z-10 border-b border-gray-600">
      <Logo />
      <NavLinks />
      {isLoggedIn ? (
        <button onClick={handleLogout} className="bg-transparent border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition duration-300">
          Cerrar Sesión
        </button>
      ) : (
        <LoginButton onClick={onLoginClick} text="Iniciar Sesión" />
      )}
    </header>
  );
};

export default Header;
