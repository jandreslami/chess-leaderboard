import JugadorEnLeaderboard from '../entidades/JugadorEnLeaderboard';
import mapearJugador from './Jugador';

function mapearJugadorEnLeaderboard(datosApiJugadorEnLeaderboard) {
  const jugador = mapearJugador(datosApiJugadorEnLeaderboard);

  const {
    score: rating,
    win_count: partidasGanadas,
    loss_count: partidasPerdidas,
    draw_count: partidasTablas,
  } = datosApiJugadorEnLeaderboard;

  return new JugadorEnLeaderboard(
    jugador.username,
    jugador.nombre,
    jugador.titulo,
    jugador.seguidores,
    jugador.imagenPerfil,
    jugador.pais,
    rating,
    partidasGanadas,
    partidasPerdidas,
    partidasTablas,
  );
}

export default mapearJugadorEnLeaderboard;
