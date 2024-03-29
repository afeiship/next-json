import nx from '@jswork/next';

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

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = {
    json: nx.json,
    parse: nx.parse,
    stringify: nx.stringify
  };
}

export default {
  json: nx.json,
  parse: nx.parse,
  stringify: nx.stringify
};
