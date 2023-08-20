function cov_2ka5busna8() {
  var path = "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\entidades\\Jugador.js";
  var hash = "ecb6747d9cd504450ff4fb2494d15f2f58a87a56";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\entidades\\Jugador.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 29
        }
      },
      "1": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 25
        }
      },
      "2": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 25
        }
      },
      "3": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 21
        }
      },
      "4": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 33
        }
      },
      "5": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 37
        }
      },
      "6": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 37
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 26
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 9,
            column: 17
          },
          end: {
            line: 9,
            column: 26
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 28
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 10,
            column: 19
          },
          end: {
            line: 10,
            column: 28
          }
        }],
        line: 10
      },
      "2": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 28
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 11,
            column: 19
          },
          end: {
            line: 11,
            column: 28
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0],
      "2": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ecb6747d9cd504450ff4fb2494d15f2f58a87a56"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ka5busna8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2ka5busna8();
/* eslint-disable no-constructor-return */

class Jugador {
  constructor(username, nombre, titulo, pais, seguidores = (cov_2ka5busna8().b[0][0]++, undefined), imagenPerfil = (cov_2ka5busna8().b[1][0]++, undefined), enlacePerfil = (cov_2ka5busna8().b[2][0]++, undefined)) {
    cov_2ka5busna8().f[0]++;
    cov_2ka5busna8().s[0]++;
    this.username = username;
    cov_2ka5busna8().s[1]++;
    this.nombre = nombre;
    cov_2ka5busna8().s[2]++;
    this.titulo = titulo;
    cov_2ka5busna8().s[3]++;
    this.pais = pais;
    cov_2ka5busna8().s[4]++;
    this.seguidores = seguidores;
    cov_2ka5busna8().s[5]++;
    this.imagenPerfil = imagenPerfil;
    cov_2ka5busna8().s[6]++;
    this.enlacePerfil = enlacePerfil;
  }
}
export default Jugador;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmthNWJ1c25hOCIsImFjdHVhbENvdmVyYWdlIiwiSnVnYWRvciIsImNvbnN0cnVjdG9yIiwidXNlcm5hbWUiLCJub21icmUiLCJ0aXR1bG8iLCJwYWlzIiwic2VndWlkb3JlcyIsImIiLCJ1bmRlZmluZWQiLCJpbWFnZW5QZXJmaWwiLCJlbmxhY2VQZXJmaWwiLCJmIiwicyJdLCJzb3VyY2VzIjpbIkp1Z2Fkb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc3RydWN0b3ItcmV0dXJuICovXHJcblxyXG5jbGFzcyBKdWdhZG9yIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHVzZXJuYW1lLFxyXG4gICAgbm9tYnJlLFxyXG4gICAgdGl0dWxvLFxyXG4gICAgcGFpcyxcclxuICAgIHNlZ3VpZG9yZXMgPSB1bmRlZmluZWQsXHJcbiAgICBpbWFnZW5QZXJmaWwgPSB1bmRlZmluZWQsXHJcbiAgICBlbmxhY2VQZXJmaWwgPSB1bmRlZmluZWQsXHJcbiAgKSB7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICB0aGlzLm5vbWJyZSA9IG5vbWJyZTtcclxuICAgIHRoaXMudGl0dWxvID0gdGl0dWxvO1xyXG4gICAgdGhpcy5wYWlzID0gcGFpcztcclxuICAgIHRoaXMuc2VndWlkb3JlcyA9IHNlZ3VpZG9yZXM7XHJcbiAgICB0aGlzLmltYWdlblBlcmZpbCA9IGltYWdlblBlcmZpbDtcclxuICAgIHRoaXMuZW5sYWNlUGVyZmlsID0gZW5sYWNlUGVyZmlsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSnVnYWRvcjtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaOztBQUVBLE1BQU1FLE9BQU8sQ0FBQztFQUNaQyxXQUFXQSxDQUNUQyxRQUFRLEVBQ1JDLE1BQU0sRUFDTkMsTUFBTSxFQUNOQyxJQUFJLEVBQ0pDLFVBQVUsSUFBQVIsY0FBQSxHQUFBUyxDQUFBLFVBQUdDLFNBQVMsR0FDdEJDLFlBQVksSUFBQVgsY0FBQSxHQUFBUyxDQUFBLFVBQUdDLFNBQVMsR0FDeEJFLFlBQVksSUFBQVosY0FBQSxHQUFBUyxDQUFBLFVBQUdDLFNBQVMsR0FDeEI7SUFBQVYsY0FBQSxHQUFBYSxDQUFBO0lBQUFiLGNBQUEsR0FBQWMsQ0FBQTtJQUNBLElBQUksQ0FBQ1YsUUFBUSxHQUFHQSxRQUFRO0lBQUNKLGNBQUEsR0FBQWMsQ0FBQTtJQUN6QixJQUFJLENBQUNULE1BQU0sR0FBR0EsTUFBTTtJQUFDTCxjQUFBLEdBQUFjLENBQUE7SUFDckIsSUFBSSxDQUFDUixNQUFNLEdBQUdBLE1BQU07SUFBQ04sY0FBQSxHQUFBYyxDQUFBO0lBQ3JCLElBQUksQ0FBQ1AsSUFBSSxHQUFHQSxJQUFJO0lBQUNQLGNBQUEsR0FBQWMsQ0FBQTtJQUNqQixJQUFJLENBQUNOLFVBQVUsR0FBR0EsVUFBVTtJQUFDUixjQUFBLEdBQUFjLENBQUE7SUFDN0IsSUFBSSxDQUFDSCxZQUFZLEdBQUdBLFlBQVk7SUFBQ1gsY0FBQSxHQUFBYyxDQUFBO0lBQ2pDLElBQUksQ0FBQ0YsWUFBWSxHQUFHQSxZQUFZO0VBQ2xDO0FBQ0Y7QUFFQSxlQUFlVixPQUFPIn0=