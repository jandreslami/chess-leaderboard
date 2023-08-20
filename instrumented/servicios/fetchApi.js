function cov_210xg1yk2i() {
  var path = "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\servicios\\fetchApi.js";
  var hash = "1472c88d34db5ee7ddea066dadadb77998078d4e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\servicios\\fetchApi.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "1": {
        start: {
          line: 5,
          column: 22
        },
        end: {
          line: 5,
          column: 50
        }
      },
      "2": {
        start: {
          line: 6,
          column: 18
        },
        end: {
          line: 6,
          column: 40
        }
      },
      "3": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 17
        }
      },
      "4": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 25
        }
      },
      "5": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "6": {
        start: {
          line: 15,
          column: 22
        },
        end: {
          line: 15,
          column: 67
        }
      },
      "7": {
        start: {
          line: 16,
          column: 18
        },
        end: {
          line: 16,
          column: 40
        }
      },
      "8": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 17
        }
      },
      "9": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "traerLeaderboards",
        decl: {
          start: {
            line: 3,
            column: 22
          },
          end: {
            line: 3,
            column: 39
          }
        },
        loc: {
          start: {
            line: 3,
            column: 57
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "traerDatosJugador",
        decl: {
          start: {
            line: 13,
            column: 22
          },
          end: {
            line: 13,
            column: 39
          }
        },
        loc: {
          start: {
            line: 13,
            column: 86
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 58
          },
          end: {
            line: 13,
            column: 84
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 13,
            column: 69
          },
          end: {
            line: 13,
            column: 84
          }
        }],
        line: 13
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
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1472c88d34db5ee7ddea066dadadb77998078d4e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_210xg1yk2i = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_210xg1yk2i();
/* eslint-disable consistent-return */
/* eslint-disable no-console */
export async function traerLeaderboards(urlLeaderboards) {
  cov_210xg1yk2i().f[0]++;
  cov_210xg1yk2i().s[0]++;
  try {
    const respuesta = (cov_210xg1yk2i().s[1]++, await fetch(urlLeaderboards));
    const datos = (cov_210xg1yk2i().s[2]++, await respuesta.json());
    cov_210xg1yk2i().s[3]++;
    return datos;
  } catch (error) {
    cov_210xg1yk2i().s[4]++;
    console.error(error);
  }
}
export async function traerDatosJugador(urlPerfilJugador, username = (cov_210xg1yk2i().b[0][0]++, 'magnuscarlsen')) {
  cov_210xg1yk2i().f[1]++;
  cov_210xg1yk2i().s[5]++;
  try {
    const respuesta = (cov_210xg1yk2i().s[6]++, await fetch(`${urlPerfilJugador}${username}`));
    const datos = (cov_210xg1yk2i().s[7]++, await respuesta.json());
    cov_210xg1yk2i().s[8]++;
    return datos;
  } catch (error) {
    cov_210xg1yk2i().s[9]++;
    console.error(error);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjEweGcxeWsyaSIsImFjdHVhbENvdmVyYWdlIiwidHJhZXJMZWFkZXJib2FyZHMiLCJ1cmxMZWFkZXJib2FyZHMiLCJmIiwicyIsInJlc3B1ZXN0YSIsImZldGNoIiwiZGF0b3MiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwidHJhZXJEYXRvc0p1Z2Fkb3IiLCJ1cmxQZXJmaWxKdWdhZG9yIiwidXNlcm5hbWUiLCJiIl0sInNvdXJjZXMiOlsiZmV0Y2hBcGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhZXJMZWFkZXJib2FyZHModXJsTGVhZGVyYm9hcmRzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGZldGNoKHVybExlYWRlcmJvYXJkcyk7XHJcbiAgICBjb25zdCBkYXRvcyA9IGF3YWl0IHJlc3B1ZXN0YS5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0b3M7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYWVyRGF0b3NKdWdhZG9yKHVybFBlcmZpbEp1Z2Fkb3IsIHVzZXJuYW1lID0gJ21hZ251c2NhcmxzZW4nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGZldGNoKGAke3VybFBlcmZpbEp1Z2Fkb3J9JHt1c2VybmFtZX1gKTtcclxuICAgIGNvbnN0IGRhdG9zID0gYXdhaXQgcmVzcHVlc3RhLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRvcztcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaO0FBQ0E7QUFDQSxPQUFPLGVBQWVFLGlCQUFpQkEsQ0FBQ0MsZUFBZSxFQUFFO0VBQUFILGNBQUEsR0FBQUksQ0FBQTtFQUFBSixjQUFBLEdBQUFLLENBQUE7RUFDdkQsSUFBSTtJQUNGLE1BQU1DLFNBQVMsSUFBQU4sY0FBQSxHQUFBSyxDQUFBLE9BQUcsTUFBTUUsS0FBSyxDQUFDSixlQUFlLENBQUM7SUFDOUMsTUFBTUssS0FBSyxJQUFBUixjQUFBLEdBQUFLLENBQUEsT0FBRyxNQUFNQyxTQUFTLENBQUNHLElBQUksQ0FBQyxDQUFDO0lBQUNULGNBQUEsR0FBQUssQ0FBQTtJQUNyQyxPQUFPRyxLQUFLO0VBQ2QsQ0FBQyxDQUFDLE9BQU9FLEtBQUssRUFBRTtJQUFBVixjQUFBLEdBQUFLLENBQUE7SUFDZE0sT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUssQ0FBQztFQUN0QjtBQUNGO0FBRUEsT0FBTyxlQUFlRSxpQkFBaUJBLENBQUNDLGdCQUFnQixFQUFFQyxRQUFRLElBQUFkLGNBQUEsR0FBQWUsQ0FBQSxVQUFHLGVBQWUsR0FBRTtFQUFBZixjQUFBLEdBQUFJLENBQUE7RUFBQUosY0FBQSxHQUFBSyxDQUFBO0VBQ3BGLElBQUk7SUFDRixNQUFNQyxTQUFTLElBQUFOLGNBQUEsR0FBQUssQ0FBQSxPQUFHLE1BQU1FLEtBQUssQ0FBRSxHQUFFTSxnQkFBaUIsR0FBRUMsUUFBUyxFQUFDLENBQUM7SUFDL0QsTUFBTU4sS0FBSyxJQUFBUixjQUFBLEdBQUFLLENBQUEsT0FBRyxNQUFNQyxTQUFTLENBQUNHLElBQUksQ0FBQyxDQUFDO0lBQUNULGNBQUEsR0FBQUssQ0FBQTtJQUNyQyxPQUFPRyxLQUFLO0VBQ2QsQ0FBQyxDQUFDLE9BQU9FLEtBQUssRUFBRTtJQUFBVixjQUFBLEdBQUFLLENBQUE7SUFDZE0sT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUssQ0FBQztFQUN0QjtBQUNGIn0=