/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import * as config from '../config.js';
import * as ui from './ui.js';
import * as storage from './storage.js';
import Leaderboard from './entidades/Leaderboard.js';
import mapearJugador from './mapeadores/Jugador.js';

async function actualizarPerfil() {
  ui.limpiarPerfil();
  ui.mostrarCargando();

  const datosJugador = await
  storage.traerJugador(ui.obtenerJugadorSeleccionado());

  ui.ocultarCargando();
  ui.popularPerfil(datosJugador);

  let objetoJugador = {};
  objetoJugador = mapearJugador(datosJugador);
  console.log('objetoJugador:', objetoJugador);
}

async function inicializar() {
  const todosLosLeaderboards = await storage.traerLeaderboards();
 
  ui.crearLeaderboard(todosLosLeaderboards, config.LEADERBOARD_POR_DEFECTO, actualizarPerfil);
  ui.crearTiposLeaderboard(todosLosLeaderboards, config.LEADERBOARD_POR_DEFECTO, actualizarPerfil);
}

inicializar();
