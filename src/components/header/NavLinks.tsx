import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="flex items-center space-x-4 ml-auto">
      <a href="#" className="hover:text-purple-500">
        API
      </a>
      <div className="mr-4">
        <Link to="/solucionamos" className="hover:text-purple-500 mr-4">
          Soluciones
        </Link>
      </div>
    </div>
  );
};
export default NavLinks;
