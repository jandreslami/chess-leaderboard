/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
import * as api from './fetchApi.js';
import * as storage from '../storage.js';
import * as config from '../../config.js';
import mapearJugador from '../mapeadores/Jugador.js';
import mapearLeaderboard from '../mapeadores/Leaderboard.js';

export async function traerJugador(username) {
  let jugador;

  if (storage.traerJugador(username)) {
    jugador = storage.traerJugador(username);
  } else {
    jugador = await api.traerDatosJugador(config.URL_PERFIL_JUGADOR, username);
    mapearJugador(jugador);
    storage.guardarDatos(username, jugador);
  }

  return jugador;
}

export async function traerLeaderboard(tipoLeaderboard) {
  let leaderboard = await storage.traerLeaderboard(tipoLeaderboard);

  if (leaderboard != null) {
    return leaderboard;
  }
  const datosTodosLosLeaderboards = await api.traerLeaderboards(config.URL_LEADERBOARD);
  const datosLeaderboardATraer = datosTodosLosLeaderboards[tipoLeaderboard];
  leaderboard = mapearLeaderboard(tipoLeaderboard, datosLeaderboardATraer);
  storage.guardarDatos(tipoLeaderboard, leaderboard);

  return leaderboard;
}

export async function traerListadoLeaderboards() {
  const listadoLeaderboards = await storage.traerListadoLeaderboards();

  if (listadoLeaderboards != null) {
    return listadoLeaderboards;
  }
  const datosTodosLosLeaderboards = await api.traerLeaderboards(config.URL_LEADERBOARD);

  const arrayListadoLeaderboards = [];
  for (let key in datosTodosLosLeaderboards) {
    arrayListadoLeaderboards.push(key);
  }
  storage.guardarDatos('listadoLeaderboards', arrayListadoLeaderboards);
  return listadoLeaderboards;
}
