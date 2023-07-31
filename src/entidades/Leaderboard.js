/* eslint-disable no-restricted-syntax */
class Leaderboard {
  constructor(nombre, esConPuntaje, ranking = []) {
    this.nombre = nombre;
    this.ranking = ranking;
    this.esConPuntaje = esConPuntaje;
  }
}

export default Leaderboard;
