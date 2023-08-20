function cov_w3e7defnu() {
  var path = "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\index.js";
  var hash = "532272861c3961269d6fad6347fab34d8b822bd8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 21
        }
      },
      "1": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 23
        }
      },
      "2": {
        start: {
          line: 12,
          column: 18
        },
        end: {
          line: 12,
          column: 69
        }
      },
      "3": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 23
        }
      },
      "4": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 28
        }
      },
      "5": {
        start: {
          line: 19,
          column: 22
        },
        end: {
          line: 19,
          column: 76
        }
      },
      "6": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 53
        }
      },
      "7": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 58
        }
      },
      "8": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "actualizarPerfil",
        decl: {
          start: {
            line: 8,
            column: 15
          },
          end: {
            line: 8,
            column: 31
          }
        },
        loc: {
          start: {
            line: 8,
            column: 34
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "inicializar",
        decl: {
          start: {
            line: 18,
            column: 15
          },
          end: {
            line: 18,
            column: 26
          }
        },
        loc: {
          start: {
            line: 18,
            column: 29
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 18
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "532272861c3961269d6fad6347fab34d8b822bd8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_w3e7defnu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_w3e7defnu();
/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import * as config from '../config.js';
import * as ui from './ui.js';
import { traerJugador, traerLeaderboard } from './servicios/traerDatos.js';
async function actualizarPerfil() {
  cov_w3e7defnu().f[0]++;
  cov_w3e7defnu().s[0]++;
  ui.limpiarPerfil();
  cov_w3e7defnu().s[1]++;
  ui.mostrarCargando();
  const jugador = (cov_w3e7defnu().s[2]++, await traerJugador(ui.obtenerJugadorSeleccionado()));
  cov_w3e7defnu().s[3]++;
  ui.ocultarCargando();
  cov_w3e7defnu().s[4]++;
  ui.popularPerfil(jugador);
}
async function inicializar() {
  cov_w3e7defnu().f[1]++;
  const leaderboard = (cov_w3e7defnu().s[5]++, await traerLeaderboard(config.LEADERBOARD_POR_DEFECTO));
  cov_w3e7defnu().s[6]++;
  ui.crearLeaderboard(leaderboard, actualizarPerfil);
  cov_w3e7defnu().s[7]++;
  ui.crearTiposLeaderboard(leaderboard, actualizarPerfil);
}
cov_w3e7defnu().s[8]++;
inicializar();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfdzNlN2RlZm51IiwiYWN0dWFsQ292ZXJhZ2UiLCJjb25maWciLCJ1aSIsInRyYWVySnVnYWRvciIsInRyYWVyTGVhZGVyYm9hcmQiLCJhY3R1YWxpemFyUGVyZmlsIiwiZiIsInMiLCJsaW1waWFyUGVyZmlsIiwibW9zdHJhckNhcmdhbmRvIiwianVnYWRvciIsIm9idGVuZXJKdWdhZG9yU2VsZWNjaW9uYWRvIiwib2N1bHRhckNhcmdhbmRvIiwicG9wdWxhclBlcmZpbCIsImluaWNpYWxpemFyIiwibGVhZGVyYm9hcmQiLCJMRUFERVJCT0FSRF9QT1JfREVGRUNUTyIsImNyZWFyTGVhZGVyYm9hcmQiLCJjcmVhclRpcG9zTGVhZGVyYm9hcmQiXSwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xyXG5cclxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4uL2NvbmZpZy5qcyc7XHJcbmltcG9ydCAqIGFzIHVpIGZyb20gJy4vdWkuanMnO1xyXG5pbXBvcnQgeyB0cmFlckp1Z2Fkb3IsIHRyYWVyTGVhZGVyYm9hcmQgfSBmcm9tICcuL3NlcnZpY2lvcy90cmFlckRhdG9zLmpzJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFjdHVhbGl6YXJQZXJmaWwoKSB7XHJcbiAgdWkubGltcGlhclBlcmZpbCgpO1xyXG4gIHVpLm1vc3RyYXJDYXJnYW5kbygpO1xyXG5cclxuICBjb25zdCBqdWdhZG9yID0gYXdhaXQgdHJhZXJKdWdhZG9yKHVpLm9idGVuZXJKdWdhZG9yU2VsZWNjaW9uYWRvKCkpO1xyXG5cclxuICB1aS5vY3VsdGFyQ2FyZ2FuZG8oKTtcclxuICB1aS5wb3B1bGFyUGVyZmlsKGp1Z2Fkb3IpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbmljaWFsaXphcigpIHtcclxuICBjb25zdCBsZWFkZXJib2FyZCA9IGF3YWl0IHRyYWVyTGVhZGVyYm9hcmQoY29uZmlnLkxFQURFUkJPQVJEX1BPUl9ERUZFQ1RPKTtcclxuXHJcbiAgdWkuY3JlYXJMZWFkZXJib2FyZChsZWFkZXJib2FyZCwgYWN0dWFsaXphclBlcmZpbCk7XHJcbiAgdWkuY3JlYXJUaXBvc0xlYWRlcmJvYXJkKGxlYWRlcmJvYXJkLCBhY3R1YWxpemFyUGVyZmlsKTtcclxufVxyXG5cclxuaW5pY2lhbGl6YXIoKTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsYUFBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsYUFBQTtBQWZaO0FBQ0E7O0FBRUEsT0FBTyxLQUFLRSxNQUFNLE1BQU0sY0FBYztBQUN0QyxPQUFPLEtBQUtDLEVBQUUsTUFBTSxTQUFTO0FBQzdCLFNBQVNDLFlBQVksRUFBRUMsZ0JBQWdCLFFBQVEsMkJBQTJCO0FBRTFFLGVBQWVDLGdCQUFnQkEsQ0FBQSxFQUFHO0VBQUFOLGFBQUEsR0FBQU8sQ0FBQTtFQUFBUCxhQUFBLEdBQUFRLENBQUE7RUFDaENMLEVBQUUsQ0FBQ00sYUFBYSxDQUFDLENBQUM7RUFBQ1QsYUFBQSxHQUFBUSxDQUFBO0VBQ25CTCxFQUFFLENBQUNPLGVBQWUsQ0FBQyxDQUFDO0VBRXBCLE1BQU1DLE9BQU8sSUFBQVgsYUFBQSxHQUFBUSxDQUFBLE9BQUcsTUFBTUosWUFBWSxDQUFDRCxFQUFFLENBQUNTLDBCQUEwQixDQUFDLENBQUMsQ0FBQztFQUFDWixhQUFBLEdBQUFRLENBQUE7RUFFcEVMLEVBQUUsQ0FBQ1UsZUFBZSxDQUFDLENBQUM7RUFBQ2IsYUFBQSxHQUFBUSxDQUFBO0VBQ3JCTCxFQUFFLENBQUNXLGFBQWEsQ0FBQ0gsT0FBTyxDQUFDO0FBQzNCO0FBRUEsZUFBZUksV0FBV0EsQ0FBQSxFQUFHO0VBQUFmLGFBQUEsR0FBQU8sQ0FBQTtFQUMzQixNQUFNUyxXQUFXLElBQUFoQixhQUFBLEdBQUFRLENBQUEsT0FBRyxNQUFNSCxnQkFBZ0IsQ0FBQ0gsTUFBTSxDQUFDZSx1QkFBdUIsQ0FBQztFQUFDakIsYUFBQSxHQUFBUSxDQUFBO0VBRTNFTCxFQUFFLENBQUNlLGdCQUFnQixDQUFDRixXQUFXLEVBQUVWLGdCQUFnQixDQUFDO0VBQUNOLGFBQUEsR0FBQVEsQ0FBQTtFQUNuREwsRUFBRSxDQUFDZ0IscUJBQXFCLENBQUNILFdBQVcsRUFBRVYsZ0JBQWdCLENBQUM7QUFDekQ7QUFBQ04sYUFBQSxHQUFBUSxDQUFBO0FBRURPLFdBQVcsQ0FBQyxDQUFDIn0=