const { test, expect } = require("@jest/globals");
const validParentheses = require("./validParentheses.easy");


test("Example 1", () => {
	expect(validParentheses("()")).toBe(true)
});
test("Example 2", () => {
	expect(validParentheses("()[]{}")).toBe(true)
});

test("Example 3", () => {
	expect(validParentheses("(]")).toBe(false)
});