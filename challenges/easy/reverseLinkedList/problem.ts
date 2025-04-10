/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number;
 *     next: ListNode | null;
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.next = (next===undefined ? null : next);
 *     }
 * }
 */

import { C } from "vitest/dist/chunks/reporters.d.CqBhtcTq";

/**
 * Reverse a singly linked list.
 *
 * Example:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 * Constraints:
 * - The number of nodes in the list is in the range [0, 5000].
 * - -5000 <= Node.val <= 5000
 *
 */

export class ListNode {
  val: number | null;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Uncomment the function and write the code inside, run 'npm run test' to test your code
// export function reverseLinkedList(head: ListNode | null): ListNode | null {

//   let prev = null;
//   let current = head;

//   while(current) {
//     let next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }

//   return prev;
// }
