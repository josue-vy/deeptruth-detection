import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Resultado from '../components/resultado/resultado';

describe('Resultado Component', () => {
  beforeEach(() => {
    jest.spyOn(global.localStorage.__proto__, 'getItem').mockImplementation((key) => {
      switch (key) {
        case 'fileName':
          return 'test-image.jpg';
        case 'fileUrl':
          return 'http://localhost/test-image.jpg';
        case 'uploadTime':
          return '2024-11-02 14:00:00';
        case 'label':
          return 'real';
        case 'probability':
          return '0.85';
        default:
          return null;
      }
    });
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restaurar mocks después de cada prueba
  });

  test('Debe mostrar los datos de archivo y resultados de autenticidad', () => {
    render(
      <MemoryRouter>
        <Resultado />
      </MemoryRouter>
    );

    expect(screen.getByText(/Análisis de Autenticidad:/i)).toBeInTheDocument();

    const authenticityTexts = screen.getAllByText(/Se ha determinado que este contenido tiene una alta probabilidad de ser/i);
    expect(authenticityTexts).toHaveLength(2);

    expect(authenticityTexts[0]).toHaveTextContent("REAL");
    expect(authenticityTexts[0]).toHaveTextContent("0.85");
    expect(authenticityTexts[1]).toHaveTextContent("FAKE");
    expect(authenticityTexts[1]).toHaveTextContent("0.15");
  });
});
