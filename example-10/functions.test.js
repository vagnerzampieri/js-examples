import { functions } from "./functions";

test("Adds 2 + 2 equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});
