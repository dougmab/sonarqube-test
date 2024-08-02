const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
});

test('adds 1 + 4 to equal 5', () => {
    expect(sum(1, 4)).toBe(5);
});

test('adds 2 + 6 to equal 8', () => {
    expect(sum(2, 6)).toBe(8);
});

test('adds 3 + 4 to equal 7', () => {
    expect(sum(3, 4)).toBe(7);
});

test('adds 7 + 6 to equal 13', () => {
    expect(sum(7, 6)).toBe(13);
});

