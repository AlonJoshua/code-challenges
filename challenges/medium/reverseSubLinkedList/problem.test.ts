import { describe, it, expect } from "vitest";
// @ts-expect-error: Module export on comment
import { reverseBetween, ListNode } from "./problem";

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

if (reverseBetween) {
  describe("reverseBetween", () => {
    it("should reverse a sub linked list in the middle", () => {
      const listNode = createLinkedList([1, 2, 3, 4, 5]);
      const left = 2;
      const right = 4;
      const answer =  createLinkedList([1, 4, 3, 2, 5])
      
      expect(reverseBetween(listNode, left, right)).toStrictEqual(answer);
    });
  });

  it("should reverse a linked list with a single node", () => {
    const listNode = createLinkedList([5]);
    const left = 1;
    const right = 1;
    const answer = createLinkedList([5]);

    expect(reverseBetween(listNode, left, right)).toStrictEqual(answer);
  });

  it("should reverse the entire linked list", () => {
    const listNode = createLinkedList([1, 2, 3, 4, 5]);
    const left = 1;
    const right = 5;
    const answer = createLinkedList([5, 4, 3, 2, 1]);

    expect(reverseBetween(listNode, left, right)).toStrictEqual(answer);
  });

  it("should reverse a sub linked list at the start", () => {
    const listNode = createLinkedList([1, 2, 3, 4, 5]);
    const left = 1;
    const right = 3;
    const answer = createLinkedList([3, 2, 1, 4, 5]);

    expect(reverseBetween(listNode, left, right)).toStrictEqual(answer);
  });

  it("should reverse a sub linked list at the end", () => {
    const listNode = createLinkedList([1, 2, 3, 4, 5]);
    const left = 3;
    const right = 5;
    const answer = createLinkedList([1, 2, 5, 4, 3]);

    expect(reverseBetween(listNode, left, right)).toStrictEqual(answer);
  });

  it("should handle a linked list with two nodes and reverse both", () => {
    const listNode = createLinkedList([1, 2]);
    const left = 1;
    const right = 2;
    const answer = createLinkedList([2, 1]);

    expect(reverseBetween(listNode, left, right)).toStrictEqual(answer);
  });

  it("should handle a linked list with two nodes and reverse none", () => {
    const listNode = createLinkedList([1, 2]);
    const left = 2;
    const right = 2;
    const answer = createLinkedList([1, 2]);

    expect(reverseBetween(listNode, left, right)).toStrictEqual(answer);
  });

  it("should handle an empty linked list", () => {
    const listNode = createLinkedList([]);
    const left = 1;
    const right = 1;
    const answer = createLinkedList([]);

    expect(reverseBetween(listNode, left, right)).toStrictEqual(answer);
  });
}
