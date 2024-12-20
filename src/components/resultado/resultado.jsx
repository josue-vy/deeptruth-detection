import React, { useState, useEffect } from "react";
import { guardarValoracion } from "../api/valoracion.api";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { useNavigate } from 'react-router-dom'; 

Chart.register(...registerables);

const StarRating = ({
  rating,
  hoverRating,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        const fillColor =
          (hoverRating || rating) > i ? "text-yellow-400" : "text-gray-400";
        return (
          <svg
            key={i}
            className={`w-8 h-10 fill-current cursor-pointer transition-transform transform hover:scale-110 ${fillColor}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onMouseEnter={() => onMouseEnter(i + 1)}
            onMouseLeave={onMouseLeave}
            onClick={() => onClick(i + 1)}
          >
            <path d="M12 .587l3.668 10.828h11.332l-9.167 6.671 3.667 10.828-9.167-6.671-9.167 6.671 3.667-10.828-9.167-6.671h11.332z" />
          </svg>
        );
      })}
    </div>
  );
};

const Modal = ({ isOpen, onClose, rating }) => {
  const [comentario, setComentario] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Estado para el mensaje de éxito
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await guardarValoracion(rating, comentario);
      setSuccessMessage("¡Comentario enviado correctamente!"); // Mostrar el mensaje de éxito
      setComentario(""); // Limpiar el campo del comentario después de enviarlo
      setTimeout(() => {
        setSuccessMessage(""); // Limpiar el mensaje después de unos segundos
        onClose(); // Cerrar el modal automáticamente después de 2 segundos
        navigate("/scaner");
      }, 4000); // Temporizador de 2 segundos
    } catch (error) {
      console.error("Error al enviar la valoración:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-black text-white rounded-lg p-6 w-full max-w-sm relative shadow-lg text-center">
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg mb-4 font-semibold">
          Gracias por tu calificación
        </h2>
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-6 h-10 fill-current ${
                i < rating ? "text-yellow-400" : "text-gray-400"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 10.828h11.332l-9.167 6.671 3.667 10.828-9.167-6.671-9.167 6.671 3.667-10.828-9.167-6.671h11.332z" />
            </svg>
          ))}
        </div>
        <textarea
          className="w-full p-2 mb-4 bg-gray-100 text-black rounded border border-gray-300 focus:ring-2 focus:ring-purple-500"
          placeholder="Comenta..."
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        ></textarea>
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          onClick={handleSubmit}
        >
          Enviar
        </button>
        {successMessage && (
          <div className="mt-4 text-green-500">
            <p>{successMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Resultado = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [uploadTime, setUploadTime] = useState("");
  const [label, setLabel] = useState("");
  const [probability, setProbability] = useState(0);

  useEffect(() => {
    setFileName(localStorage.getItem("fileName"));
    setFileUrl(localStorage.getItem("fileUrl"));
    setUploadTime(localStorage.getItem("uploadTime"));
    setLabel(localStorage.getItem("label"));
    setProbability(parseFloat(localStorage.getItem("probability")));
  }, []);

  const handleStarClick = (newRating) => {
    setRating(newRating);
    setIsModalOpen(true);
  };

  const complementaryLabel = label === "real" ? "fake" : "real";
  const complementaryProbability = 1 - probability;

  const data = {
    labels: [label, complementaryLabel],
    datasets: [
      {
        label: 'probabilidad',
        data: [probability, complementaryProbability],
        backgroundColor: ['rgba(50 205 50)', 'rgba(138 43 226)'],
        hoverBackgroundColor: ['rgba(152 251 152)', 'rgba(147 112 219)'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Resultado',
        color: '#FFFFFF',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#FFFFFF',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#FFFFFF',
        },
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center flex-grow">
        {fileUrl && (
          <div className="bg-gray-900 text-white rounded-lg p-6 mb-6 w-full shadow-md flex items-center mt-6">
            <div className="flex-shrink-0">
              <h2 className="text-lg mb-4 font-semibold">Archivo Subido:</h2>
              {fileName.endsWith(".mp4") ? (
                <video className="w-full max-w-md" controls>
                  <source src={fileUrl} type="video/mp4" />
                  Tu navegador no soporta la reproducción de videos.
                </video>
              ) : (
                <img
                  src={fileUrl}
                  alt="Uploaded file"
                  className="w-full max-w-md"
                />
              )}
            </div>
            <div className="ml-4 flex-1">
              <p className="text-gray-400">Nombre del archivo:</p>
              <p className="text-white font-bold">{fileName}</p>
              <p className="text-gray-400">Hora de envio:</p>
              <p className="text-white font-bold">{uploadTime}</p>
            </div>
            <div className="mr-48 w-104 h-60 border border-white rounded-lg p-4">
              <Bar data={data} options={options} />
            </div>
          </div>
        )}
        <div className="bg-gray-900 text-white rounded-lg p-6 mb-6 w-full shadow-md">
          <h2 className="text-lg mb-4 font-semibold">
            Análisis de Autenticidad:
          </h2>
          <p className="mb-2">
            Se ha determinado que este contenido tiene una alta probabilidad de
            ser{" "}
            <span className="font-bold text-green-500">
              {label.toUpperCase()}
            </span>{" "}
            con una probabilidad de:{" "}
            <span className="font-bold">{probability}</span>
          </p>
          <p>
            Se ha determinado que este contenido tiene una alta probabilidad de
            ser{" "}
            <span className="font-bold text-purple-500">
              {complementaryLabel.toUpperCase()}
            </span>{" "}
            con una probabilidad de:{" "}
            <span className="font-bold">{complementaryProbability}</span>
          </p>
        </div>
        <div className="bg-gray-900 text-white rounded-lg p-6 mb-6 w-full shadow-md">
          <h2 className="text-lg mb-4 font-semibold">Califica el Resultado:</h2>
          <p className="text-sm mb-4">
            ¡Tu opinión es crucial para mejorar la precisión del sistema!
          </p>
          <StarRating
            rating={rating}
            hoverRating={hoverRating}
            onMouseEnter={(index) => setHoverRating(index)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={handleStarClick}
          />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        rating={rating}
      />
    </div>
  );
};

export default Resultado;
