/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import * as config from '../config.js';
import * as ui from './ui.js';
import { traerJugador, traerLeaderboard } from './servicios/traerDatos.js';

async function actualizarPerfil() {
  ui.limpiarPerfil();
  ui.mostrarCargando();

  const jugador = await traerJugador(ui.obtenerJugadorSeleccionado());

  ui.ocultarCargando();
  ui.popularPerfil(jugador);
}

async function inicializar() {
  const leaderboard = await traerLeaderboard(config.LEADERBOARD_POR_DEFECTO);

  ui.crearLeaderboard(leaderboard, actualizarPerfil);
  ui.crearTiposLeaderboard(leaderboard, actualizarPerfil);
}

inicializar();
