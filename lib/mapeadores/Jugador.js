import Jugador from '../entidades/Jugador.js';
import { devolverPaisJugador } from '../utils.js';
function mapearJugador(datosApiJugador) {
  const {
    username,
    name: nombre,
    title: titulo,
    country: pais,
    followers: seguidores,
    avatar: imagenPerfil,
    url: enlacePerfil
  } = datosApiJugador;
  return new Jugador(username, nombre, titulo, devolverPaisJugador(pais), seguidores, imagenPerfil, enlacePerfil);
}
export default mapearJugador;