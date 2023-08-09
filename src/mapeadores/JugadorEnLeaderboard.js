import JugadorEnLeaderboard from '../entidades/JugadorEnLeaderboard.js';
import mapearJugador from './Jugador.js';

function mapearJugadorEnLeaderboard(datosApiJugadorEnLeaderboard) {
  const jugador = mapearJugador(datosApiJugadorEnLeaderboard);

  const {
    rank: posicionEnLeaderboard,
    score: rating,
    win_count: partidasGanadas,
    loss_count: partidasPerdidas,
    draw_count: partidasTablas,
  } = datosApiJugadorEnLeaderboard;

  return new JugadorEnLeaderboard(
    jugador.username,
    jugador.nombre,
    jugador.titulo,
    jugador.pais,
    jugador.seguidores,
    jugador.imagenPerfil,
    jugador.enlacePerfil,
    posicionEnLeaderboard,
    rating,
    partidasGanadas,
    partidasPerdidas,
    partidasTablas,
  );
}

export default mapearJugadorEnLeaderboard;
