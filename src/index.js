const URL_LEADERBOARD = "https://api.chess.com/pub/leaderboards/";
const URL_PERFIL_JUGADOR = "https://api.chess.com/pub/player/";
const RANKING_POR_DEFECTO = "live_blitz";
const $SELECTOR_TIPO_RANKING = document.querySelector("#tipo-ranking");
const $CUERPO_TABLA = document.querySelector("#cuerpo-tabla");

const $PERFIL = document.querySelector("#perfil");
const $PERFIL_NOMBRE = document.querySelector("#nombre-perfil");
const $PERFIL_IMAGEN = document.querySelector("#imagen-perfil");
const $PERFIL_USUARIO = document.querySelector("#usuario-perfil");
const $PERFIL_TITULO = document.querySelector("#titulo-perfil");
const $PERFIL_ENLACE = document.querySelector("#enlace-perfil");
const $PERFIL_SEGUIDORES = document.querySelector("#seguidores-perfil");

const TEXTOS_A_MOSTRAR = {
  daily: "Por Correspondencia",
  daily960: "960 Por Correspondencia",
  live_rapid: "Rápida",
  live_blitz: "Blitz",
  live_bullet: "Bala",
  live_bughouse: "Dobles (Pasapiezas)",
  live_blitz960: "960 en Vivo",
  live_threecheck: "3 Jaques",
  live_crazyhouse: "Crazyhouse",
  live_kingofthehill: "Rey de la Colina",
  tactics: "Problemas",
  rush: "Rush",
  battle: "Batalla de Problemas",
};

const BANDERAS_EXOTICAS = {
  xa: "ic", // Canary Islands
  xb: "es-pv", // "Basque Country"
  xc: "es-ct", // "Catalonia".
  xe: "gb-eng", //England",
  xg: "es-ga", //Galicia"
  xk: "xk", //Kosovo"
  xp: "ps", //Palestine"
  xs: "gb-sct", //Scotland"
  xw: "gb-wls", //Wales"
  xx: "un", //International"
};

const TITULOS = {
  GM: "Gran Maestro",
  WGM: "Gran Maestro Femenino",
  IM: "Maestro Internacional",
  WIM: "Maestro Internacional Femenino",
  FM: "Maestro FIDE",
  WFM: "Maestro FIDE Femenino",
  NM: "Maestro Nacional",
  WNM: "Maestro Nacional Femenino",
  CM: "Maestro Candidato",
  WCM: "Maestro Candidato Femenino",
};

function popularTabla(arrayRanking, $elementoContenedorDeTabla) {
  let $fila = document.createElement("tr");
  $fila.id = `${arrayRanking.rank}`;

  let $ranking = document.createElement("th");
  $ranking.textContent = arrayRanking.rank;
  $ranking.style.width = "16px";

  let $nombre = document.createElement("td");

  if (arrayRanking.name === undefined) {
    $nombre.textContent = arrayRanking.username;
  } else {
    $nombre.textContent = arrayRanking.name;
  }
  $nombre.setAttribute("data-bs-toggle", "modal");
  $nombre.setAttribute("data-bs-target", "#perfil");
  $nombre.classList.add("nombre");
  $nombre.id = arrayRanking.username;

  let $contenedorBandera = document.createElement("td");
  $contenedorBandera.style.width = "16px";

  let $bandera = crearBandera(arrayRanking.country);
  $contenedorBandera.appendChild($bandera);

  let $rating = document.createElement("td");
  $rating.textContent = arrayRanking.score;

  let numeroPartidasGanadas = Number(arrayRanking.win_count);
  let numeroPartidasPerdidas = Number(arrayRanking.loss_count);
  let numeroPartidasTablas = Number(arrayRanking.draw_count);
  let numeroPartidasTotales =
    numeroPartidasGanadas + numeroPartidasPerdidas + numeroPartidasTablas;

  let $totalPartidas = document.createElement("td");
  $totalPartidas.textContent = numeroPartidasTotales;

  let $porcentajeGanadas = document.createElement("td");
  $porcentajeGanadas.textContent = `${(
    (numeroPartidasGanadas / numeroPartidasTotales) *
    100
  ).toFixed(2)}%`;

  $fila.appendChild($ranking);
  $fila.appendChild($contenedorBandera);
  $fila.appendChild($nombre);
  $fila.appendChild($rating);
  $fila.appendChild($totalPartidas);
  $fila.appendChild($porcentajeGanadas);

  $elementoContenedorDeTabla.appendChild($fila);
}

function crearBandera(urlPaisJugador) {
  //devuelve un span HTML element que muestra la bandera con flag-icons
  let paisJugador = urlPaisJugador.slice(34).toLowerCase();

  if (paisJugador in BANDERAS_EXOTICAS) {
    paisJugador = BANDERAS_EXOTICAS[paisJugador];
  }

  let $bandera = document.createElement("span");
  $bandera.classList.add(`fi`, `fi-${paisJugador}`);
  return $bandera;
}

function limpiarElementoHTML(elementoHTML) {
  //elimina todos sus hijos
  while (elementoHTML.firstChild) {
    elementoHTML.firstChild.remove();
  }
}

fetch(URL_LEADERBOARD)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    for (let key in datos) {
      let $opcionRanking = document.createElement("option");

      $opcionRanking.value = key;

      $opcionRanking.textContent = TEXTOS_A_MOSTRAR[key];

      if (key == RANKING_POR_DEFECTO) {
        $opcionRanking.setAttribute("selected", "");
      }
      $SELECTOR_TIPO_RANKING.appendChild($opcionRanking);
    }

    datos[$SELECTOR_TIPO_RANKING.value].forEach((arrayRanking) => {
      popularTabla(arrayRanking, $CUERPO_TABLA);
    });

    $SELECTOR_TIPO_RANKING.onchange = function () {
      limpiarElementoHTML($CUERPO_TABLA);
      let opcionSeleccionada = $SELECTOR_TIPO_RANKING.value;

      datos[opcionSeleccionada].forEach((arrayRanking) => {
        popularTabla(arrayRanking, $CUERPO_TABLA);
      });
    };
  })
  .catch((error) => console.error(error));

$CUERPO_TABLA.onclick = function (event) {
  if (event.target.classList.contains("nombre")) {
    mostrarCargando();
    limpiarPerfil();   
    popularPerfil(event.target.id);
    ocultarCargando();

  }

  function popularPerfil(username) {
    fetch(`${URL_PERFIL_JUGADOR}${username}`)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        if (datos.name === undefined) {
          $PERFIL_NOMBRE.textContent = datos.username;
        } else {
          $PERFIL_NOMBRE.textContent = datos.name;
        }

        $PERFIL_USUARIO.textContent = `${datos.username}`;

        let badgeJugador = document.createElement("span");

        if (datos.title) {
          badgeJugador.classList.add("badge", "bg-warning", "badge-sm");
          badgeJugador.textContent = `${datos.title}`;
          badgeJugador.classList.add("m-2");
          $PERFIL_NOMBRE.prepend(badgeJugador);
          $PERFIL_TITULO.textContent = `${TITULOS[datos.title]} de Ajedrez`;
        } else {
          $PERFIL_TITULO.textContent = "Jugador amateur (sin título)";
        }

        let rankingDeJugadorClicado = event.srcElement.parentNode.id;
        $PERFIL_NOMBRE.prepend(`#${rankingDeJugadorClicado} -`);

        let banderaDeJugadorClicado = crearBandera(datos.country);
        banderaDeJugadorClicado.classList.add("m-2", "bandera-jugador");

        $PERFIL_NOMBRE.append(banderaDeJugadorClicado);

        if (datos.avatar === undefined) {
          $PERFIL_IMAGEN.setAttribute("src", "img/user-profile-img.svg");
        } else {
          $PERFIL_IMAGEN.setAttribute("src", `${datos.avatar}`);
        }

        $PERFIL_IMAGEN.classList.remove("d-none");

        $PERFIL_ENLACE.setAttribute("href", `${datos.url}`);
        $PERFIL_ENLACE.textContent = "Enlace de Chess.com";

        $PERFIL_SEGUIDORES.textContent = `${datos.followers} Seguidores`;
        
      })
      .catch((error) => console.error(error));
  }
};

function limpiarPerfil() {
  $PERFIL_NOMBRE.textContent = "";
  $PERFIL_IMAGEN.classList.add("d-none");
  $PERFIL_TITULO.textContent = "";
  $PERFIL_ENLACE.textContent = "";
  $PERFIL_SEGUIDORES.textContent = "";
  $PERFIL_USUARIO.textContent = "";
}
function mostrarCargando() {
  document.querySelector("#cargando-perfil").classList.remove("d-none");
}

function ocultarCargando(){
  document.querySelector("#cargando-perfil").classList.add("d-none");
}
