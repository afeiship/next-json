const nx = require('@feizheng/next-js-core2');
require('../src/next-json');

describe('api.basic test', () => {
  test('json:parse', () => {
    var parsedObj = { name: 'fei' };
    var standardString = '{}';
    var strButCanNotString = '';
    var undefValue = undefined;
    var nullValue = null;

    expect(nx.parse(parsedObj)).toEqual({ name: 'fei' });
    expect(nx.parse(standardString)).toEqual({});
    expect(nx.parse(strButCanNotString)).toBe('');
    expect(nx.parse(undefValue)).toBe(undefined);
    expect(nx.parse(nullValue)).toBe(null);
  });

  test('json:stringify', () => {
    var obj = { name: 'fei' };

    // console.log(nx.stringify(obj));
    expect(nx.stringify(obj)).toBe('{"name":"fei"}');
  });
});
