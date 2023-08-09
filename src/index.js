/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import * as config from '../config.js';
import * as ui from './ui.js';
import mapearJugador from './mapeadores/Jugador.js';
import { traerJugador, traerLeaderboard } from './servicios/traerDatos.js';

async function actualizarPerfil() {
  ui.limpiarPerfil();
  ui.mostrarCargando();

  const jugador = await
  traerJugador(ui.obtenerJugadorSeleccionado());
  console.log('Jugador:', jugador);

  ui.ocultarCargando();
  ui.popularPerfil(jugador);

  const objetoJugador = mapearJugador(jugador);
  console.log('objetoJugador:', objetoJugador);
}

async function inicializar() {
  const leaderboard = await traerLeaderboard(config.LEADERBOARD_POR_DEFECTO);

  ui.crearLeaderboard(leaderboard, actualizarPerfil);
  ui.crearTiposLeaderboard(leaderboard, actualizarPerfil);
}

inicializar();
