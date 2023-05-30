import * as api from './api.js';
import * as config from '../config.js';

export function guardarEnLocalStorage(key, datos) {
  if (!localStorage.getItem(`${key}`)) {
    localStorage.setItem(`${key}`, JSON.stringify(datos));
  }
}

export async function traerLeaderboards() {
  let todosLosLeaderboards = localStorage.getItem('leaderboards');

  if (todosLosLeaderboards) {
    return JSON.parse(todosLosLeaderboards);
  }

  todosLosLeaderboards = await api.traerLeaderboards(config.URL_LEADERBOARD);
  guardarEnLocalStorage('leaderboards', todosLosLeaderboards);
  return todosLosLeaderboards;
}

export async function traerJugador(username) {
  let datosJugador = localStorage.getItem(username);

  if (datosJugador) {
    return JSON.parse(datosJugador);
  }

  datosJugador = await api.traerDatosJugador(config.URL_PERFIL_JUGADOR, username);
  guardarEnLocalStorage(`${username}`, datosJugador);
  return datosJugador;
}
