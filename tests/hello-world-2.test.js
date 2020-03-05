import sayHello2 from '../modules/hello-world-2.js';

describe('jest ES6 module tests', () => {
  test('jest can import .js ES6 modules', () => {
    expect(sayHello2()).toBe('Hello again.');
  });
});
