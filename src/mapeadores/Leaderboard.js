import Leaderboard from '../entidades/Leaderboard.js';
import mapearJugadorEnLeaderboard from './JugadorEnLeaderboard.js';

/* eslint-disable no-restricted-syntax */
function mapearLeaderboard(tipoLeaderboard, datosApiLeaderboard) {
  const datosLeaderboard = datosApiLeaderboard[tipoLeaderboard];
  console.log('datosLeaderboard:', datosLeaderboard);

  return new Leaderboard(
    tipoLeaderboard,
    datosLeaderboard.map((datosJugador) => (
      mapearJugadorEnLeaderboard(datosJugador))),
  );
}

export default mapearLeaderboard;
