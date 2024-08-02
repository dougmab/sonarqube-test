const multiply = require('../src/mult');

test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('multiplies 4 * 5 to equal 20', () => {
    expect(multiply(4, 5)).toBe(20);
});

test('multiplies 0 * 10 to equal 0', () => {
    expect(multiply(0, 10)).toBe(0);
});

test('multiplies -2 * 6 to equal -12', () => {
    expect(multiply(-2, 6)).toBe(-12);
});

test('multiplies 3 * -4 to equal -12', () => {
    expect(multiply(3, -4)).toBe(-12);
});

test('multiplies -5 * -5 to equal 25', () => {
    expect(multiply(-5, -5)).toBe(25);
});