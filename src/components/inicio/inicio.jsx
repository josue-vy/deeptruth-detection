import React from 'react';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.jpg';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='animate-fade-left animate-once animate-delay-[10ms] animate-ease-linear'>
      <section className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between lg:space-x-8  p-6 shadow-lg rounded-lg mb-8 mt-4 ">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-white mb-4 ">¡Detecta <span className="text-purple-500">Deepfakes</span> y Protege tu Seguridad!</h1>
          <p className="text-lg text-white mb-2">
            <strong>¿Tienes un video sospechoso?</strong> Escanéalo con nuestra tecnología avanzada y descubre si ha sido manipulado. 
          </p>
          <p className="text-lg text-white mb-6">
            <strong> No dejes que los deepfakes comprometan tu seguridad</strong> Protégete ahora mismo con nuestras soluciones y mantén tus datos a salvo de las amenazas digitales.
          </p>
          <Link to="/scaner" className="hover:text-purple-500 mr-4" >
          <button className="bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 transition duration-300">IR AL ESCÁNER</button>
          </Link>

        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0 ">
          <img src={banner1} alt="DeepTruth detection" className="rounded-lg shadow-md"/>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between lg:space-x-8 p-6 shadow-lg rounded-lg">
        <div className="lg:w-1/2">
        <img src={banner2} alt="DeepTruth detection" className="w-160 h-96 first-letter:rounded-lg shadow-md"/>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <h2 className="text-3xl font-bold text-white mb-4">¡Alerta! <span className="text-purple-500">Deepfakes</span>: La Nueva Amenaza en la Ciberseguridad</h2>
          <p className="text-lg text-white">
          La ciberseguridad está bajo asedio debido a una amenaza emergente conocida como deepfakes. Estos medios sintéticos generados por IA se han convertido en una de las armas cibernéticas más poderosas y maliciosas. Desde la creación de videos falsos que pueden engañar incluso a los expertos, hasta el uso de audios manipulados para cometer fraudes, los deepfakes representan un desafío sin precedentes para la seguridad digital. Es imperativo que empresas y usuarios se mantengan alertas y adopten medidas avanzadas para detectar y mitigar esta peligrosa tecnología.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
