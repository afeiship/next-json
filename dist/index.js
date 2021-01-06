/*!
 * name: @jswork/next-json
 * description: Better json parse/stringify for JSON.
 * homepage: https://github.com/afeiship/next-json
 * version: 1.0.1
 * date: 2021-01-06 22:19:38
 * license: MIT
 */

(function () {
  var global = global || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.json = JSON;
  nx.parse = function (inValue) {
    try {
      return JSON.parse(inValue);
    } catch (_) {}
    return inValue;
  };

  nx.stringify = function (inValue) {
    try {
      return JSON.stringify(inValue);
    } catch (_) {}
    return inValue;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      json: nx.json,
      parse: nx.parse,
      stringify: nx.stringify
    };
  }

})();
