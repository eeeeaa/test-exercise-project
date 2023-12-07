import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "../app";

test("capitalize should returns it with the first character capitalized", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("reverseString should returns it reversed", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("calculator object should calculates correctly", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(10, 5)).toBe(15);

  expect(calculator.subtract(3, 1)).toBe(2);
  expect(calculator.subtract(1, 3)).toBe(-2);

  expect(calculator.divide(10, 5)).toBe(2);
  expect(calculator.divide(5, 2)).toBe(2.5);

  expect(calculator.multiply(5, 2)).toBe(10);
  expect(calculator.multiply(6, 6)).toBe(36);
});

test("caesarCipher should return a shifted string correctly", () => {
  const subject = "helloworldz.,?!012349";
  const shiftFactor = 3;
  expect(caesarCipher(subject, shiftFactor)).toBe("KHOORZRUOG2!ABC34567,");
  expect(caesarCipher(subject, shiftFactor)).toBe("KHOORZRUOG2!ABC34567,");
});

test("analyzeArray should returns an appropriate object", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
