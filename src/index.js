let url = "https://api.chess.com/pub/leaderboards";

let TipoLeaderboard = "live_blitz";

//  Tipos ranking: live_blitz,
//   live_bullet,
//   live_rapid,

function crearTablaLeaderboard(objetoJugador) {
  objetoJugador.forEach((elemento) => {
    let fila = document.createElement("tr");

    let ranking = document.createElement("th");
    ranking.textContent(elemento);

    fila.appendChild(ranking);
  });
  document.appendChild();
}

fetch(url)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    const cuerpoTabla = document.querySelector("#cuerpo-tabla");

    datos[TipoLeaderboard].forEach((elemento) => {
      let fila = document.createElement("tr");

      let ranking = document.createElement("th");
      ranking.textContent = elemento.rank;
   

      let nombre = document.createElement("td");
      nombre.textContent = elemento.name;

      let rating = document.createElement("td");
      rating.textContent = elemento.score;

      let numeroPartidasGanadas = Number(elemento.win_count);
      let numeroPartidasPerdidas = Number(elemento.loss_count);
      let numeroPartidasTablas = Number(elemento.draw_count);
      let numeroPartidasTotales =
        numeroPartidasGanadas + numeroPartidasPerdidas + numeroPartidasTablas;

      let totalPartidas = document.createElement("td");
      totalPartidas.textContent = numeroPartidasTotales;

      let porcentajeGanadas = document.createElement("td");
      porcentajeGanadas.textContent = `${(
        (numeroPartidasGanadas / numeroPartidasTotales) *
        100
      ).toFixed(2)}%`;

      fila.appendChild(ranking);
      fila.appendChild(nombre);
      fila.appendChild(rating);
      fila.appendChild(totalPartidas);
      fila.appendChild(porcentajeGanadas);

      cuerpoTabla.appendChild(fila);
    });

    console.log(datos[TipoLeaderboard]);
  })


  .catch((error) => console.error(error));
