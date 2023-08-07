export function guardarDatos(key, datos) {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(datos));
  }
}

export async function traerLeaderboard(tipoLeaderboard) {
  const datosLeaderboard = localStorage.getItem(tipoLeaderboard);

  if (datosLeaderboard) {
    return JSON.parse(datosLeaderboard);
  }
  return null;
}

export async function traerJugador(username) {
  const datosJugador = localStorage.getItem(username);

  if (datosJugador) {
    return JSON.parse(datosJugador);
  }
  return null;
}
