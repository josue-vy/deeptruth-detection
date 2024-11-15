import React, { useEffect, useState } from 'react';
import UserCard from '../gestionarUsuario/userCard';
import { obtenerValoraciones } from '../api/valoracion.api';
import { Bar } from 'react-chartjs-2';

function GestionarUsuario() {
  const [valoraciones, setValoraciones] = useState([]);
  const [mostrarGrafico, setMostrarGrafico] = useState(false);
  const [ratingsData, setRatingsData] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const fetchValoraciones = async () => {
      try {
        const data = await obtenerValoraciones();
        setValoraciones(data);

        const ratingsCount = [0, 0, 0, 0, 0];
        data.forEach((valoracion) => {
          const rating = valoracion.rating;
          if (rating >= 1 && rating <= 5) {
            ratingsCount[rating - 1] += 1;
          }
        });

        setRatingsData(ratingsCount);
      } catch (error) {
        console.error('Error al obtener las valoraciones:', error);
      }
    };

    fetchValoraciones();
  }, []);

  const data = {
    labels: ['1 Estrella', '2 Estrellas', '3 Estrellas', '4 Estrellas', '5 Estrellas'],
    datasets: [
      {
        label: 'Cantidad de valoraciones',
        data: ratingsData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 2,
        borderRadius: 5,
        barPercentage: 0.7,
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#FFFFFF',
          font: {
            size: 14,
            family: 'Roboto, sans-serif',
            weight: 'bold',
          },
          padding: 15,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 12 },
        padding: 10,
        boxPadding: 5,
        cornerRadius: 8,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cantidad de valoraciones',
          color: '#FFFFFF',
          font: {
            size: 16,
            family: 'Roboto, sans-serif',
            weight: 'bold',
          },
        },
        ticks: {
          color: '#FFFFFF',
          font: { size: 12 },
          stepSize: 1,
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Calificación',
          color: '#FFFFFF',
          font: {
            size: 16,
            family: 'Roboto, sans-serif',
            weight: 'bold',
          },
        },
        ticks: {
          color: '#FFFFFF',
          font: { size: 12 },
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
      },
    },
  };

  return (
    // Cambiamos el contenedor principal a max-w-7xl para más ancho
    <div className="flex max-w-7xl mx-auto mt-8 px-4">
      {/* Aumentamos el ancho de la columna de comentarios a w-3/5 */}
      <div className="w-3/5 bg-gray-900 rounded-lg shadow-lg p-6 mr-6">
        <h1 className="text-2xl font-bold mb-6 text-white">GESTIONAR USUARIOS</h1>
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Buscar" 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded mb-6 hover:bg-purple-700 transition-colors"
          onClick={() => setMostrarGrafico(true)}
        >
          Generar gráfico
        </button>
        <div className="space-y-6">
          {valoraciones.map((valoracion) => (
            <UserCard
              key={valoracion.id}
              username={`Usuario ${valoracion.id}`}
              rating={valoracion.rating}
              comentario={valoracion.comentario}
            />
          ))}
        </div>
      </div>

      {/* Aumentamos el ancho de la columna del gráfico a w-2/5 */}
      {mostrarGrafico && (
        <div className="w-2/5 bg-gray-900 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-bold mb-4 text-center">Distribución de Calificaciones</h2>
          <Bar data={data} options={options} />
        </div>
      )}
    </div>
  );
}

export default GestionarUsuario;