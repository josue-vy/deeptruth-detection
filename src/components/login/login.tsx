import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithGoogle } from '../login/firebaseConfig';

interface LoginFormProps {
  onClose: () => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose, setIsLoggedIn }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
      console.log("Inicio de sesión exitoso");
      setIsLoggedIn(true); // Actualiza el estado de autenticación
      onClose();
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      setIsLoggedIn(true); // Actualiza el estado de autenticación
      onClose();
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-black text-white p-8 rounded-lg shadow-lg max-w-md w-full border border-white">
        <button onClick={onClose} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
        <h2 className="text-2xl mb-4 text-center border-b-2 border-white pb-2">INICIAR SESION</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Correo</label>
            <input
              className="w-full p-2 rounded border border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              type="email"
              id="email"
              placeholder="Correo"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">Contraseña</label>
            <input
              className="w-full p-2 rounded border border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="w-full p-2 bg-green-500 hover:bg-green-600 rounded text-white mb-4">Iniciar Sesión</button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="w-full p-2 bg-red-500 hover:bg-red-600 rounded text-white flex items-center justify-center"
        >
          Iniciar Sesión con Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
