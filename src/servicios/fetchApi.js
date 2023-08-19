/* eslint-disable consistent-return */
/* eslint-disable no-console */
export async function traerLeaderboards(urlLeaderboards) {
  try {
    const respuesta = await fetch(urlLeaderboards);
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error(error);
  }
}

export async function traerDatosJugador(urlPerfilJugador, username = 'magnuscarlsen') {
  try {
    const respuesta = await fetch(`${urlPerfilJugador}${username}`);
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error(error);
  }
}
