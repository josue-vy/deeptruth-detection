import React, { useState, useRef } from 'react';

const DropAndBox = () => {
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

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
    if (files.length > 0) {
      setFileName(files[0].name);
    }
    console.log(files);
  };

  const handleFileSelect = (e) => {
    const files = [...e.target.files];
    // Handle selected files here
    if (files.length > 0) {
      setFileName(files[0].name);
    }
    console.log(files);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={`border-2 border-dashed border-gray-400 rounded-lg p-8 text-center ${
        dragging ? 'bg-gray-100' : 'bg-white'
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p className="text-lg font-semibold mb-4">Arrastra y suelta archivos aquí</p>
      <p className="text-gray-500">o</p>
      <button
        className="mt-4 px-4 py-2 bg-violet-800 text-white rounded-md focus:outline-none focus:bg-gray-700"
        onClick={handleButtonClick}
      >
        Cargar archivos
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileSelect}
        multiple
      />
      {fileName && (
        <div className="mt-4">
          <p className="text-gray-700">Archivo seleccionado: {fileName}</p>
        </div>
      )}
    </div>
  );
};

export default DropAndBox;
