import axios from 'axios';

const API_URL = 'http://localhost:3000/backend/';

export const guardarValoracion = async (rating: number, comentario: string): Promise<void> => {
  try {
    const response = await axios.post(`${API_URL}/post-rating`, { rating, comentario });
    console.log('Valoración guardada:', response.data);
  } catch (error) {
    console.error('Error al guardar la valoración:', error);
    throw error;
  }
};

export const obtenerValoraciones = async (): Promise<any[]> => {
  try {
    const response = await axios.get(`${API_URL}/get-rating`);
    console.log('Valoraciones obtenidas:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las valoraciones:', error);
    throw error;
  }
};