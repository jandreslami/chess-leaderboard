import Jugador from './Jugador.js';

class JugadorEnLeaderboard extends Jugador {
  constructor(
    username,
    nombre,
    titulo,
    pais,
    seguidores,
    imagenPerfil,
    enlacePerfil,
    posicionEnLeaderboard,
    rating,
    partidasGanadas = 0,
    partidasPerdidas = 0,
    partidasTablas = 0,
  ) {
    super(username, nombre, titulo, pais, seguidores, imagenPerfil, enlacePerfil);
    this.posicionEnLeaderboard = posicionEnLeaderboard;
    this.rating = rating;
    this.partidasGanadas = partidasGanadas;
    this.partidasPerdidas = partidasPerdidas;
    this.partidasTablas = partidasTablas;
  }
}

export default JugadorEnLeaderboard;
