import { test, expect } from 'vitest'
// @ts-expect-error: Module export on comment
import twistList from '../twistedList/problem';

if (twistList) {
  test('Test case 1', () => {
    expect(twistList(2, [1,2,3,4,5])).toStrictEqual([4,5,1,2,3])
  })

  test('Test case 2', () => {
    expect(twistList(4, [4,2,8,3,1,5])).toStrictEqual([8,3,1,5,4,2])
  })
}
