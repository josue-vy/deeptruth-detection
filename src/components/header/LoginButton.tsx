import React from "react";

const LoginButton = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-transparent border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black"
      >
        Iniciar Sesión
      </button>
    </div>
  );
};

export default LoginButton;