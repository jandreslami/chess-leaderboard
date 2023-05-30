/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import * as config from '../config.js';
import * as api from './api.js';
import * as ui from './ui.js';
import * as storage from './storage.js';

async function actualizarPerfil() {
  ui.limpiarPerfil();
  ui.mostrarCargando();

  const datosJugador = await
  api.traerDatosJugador(config.URL_PERFIL_JUGADOR, ui.obtenerJugadorSeleccionado());

  ui.ocultarCargando();
  ui.popularPerfil(datosJugador);
}

async function inicializar() {
  const todosLosLeaderboards = await api.traerLeaderboards(config.URL_LEADERBOARD);
  const todosLosLeaderboards = await storage.traerLeaderboards();

  ui.crearLeaderboard(todosLosLeaderboards, config.LEADERBOARD_POR_DEFECTO, actualizarPerfil);
  ui.crearTiposLeaderboard(todosLosLeaderboards, actualizarPerfil);
}

inicializar();
