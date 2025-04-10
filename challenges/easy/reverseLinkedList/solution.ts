import { ListNode } from "./problem";
function reverseLinkedList(head: ListNode | null): ListNode | null {

  let prev = null;
  let current = head;

  while(current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
  // Time: O(n)
  // Space: O(1)
}