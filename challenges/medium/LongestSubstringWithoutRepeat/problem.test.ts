
import { test, expect } from 'vitest'
// @ts-expect-error: Module export on comment
import lengthOfLongestSubstring from './problem';

if (lengthOfLongestSubstring) {
  test('Test case 1', () => {
    const string = "abcabcbb"
    expect(lengthOfLongestSubstring(string)).toStrictEqual(3);
  });
  
  test('Test case 2', () => {
    const string = "bbbbb"
    expect(lengthOfLongestSubstring(string)).toStrictEqual(1);
  });

  test('Test case 3', () => {
    const string = "pwwkew"
    expect(lengthOfLongestSubstring(string)).toStrictEqual(3);
  });

  test('Test case 4', () => {
    const string = "dvdf"
    expect(lengthOfLongestSubstring(string)).toStrictEqual(3);
  });

  test('Test case 5', () => {
    const string = "aab"
    expect(lengthOfLongestSubstring(string)).toStrictEqual(2);
  });

  test('Test case 6', () => {
    const string = "abcdef"
    expect(lengthOfLongestSubstring(string)).toStrictEqual(6);
  });

  test('Test case 7', () => {
    const string = "abba"
    expect(lengthOfLongestSubstring(string)).toStrictEqual(2);
  });

  test('Test case 8', () => {
    const string = "tmmzuxt"
    expect(lengthOfLongestSubstring(string)).toStrictEqual(5);
  });


  test('Test case 9', () => {
    const string = "a"
    expect(lengthOfLongestSubstring(string)).toStrictEqual(1);
  });

  test('Test case 10', () => {
    const string = "au"
    expect(lengthOfLongestSubstring(string)).toStrictEqual(2);
  });
}
