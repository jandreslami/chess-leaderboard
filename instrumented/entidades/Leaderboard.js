function cov_scxjdm78() {
  var path = "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\entidades\\Leaderboard.js";
  var hash = "607bf66c2abe9c1b65d8c6261ad887eca9bb501a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\entidades\\Leaderboard.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 21
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 71
        }
      },
      "2": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 44
        }
      },
      "3": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 12,
          column: 5
        }
      },
      "4": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 18
        }
      },
      "5": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 2
          },
          end: {
            line: 3,
            column: 3
          }
        },
        loc: {
          start: {
            line: 3,
            column: 51
          },
          end: {
            line: 7,
            column: 3
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        loc: {
          start: {
            line: 9,
            column: 17
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        }, {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        }],
        line: 10
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
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "607bf66c2abe9c1b65d8c6261ad887eca9bb501a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_scxjdm78 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_scxjdm78();
/* eslint-disable no-restricted-syntax */
class Leaderboard {
  constructor(tipo, rankingJugadoresEnLeaderboard) {
    cov_scxjdm78().f[0]++;
    cov_scxjdm78().s[0]++;
    this.tipo = tipo;
    cov_scxjdm78().s[1]++;
    this.rankingJugadoresEnLeaderboard = rankingJugadoresEnLeaderboard;
    cov_scxjdm78().s[2]++;
    this.esConPuntaje = this.esConPuntaje();
  }
  esConPuntaje() {
    cov_scxjdm78().f[1]++;
    cov_scxjdm78().s[3]++;
    if (this.rankingJugadoresEnLeaderboard[0].partidasGanadas === 0) {
      cov_scxjdm78().b[0][0]++;
      cov_scxjdm78().s[4]++;
      return true;
    } else {
      cov_scxjdm78().b[0][1]++;
    }
    cov_scxjdm78().s[5]++;
    return false;
  }
}
export default Leaderboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3Zfc2N4amRtNzgiLCJhY3R1YWxDb3ZlcmFnZSIsIkxlYWRlcmJvYXJkIiwiY29uc3RydWN0b3IiLCJ0aXBvIiwicmFua2luZ0p1Z2Fkb3Jlc0VuTGVhZGVyYm9hcmQiLCJmIiwicyIsImVzQ29uUHVudGFqZSIsInBhcnRpZGFzR2FuYWRhcyIsImIiXSwic291cmNlcyI6WyJMZWFkZXJib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG5jbGFzcyBMZWFkZXJib2FyZCB7XHJcbiAgY29uc3RydWN0b3IodGlwbywgcmFua2luZ0p1Z2Fkb3Jlc0VuTGVhZGVyYm9hcmQpIHtcclxuICAgIHRoaXMudGlwbyA9IHRpcG87XHJcbiAgICB0aGlzLnJhbmtpbmdKdWdhZG9yZXNFbkxlYWRlcmJvYXJkID0gcmFua2luZ0p1Z2Fkb3Jlc0VuTGVhZGVyYm9hcmQ7XHJcbiAgICB0aGlzLmVzQ29uUHVudGFqZSA9IHRoaXMuZXNDb25QdW50YWplKCk7XHJcbiAgfVxyXG5cclxuICBlc0NvblB1bnRhamUoKSB7XHJcbiAgICBpZiAodGhpcy5yYW5raW5nSnVnYWRvcmVzRW5MZWFkZXJib2FyZFswXS5wYXJ0aWRhc0dhbmFkYXMgPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlYWRlcmJvYXJkO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxZQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxZQUFBO0FBZlo7QUFDQSxNQUFNRSxXQUFXLENBQUM7RUFDaEJDLFdBQVdBLENBQUNDLElBQUksRUFBRUMsNkJBQTZCLEVBQUU7SUFBQUwsWUFBQSxHQUFBTSxDQUFBO0lBQUFOLFlBQUEsR0FBQU8sQ0FBQTtJQUMvQyxJQUFJLENBQUNILElBQUksR0FBR0EsSUFBSTtJQUFDSixZQUFBLEdBQUFPLENBQUE7SUFDakIsSUFBSSxDQUFDRiw2QkFBNkIsR0FBR0EsNkJBQTZCO0lBQUNMLFlBQUEsR0FBQU8sQ0FBQTtJQUNuRSxJQUFJLENBQUNDLFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVksQ0FBQyxDQUFDO0VBQ3pDO0VBRUFBLFlBQVlBLENBQUEsRUFBRztJQUFBUixZQUFBLEdBQUFNLENBQUE7SUFBQU4sWUFBQSxHQUFBTyxDQUFBO0lBQ2IsSUFBSSxJQUFJLENBQUNGLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDSSxlQUFlLEtBQUssQ0FBQyxFQUFFO01BQUFULFlBQUEsR0FBQVUsQ0FBQTtNQUFBVixZQUFBLEdBQUFPLENBQUE7TUFDL0QsT0FBTyxJQUFJO0lBQ2IsQ0FBQztNQUFBUCxZQUFBLEdBQUFVLENBQUE7SUFBQTtJQUFBVixZQUFBLEdBQUFPLENBQUE7SUFBQyxPQUFPLEtBQUs7RUFDaEI7QUFDRjtBQUVBLGVBQWVMLFdBQVcifQ==