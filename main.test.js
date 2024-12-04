const capitalize = require("./functions/capitalize");

test("word = Word", () => {
  expect(capitalize("word")).toBe("Word");
});

test("a = A", () => {
  expect(capitalize("word")).toBe("Word");
});

test("  word  =  Word  ", () => {
  expect(capitalize("  word  ")).toBe("  Word  ");
});

const reverseString = require("./functions/reverseString");

test("word = drow", () => {
  expect(reverseString("word")).toBe("drow");
});

test("  word   =  drow  ", () => {
  expect(reverseString("  word  ")).toBe("  drow  ");
});

const calculator = require("./functions/calculator");
const calc = new calculator();

test("1+1 = 2", () => {
  expect(calc.add(1, 1)).toBe(2);
});

test("1-1 = 0", () => {
  expect(calc.subtract(1, 1)).toBe(0);
});

test("2/2 = 1", () => {
  expect(calc.divide(2, 2)).toBe(1);
});

test("2*2 = 4", () => {
  expect(calc.multiply(2, 2)).toBe(4);
});

const caesarCipher = require("./functions/caesarCipher");

test("'xyz' shifted by 3 = 'abc'", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("'HeLLo' shifted by 3 = 'khOOr'", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("'Hello, World!' shifted by 3 = 'Khoor, Zruog!'", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

const analyseArray = require("./functions/analyseArray");

test("[1,8,3,4,2,6] average: 4, min: 1, max: 8, length: 6 ", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
