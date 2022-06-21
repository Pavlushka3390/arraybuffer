import ArrayBufferConverter from '../arrayBufferConverter';

const DATA = '{"data":{"user":{"id":1,"name":"vasya","level":10}}}';

function getBuffer(data) {
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

test('test arrayBufferConverter', () => {
  const buffer = getBuffer(DATA);
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  expect(converter.toString()).toBe(DATA);
});
