/* eslint-disable no-constructor-return */

class Jugador {
  constructor(
    username,
    nombre,
    titulo,
    pais,
    seguidores = undefined,
    imagenPerfil = undefined,
    enlacePerfil = undefined,
  ) {
    // Singleton pattern comentado
    // if (Jugador.instance) {
    //   return Jugador.instance;
    // }

    this.username = username;
    this.nombre = nombre;
    this.titulo = titulo;
    this.pais = pais;
    this.seguidores = seguidores;
    this.imagenPerfil = imagenPerfil;
    this.enlacePerfil = enlacePerfil;
    // Jugador.instance = this;
  }
}

export default Jugador;
