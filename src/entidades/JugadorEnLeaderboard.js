import Jugador from './Jugador';

class JugadorEnLeaderboard extends Jugador {
  constructor(
    username,
    nombre,
    titulo,
    seguidores,
    imagenPerfil,
    pais,
    rating,
    partidasGanadas = 0,
    partidasPerdidas = 0,
    partidasTablas = 0,
  ) {
    super(username, nombre, titulo, seguidores, imagenPerfil, pais);

    this.rating = rating;
    this.partidasGanadas = partidasGanadas;
    this.partidasPerdidas = partidasPerdidas;
    this.partidasTablas = partidasTablas;
  }
}

export default JugadorEnLeaderboard;
