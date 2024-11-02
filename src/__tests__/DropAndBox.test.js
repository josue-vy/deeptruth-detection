import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import DropAndBox from '../utils/DropAndBox';
import { consultFace } from '../components/api/deteccion.api';

global.URL.createObjectURL = jest.fn(() => 'mocked-url');

jest.mock('../components/api/deteccion.api', () => ({
  consultFace: jest.fn(),
}));

describe('DropAndBox Component', () => {
  beforeEach(() => {
    localStorage.clear();
    consultFace.mockClear();
  });
  
  test('Debe mostrar error si el archivo tiene un formato no permitido', async () => {
    render(
      <MemoryRouter>
        <DropAndBox />
      </MemoryRouter>
    );

    const fileInput = screen.getByTestId('file-input');
    const file = new File(['dummy content'], 'test-file.pdf', { type: 'application/pdf' });
    fireEvent.change(fileInput, { target: { files: [file] } });

    await waitFor(() => {
      expect(screen.getByText(/solo se permiten archivos de imagen/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /escanear/i })).toBeDisabled();
    });
  });

  test('Debe permitir cargar un archivo permitido y habilitar escaneo', async () => {
    render(
      <MemoryRouter>
        <DropAndBox />
      </MemoryRouter>
    );

    const fileInput = screen.getByTestId('file-input');
    const file = new File(['dummy content'], 'test-image.jpg', { type: 'image/jpeg' });
    fireEvent.change(fileInput, { target: { files: [file] } });

    await waitFor(() => {
      expect(screen.getByText(/archivo seleccionado/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /escanear/i })).not.toBeDisabled();
    });
  });
  test('Debe mostrar el loader y cambiar de progreso durante el escaneo', async () => {

    consultFace.mockResolvedValueOnce({ label: 'face', probability: 0.95 });
  
    render(
      <MemoryRouter>
        <DropAndBox />
      </MemoryRouter>
    );
  
    const fileInput = screen.getByTestId('file-input');
    const file = new File(['dummy content'], 'test-image.jpg', { type: 'image/jpeg' });
    fireEvent.change(fileInput, { target: { files: [file] } });
  
    const scanButton = screen.getByRole('button', { name: /escanear/i });
    fireEvent.click(scanButton);
  
    await waitFor(() => expect(screen.getByText(/Cargando.../i)).toBeInTheDocument());
  });
});
