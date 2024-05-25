import React, { useState } from 'react';

const DropAndBox = () => {
    const [dragging, setDragging] = useState(false);
  
    const handleDragEnter = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragging(true);
    };
  
    const handleDragLeave = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragging(false);
    };
  
    const handleDragOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragging(false);
      const files = [...e.dataTransfer.files];
      // Handle dropped files here
      console.log(files);
    };
  
    return (
      <div
        className={`border-2 border-dashed border-gray-400 rounded-lg p-8 text-center ${
          dragging ? "bg-gray-100" : "bg-white"
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <p className="text-lg font-semibold mb-4">Arrastra y suelta archivos aquí</p>
        <p className="text-gray-500">o</p>
        <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700">
          Seleccionar archivos
        </button>
      </div>
    );
  };
  
  export default DropAndBox;