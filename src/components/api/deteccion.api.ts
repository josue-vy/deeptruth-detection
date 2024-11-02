import axios from 'axios';

const API_URL = 'http://localhost:8000/api/face/consult';

export const consultFace = async (file: File): Promise<{ label: string, probability: number }> => {
    const formData = new FormData();
    formData.append('imagen', file);

    const response = await axios.post(API_URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return response.data;
};
