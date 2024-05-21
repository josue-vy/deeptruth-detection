// import React, { useEffect } from 'react';
// import './index.css'; // asegúrate de tener este archivo CSS con las reglas de estilo

// const CanvasSketch = () => {
//   useEffect(() => {
//     const canvas = document.getElementById('myCanvas');
//     const ctx = canvas.getContext('2d');

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height); // limpiar el canvas en cada actualización

//       ctx.fillStyle = 'rgba(150, 150, 150, 1)'; // color gris para los cuadrados
//       for (let i = 0; i < 14000; i++) {
//         ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2); // dibujar cuadrado en posición aleatoria
//       }
//     };

//     const updateCanvasSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     updateCanvasSize(); // establecer el tamaño inicial del canvas

//     window.addEventListener('resize', updateCanvasSize); // actualizar el tamaño del canvas cuando cambie el tamaño de la ventana

//     const animationFrameId = requestAnimationFrame(draw); // iniciar el bucle de dibujo

//     return () => {
//       cancelAnimationFrame(animationFrameId); // detener el bucle de dibujo cuando el componente se desmonte
//       window.removeEventListener('resize', updateCanvasSize); // limpiar el listener de evento
//     };
//   }, []); // se ejecuta solo una vez al montar el componente

//   return <canvas id="myCanvas" className="bg-mask" />;
// };

// export default CanvasSketch;