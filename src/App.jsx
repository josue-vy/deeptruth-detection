import React, { useState, useEffect } from 'react';
// import  Stars from '../src/utils/animatedTwo';
import Login from './components/login/login';
import Header from './components/header/header';
import Footer from './components/footer/Footer';
import './index.css';
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



const AnimatedText = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500); // 500ms delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const text = "Combate la desinformación con nuestra avanzada solución de detección de deepfakes, garantizando la autenticidad de cada archivo multimedia.";

  return (
    <div className="m-40 text-white text-center" style={{fontSize: "50px" }}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="letter"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <AnimatedText />
      <DropAndBox/>
      <Footer />
      {/* <Stars /> */}
      {/* <CanvasSketch /> */}
    </div>
  );
};

export default App;
