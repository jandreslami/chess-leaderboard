/* eslint-disable consistent-return */
/* eslint-disable no-console */
export async function traerLeaderboards(urlLeaderboards) {
  try {
    const respuesta = await fetch(urlLeaderboards);
    const datos = respuesta.json();
    return datos;
  } catch (error) {
    console.error(error);
  }
}

export async function traerDatosJugador(urlPerfilJugador, username) {
  try {
    const respuesta = await fetch(`${urlPerfilJugador}${username}`);
    const datos = respuesta.json();
    return datos;
  } catch (error) {
    console.error(error);
  }
}
