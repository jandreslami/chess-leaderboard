function cov_16jo2ryqty() {
  var path = "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\utils.js";
  var hash = "305f1bd7f4a884ae786d9b8a8a59cc96b9127407";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\utils.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 3,
          column: 48
        }
      },
      "1": {
        start: {
          line: 7,
          column: 30
        },
        end: {
          line: 7,
          column: 41
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "3": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 58
        }
      },
      "4": {
        start: {
          line: 12,
          column: 19
        },
        end: {
          line: 12,
          column: 49
        }
      },
      "5": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 62
        }
      },
      "6": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 39
        }
      },
      "7": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "devolverPaisJugador",
        decl: {
          start: {
            line: 1,
            column: 9
          },
          end: {
            line: 1,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1,
            column: 45
          },
          end: {
            line: 4,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "crearBandera",
        decl: {
          start: {
            line: 5,
            column: 9
          },
          end: {
            line: 5,
            column: 21
          }
        },
        loc: {
          start: {
            line: 5,
            column: 53
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }, {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }],
        line: 8
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
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "305f1bd7f4a884ae786d9b8a8a59cc96b9127407"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_16jo2ryqty = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_16jo2ryqty();
function devolverPaisJugador(urlPaisJugador) {
  cov_16jo2ryqty().f[0]++;
  cov_16jo2ryqty().s[0]++;
  // devuelve el pais del jugador como string (p.ej."es" o "ar")
  return urlPaisJugador.slice(34).toLowerCase();
}
function crearBandera(paisJugador, banderasExoticas) {
  cov_16jo2ryqty().f[1]++;
  // devuelve un span HTML element que muestra la bandera con flag-icons
  let paisDefinitivoJugador = (cov_16jo2ryqty().s[1]++, paisJugador);
  cov_16jo2ryqty().s[2]++;
  if (paisJugador in banderasExoticas) {
    cov_16jo2ryqty().b[0][0]++;
    cov_16jo2ryqty().s[3]++;
    paisDefinitivoJugador = banderasExoticas[paisJugador];
  } else {
    cov_16jo2ryqty().b[0][1]++;
  }
  const $bandera = (cov_16jo2ryqty().s[4]++, document.createElement('span'));
  cov_16jo2ryqty().s[5]++;
  $bandera.classList.add('fi', `fi-${paisDefinitivoJugador}`);
  cov_16jo2ryqty().s[6]++;
  $bandera.style.paddingBottom = '3px';
  cov_16jo2ryqty().s[7]++;
  return $bandera;
}
export { crearBandera, devolverPaisJugador };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTZqbzJyeXF0eSIsImFjdHVhbENvdmVyYWdlIiwiZGV2b2x2ZXJQYWlzSnVnYWRvciIsInVybFBhaXNKdWdhZG9yIiwiZiIsInMiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwiY3JlYXJCYW5kZXJhIiwicGFpc0p1Z2Fkb3IiLCJiYW5kZXJhc0V4b3RpY2FzIiwicGFpc0RlZmluaXRpdm9KdWdhZG9yIiwiYiIsIiRiYW5kZXJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJwYWRkaW5nQm90dG9tIl0sInNvdXJjZXMiOlsidXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZGV2b2x2ZXJQYWlzSnVnYWRvcih1cmxQYWlzSnVnYWRvcikge1xyXG4gIC8vIGRldnVlbHZlIGVsIHBhaXMgZGVsIGp1Z2Fkb3IgY29tbyBzdHJpbmcgKHAuZWouXCJlc1wiIG8gXCJhclwiKVxyXG4gIHJldHVybiB1cmxQYWlzSnVnYWRvci5zbGljZSgzNCkudG9Mb3dlckNhc2UoKTtcclxufVxyXG5mdW5jdGlvbiBjcmVhckJhbmRlcmEocGFpc0p1Z2Fkb3IsIGJhbmRlcmFzRXhvdGljYXMpIHtcclxuICAvLyBkZXZ1ZWx2ZSB1biBzcGFuIEhUTUwgZWxlbWVudCBxdWUgbXVlc3RyYSBsYSBiYW5kZXJhIGNvbiBmbGFnLWljb25zXHJcbiAgbGV0IHBhaXNEZWZpbml0aXZvSnVnYWRvciA9IHBhaXNKdWdhZG9yO1xyXG4gIGlmIChwYWlzSnVnYWRvciBpbiBiYW5kZXJhc0V4b3RpY2FzKSB7XHJcbiAgICBwYWlzRGVmaW5pdGl2b0p1Z2Fkb3IgPSBiYW5kZXJhc0V4b3RpY2FzW3BhaXNKdWdhZG9yXTtcclxuICB9XHJcblxyXG4gIGNvbnN0ICRiYW5kZXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICRiYW5kZXJhLmNsYXNzTGlzdC5hZGQoJ2ZpJywgYGZpLSR7cGFpc0RlZmluaXRpdm9KdWdhZG9yfWApO1xyXG4gICRiYW5kZXJhLnN0eWxlLnBhZGRpbmdCb3R0b20gPSAnM3B4JztcclxuICByZXR1cm4gJGJhbmRlcmE7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWFyQmFuZGVyYSwgZGV2b2x2ZXJQYWlzSnVnYWRvciB9O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLFNBQVNFLG1CQUFtQkEsQ0FBQ0MsY0FBYyxFQUFFO0VBQUFILGNBQUEsR0FBQUksQ0FBQTtFQUFBSixjQUFBLEdBQUFLLENBQUE7RUFDM0M7RUFDQSxPQUFPRixjQUFjLENBQUNHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUM7QUFDL0M7QUFDQSxTQUFTQyxZQUFZQSxDQUFDQyxXQUFXLEVBQUVDLGdCQUFnQixFQUFFO0VBQUFWLGNBQUEsR0FBQUksQ0FBQTtFQUNuRDtFQUNBLElBQUlPLHFCQUFxQixJQUFBWCxjQUFBLEdBQUFLLENBQUEsT0FBR0ksV0FBVztFQUFDVCxjQUFBLEdBQUFLLENBQUE7RUFDeEMsSUFBSUksV0FBVyxJQUFJQyxnQkFBZ0IsRUFBRTtJQUFBVixjQUFBLEdBQUFZLENBQUE7SUFBQVosY0FBQSxHQUFBSyxDQUFBO0lBQ25DTSxxQkFBcUIsR0FBR0QsZ0JBQWdCLENBQUNELFdBQVcsQ0FBQztFQUN2RCxDQUFDO0lBQUFULGNBQUEsR0FBQVksQ0FBQTtFQUFBO0VBRUQsTUFBTUMsUUFBUSxJQUFBYixjQUFBLEdBQUFLLENBQUEsT0FBR1MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQUNmLGNBQUEsR0FBQUssQ0FBQTtFQUNoRFEsUUFBUSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLEVBQUcsTUFBS04scUJBQXNCLEVBQUMsQ0FBQztFQUFDWCxjQUFBLEdBQUFLLENBQUE7RUFDNURRLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxhQUFhLEdBQUcsS0FBSztFQUFDbkIsY0FBQSxHQUFBSyxDQUFBO0VBQ3JDLE9BQU9RLFFBQVE7QUFDakI7QUFFQSxTQUFTTCxZQUFZLEVBQUVOLG1CQUFtQiJ9