import { sum } from "./app";

describe("app", (): void => {
  describe("sum", (): void => {
    it("should be correct", (): void => {
      expect.assertions(1);
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });
  });
});
