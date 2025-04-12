/*
  Given the head of a singly linked list and two integers left and right where left <= right, 
  reverse the nodes of the list from position left to position right, and return the reversed list.
] 
  Example 1:

  Input: head = [1,2,3,4,5], left = 2, right = 4
  Output: [1,4,3,2,5]
  
  Example 2:

  Input: head = [5], left = 1, right = 1
  Output: [5]

  Constraints:

  The number of nodes in the list is n.
  1 <= n <= 500
  -500 <= Node.val <= 500
  1 <= left <= right <= n

*/


export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Uncomment the function the code inside, run 'npm run test' to test your code
export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (!head || left === right) return head;

  let current: ListNode | null = head;
  let prev: ListNode | null = null;

  let pos = 1;
  while (pos < left) {
      prev = current;
      current = current.next!;
      pos++;
  }

  const beforeLeft = prev;
  const leftNode = current;

  let next = null;
  prev = null;

  while (pos <= right) {
    if (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next
      pos++;
    }
  }

  if (beforeLeft) {
      beforeLeft.next = prev;
  } else {
      head = prev;
  }

  leftNode.next = current;

  return head;

};