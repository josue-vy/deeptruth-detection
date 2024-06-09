import React from 'react';

const DocumentacionApi = () => {
  return (
    
    <div>
      <main className="flex-grow max-w-4xl mx-auto p-6 space-y-8">
        <h2 className="text-5xl font-bold text-white text-center">DeepTruth Developer</h2>
        <p className="text-lg text-white leading-relaxed">
        Bienvenido a la API de Deeptruth Developer, su solución integral para la detección de deepfakes y la autenticación de contenido multimedia.
          </p>
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-500 border-b-2 border-green-300 pb-2">Características Principales</h2>
          <ul className="list-disc text-lg pl-6 space-y-4 text-white">
          <li>
            <span className="font-bold">Detección de Deepfakes:</span> Utiliza algoritmos de aprendizaje profundo para identificar manipulaciones en videos y fotos con alta precisión.
          </li>
          <li>
            <span className="font-bold">Análisis en Tiempo Real:</span> Proceso y análisis de contenido multimedia en tiempo real para una respuesta rápida y efectiva.
          </li>
          <li>
            <span className="font-bold">Escalabilidad:</span> Diseñada para manejar grandes volúmenes de datos, perfecta para aplicaciones desde pequeñas startups hasta grandes corporaciones.
          </li>
          <li>
            <span className="font-bold">Fácil Integración:</span> API RESTful con documentación detallada y ejemplos de código para una integración sencilla en sus sistemas existentes.
          </li>
          <li>
            <span className="font-bold">Soporte Multiplataforma:</span> Compatible con una amplia gama de formatos de archivos y dispositivos.
          </li>
        </ul>
        </section>
        <section className="space-y-4">
        <h2 className="text-3xl font-bold text-purple-500 border-b-2 border-green-300 pb-2">Cómo Funciona</h2>
        <ul className="list-disc text-lg text-white pl-6 space-y-4">
          <li>
            <span className="font-bold">Sube tu Archivo:</span> Envíe su imagen o video a través de nuestra API.
          </li>
          <li>
            <span className="font-bold">Análisis Automático:</span> Nuestro sistema analiza el contenido utilizando redes neuronales convolucionales avanzadas.
          </li>
          <li>
            <span className="font-bold">Resultados Instantáneos:</span> Reciba un informe detallado indicando la autenticidad del contenido y las posibles manipulaciones detectadas.
          </li>
        </ul>
        </section>
      </main>
    </div>
  );
};

export default DocumentacionApi;
