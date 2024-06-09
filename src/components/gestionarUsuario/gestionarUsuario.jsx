import React from 'react';
import UserCard from '../gestionarUsuario/userCard';

function GestionarUsuario() {
  return (
    <div>
      <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-lg p-6 mt-8">
        <h1 className="text-2xl font-bold mb-6 text-white">GESTIONAR USUARIOS</h1>
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Buscar" 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded mb-6">Buscar</button>
        <div className="space-y-6">
          <UserCard username="Nombre del usuario" rating={3} />
          <UserCard username="Nombre del usuario" rating={4} />
          <UserCard username="Nombre del usuario" rating={5} />
          <UserCard username="Nombre del usuario" rating={6} />
          <UserCard username="Nombre del usuario" rating={7} />
        </div>
      </div>
    </div>
  );
}

export default GestionarUsuario;