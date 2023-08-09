import Leaderboard from '../entidades/Leaderboard.js';
import mapearJugadorEnLeaderboard from './JugadorEnLeaderboard.js';

/* eslint-disable no-restricted-syntax */
function mapearLeaderboard(tipoLeaderboard, datosLeaderboard) {
  return new Leaderboard(
    tipoLeaderboard,
    datosLeaderboard.map((datosJugador) => (
      mapearJugadorEnLeaderboard(datosJugador))),
  );
}

export default mapearLeaderboard;
