export function guardarDatos(key, datos) {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(datos));
  }
}
export async function traerLeaderboard(tipoLeaderboard) {
  const datosLeaderboard = localStorage.getItem(tipoLeaderboard);
  return JSON.parse(datosLeaderboard);
}
export async function traerJugador(username) {
  const datosJugador = localStorage.getItem(username);
  return JSON.parse(datosJugador);
}
export async function traerListadoLeaderboards() {
  const listadoLeaderboards = localStorage.getItem('listadoLeaderboards');
  return JSON.parse(listadoLeaderboards);
}