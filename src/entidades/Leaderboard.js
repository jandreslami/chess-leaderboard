/* eslint-disable no-restricted-syntax */
class Leaderboard {
  constructor(tipo, rankingJugadoresEnLeaderboard) {
    this.tipo = tipo;
    this.rankingJugadoresEnLeaderboard = rankingJugadoresEnLeaderboard;
    this.esConPuntaje = this.esConPuntaje();
  }

  esConPuntaje() {
    if (this.rankingJugadoresEnLeaderboard[0].partidasGanadas === 0) {
      return true;
    } return false;
  }
}

export default Leaderboard;
