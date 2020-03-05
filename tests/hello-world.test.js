import sayHello from '../modules/hello-world.mjs';

describe('jest ES6 module tests', () => {
  test('jest can use const', () => {
    const a = 1;

    expect(a).toBe(1);
  });

  test('jest can use let', () => {
    let a = 1;

    a = 2;
    expect(a).toBe(2);
  });

  test('jest can use arrow functions', () => {
    const foo = (x) => x + 1;

    expect(foo(1)).toBe(2);
  });

  test('jest can import .mjs ES6 modules', () => {
    expect(sayHello()).toBe('Hello world!');
  });
});
