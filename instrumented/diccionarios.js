function cov_liovgw451() {
  var path = "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\diccionarios.js";
  var hash = "56feba5e1deac94ee22b99ffbac5b79827bd3fa9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\welcome\\Documents\\GitHub\\chess-leaderboard\\src\\diccionarios.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 26
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "1": {
        start: {
          line: 18,
          column: 16
        },
        end: {
          line: 29,
          column: 1
        }
      },
      "2": {
        start: {
          line: 31,
          column: 26
        },
        end: {
          line: 42,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "56feba5e1deac94ee22b99ffbac5b79827bd3fa9"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_liovgw451 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_liovgw451();
/* eslint-disable linebreak-style */
const TIPOS_LEADERBOARD = (cov_liovgw451().s[0]++, {
  daily: 'Por Correspondencia',
  daily960: '960 Por Correspondencia',
  live_rapid: 'Rápida',
  live_blitz: 'Blitz',
  live_bullet: 'Bala',
  live_bughouse: 'Dobles (Pasapiezas)',
  live_blitz960: '960 en Vivo',
  live_threecheck: '3 Jaques',
  live_crazyhouse: 'Crazyhouse',
  live_kingofthehill: 'Rey de la Colina',
  tactics: 'Problemas',
  rush: 'Rush',
  battle: 'Batalla de Problemas'
});
const TITULOS = (cov_liovgw451().s[1]++, {
  GM: 'Gran Maestro',
  WGM: 'Gran Maestro Femenino',
  IM: 'Maestro Internacional',
  WIM: 'Maestro Internacional Femenino',
  FM: 'Maestro FIDE',
  WFM: 'Maestro FIDE Femenino',
  NM: 'Maestro Nacional',
  WNM: 'Maestro Nacional Femenino',
  CM: 'Maestro Candidato',
  WCM: 'Maestro Candidato Femenino'
});
const BANDERAS_EXOTICAS = (cov_liovgw451().s[2]++, {
  xa: 'ic',
  // Canary Islands
  xb: 'es-pv',
  // "Basque Country"
  xc: 'es-ct',
  // "Catalonia".
  xe: 'gb-eng',
  // England",
  xg: 'es-ga',
  // Galicia"
  xk: 'xk',
  // Kosovo"
  xp: 'ps',
  // Palestine"
  xs: 'gb-sct',
  // Scotland"
  xw: 'gb-wls',
  // Wales"
  xx: 'un' // International"
});

export { TIPOS_LEADERBOARD, BANDERAS_EXOTICAS, TITULOS };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfbGlvdmd3NDUxIiwiYWN0dWFsQ292ZXJhZ2UiLCJUSVBPU19MRUFERVJCT0FSRCIsInMiLCJkYWlseSIsImRhaWx5OTYwIiwibGl2ZV9yYXBpZCIsImxpdmVfYmxpdHoiLCJsaXZlX2J1bGxldCIsImxpdmVfYnVnaG91c2UiLCJsaXZlX2JsaXR6OTYwIiwibGl2ZV90aHJlZWNoZWNrIiwibGl2ZV9jcmF6eWhvdXNlIiwibGl2ZV9raW5nb2Z0aGVoaWxsIiwidGFjdGljcyIsInJ1c2giLCJiYXR0bGUiLCJUSVRVTE9TIiwiR00iLCJXR00iLCJJTSIsIldJTSIsIkZNIiwiV0ZNIiwiTk0iLCJXTk0iLCJDTSIsIldDTSIsIkJBTkRFUkFTX0VYT1RJQ0FTIiwieGEiLCJ4YiIsInhjIiwieGUiLCJ4ZyIsInhrIiwieHAiLCJ4cyIsInh3IiwieHgiXSwic291cmNlcyI6WyJkaWNjaW9uYXJpb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmNvbnN0IFRJUE9TX0xFQURFUkJPQVJEID0ge1xyXG4gIGRhaWx5OiAnUG9yIENvcnJlc3BvbmRlbmNpYScsXHJcbiAgZGFpbHk5NjA6ICc5NjAgUG9yIENvcnJlc3BvbmRlbmNpYScsXHJcbiAgbGl2ZV9yYXBpZDogJ1LDoXBpZGEnLFxyXG4gIGxpdmVfYmxpdHo6ICdCbGl0eicsXHJcbiAgbGl2ZV9idWxsZXQ6ICdCYWxhJyxcclxuICBsaXZlX2J1Z2hvdXNlOiAnRG9ibGVzIChQYXNhcGllemFzKScsXHJcbiAgbGl2ZV9ibGl0ejk2MDogJzk2MCBlbiBWaXZvJyxcclxuICBsaXZlX3RocmVlY2hlY2s6ICczIEphcXVlcycsXHJcbiAgbGl2ZV9jcmF6eWhvdXNlOiAnQ3Jhenlob3VzZScsXHJcbiAgbGl2ZV9raW5nb2Z0aGVoaWxsOiAnUmV5IGRlIGxhIENvbGluYScsXHJcbiAgdGFjdGljczogJ1Byb2JsZW1hcycsXHJcbiAgcnVzaDogJ1J1c2gnLFxyXG4gIGJhdHRsZTogJ0JhdGFsbGEgZGUgUHJvYmxlbWFzJyxcclxufTtcclxuXHJcbmNvbnN0IFRJVFVMT1MgPSB7XHJcbiAgR006ICdHcmFuIE1hZXN0cm8nLFxyXG4gIFdHTTogJ0dyYW4gTWFlc3RybyBGZW1lbmlubycsXHJcbiAgSU06ICdNYWVzdHJvIEludGVybmFjaW9uYWwnLFxyXG4gIFdJTTogJ01hZXN0cm8gSW50ZXJuYWNpb25hbCBGZW1lbmlubycsXHJcbiAgRk06ICdNYWVzdHJvIEZJREUnLFxyXG4gIFdGTTogJ01hZXN0cm8gRklERSBGZW1lbmlubycsXHJcbiAgTk06ICdNYWVzdHJvIE5hY2lvbmFsJyxcclxuICBXTk06ICdNYWVzdHJvIE5hY2lvbmFsIEZlbWVuaW5vJyxcclxuICBDTTogJ01hZXN0cm8gQ2FuZGlkYXRvJyxcclxuICBXQ006ICdNYWVzdHJvIENhbmRpZGF0byBGZW1lbmlubycsXHJcbn07XHJcblxyXG5jb25zdCBCQU5ERVJBU19FWE9USUNBUyA9IHtcclxuICB4YTogJ2ljJywgLy8gQ2FuYXJ5IElzbGFuZHNcclxuICB4YjogJ2VzLXB2JywgLy8gXCJCYXNxdWUgQ291bnRyeVwiXHJcbiAgeGM6ICdlcy1jdCcsIC8vIFwiQ2F0YWxvbmlhXCIuXHJcbiAgeGU6ICdnYi1lbmcnLCAvLyBFbmdsYW5kXCIsXHJcbiAgeGc6ICdlcy1nYScsIC8vIEdhbGljaWFcIlxyXG4gIHhrOiAneGsnLCAvLyBLb3Nvdm9cIlxyXG4gIHhwOiAncHMnLCAvLyBQYWxlc3RpbmVcIlxyXG4gIHhzOiAnZ2Itc2N0JywgLy8gU2NvdGxhbmRcIlxyXG4gIHh3OiAnZ2Itd2xzJywgLy8gV2FsZXNcIlxyXG4gIHh4OiAndW4nLCAvLyBJbnRlcm5hdGlvbmFsXCJcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgVElQT1NfTEVBREVSQk9BUkQsIEJBTkRFUkFTX0VYT1RJQ0FTLCBUSVRVTE9TLFxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGFBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGFBQUE7QUFmWjtBQUNBLE1BQU1FLGlCQUFpQixJQUFBRixhQUFBLEdBQUFHLENBQUEsT0FBRztFQUN4QkMsS0FBSyxFQUFFLHFCQUFxQjtFQUM1QkMsUUFBUSxFQUFFLHlCQUF5QjtFQUNuQ0MsVUFBVSxFQUFFLFFBQVE7RUFDcEJDLFVBQVUsRUFBRSxPQUFPO0VBQ25CQyxXQUFXLEVBQUUsTUFBTTtFQUNuQkMsYUFBYSxFQUFFLHFCQUFxQjtFQUNwQ0MsYUFBYSxFQUFFLGFBQWE7RUFDNUJDLGVBQWUsRUFBRSxVQUFVO0VBQzNCQyxlQUFlLEVBQUUsWUFBWTtFQUM3QkMsa0JBQWtCLEVBQUUsa0JBQWtCO0VBQ3RDQyxPQUFPLEVBQUUsV0FBVztFQUNwQkMsSUFBSSxFQUFFLE1BQU07RUFDWkMsTUFBTSxFQUFFO0FBQ1YsQ0FBQztBQUVELE1BQU1DLE9BQU8sSUFBQWpCLGFBQUEsR0FBQUcsQ0FBQSxPQUFHO0VBQ2RlLEVBQUUsRUFBRSxjQUFjO0VBQ2xCQyxHQUFHLEVBQUUsdUJBQXVCO0VBQzVCQyxFQUFFLEVBQUUsdUJBQXVCO0VBQzNCQyxHQUFHLEVBQUUsZ0NBQWdDO0VBQ3JDQyxFQUFFLEVBQUUsY0FBYztFQUNsQkMsR0FBRyxFQUFFLHVCQUF1QjtFQUM1QkMsRUFBRSxFQUFFLGtCQUFrQjtFQUN0QkMsR0FBRyxFQUFFLDJCQUEyQjtFQUNoQ0MsRUFBRSxFQUFFLG1CQUFtQjtFQUN2QkMsR0FBRyxFQUFFO0FBQ1AsQ0FBQztBQUVELE1BQU1DLGlCQUFpQixJQUFBNUIsYUFBQSxHQUFBRyxDQUFBLE9BQUc7RUFDeEIwQixFQUFFLEVBQUUsSUFBSTtFQUFFO0VBQ1ZDLEVBQUUsRUFBRSxPQUFPO0VBQUU7RUFDYkMsRUFBRSxFQUFFLE9BQU87RUFBRTtFQUNiQyxFQUFFLEVBQUUsUUFBUTtFQUFFO0VBQ2RDLEVBQUUsRUFBRSxPQUFPO0VBQUU7RUFDYkMsRUFBRSxFQUFFLElBQUk7RUFBRTtFQUNWQyxFQUFFLEVBQUUsSUFBSTtFQUFFO0VBQ1ZDLEVBQUUsRUFBRSxRQUFRO0VBQUU7RUFDZEMsRUFBRSxFQUFFLFFBQVE7RUFBRTtFQUNkQyxFQUFFLEVBQUUsSUFBSSxDQUFFO0FBQ1osQ0FBQzs7QUFFRCxTQUNFcEMsaUJBQWlCLEVBQUUwQixpQkFBaUIsRUFBRVgsT0FBTyJ9