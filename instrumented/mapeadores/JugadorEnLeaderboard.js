function cov_63it9ead9() {
  var path = "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\mapeadores\\JugadorEnLeaderboard.js";
  var hash = "19b49efc8209e24cf6e80c9741470ee726a671d4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\mapeadores\\JugadorEnLeaderboard.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 5,
          column: 61
        }
      },
      "1": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 34
        }
      },
      "2": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 28,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "mapearJugadorEnLeaderboard",
        decl: {
          start: {
            line: 4,
            column: 9
          },
          end: {
            line: 4,
            column: 35
          }
        },
        loc: {
          start: {
            line: 4,
            column: 66
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "19b49efc8209e24cf6e80c9741470ee726a671d4"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_63it9ead9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_63it9ead9();
import JugadorEnLeaderboard from '../entidades/JugadorEnLeaderboard.js';
import mapearJugador from './Jugador.js';
function mapearJugadorEnLeaderboard(datosApiJugadorEnLeaderboard) {
  cov_63it9ead9().f[0]++;
  const jugador = (cov_63it9ead9().s[0]++, mapearJugador(datosApiJugadorEnLeaderboard));
  const {
    rank: posicionEnLeaderboard,
    score: rating,
    win_count: partidasGanadas,
    loss_count: partidasPerdidas,
    draw_count: partidasTablas
  } = (cov_63it9ead9().s[1]++, datosApiJugadorEnLeaderboard);
  cov_63it9ead9().s[2]++;
  return new JugadorEnLeaderboard(jugador.username, jugador.nombre, jugador.titulo, jugador.pais, jugador.seguidores, jugador.imagenPerfil, jugador.enlacePerfil, posicionEnLeaderboard, rating, partidasGanadas, partidasPerdidas, partidasTablas);
}
export default mapearJugadorEnLeaderboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfNjNpdDllYWQ5IiwiYWN0dWFsQ292ZXJhZ2UiLCJKdWdhZG9yRW5MZWFkZXJib2FyZCIsIm1hcGVhckp1Z2Fkb3IiLCJtYXBlYXJKdWdhZG9yRW5MZWFkZXJib2FyZCIsImRhdG9zQXBpSnVnYWRvckVuTGVhZGVyYm9hcmQiLCJmIiwianVnYWRvciIsInMiLCJyYW5rIiwicG9zaWNpb25FbkxlYWRlcmJvYXJkIiwic2NvcmUiLCJyYXRpbmciLCJ3aW5fY291bnQiLCJwYXJ0aWRhc0dhbmFkYXMiLCJsb3NzX2NvdW50IiwicGFydGlkYXNQZXJkaWRhcyIsImRyYXdfY291bnQiLCJwYXJ0aWRhc1RhYmxhcyIsInVzZXJuYW1lIiwibm9tYnJlIiwidGl0dWxvIiwicGFpcyIsInNlZ3VpZG9yZXMiLCJpbWFnZW5QZXJmaWwiLCJlbmxhY2VQZXJmaWwiXSwic291cmNlcyI6WyJKdWdhZG9yRW5MZWFkZXJib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSnVnYWRvckVuTGVhZGVyYm9hcmQgZnJvbSAnLi4vZW50aWRhZGVzL0p1Z2Fkb3JFbkxlYWRlcmJvYXJkLmpzJztcclxuaW1wb3J0IG1hcGVhckp1Z2Fkb3IgZnJvbSAnLi9KdWdhZG9yLmpzJztcclxuXHJcbmZ1bmN0aW9uIG1hcGVhckp1Z2Fkb3JFbkxlYWRlcmJvYXJkKGRhdG9zQXBpSnVnYWRvckVuTGVhZGVyYm9hcmQpIHtcclxuICBjb25zdCBqdWdhZG9yID0gbWFwZWFySnVnYWRvcihkYXRvc0FwaUp1Z2Fkb3JFbkxlYWRlcmJvYXJkKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcmFuazogcG9zaWNpb25FbkxlYWRlcmJvYXJkLFxyXG4gICAgc2NvcmU6IHJhdGluZyxcclxuICAgIHdpbl9jb3VudDogcGFydGlkYXNHYW5hZGFzLFxyXG4gICAgbG9zc19jb3VudDogcGFydGlkYXNQZXJkaWRhcyxcclxuICAgIGRyYXdfY291bnQ6IHBhcnRpZGFzVGFibGFzLFxyXG4gIH0gPSBkYXRvc0FwaUp1Z2Fkb3JFbkxlYWRlcmJvYXJkO1xyXG5cclxuICByZXR1cm4gbmV3IEp1Z2Fkb3JFbkxlYWRlcmJvYXJkKFxyXG4gICAganVnYWRvci51c2VybmFtZSxcclxuICAgIGp1Z2Fkb3Iubm9tYnJlLFxyXG4gICAganVnYWRvci50aXR1bG8sXHJcbiAgICBqdWdhZG9yLnBhaXMsXHJcbiAgICBqdWdhZG9yLnNlZ3VpZG9yZXMsXHJcbiAgICBqdWdhZG9yLmltYWdlblBlcmZpbCxcclxuICAgIGp1Z2Fkb3IuZW5sYWNlUGVyZmlsLFxyXG4gICAgcG9zaWNpb25FbkxlYWRlcmJvYXJkLFxyXG4gICAgcmF0aW5nLFxyXG4gICAgcGFydGlkYXNHYW5hZGFzLFxyXG4gICAgcGFydGlkYXNQZXJkaWRhcyxcclxuICAgIHBhcnRpZGFzVGFibGFzLFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hcGVhckp1Z2Fkb3JFbkxlYWRlcmJvYXJkO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGFBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGFBQUE7QUFmWixPQUFPRSxvQkFBb0IsTUFBTSxzQ0FBc0M7QUFDdkUsT0FBT0MsYUFBYSxNQUFNLGNBQWM7QUFFeEMsU0FBU0MsMEJBQTBCQSxDQUFDQyw0QkFBNEIsRUFBRTtFQUFBTCxhQUFBLEdBQUFNLENBQUE7RUFDaEUsTUFBTUMsT0FBTyxJQUFBUCxhQUFBLEdBQUFRLENBQUEsT0FBR0wsYUFBYSxDQUFDRSw0QkFBNEIsQ0FBQztFQUUzRCxNQUFNO0lBQ0pJLElBQUksRUFBRUMscUJBQXFCO0lBQzNCQyxLQUFLLEVBQUVDLE1BQU07SUFDYkMsU0FBUyxFQUFFQyxlQUFlO0lBQzFCQyxVQUFVLEVBQUVDLGdCQUFnQjtJQUM1QkMsVUFBVSxFQUFFQztFQUNkLENBQUMsSUFBQWxCLGFBQUEsR0FBQVEsQ0FBQSxPQUFHSCw0QkFBNEI7RUFBQ0wsYUFBQSxHQUFBUSxDQUFBO0VBRWpDLE9BQU8sSUFBSU4sb0JBQW9CLENBQzdCSyxPQUFPLENBQUNZLFFBQVEsRUFDaEJaLE9BQU8sQ0FBQ2EsTUFBTSxFQUNkYixPQUFPLENBQUNjLE1BQU0sRUFDZGQsT0FBTyxDQUFDZSxJQUFJLEVBQ1pmLE9BQU8sQ0FBQ2dCLFVBQVUsRUFDbEJoQixPQUFPLENBQUNpQixZQUFZLEVBQ3BCakIsT0FBTyxDQUFDa0IsWUFBWSxFQUNwQmYscUJBQXFCLEVBQ3JCRSxNQUFNLEVBQ05FLGVBQWUsRUFDZkUsZ0JBQWdCLEVBQ2hCRSxjQUNGLENBQUM7QUFDSDtBQUVBLGVBQWVkLDBCQUEwQiJ9