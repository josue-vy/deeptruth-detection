import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500); // 500ms delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const text =
    "Combate la desinformación con nuestra avanzada solución  de detección de deepfakes, garantizando la autenticidad de cada archivo multimedia.";

  return (
    <div className="font-bold my-20 mx-20 text-white text-center text-4x2 md:text-5xl lg:text-7x1">
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

export default AnimatedText;
