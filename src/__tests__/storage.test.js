/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/// <reference types="jest" />
import { traerJugador } from '../servicios/traerDatos.js';
import * as api from '../servicios/fetchApi.js';
import * as storage from '../storage.js';

jest.mock('../servicios/fetchApi.js');
jest.mock('../storage.js');

beforeEach(() => {
  jest.clearAllMocks();
});

test('traerJugador de storage devuelve un objeto si existe', async () => {
  storage.traerJugador.mockResolvedValue({});

  // Call the function
  const username = 'test';
  const resultado = traerJugador(username);

  expect(storage.traerJugador).toHaveBeenCalledWith(username);
  expect(api.traerDatosJugador).not.toHaveBeenCalled();
});
