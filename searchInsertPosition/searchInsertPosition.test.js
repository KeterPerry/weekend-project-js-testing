const { test, expect } = require("@jest/globals");
const searchInsertPosition= require("./searchInsertPosition.easy");

test("Example 1", () => {
	expect(searchInsertPosition([1,3,5,6], 5)).toBe(2)
});
test("Example 2", () => {
	expect(searchInsertPosition([1,3,5,6], 2)).toBe(1)
});

test("Example 3", () => {
	expect(searchInsertPosition([1,3,5,6], 7)).toBe(4)
});