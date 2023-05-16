/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import * as config from '../config.js';
import * as api from './api.js';
import * as ui from './ui.js';

/* Inicializar(
  traerDatos(),
  iniciarUI(),
  traerDatos(),

) */

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
  ui.crearLeaderboard(todosLosLeaderboards, config.LEADERBOARD_POR_DEFECTO, actualizarPerfil);
  ui.crearTiposLeaderboard(todosLosLeaderboards, actualizarPerfil);
}

inicializar();
