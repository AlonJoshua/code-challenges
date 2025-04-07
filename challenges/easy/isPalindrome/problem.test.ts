import { test, expect } from "vitest";
// @ts-expect-error: Module export on comment
import isPalindrome from "./problem";

if (isPalindrome) {
  test("Test case 1", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  test("Test case 2", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });

  test("Test case 3", () => {
    expect(isPalindrome(" ")).toBe(true);
  });

  test("Test case 4", () => {
    expect(isPalindrome("No lemon, no melon")).toBe(true);
  });

  test("Test case 5", () => {
    expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
  });

  test("Test case 6", () => {
    expect(isPalindrome("12321")).toBe(true);
  });

  test("Test case 7", () => {
    expect(isPalindrome("12345")).toBe(false);
  });

  test("Test case 8", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("Test case 9", () => {
    expect(isPalindrome("Able was I, I saw Elba")).toBe(true);
  });

  test("Test case 10", () => {
    expect(isPalindrome("Palindrome")).toBe(false);
  });
}
