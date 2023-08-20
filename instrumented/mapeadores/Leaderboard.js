function cov_10tpo8qbd2() {
  var path = "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\mapeadores\\Leaderboard.js";
  var hash = "cd12dec418192f2b93244785b1a9307398e54747";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\mapeadores\\Leaderboard.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 10,
          column: 4
        }
      },
      "1": {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 9,
          column: 46
        }
      }
    },
    fnMap: {
      "0": {
        name: "mapearLeaderboard",
        decl: {
          start: {
            line: 5,
            column: 9
          },
          end: {
            line: 5,
            column: 26
          }
        },
        loc: {
          start: {
            line: 5,
            column: 62
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 25
          },
          end: {
            line: 8,
            column: 26
          }
        },
        loc: {
          start: {
            line: 9,
            column: 6
          },
          end: {
            line: 9,
            column: 46
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cd12dec418192f2b93244785b1a9307398e54747"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10tpo8qbd2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_10tpo8qbd2();
import Leaderboard from '../entidades/Leaderboard.js';
import mapearJugadorEnLeaderboard from './JugadorEnLeaderboard.js';

/* eslint-disable no-restricted-syntax */
function mapearLeaderboard(tipoLeaderboard, datosLeaderboard) {
  cov_10tpo8qbd2().f[0]++;
  cov_10tpo8qbd2().s[0]++;
  return new Leaderboard(tipoLeaderboard, datosLeaderboard.map(datosJugador => {
    cov_10tpo8qbd2().f[1]++;
    cov_10tpo8qbd2().s[1]++;
    return mapearJugadorEnLeaderboard(datosJugador);
  }));
}
export default mapearLeaderboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTB0cG84cWJkMiIsImFjdHVhbENvdmVyYWdlIiwiTGVhZGVyYm9hcmQiLCJtYXBlYXJKdWdhZG9yRW5MZWFkZXJib2FyZCIsIm1hcGVhckxlYWRlcmJvYXJkIiwidGlwb0xlYWRlcmJvYXJkIiwiZGF0b3NMZWFkZXJib2FyZCIsImYiLCJzIiwibWFwIiwiZGF0b3NKdWdhZG9yIl0sInNvdXJjZXMiOlsiTGVhZGVyYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExlYWRlcmJvYXJkIGZyb20gJy4uL2VudGlkYWRlcy9MZWFkZXJib2FyZC5qcyc7XHJcbmltcG9ydCBtYXBlYXJKdWdhZG9yRW5MZWFkZXJib2FyZCBmcm9tICcuL0p1Z2Fkb3JFbkxlYWRlcmJvYXJkLmpzJztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXHJcbmZ1bmN0aW9uIG1hcGVhckxlYWRlcmJvYXJkKHRpcG9MZWFkZXJib2FyZCwgZGF0b3NMZWFkZXJib2FyZCkge1xyXG4gIHJldHVybiBuZXcgTGVhZGVyYm9hcmQoXHJcbiAgICB0aXBvTGVhZGVyYm9hcmQsXHJcbiAgICBkYXRvc0xlYWRlcmJvYXJkLm1hcCgoZGF0b3NKdWdhZG9yKSA9PiAoXHJcbiAgICAgIG1hcGVhckp1Z2Fkb3JFbkxlYWRlcmJvYXJkKGRhdG9zSnVnYWRvcikpKSxcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXBlYXJMZWFkZXJib2FyZDtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixPQUFPRSxXQUFXLE1BQU0sNkJBQTZCO0FBQ3JELE9BQU9DLDBCQUEwQixNQUFNLDJCQUEyQjs7QUFFbEU7QUFDQSxTQUFTQyxpQkFBaUJBLENBQUNDLGVBQWUsRUFBRUMsZ0JBQWdCLEVBQUU7RUFBQU4sY0FBQSxHQUFBTyxDQUFBO0VBQUFQLGNBQUEsR0FBQVEsQ0FBQTtFQUM1RCxPQUFPLElBQUlOLFdBQVcsQ0FDcEJHLGVBQWUsRUFDZkMsZ0JBQWdCLENBQUNHLEdBQUcsQ0FBRUMsWUFBWSxJQUNoQztJQUFBVixjQUFBLEdBQUFPLENBQUE7SUFBQVAsY0FBQSxHQUFBUSxDQUFBO0lBQUEsT0FBQUwsMEJBQTBCLENBQUNPLFlBQVksQ0FBQztFQUFELENBQUUsQ0FDN0MsQ0FBQztBQUNIO0FBRUEsZUFBZU4saUJBQWlCIn0=