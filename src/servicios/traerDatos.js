import * as api from './fetchApi.js';
import * as storage from '../storage.js';
import * as config from '../../config.js';
import mapearJugador from '../mapeadores/Jugador.js';
import mapearLeaderboard from '../mapeadores/Leaderboard.js';

export async function traerJugador(username) {
  let jugador;

  try {
    storage.traerJugador(username);
  } catch (e) {
    jugador = api.traerDatosJugador(config.URL_PERFIL_JUGADOR, username);
    mapearJugador(jugador);
    storage.guardarDatos(username, jugador);
  }

  return jugador;
}

// // datosJugador = await api.traerDatosJugador(config.URL_PERFIL_JUGADOR, username);
//   guardarEnLocalStorage(`${username}`, datosJugador);

export async function traerLeaderboard(tipoLeaderboard) {
  let leaderboard;
  try {
    storage.traerLeaderboard(tipoLeaderboard);
  } catch (e) {
    const todosLosLeaderboards = api.traerLeaderboards(config.URL_LEADERBOARD);
    leaderboard = mapearLeaderboard(tipoLeaderboard, todosLosLeaderboards);
    storage.guardarDatos(tipoLeaderboard, leaderboard);
  }

  return leaderboard;
}
//   todosLosLeaderboards = await api.traerLeaderboards(config.URL_LEADERBOARD);
//   guardarEnLocalStorage('leaderboards', todosLosLeaderboards);
