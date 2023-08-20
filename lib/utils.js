function devolverPaisJugador(urlPaisJugador) {
  // devuelve el pais del jugador como string (p.ej."es" o "ar")
  return urlPaisJugador.slice(34).toLowerCase();
}
function crearBandera(paisJugador, banderasExoticas) {
  // devuelve un span HTML element que muestra la bandera con flag-icons
  let paisDefinitivoJugador = paisJugador;
  if (paisJugador in banderasExoticas) {
    paisDefinitivoJugador = banderasExoticas[paisJugador];
  }
  const $bandera = document.createElement('span');
  $bandera.classList.add('fi', `fi-${paisDefinitivoJugador}`);
  $bandera.style.paddingBottom = '3px';
  return $bandera;
}
export { crearBandera, devolverPaisJugador };