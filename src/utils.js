function devolverPaisJugador(urlPaisJugador) {
  // devuelve el pais del jugador como string (p.ej."es" o "ar")
  return urlPaisJugador.slice(34).toLowerCase();
}
function crearBandera(urlPaisJugador, banderasExoticas) {
  // devuelve un span HTML element que muestra la bandera con flag-icons
  let paisJugador = devolverPaisJugador(urlPaisJugador);

  if (paisJugador in banderasExoticas) {
    paisJugador = banderasExoticas[paisJugador];
  }

  const $bandera = document.createElement('span');
  $bandera.classList.add('fi', `fi-${paisJugador}`);
  return $bandera;
}

export { crearBandera, devolverPaisJugador };
