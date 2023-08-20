function cov_2a1bfbu1y7() {
  var path = "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\entidades\\JugadorEnLeaderboard.js";
  var hash = "6324c733a552686694829db83d0c917e9f1fd67e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\entidades\\JugadorEnLeaderboard.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 82
        }
      },
      "1": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 55
        }
      },
      "2": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 25
        }
      },
      "3": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 43
        }
      },
      "4": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 45
        }
      },
      "5": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 41
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
            line: 17,
            column: 4
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 17
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 23
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 14,
            column: 22
          },
          end: {
            line: 14,
            column: 23
          }
        }],
        line: 14
      },
      "1": {
        loc: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 24
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 15,
            column: 23
          },
          end: {
            line: 15,
            column: 24
          }
        }],
        line: 15
      },
      "2": {
        loc: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 22
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 16,
            column: 21
          },
          end: {
            line: 16,
            column: 22
          }
        }],
        line: 16
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
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
    hash: "6324c733a552686694829db83d0c917e9f1fd67e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2a1bfbu1y7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2a1bfbu1y7();
import Jugador from './Jugador.js';
class JugadorEnLeaderboard extends Jugador {
  constructor(username, nombre, titulo, pais, seguidores, imagenPerfil, enlacePerfil, posicionEnLeaderboard, rating, partidasGanadas = (cov_2a1bfbu1y7().b[0][0]++, 0), partidasPerdidas = (cov_2a1bfbu1y7().b[1][0]++, 0), partidasTablas = (cov_2a1bfbu1y7().b[2][0]++, 0)) {
    cov_2a1bfbu1y7().f[0]++;
    cov_2a1bfbu1y7().s[0]++;
    super(username, nombre, titulo, pais, seguidores, imagenPerfil, enlacePerfil);
    cov_2a1bfbu1y7().s[1]++;
    this.posicionEnLeaderboard = posicionEnLeaderboard;
    cov_2a1bfbu1y7().s[2]++;
    this.rating = rating;
    cov_2a1bfbu1y7().s[3]++;
    this.partidasGanadas = partidasGanadas;
    cov_2a1bfbu1y7().s[4]++;
    this.partidasPerdidas = partidasPerdidas;
    cov_2a1bfbu1y7().s[5]++;
    this.partidasTablas = partidasTablas;
  }
}
export default JugadorEnLeaderboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmExYmZidTF5NyIsImFjdHVhbENvdmVyYWdlIiwiSnVnYWRvciIsIkp1Z2Fkb3JFbkxlYWRlcmJvYXJkIiwiY29uc3RydWN0b3IiLCJ1c2VybmFtZSIsIm5vbWJyZSIsInRpdHVsbyIsInBhaXMiLCJzZWd1aWRvcmVzIiwiaW1hZ2VuUGVyZmlsIiwiZW5sYWNlUGVyZmlsIiwicG9zaWNpb25FbkxlYWRlcmJvYXJkIiwicmF0aW5nIiwicGFydGlkYXNHYW5hZGFzIiwiYiIsInBhcnRpZGFzUGVyZGlkYXMiLCJwYXJ0aWRhc1RhYmxhcyIsImYiLCJzIl0sInNvdXJjZXMiOlsiSnVnYWRvckVuTGVhZGVyYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEp1Z2Fkb3IgZnJvbSAnLi9KdWdhZG9yLmpzJztcclxuXHJcbmNsYXNzIEp1Z2Fkb3JFbkxlYWRlcmJvYXJkIGV4dGVuZHMgSnVnYWRvciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB1c2VybmFtZSxcclxuICAgIG5vbWJyZSxcclxuICAgIHRpdHVsbyxcclxuICAgIHBhaXMsXHJcbiAgICBzZWd1aWRvcmVzLFxyXG4gICAgaW1hZ2VuUGVyZmlsLFxyXG4gICAgZW5sYWNlUGVyZmlsLFxyXG4gICAgcG9zaWNpb25FbkxlYWRlcmJvYXJkLFxyXG4gICAgcmF0aW5nLFxyXG4gICAgcGFydGlkYXNHYW5hZGFzID0gMCxcclxuICAgIHBhcnRpZGFzUGVyZGlkYXMgPSAwLFxyXG4gICAgcGFydGlkYXNUYWJsYXMgPSAwLFxyXG4gICkge1xyXG4gICAgc3VwZXIodXNlcm5hbWUsIG5vbWJyZSwgdGl0dWxvLCBwYWlzLCBzZWd1aWRvcmVzLCBpbWFnZW5QZXJmaWwsIGVubGFjZVBlcmZpbCk7XHJcbiAgICB0aGlzLnBvc2ljaW9uRW5MZWFkZXJib2FyZCA9IHBvc2ljaW9uRW5MZWFkZXJib2FyZDtcclxuICAgIHRoaXMucmF0aW5nID0gcmF0aW5nO1xyXG4gICAgdGhpcy5wYXJ0aWRhc0dhbmFkYXMgPSBwYXJ0aWRhc0dhbmFkYXM7XHJcbiAgICB0aGlzLnBhcnRpZGFzUGVyZGlkYXMgPSBwYXJ0aWRhc1BlcmRpZGFzO1xyXG4gICAgdGhpcy5wYXJ0aWRhc1RhYmxhcyA9IHBhcnRpZGFzVGFibGFzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSnVnYWRvckVuTGVhZGVyYm9hcmQ7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosT0FBT0UsT0FBTyxNQUFNLGNBQWM7QUFFbEMsTUFBTUMsb0JBQW9CLFNBQVNELE9BQU8sQ0FBQztFQUN6Q0UsV0FBV0EsQ0FDVEMsUUFBUSxFQUNSQyxNQUFNLEVBQ05DLE1BQU0sRUFDTkMsSUFBSSxFQUNKQyxVQUFVLEVBQ1ZDLFlBQVksRUFDWkMsWUFBWSxFQUNaQyxxQkFBcUIsRUFDckJDLE1BQU0sRUFDTkMsZUFBZSxJQUFBZCxjQUFBLEdBQUFlLENBQUEsVUFBRyxDQUFDLEdBQ25CQyxnQkFBZ0IsSUFBQWhCLGNBQUEsR0FBQWUsQ0FBQSxVQUFHLENBQUMsR0FDcEJFLGNBQWMsSUFBQWpCLGNBQUEsR0FBQWUsQ0FBQSxVQUFHLENBQUMsR0FDbEI7SUFBQWYsY0FBQSxHQUFBa0IsQ0FBQTtJQUFBbEIsY0FBQSxHQUFBbUIsQ0FBQTtJQUNBLEtBQUssQ0FBQ2QsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxDQUFDO0lBQUNYLGNBQUEsR0FBQW1CLENBQUE7SUFDOUUsSUFBSSxDQUFDUCxxQkFBcUIsR0FBR0EscUJBQXFCO0lBQUNaLGNBQUEsR0FBQW1CLENBQUE7SUFDbkQsSUFBSSxDQUFDTixNQUFNLEdBQUdBLE1BQU07SUFBQ2IsY0FBQSxHQUFBbUIsQ0FBQTtJQUNyQixJQUFJLENBQUNMLGVBQWUsR0FBR0EsZUFBZTtJQUFDZCxjQUFBLEdBQUFtQixDQUFBO0lBQ3ZDLElBQUksQ0FBQ0gsZ0JBQWdCLEdBQUdBLGdCQUFnQjtJQUFDaEIsY0FBQSxHQUFBbUIsQ0FBQTtJQUN6QyxJQUFJLENBQUNGLGNBQWMsR0FBR0EsY0FBYztFQUN0QztBQUNGO0FBRUEsZUFBZWQsb0JBQW9CIn0=