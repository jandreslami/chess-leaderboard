let url = "https://api.chess.com/pub/leaderboards";
const RANKING_POR_DEFECTO = "live_blitz";
const $CUERPO_TABLA = document.querySelector("#cuerpo-tabla");
const $SELECTOR_TIPO_RANKING = document.querySelector("#tipo-ranking");

const TEXTOS_A_MOSTRAR = {
  daily : "Por Correspondencia",
  daily960 : "960 Por Correspondencia",
  live_rapid : "Rápida",
  live_blitz: "Blitz",
  live_bullet:"Bala",
  live_bughouse:"Dobles (Pasapiezas)",
  live_blitz960:"960 en Vivo",
  live_threecheck:"3 Jaques",
  live_crazyhouse:"Crazyhouse",
  live_kingofthehill:"Rey de la Colina",
  tactics:"Problemas",
  rush:"Rush",
  battle:"Batalla de Problemas",
}

function popularTabla(arrayRanking, $elementoContenedorDeTabla) {
  let $fila = document.createElement("tr");

  let $ranking = document.createElement("th");
  $ranking.textContent = arrayRanking.rank;
  $ranking.style.width = "16px";

  let $nombre = document.createElement("td");

  if (arrayRanking.name === undefined) {
    $nombre.textContent = arrayRanking.username;
  } else {
    $nombre.textContent = arrayRanking.name;
  }
  let $contenedor$Bandera = document.createElement("td");
  $contenedor$Bandera.style.width = "16px";

  let paisJugador = arrayRanking.country.slice(34).toLowerCase();
  let $bandera = document.createElement("span");
  $bandera.classList.add(`fi`, `fi-${paisJugador}`);
  $contenedor$Bandera.appendChild($bandera);

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
  $fila.appendChild($contenedor$Bandera);
  $fila.appendChild($nombre);
  $fila.appendChild($rating);
  $fila.appendChild($totalPartidas);
  $fila.appendChild($porcentajeGanadas);

  $elementoContenedorDeTabla.appendChild($fila);
}

function limpiarTabla(cuerpoTabla) {
  while (cuerpoTabla.firstChild) {
    cuerpoTabla.firstChild.remove();
  }
}

fetch(url)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    for (let key in datos) {
      let $opcionRanking = document.createElement("option");
    
      $opcionRanking.value = key;
     
      $opcionRanking.textContent = (TEXTOS_A_MOSTRAR[key]);

      if (key == RANKING_POR_DEFECTO) {
        $opcionRanking.setAttribute("selected", "");
      }
      $SELECTOR_TIPO_RANKING.appendChild($opcionRanking);
    }

    datos[$SELECTOR_TIPO_RANKING.value].forEach((arrayRanking) => {
      popularTabla(arrayRanking, $CUERPO_TABLA);
    });

    $SELECTOR_TIPO_RANKING.onchange = function () {
      limpiarTabla($CUERPO_TABLA);

      let opcionSeleccionada = $SELECTOR_TIPO_RANKING.value;

      datos[opcionSeleccionada].forEach((arrayRanking) => {
        popularTabla(arrayRanking, $CUERPO_TABLA);
      });
    };
  })
  .catch((error) => console.error(error));
