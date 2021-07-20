const calculator = require("./calculator");

describe("given two numbers make a sum", () => {
  test("should be 15", () => {
    expect(calculator.add(10, 5)).toBe(15);
  });

  test('should be 10', () => {
    expect(calculator.add(5, 5)).toBe(10);
  });

  test('should be 10', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
});

describe('given two numbers subtract them', () => {
  test('should be 100', () => {
    expect(calculator.subtract(200, 100)).toBe(100);
  });

  test('should be 50', () => {
    expect(calculator.subtract(100, 50)).toBe(50);
  });

  test('should be 20', () => {
    expect(calculator.subtract(40, 20)).toBe(20);
  });
});

describe('given two numbers divide them', () => {
  test('should be 25', () => {
    expect(calculator.divide(50, 2)).toBe(25);
  });

  test('should be 7', () => {
    expect(calculator.divide(14, 2)).toBe(7);
  });

  test('should be 9', () => {
    expect(calculator.divide(18, 2)).toBe(9);
  });
});

describe('given two numbers multiply them', () => {
  test('should be 30', () => {
    expect(calculator.multiply(15, 2)).toBe(30);
  });

  test('should be 40', () => {
    expect(calculator.multiply(10, 4)).toBe(40);
  });

  test('should be 200', () => {
    expect(calculator.multiply(100, 2)).toBe(200);
  });
});

