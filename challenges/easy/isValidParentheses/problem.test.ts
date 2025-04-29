import { describe, it, expect } from "vitest";
// @ts-expect-error: Module export on comment
import { isValidParentheses } from "./problem";

if (isValidParentheses) {
  describe("isValidParentheses", () => {
    it("Should return valid parentheses", () => {
      
      expect(isValidParentheses('()')).toEqual(true);
    });
    it("Should return true for valid parentheses with multiple pairs", () => {
      expect(isValidParentheses("()[]{}")).toEqual(true);
    });

    it("Should return false for invalid parentheses with unmatched opening", () => {
      expect(isValidParentheses("(]")).toEqual(false);
    });

    it("Should return false for invalid parentheses with unmatched closing", () => {
      expect(isValidParentheses("([)]")).toEqual(false);
    });

    it("Should return true for valid nested parentheses", () => {
      expect(isValidParentheses("{[]}")).toEqual(true);
    });

    it("Should return true for empty string", () => {
      expect(isValidParentheses("")).toEqual(true);
    });

    it("Should return false for string with only opening parentheses", () => {
      expect(isValidParentheses("(((")).toEqual(false);
    });

    it("Should return false for string with only closing parentheses", () => {
      expect(isValidParentheses(")))")).toEqual(false);
    });
  });
}
