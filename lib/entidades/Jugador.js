/* eslint-disable no-constructor-return */

class Jugador {
  constructor(username, nombre, titulo, pais, seguidores = undefined, imagenPerfil = undefined, enlacePerfil = undefined) {
    this.username = username;
    this.nombre = nombre;
    this.titulo = titulo;
    this.pais = pais;
    this.seguidores = seguidores;
    this.imagenPerfil = imagenPerfil;
    this.enlacePerfil = enlacePerfil;
  }
}
export default Jugador;