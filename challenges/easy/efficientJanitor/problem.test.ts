import { test, expect, describe } from "vitest";
import { minimunJanitorTrips } from "./problem";

if (minimunJanitorTrips) {
  describe("minimunJanitorTrips", () => {
    test("should return 3 for weights [1.01, 1.99, 2.5, 1.01]", () => {
      const weights = [1.01, 1.99, 2.5, 1.01];
      const result = minimunJanitorTrips(weights);
      expect(result).toBe(3);
    });

    test("should return 1 for weights [1.5, 1.5]", () => {
      const weights = [1.5, 1.5];
      const result = minimunJanitorTrips(weights);
      expect(result).toBe(1);
    });

    test("should return 2 for weights [1.01, 1.01, 1.01, 1.01]", () => {
      const weights = [1.01, 1.01, 1.01, 1.01];
      const result = minimunJanitorTrips(weights);
      expect(result).toBe(2);
    });

    test("should return 4 for weights [3.0, 3.0, 3.0, 3.0]", () => {
      const weights = [3.0, 3.0, 3.0, 3.0];
      const result = minimunJanitorTrips(weights);
      expect(result).toBe(4);
    });

    test("should return 1 for weights [2.99, 0.01]", () => {
      const weights = [2.99, 0.01];
      const result = minimunJanitorTrips(weights);
      expect(result).toBe(1);
    });

    test("should return 5 for weights [1.01, 1.02, 1.03, 1.04, 1.05]", () => {
      const weights = [1.01, 1.02, 1.03, 1.04, 1.05];
      const result = minimunJanitorTrips(weights);
      expect(result).toBe(3);
    });

    test("should return 1 for a single weight [3.0]", () => {
      const weights = [3.0];
      const result = minimunJanitorTrips(weights);
      expect(result).toBe(1);
    });

    test("should return 0 for an empty array", () => {
      const weights: number[] = [];
      const result = minimunJanitorTrips(weights);
      expect(result).toBe(0);
    });
  });
}
