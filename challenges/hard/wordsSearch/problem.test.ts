
import { test, expect } from 'vitest'
// @ts-expect-error: Module export on comment
import wordsSearch from './problem';

if (wordsSearch) {
  test('Test case 1', () => {
    const grid = [
      ['c', 'a', 't', 'd'],
      ['b', 'e', 'a', 'e'],
      ['r', 'a', 't', 'e'],
      ['d', 'e', 'e', 'r']
    ];
    const words = ['cat', 'dog', 'rat', 'bear', 'deer', 'bat'];
    expect(wordsSearch(grid, words)).toStrictEqual([1, 0, 1, 0, 2, 0]);
  });
  
  test('Test case 2', () => {
    const grid = [
      ['c', 'a', 'r', 'b', 'i', 'k', 'e'],
      ['b', 'u', 's', 'u', 'r', 'a', 'y'],
      ['u', 'r', 'a', 's', 'a', 'r', 'b'],
      ['s', 'n', 'a', 'v', 'i', 't', 'c']
    ];
    const words = ['car', 'bus', 'train', 'van', 'bike', 'kart'];
    expect(wordsSearch(grid, words)).toStrictEqual([1, 3, 0, 0, 1, 1]);
  });
}
