/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/// <reference types="jest" />
import * as api from '../servicios/fetchApi.js';
import * as storage from '../storage.js';
import { URL_PERFIL_JUGADOR } from '../../config.js';

jest.mock('../servicios/fetchApi.js');
jest.mock('../storage.js');

beforeEach(() => {
  jest.clearAllMocks();
});

test('traerJugador de API devuelve un objeto', async () => {
  const username = 'test';
  api.traerDatosJugador.mockResolvedValue({});

  const resultado = await api.traerDatosJugador(URL_PERFIL_JUGADOR, username);

  expect(api.traerDatosJugador).toHaveBeenCalledWith(URL_PERFIL_JUGADOR, username);
  expect(storage.traerJugador).not.toHaveBeenCalled();
});
