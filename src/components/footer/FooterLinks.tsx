import React from "react";
const FooterLinks = () => {
    return (
      <nav className="mt-2">
        <ul className="flex justify-end space-x-4 text-xs text-gray-400">
          <li><a href="#" className="hover:text-white">Política de privacidad</a></li>
          <li><a href="#" className="hover:text-white">Términos de servicio</a></li>
          <li><a href="#" className="hover:text-white">Notas de lanzamiento</a></li>
        </ul>
      </nav>
    );
  };
export default FooterLinks;