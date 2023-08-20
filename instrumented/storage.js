function cov_1ib1we4chq() {
  var path = "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\storage.js";
  var hash = "62659e3b1c17adfebaced3d4b6b864ff2977c90d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\storage.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 4,
          column: 3
        }
      },
      "1": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 53
        }
      },
      "2": {
        start: {
          line: 8,
          column: 27
        },
        end: {
          line: 8,
          column: 64
        }
      },
      "3": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 38
        }
      },
      "4": {
        start: {
          line: 14,
          column: 23
        },
        end: {
          line: 14,
          column: 53
        }
      },
      "5": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 34
        }
      },
      "6": {
        start: {
          line: 20,
          column: 30
        },
        end: {
          line: 20,
          column: 73
        }
      },
      "7": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "guardarDatos",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1,
            column: 41
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "traerLeaderboard",
        decl: {
          start: {
            line: 7,
            column: 22
          },
          end: {
            line: 7,
            column: 38
          }
        },
        loc: {
          start: {
            line: 7,
            column: 56
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 7
      },
      "2": {
        name: "traerJugador",
        decl: {
          start: {
            line: 13,
            column: 22
          },
          end: {
            line: 13,
            column: 34
          }
        },
        loc: {
          start: {
            line: 13,
            column: 45
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 13
      },
      "3": {
        name: "traerListadoLeaderboards",
        decl: {
          start: {
            line: 19,
            column: 22
          },
          end: {
            line: 19,
            column: 46
          }
        },
        loc: {
          start: {
            line: 19,
            column: 49
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 19
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        }, {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        }],
        line: 2
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "62659e3b1c17adfebaced3d4b6b864ff2977c90d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ib1we4chq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1ib1we4chq();
export function guardarDatos(key, datos) {
  cov_1ib1we4chq().f[0]++;
  cov_1ib1we4chq().s[0]++;
  if (!localStorage.getItem(key)) {
    cov_1ib1we4chq().b[0][0]++;
    cov_1ib1we4chq().s[1]++;
    localStorage.setItem(key, JSON.stringify(datos));
  } else {
    cov_1ib1we4chq().b[0][1]++;
  }
}
export async function traerLeaderboard(tipoLeaderboard) {
  cov_1ib1we4chq().f[1]++;
  const datosLeaderboard = (cov_1ib1we4chq().s[2]++, localStorage.getItem(tipoLeaderboard));
  cov_1ib1we4chq().s[3]++;
  return JSON.parse(datosLeaderboard);
}
export async function traerJugador(username) {
  cov_1ib1we4chq().f[2]++;
  const datosJugador = (cov_1ib1we4chq().s[4]++, localStorage.getItem(username));
  cov_1ib1we4chq().s[5]++;
  return JSON.parse(datosJugador);
}
export async function traerListadoLeaderboards() {
  cov_1ib1we4chq().f[3]++;
  const listadoLeaderboards = (cov_1ib1we4chq().s[6]++, localStorage.getItem('listadoLeaderboards'));
  cov_1ib1we4chq().s[7]++;
  return JSON.parse(listadoLeaderboards);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWliMXdlNGNocSIsImFjdHVhbENvdmVyYWdlIiwiZ3VhcmRhckRhdG9zIiwia2V5IiwiZGF0b3MiLCJmIiwicyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJiIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0cmFlckxlYWRlcmJvYXJkIiwidGlwb0xlYWRlcmJvYXJkIiwiZGF0b3NMZWFkZXJib2FyZCIsInBhcnNlIiwidHJhZXJKdWdhZG9yIiwidXNlcm5hbWUiLCJkYXRvc0p1Z2Fkb3IiLCJ0cmFlckxpc3RhZG9MZWFkZXJib2FyZHMiLCJsaXN0YWRvTGVhZGVyYm9hcmRzIl0sInNvdXJjZXMiOlsic3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ3VhcmRhckRhdG9zKGtleSwgZGF0b3MpIHtcclxuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0b3MpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFlckxlYWRlcmJvYXJkKHRpcG9MZWFkZXJib2FyZCkge1xyXG4gIGNvbnN0IGRhdG9zTGVhZGVyYm9hcmQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aXBvTGVhZGVyYm9hcmQpO1xyXG5cclxuICByZXR1cm4gSlNPTi5wYXJzZShkYXRvc0xlYWRlcmJvYXJkKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYWVySnVnYWRvcih1c2VybmFtZSkge1xyXG4gIGNvbnN0IGRhdG9zSnVnYWRvciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHVzZXJuYW1lKTtcclxuXHJcbiAgcmV0dXJuIEpTT04ucGFyc2UoZGF0b3NKdWdhZG9yKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYWVyTGlzdGFkb0xlYWRlcmJvYXJkcygpIHtcclxuICBjb25zdCBsaXN0YWRvTGVhZGVyYm9hcmRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RhZG9MZWFkZXJib2FyZHMnKTtcclxuICByZXR1cm4gSlNPTi5wYXJzZShsaXN0YWRvTGVhZGVyYm9hcmRzKTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosT0FBTyxTQUFTRSxZQUFZQSxDQUFDQyxHQUFHLEVBQUVDLEtBQUssRUFBRTtFQUFBSixjQUFBLEdBQUFLLENBQUE7RUFBQUwsY0FBQSxHQUFBTSxDQUFBO0VBQ3ZDLElBQUksQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUNMLEdBQUcsQ0FBQyxFQUFFO0lBQUFILGNBQUEsR0FBQVMsQ0FBQTtJQUFBVCxjQUFBLEdBQUFNLENBQUE7SUFDOUJDLFlBQVksQ0FBQ0csT0FBTyxDQUFDUCxHQUFHLEVBQUVRLElBQUksQ0FBQ0MsU0FBUyxDQUFDUixLQUFLLENBQUMsQ0FBQztFQUNsRCxDQUFDO0lBQUFKLGNBQUEsR0FBQVMsQ0FBQTtFQUFBO0FBQ0g7QUFFQSxPQUFPLGVBQWVJLGdCQUFnQkEsQ0FBQ0MsZUFBZSxFQUFFO0VBQUFkLGNBQUEsR0FBQUssQ0FBQTtFQUN0RCxNQUFNVSxnQkFBZ0IsSUFBQWYsY0FBQSxHQUFBTSxDQUFBLE9BQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDTSxlQUFlLENBQUM7RUFBQ2QsY0FBQSxHQUFBTSxDQUFBO0VBRS9ELE9BQU9LLElBQUksQ0FBQ0ssS0FBSyxDQUFDRCxnQkFBZ0IsQ0FBQztBQUNyQztBQUVBLE9BQU8sZUFBZUUsWUFBWUEsQ0FBQ0MsUUFBUSxFQUFFO0VBQUFsQixjQUFBLEdBQUFLLENBQUE7RUFDM0MsTUFBTWMsWUFBWSxJQUFBbkIsY0FBQSxHQUFBTSxDQUFBLE9BQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDVSxRQUFRLENBQUM7RUFBQ2xCLGNBQUEsR0FBQU0sQ0FBQTtFQUVwRCxPQUFPSyxJQUFJLENBQUNLLEtBQUssQ0FBQ0csWUFBWSxDQUFDO0FBQ2pDO0FBRUEsT0FBTyxlQUFlQyx3QkFBd0JBLENBQUEsRUFBRztFQUFBcEIsY0FBQSxHQUFBSyxDQUFBO0VBQy9DLE1BQU1nQixtQkFBbUIsSUFBQXJCLGNBQUEsR0FBQU0sQ0FBQSxPQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztFQUFDUixjQUFBLEdBQUFNLENBQUE7RUFDeEUsT0FBT0ssSUFBSSxDQUFDSyxLQUFLLENBQUNLLG1CQUFtQixDQUFDO0FBQ3hDIn0=