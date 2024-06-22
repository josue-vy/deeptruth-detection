import React, { useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { consultFace } from '../components/api/deteccion.api';

const DropAndBox = () => {
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [uploadTime, setUploadTime] = useState('');
  const [scanEnabled, setScanEnabled] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [file, setFile] = useState(null); // Nuevo estado para almacenar el archivo

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
    if (files.length > 0) {
      handleFileSelectHelper(files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const files = [...e.target.files];
    if (files.length > 0) {
      handleFileSelectHelper(files[0]);
    }
  };

  const handleFileSelectHelper = (file) => {
    setFileName(file.name);
    const fileObjectUrl = URL.createObjectURL(file);
    setFileUrl(fileObjectUrl);
    const uploadTime = new Date().toLocaleString();
    setUploadTime(uploadTime);
    localStorage.setItem('fileName', file.name);
    localStorage.setItem('fileUrl', fileObjectUrl);
    localStorage.setItem('uploadTime', uploadTime);
    setScanEnabled(true);
    setFile(file); // Almacenar el archivo en el estado
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleScanClick = async () => {
    if (!file) return; // Verificar que haya un archivo seleccionado
    try {
      const response = await consultFace(file); // Pasar el archivo directamente
      localStorage.setItem('label', response.label);
      localStorage.setItem('probability', response.probability);
      navigate('/resultado');
    } catch (error) {
      console.error('Error al escanear la imagen', error);
    }
  };

  return (
    <>
      <div
        className={`border-2 border-dashed mb-8 border-gray-400 rounded-lg p-8 text-center ${
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
      <div className="flex justify-center">
        <button
          className={`mt-4 px-4 py-2 bg-violet-800 text-white rounded-md focus:outline-none focus:bg-gray-700 ${
            !scanEnabled ? 'opacity-50 cursor-not-allowed bg-gray-500' : ''
          }`}
          onClick={handleScanClick}
          disabled={!scanEnabled}
        >
          Escanear
        </button>
      </div>
    </>
  );
};

export default DropAndBox;