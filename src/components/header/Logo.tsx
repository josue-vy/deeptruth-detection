import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
    return (
      <div className="flex items-center space-x-4">
        <Link to="/">
        <img src="src/assets/deeptruthlogo.png" alt="DeepTruth Logo" className="w-60 h-auto" />
        </Link>
      </div>
    );
  };

export default Logo;