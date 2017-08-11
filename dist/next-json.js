(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

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
      parse: nx.parse,
      stringify:nx.stringify
    };
  }

}());
