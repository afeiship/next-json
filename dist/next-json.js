/*!
 * name: @feizheng/next-json
 * url: https://github.com/afeiship/next-json
 * version: 1.0.0
 * date: 2019-12-06T08:45:34.825Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.json = JSON;
  nx.parse = function(inValue) {
    try {
      return JSON.parse(inValue);
    } catch (_) {}
    return inValue;
  };

  nx.stringify = function(inValue) {
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

//# sourceMappingURL=next-json.js.map
