// src/login/Login.tsx
import React from 'react';
import { signInWithGoogle } from '../login/firebaseConfig';

const LoginForm = ({ onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-black text-white p-8 rounded-lg shadow-lg max-w-md w-full border border-white">
          <button onClick={onClose} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
          <h2 className="text-2xl mb-4 text-center border-b-2 border-white pb-2">INICIAR SESION</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">Correo</label>
              <input
                className="w-full p-2 rounded border border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                type="email"
                id="email"
                placeholder="Correo"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="password">Contraseña</label>
              <input
                className="w-full p-2 rounded border border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                type="password"
                id="password"
                placeholder="Contraseña"
              />
            </div>
            <button className="w-full p-2 bg-green-500 hover:bg-green-600 rounded text-white mb-4">Iniciar Sesion</button>
          </form>
          <button
            onClick={signInWithGoogle}
            className="w-full p-2 bg-red-500 hover:bg-red-600 rounded text-white flex items-center justify-center"
          >
            Iniciar Sesión con Google
          </button>
        </div>
      </div>
    );
};

export default LoginForm;
