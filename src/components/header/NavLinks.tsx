import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../login/firebaseConfig"; // Importa el objeto `auth` desde tu archivo firebaseConfig

const NavLinks = () => {
  const [isAdmin, setIsAdmin] = useState(false); // Estado para indicar si el usuario actual es administrador

  useEffect(() => {
    // Función para verificar si el usuario actual es administrador
    const checkAdminStatus = () => {
      const user = auth.currentUser; // Obtén el usuario actual
      if (user && user.email === "admin@gmail.com") {
        // Si el usuario actual está autenticado y su correo es admin@gmail.com
        setIsAdmin(true); // Establece isAdmin como true
      } else {
        setIsAdmin(false); // Establece isAdmin como false
      }
    };

    // Llama a la función de verificación al cargar el componente y cada vez que el estado de autenticación cambie
    checkAdminStatus();
    const unsubscribe = auth.onAuthStateChanged(checkAdminStatus);

    // Limpia el efecto cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex items-center space-x-4 ml-auto">
      {isAdmin && ( // Mostrar el enlace solo si el usuario es administrador
        <Link to="/gestionarUsuarios" className="hover:text-purple-500 mr-4">
          Gestionar Usuarios
        </Link>
      )}
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
