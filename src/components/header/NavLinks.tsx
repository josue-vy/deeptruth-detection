import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="flex items-center space-x-4 ml-auto">
        <Link to="/gestionarUsuarios" className="hover:text-purple-500 mr-4">
          Gestionar Usuarios
        </Link>
        <Link to="/api" className="hover:text-purple-500 mr-4">
          API
        </Link>
      <div className="mr-4">
        <Link to="/solucionamos" className="hover:text-purple-500 mr-4">
          Soluciones
        </Link>
      </div>
    </div>
  );
};
export default NavLinks;
