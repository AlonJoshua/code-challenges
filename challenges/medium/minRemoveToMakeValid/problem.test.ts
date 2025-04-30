
import { test, expect, describe } from 'vitest'
// @ts-expect-error: Module export on comment
import { minRemoveToMakeValid } from './problem';

if (minRemoveToMakeValid) {
  describe("minRemoveToMakeValid", () => {
    test("should return a valid string when input has extra closing parentheses", () => {
      expect(minRemoveToMakeValid("lee(t(c)o)de)")).toBe("lee(t(c)o)de");
      expect(minRemoveToMakeValid("a)b(c)d")).toBe("ab(c)d");
    });

    test("should return an empty string when input has only invalid parentheses", () => {
      expect(minRemoveToMakeValid("))((")).toBe("");
    });

    test("should return the same string when input is already valid", () => {
      expect(minRemoveToMakeValid("abc")).toBe("abc");
      expect(minRemoveToMakeValid("(a(b)c)")).toBe("(a(b)c)");
    });

    test("should handle strings with no parentheses", () => {
      expect(minRemoveToMakeValid("hello")).toBe("hello");
    });

    test("should handle strings with only opening parentheses", () => {
      expect(minRemoveToMakeValid("(((")).toBe("");
    });

    test("should handle strings with only closing parentheses", () => {
      expect(minRemoveToMakeValid(")))")).toBe("");
    });

    test("should handle strings with mixed valid and invalid parentheses", () => {
      expect(minRemoveToMakeValid("(a(b)c)d)")).toBe("(a(b)c)d");
      expect(minRemoveToMakeValid("a)b(c)d)e)")).toBe("ab(c)de");
    });

    test("should handle edge cases with single characters", () => {
      expect(minRemoveToMakeValid("(")).toBe("");
      expect(minRemoveToMakeValid(")")).toBe("");
      expect(minRemoveToMakeValid("a")).toBe("a");
    });

    test("should handle long strings with nested parentheses", () => {
      const input = "a(b(c)d)e)f(g(h)i)j(k(l)m)n)o)p";
      const output = "a(b(c)d)ef(g(h)i)j(k(l)m)nop";
      expect(minRemoveToMakeValid(input)).toBe(output);
    });
  })
}
