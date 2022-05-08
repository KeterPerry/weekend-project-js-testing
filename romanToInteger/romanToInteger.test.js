const { test, expect } = require("@jest/globals");
const romanToInteger = require("./romanToInteger.easy");


test("Example 1", () => {
	expect(romanToInteger("III")).toBe(3)
});
test("Example 2", () => {
	expect(romanToInteger("LVIII")).toBe(58)
});

test("Example 3", () => {
	expect(romanToInteger("MCMXCIV")).toBe(1994)
});