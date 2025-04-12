class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
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

  // Time Complexity: O(n)
  // Space Complexity: O(1)
};