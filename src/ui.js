/* eslint-disable no-plusplus */
import {
  TIPOS_LEADERBOARD, BANDERAS_EXOTICAS, TITULOS,
} from './diccionarios.js';
import { traerLeaderboard, traerListadoLeaderboards } from './servicios/traerDatos.js';

import { crearBandera } from './utils.js';

const $PERFIL_NOMBRE = document.querySelector('#nombre-perfil');
const $PERFIL_IMAGEN = document.querySelector('#imagen-perfil');
const $PERFIL_USUARIO = document.querySelector('#usuario-perfil');
const $PERFIL_TITULO = document.querySelector('#titulo-perfil');
const $PERFIL_ENLACE = document.querySelector('#enlace-perfil');
const $PERFIL_SEGUIDORES = document.querySelector('#seguidores-perfil');
const $CUERPO_TABLA = document.querySelector('#cuerpo-tabla');

function limpiarPerfil() {
  $PERFIL_NOMBRE.textContent = '';
  $PERFIL_IMAGEN.classList.add('d-none');
  $PERFIL_TITULO.textContent = '';
  $PERFIL_ENLACE.textContent = '';
  $PERFIL_SEGUIDORES.textContent = '';
  $PERFIL_USUARIO.textContent = '';
}

function limpiarHijosElementoHTML(elementoHTML) {
  // elimina todos sus hijos
  while (elementoHTML.firstChild) {
    elementoHTML.firstChild.remove();
  }
}

function mostrarCargando() {
  document.querySelector('#cargando-perfil').classList.remove('d-none');
}

function ocultarCargando() {
  document.querySelector('#cargando-perfil').classList.add('d-none');
}

function adaptarTablaALeaderboardsConPuntaje() {
  const $elementosAOcultar = document.querySelectorAll('.leaderboard-con-rating');
  $elementosAOcultar.forEach((e) => {
    e.classList.add('d-none');
  });

  const $encabezadoColumnaRating = document.querySelector('#rating');
  $encabezadoColumnaRating.textContent = 'Puntaje';
}

function adaptarTablaALeaderboardsConRating() {
  const $elementosAMostrar = document.querySelectorAll('.leaderboard-con-rating');
  $elementosAMostrar.forEach((e) => {
    e.classList.remove('d-none');
  });

  const $encabezadoColumnaRating = document.querySelector('#rating');
  $encabezadoColumnaRating.textContent = 'Rating (Chess.com)';
}

function mostrarPlaceholders() {
  const cantidadFilasLeaderboard = 50;

  for (let i = 0; i < cantidadFilasLeaderboard; i++) {
    const $fila = document.createElement('tr');
    const $placeholderPosicion = document.createElement('th');
    const $placeholderBanderaContenedor = document.createElement('td');
    const $placeholderNombreContenedor = document.createElement('td');

    $placeholderPosicion.textContent = '#';

    const $placeholderBandera = document.createElement('div');
    $placeholderBandera.classList.add('gradient-placeholder');
    $placeholderBanderaContenedor.appendChild($placeholderBandera);

    const $placeholderNombre = document.createElement('div');
    $placeholderNombre.classList.add('gradient-placeholder');
    $placeholderNombreContenedor.appendChild($placeholderNombre);

    $fila.appendChild($placeholderPosicion);
    $fila.appendChild($placeholderBanderaContenedor);
    $fila.appendChild($placeholderNombreContenedor);

    $CUERPO_TABLA.appendChild($fila);
  }
}

function crearFilaLeaderboard(jugadorEnLeaderboard) {
  const $fila = document.createElement('tr');

  const posicion = jugadorEnLeaderboard.posicionEnLeaderboard;
  const $leaderboard = document.createElement('th');
  $leaderboard.textContent = posicion;
  $leaderboard.style.width = '16px';

  const $nombre = document.createElement('td');

  if (jugadorEnLeaderboard.nombre === undefined) {
    $nombre.textContent = jugadorEnLeaderboard.username;
  } else {
    $nombre.textContent = jugadorEnLeaderboard.nombre;
  }

  $nombre.setAttribute('data-bs-toggle', 'modal');
  $nombre.setAttribute('data-bs-target', '#perfil');
  $nombre.classList.add('nombre');
  $nombre.id = (jugadorEnLeaderboard.username).toLowerCase();
  $nombre.dataset.posicion = `${posicion}`;

  const $contenedorBandera = document.createElement('td');
  $contenedorBandera.style.width = '16px';

  const $bandera = crearBandera(jugadorEnLeaderboard.pais, BANDERAS_EXOTICAS);
  $contenedorBandera.appendChild($bandera);

  const $rating = document.createElement('td');

  $rating.textContent = jugadorEnLeaderboard.rating;

  const partidasGanadas = Number(jugadorEnLeaderboard.partidasGanadas);
  const partidasPerdidas = Number(jugadorEnLeaderboard.partidasPerdidas);
  const partidasTablas = Number(jugadorEnLeaderboard.partidasTablas);

  const partidasTotales = partidasGanadas
    + partidasPerdidas
    + partidasTablas;

  const $partidasTotales = document.createElement('td');
  $partidasTotales.textContent = partidasTotales;

  const $porcentajeGanadas = document.createElement('td');
  $porcentajeGanadas.textContent = `${(
    (partidasGanadas / partidasTotales)
    * 100
  ).toFixed(2)}%`;

  $fila.appendChild($leaderboard);
  $fila.appendChild($contenedorBandera);
  $fila.appendChild($nombre);
  $fila.appendChild($rating);

  // contempla los leaderboards que son puntajes
  if (partidasTotales !== 0) {
    $fila.appendChild($partidasTotales);
    $fila.appendChild($porcentajeGanadas);
  }

  $CUERPO_TABLA.appendChild($fila);
}

async function crearLeaderboard(leaderboard, funcionCallback) {
  leaderboard.rankingJugadoresEnLeaderboard.forEach(
    (jugadorEnLeaderboard) => {
      crearFilaLeaderboard(jugadorEnLeaderboard);
    },
  );

  $CUERPO_TABLA.onclick = (event) => {
    if (event.target.classList.contains('nombre')) {
      const jugadorSeleccionadoAnterior = $CUERPO_TABLA.querySelector('.seleccionado');
      if (jugadorSeleccionadoAnterior) {
        jugadorSeleccionadoAnterior.classList.remove('seleccionado');
      }

      const jugadorSeleccionado = event.target;
      jugadorSeleccionado.classList.add('seleccionado');

      funcionCallback();
    }
  };
}

async function crearTiposLeaderboard(
  leaderboardSeleccionadoPorDefecto,
  funcionCallback,
) {
  const $SELECTOR_TIPO_LEADERBOARD = document.querySelector('#tipo-leaderboard');
  const listadoLeaderboards = await traerListadoLeaderboards();

  for (let i = 0; i < listadoLeaderboards.length; i++) {
    const $opcionLeaderboard = document.createElement('option');
    const tipoLeaderboard = listadoLeaderboards[i];

    $opcionLeaderboard.value = tipoLeaderboard;

    $opcionLeaderboard.textContent = TIPOS_LEADERBOARD[tipoLeaderboard];

    if (tipoLeaderboard === leaderboardSeleccionadoPorDefecto) {
      $opcionLeaderboard.setAttribute('selected', '');
    }

    $SELECTOR_TIPO_LEADERBOARD.appendChild($opcionLeaderboard);
  }

  $SELECTOR_TIPO_LEADERBOARD.onchange = () => {
    limpiarHijosElementoHTML($CUERPO_TABLA);
    const opcionSeleccionada = $SELECTOR_TIPO_LEADERBOARD.value;

    async function actualizarTabla() {
      const leaderboardAMostrar = await traerLeaderboard(opcionSeleccionada);
      if (leaderboardAMostrar.esConPuntaje) {
        adaptarTablaALeaderboardsConPuntaje();
      } else {
        adaptarTablaALeaderboardsConRating();
      }
      crearLeaderboard(leaderboardAMostrar, funcionCallback);
    }
    actualizarTabla();
  };
}

function popularPerfil(jugador) {
  if (jugador.nombre === undefined) {
    $PERFIL_NOMBRE.textContent = jugador.username;
  } else {
    $PERFIL_NOMBRE.textContent = jugador.nombre;
  }

  $PERFIL_USUARIO.textContent = `${jugador.username}`;

  const badgeJugador = document.createElement('span');

  if (jugador.titulo) {
    badgeJugador.classList.add('badge', 'bg-warning', 'badge-sm');
    badgeJugador.textContent = `${jugador.titulo}`;
    badgeJugador.classList.add('m-2');
    $PERFIL_NOMBRE.prepend(badgeJugador);
    $PERFIL_TITULO.textContent = `${TITULOS[jugador.titulo]} de Ajedrez`;
  } else {
    $PERFIL_TITULO.textContent = 'Jugador amateur (sin título)';
  }

  const jugadorSeleccionado = document.querySelector(`#${jugador.username}`);

  const posicionJugador = jugadorSeleccionado.dataset.posicion;
  $PERFIL_NOMBRE.prepend(`#${posicionJugador} -`);

  const banderaJugador = crearBandera(jugador.pais, BANDERAS_EXOTICAS);
  banderaJugador.classList.add('m-2', 'bandera-jugador');

  $PERFIL_NOMBRE.append(banderaJugador);

  if (jugador.imagenPerfil === undefined) {
    $PERFIL_IMAGEN.setAttribute('src', 'img/user-profile-img.svg');
  } else {
    $PERFIL_IMAGEN.setAttribute('src', `${jugador.imagenPerfil}`);
  }

  $PERFIL_IMAGEN.classList.remove('d-none');

  $PERFIL_ENLACE.setAttribute('href', `${jugador.enlacePerfil}`);
  $PERFIL_ENLACE.textContent = 'Enlace de Chess.com';

  $PERFIL_SEGUIDORES.textContent = `${jugador.seguidores} Seguidores`;
}

function obtenerJugadorSeleccionado() {
  const jugadorSeleccionado = $CUERPO_TABLA.querySelector('.seleccionado');
  if (jugadorSeleccionado) {
    return jugadorSeleccionado.id;
  }
  return undefined;
}

export {
  limpiarPerfil,
  mostrarCargando,
  ocultarCargando,
  popularPerfil,
  crearLeaderboard,
  crearTiposLeaderboard,
  obtenerJugadorSeleccionado,
  mostrarPlaceholders,
};
