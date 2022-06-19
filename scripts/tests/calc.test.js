const add = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("test should return 42 for 20 + 22", () => {
            expect(add(20,22)).toBe(42);
        });
        test("test should return 73 for 42 + 31", () => {
            expect(add(42,31)).toBe(73);
        });
    });
    describe("Subtraction function", () => {});
    describe("Multiplication function", () => {});
    describe("Division function", () => {});
});