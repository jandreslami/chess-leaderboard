/* eslint-disable no-constructor-return */

class Jugador {
  constructor(username, nombre, titulo, pais, seguidores = undefined, imagenPerfil = undefined) {
    if (Jugador.instance) {
      return Jugador.instance;
    }

    this.username = username;
    this.nombre = nombre;
    this.titulo = titulo;
    this.pais = pais;
    this.seguidores = seguidores;
    this.imagenPerfil = imagenPerfil;
    Jugador.instance = this;
  }
}

export default Jugador;
