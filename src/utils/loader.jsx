import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = ({ progress }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-50">
      <div className="text-center">
        <HashLoader className='text-center' color="#8A2BE2	" loading={true} size={80} />
        <p className="text-white mt-4">Cargando...</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4 mx-auto">
          <div
            className="bg-violet-800 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
