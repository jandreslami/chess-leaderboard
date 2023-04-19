let url = "https://api.chess.com/pub/leaderboards";

let TipoLeaderboard = "live_blitz";

//  Tipos ranking: live_blitz,
//   live_bullet,
//   live_rapid,

fetch(url)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    const cuerpoTabla = document.querySelector("#cuerpo-tabla");

    datos[TipoLeaderboard].forEach((elemento) => {
      let fila = document.createElement("tr");

      let ranking = document.createElement("th");
      ranking.textContent = elemento.rank;
      ranking.style.width = "16px";
      
      let nombre = document.createElement("td");
      nombre.textContent = elemento.name;

      let contenedorBandera = document.createElement("td");
      contenedorBandera.style.width = "16px";

      let paisJugador = elemento.country.slice(34).toLowerCase();
      let bandera = document.createElement("span");
      bandera.classList.add(`fi`, `fi-${paisJugador}`);
      contenedorBandera.appendChild(bandera);

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
      fila.appendChild(contenedorBandera);
      fila.appendChild(nombre);
      fila.appendChild(rating);
      fila.appendChild(totalPartidas);
      fila.appendChild(porcentajeGanadas);

      cuerpoTabla.appendChild(fila);
    });

    console.log(datos[TipoLeaderboard]);
  })

  .catch((error) => console.error(error));
