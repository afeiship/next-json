require('../src');

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
    expect(nx.stringify(obj)).toBe('{"name":"fei"}');
  });

  test('json.parse str(boolean) value', () => {
    const v1 = 'true';
    const v2 = 'false';
    expect(nx.parse(v1)).toBe(true);
    expect(nx.parse(v2)).toBe(false);
  });
});
