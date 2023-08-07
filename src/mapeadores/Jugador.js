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
  } = datosApiJugador;

  return new Jugador(
    username,
    nombre,
    titulo,
    seguidores,
    imagenPerfil,
    devolverPaisJugador(pais),
  );
}

export default mapearJugador;
