function cov_2e37sxzq5y() {
  var path = "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\mapeadores\\Jugador.js";
  var hash = "074f8376f5acd98ff9b40c82eadcafd7ecf93e5b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\mapeadores\\Jugador.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 21
        }
      },
      "1": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 23,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "mapearJugador",
        decl: {
          start: {
            line: 4,
            column: 9
          },
          end: {
            line: 4,
            column: 22
          }
        },
        loc: {
          start: {
            line: 4,
            column: 40
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "074f8376f5acd98ff9b40c82eadcafd7ecf93e5b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2e37sxzq5y = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2e37sxzq5y();
import Jugador from '../entidades/Jugador.js';
import { devolverPaisJugador } from '../utils.js';
function mapearJugador(datosApiJugador) {
  cov_2e37sxzq5y().f[0]++;
  const {
    username,
    name: nombre,
    title: titulo,
    country: pais,
    followers: seguidores,
    avatar: imagenPerfil,
    url: enlacePerfil
  } = (cov_2e37sxzq5y().s[0]++, datosApiJugador);
  cov_2e37sxzq5y().s[1]++;
  return new Jugador(username, nombre, titulo, devolverPaisJugador(pais), seguidores, imagenPerfil, enlacePerfil);
}
export default mapearJugador;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmUzN3N4enE1eSIsImFjdHVhbENvdmVyYWdlIiwiSnVnYWRvciIsImRldm9sdmVyUGFpc0p1Z2Fkb3IiLCJtYXBlYXJKdWdhZG9yIiwiZGF0b3NBcGlKdWdhZG9yIiwiZiIsInVzZXJuYW1lIiwibmFtZSIsIm5vbWJyZSIsInRpdGxlIiwidGl0dWxvIiwiY291bnRyeSIsInBhaXMiLCJmb2xsb3dlcnMiLCJzZWd1aWRvcmVzIiwiYXZhdGFyIiwiaW1hZ2VuUGVyZmlsIiwidXJsIiwiZW5sYWNlUGVyZmlsIiwicyJdLCJzb3VyY2VzIjpbIkp1Z2Fkb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEp1Z2Fkb3IgZnJvbSAnLi4vZW50aWRhZGVzL0p1Z2Fkb3IuanMnO1xyXG5pbXBvcnQgeyBkZXZvbHZlclBhaXNKdWdhZG9yIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xyXG5cclxuZnVuY3Rpb24gbWFwZWFySnVnYWRvcihkYXRvc0FwaUp1Z2Fkb3IpIHtcclxuICBjb25zdCB7XHJcbiAgICB1c2VybmFtZSxcclxuICAgIG5hbWU6IG5vbWJyZSxcclxuICAgIHRpdGxlOiB0aXR1bG8sXHJcbiAgICBjb3VudHJ5OiBwYWlzLFxyXG4gICAgZm9sbG93ZXJzOiBzZWd1aWRvcmVzLFxyXG4gICAgYXZhdGFyOiBpbWFnZW5QZXJmaWwsXHJcbiAgICB1cmw6IGVubGFjZVBlcmZpbCxcclxuICB9ID0gZGF0b3NBcGlKdWdhZG9yO1xyXG5cclxuICByZXR1cm4gbmV3IEp1Z2Fkb3IoXHJcbiAgICB1c2VybmFtZSxcclxuICAgIG5vbWJyZSxcclxuICAgIHRpdHVsbyxcclxuICAgIGRldm9sdmVyUGFpc0p1Z2Fkb3IocGFpcyksXHJcbiAgICBzZWd1aWRvcmVzLFxyXG4gICAgaW1hZ2VuUGVyZmlsLFxyXG4gICAgZW5sYWNlUGVyZmlsLFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hcGVhckp1Z2Fkb3I7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixPQUFPRSxPQUFPLE1BQU0seUJBQXlCO0FBQzdDLFNBQVNDLG1CQUFtQixRQUFRLGFBQWE7QUFFakQsU0FBU0MsYUFBYUEsQ0FBQ0MsZUFBZSxFQUFFO0VBQUFMLGNBQUEsR0FBQU0sQ0FBQTtFQUN0QyxNQUFNO0lBQ0pDLFFBQVE7SUFDUkMsSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLEtBQUssRUFBRUMsTUFBTTtJQUNiQyxPQUFPLEVBQUVDLElBQUk7SUFDYkMsU0FBUyxFQUFFQyxVQUFVO0lBQ3JCQyxNQUFNLEVBQUVDLFlBQVk7SUFDcEJDLEdBQUcsRUFBRUM7RUFDUCxDQUFDLElBQUFuQixjQUFBLEdBQUFvQixDQUFBLE9BQUdmLGVBQWU7RUFBQ0wsY0FBQSxHQUFBb0IsQ0FBQTtFQUVwQixPQUFPLElBQUlsQixPQUFPLENBQ2hCSyxRQUFRLEVBQ1JFLE1BQU0sRUFDTkUsTUFBTSxFQUNOUixtQkFBbUIsQ0FBQ1UsSUFBSSxDQUFDLEVBQ3pCRSxVQUFVLEVBQ1ZFLFlBQVksRUFDWkUsWUFDRixDQUFDO0FBQ0g7QUFFQSxlQUFlZixhQUFhIn0=