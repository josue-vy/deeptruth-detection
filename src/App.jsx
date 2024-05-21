import React, { useState, useEffect } from 'react';
// import  Stars from '../src/utils/animatedTwo';
import './index.css';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="src/assets/deeptruthlogo.png" alt="" className="w-60 h-auto"/>
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <a href="#" className="hover:text-purple-500">API</a>
        <div className="mr-4">
          <a href="#" className="hover:text-purple-500 mr-4">Soluciones</a>
        </div>
      </div>
      <div>
        <button className="bg-transparent border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black">
          Iniciar Sesión
        </button>
      </div>
    </header>
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
      {/* <Stars /> */}
      {/* <CanvasSketch /> */}
    </div>
  );
};

export default App;
