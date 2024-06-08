import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/deeptruthlogo.png';
interface LogoProps {
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-4 ${className || ''}`}>  {/* Aplicar las clases adicionales */}
      <Link to="/">
        <img src={logo} alt="DeepTruth Logo" className="w-60 h-auto" />
      </Link>
    </div>
  );
};

export default Logo;