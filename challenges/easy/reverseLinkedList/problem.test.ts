import { describe, it, expect } from "vitest";
// @ts-expect-error: Module export on comment
import { reverseLinkedList, ListNode } from "./problem";

function createLinkedList(values: number[]): ListNode | null {
  if (values.length === 0) return null;
  let head = new ListNode(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }
  return head;
}

function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current) {
    if (current.val !== null) {
      result.push(current.val);
    }
    current = current.next;
  }
  return result;
}

if (reverseLinkedList) {
  describe("reverseLinkedList", () => {
    it("should reverse a linked list with multiple nodes", () => {
      const listNode = createLinkedList([1, 2, 3, 4, 5]);
      const reversedListNode =  createLinkedList([5, 4, 3, 2, 1])
      
      expect(reverseLinkedList(listNode)).toStrictEqual(reversedListNode);
    });

    it("should handle a linked list with a single node", () => {
      const input = createLinkedList([1]);
      const reversed = reverseLinkedList(input);
      expect(linkedListToArray(reversed)).toEqual([1]);
    });

    it("should handle an empty linked list", () => {
      const input = createLinkedList([]);
      const reversed = reverseLinkedList(input);
      expect(linkedListToArray(reversed)).toEqual([]);
    });

    it("should reverse a linked list with two nodes", () => {
      const input = createLinkedList([1, 2]);
      const reversed = reverseLinkedList(input);
      expect(linkedListToArray(reversed)).toEqual([2, 1]);
    });

    it("should reverse a linked list with duplicate values", () => {
      const input = createLinkedList([1, 2, 2, 3]);
      const reversed = reverseLinkedList(input);
      expect(linkedListToArray(reversed)).toEqual([3, 2, 2, 1]);
    });
  });
}
