import calculator from '../src/calculator';
describe('Calculator 100% coverage', () => {
  // test('it loads without error', () => {
  //   expect(calculator).toBeDefined();
  //   expect(typeof calculator).toBe('function');
  // });
  it('2 + 2 = 4', () => {
    expect(calculator(2, '+', 2)).toBe(4);
  });

  it('3 * 2 = 6', () => {
    expect(calculator(3, '*', 2)).toBe(6);
  });
});
