console.log("hola")

let url =
  "https://api.chess.com/pub/leaderboards";
//devuelve 20 primeros jugadores

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));