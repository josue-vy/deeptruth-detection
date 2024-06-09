import React from 'react';

const Solucionamos = () => {
  return (
    
    <div>
      <main className="flex-grow max-w-4xl mx-auto p-6 space-y-8">
        {/* Introducción a los Problemas que Abordamos */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-500 border-b-2 border-green-300 pb-2">Introducción a los Problemas que Abordamos</h2>
          <p className="text-lg text-white leading-relaxed">
            Los deepfakes representan una amenaza creciente en el mundo digital. Pueden ser utilizados para difundir desinformación, comprometer la seguridad personal y erosionar la confianza en los medios de comunicación. Estos problemas no solo afectan a individuos, sino también a organizaciones y gobiernos.
          </p>
        </section>

        {/* Nuestra Solución */}
        <section className="space-y-4">
        <h2 className="text-3xl font-bold text-purple-500 border-b-2 border-green-300 pb-2">Nuestra Solución</h2>
          <p className="text-lg text-white leading-relaxed">
            Nuestra tecnología de detección avanzada utiliza técnicas de aprendizaje automático y análisis de video para identificar deepfakes con alta precisión y eficiencia. Nuestro sistema se actualiza continuamente para mantenerse al día con las nuevas técnicas de creación de deepfakes, asegurando así una detección confiable.
          </p>
        </section>

        {/* Beneficios de Nuestro Sistema */}
        <section className="space-y-4">
        <h2 className="text-3xl font-bold text-purple-500 border-b-2 border-green-300 pb-2">Beneficios de Nuestro Sistema</h2>
          <ul className="list-disc pl-5 text-lg text-white leading-relaxed">
            <li className="mb-2"><strong>Protección de Individuos y Organizaciones:</strong> Protegemos a nuestros usuarios de los efectos negativos de los deepfakes.</li>
            <li className="mb-2"><strong>Verificación de Contenidos:</strong> Ayudamos a verificar la autenticidad de los contenidos, beneficiando a periodistas, investigadores y plataformas de redes sociales.</li>
            <li className="mb-2"><strong>Concienciación y Educación:</strong> Educamos al público sobre los riesgos de los deepfakes y la importancia de verificar la información.</li>
          </ul>
        </section>

        {/* Casos de Uso */}
        <section className="space-y-4">
        <h2 className="text-3xl font-bold text-purple-500 border-b-2 border-green-300 pb-2">Casos de Uso</h2>
          <ul className="list-disc pl-5 text-lg text-white leading-relaxed">
            <li className="mb-2"><strong>Medios de Comunicación:</strong> Validamos videos para asegurar reportajes veraces.</li>
            <li className="mb-2"><strong>Empresas y Corporaciones:</strong> Protegemos la identidad de los empleados y prevenimos fraudes.</li>
            <li className="mb-2"><strong>Gobiernos y ONGs:</strong> Combatimos la desinformación y protegemos a los ciudadanos.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Solucionamos;
