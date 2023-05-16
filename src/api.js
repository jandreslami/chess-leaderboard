/* eslint-disable no-console */
export function traerLeaderboards(urlLeaderboards) {
  return fetch(urlLeaderboards)
    .then((datos) => datos.json())
    .then((datos) => datos)
    .catch((error) => console.error(error));
}

export function traerDatosJugador(urlPerfilJugador, username = 'magnuscarlsen') {
  return fetch(`${urlPerfilJugador}${username}`)
    .then((datos) => datos.json())
    .then((datos) => datos)
    .catch((error) => console.error(error));
}
