import { describe, it, expect } from "vitest";
// @ts-expect-error: Module export on comment
import { flatten, ListNode } from "./problem";

/**
 * Creates a multilevel doubly linked list with child nodes at specified indices.
 * @param values - Array of values for the nodes. Use `null` for placeholders.
 * @returns The head of the multilevel doubly linked list.
 */
function createMultilevelDoublyLinkedList(values: Array<number | null>): ListNode | null {

  if (!values.length || values[0] === null) {
    return null
  }

  const head = new ListNode(values[0]);
  let current = head;
  let isFindingChild = false;
  let pointerToNodeWithChild = head;

  for (let i = 1; i < values.length; i++) {
      if (Number(values[i])) {
        if (!isFindingChild) {
          const next = new ListNode(Number(values[i]), current);
          current.next = next;
          current = next;
          isFindingChild = false
        } else {
          const child = new ListNode(Number(values[i]), current);
          current.child = child;
          current = child;
          pointerToNodeWithChild = child
          isFindingChild = false
        }
      }

      if (values[i] === null) {
        isFindingChild = true;
        if (pointerToNodeWithChild && pointerToNodeWithChild.next) {
          pointerToNodeWithChild = pointerToNodeWithChild.next;
        }
      }
  }

  return head;
}

describe("flatten", () => {
  it("should flatten a multilevel doubly linked list with multiple levels", () => {
    const head = createMultilevelDoublyLinkedList([1, 2, 3, 4, null, null, 5, 6]);
    const flattened = flatten(head);
    const expected = createMultilevelDoublyLinkedList([1, 2, 3, 4, 5, 6]);
    expect(flattened).toStrictEqual(expected);
  });

  it("should handle an empty list", () => {
    const head = createMultilevelDoublyLinkedList([]);
    const flattened = flatten(head);
    expect(flattened).toBeNull();
  });

  it("should handle a single node list", () => {
    const head = createMultilevelDoublyLinkedList([1]);
    const flattened = flatten(head);
    const expected = createMultilevelDoublyLinkedList([1]);
    expect(flattened).toStrictEqual(expected);
  });

  it("should handle a list with no child nodes", () => {
    const head = createMultilevelDoublyLinkedList([1, 2, 3, 4]);
    const flattened = flatten(head);
    const expected = createMultilevelDoublyLinkedList([1, 2, 3, 4]);
    expect(flattened).toStrictEqual(expected);
  });

  it("should handle a list with a single child node", () => {
    const head = createMultilevelDoublyLinkedList([1, 2, null, 3, 4]);
    const flattened = flatten(head);
    const expected = createMultilevelDoublyLinkedList([1, 2, 3, 4]);
    expect(flattened).toStrictEqual(expected);
  });

  it("should handle a list with multiple child nodes at different levels", () => {
    const head = createMultilevelDoublyLinkedList([1, 2, null, 3, 4, null, 5, 6]);
    const flattened = flatten(head);
    const expected = createMultilevelDoublyLinkedList([1, 2, 3, 4, 5, 6]);
    expect(flattened).toStrictEqual(expected);
  });

  it("should handle a list with deeply nested child nodes", () => {
    const head = createMultilevelDoublyLinkedList([1, null, 2, null, 3, null, 4]);
    const flattened = flatten(head);
    const expected = createMultilevelDoublyLinkedList([1, 2, 3, 4]);
    expect(flattened).toStrictEqual(expected);
  });

  it("should handle a list with alternating child and next nodes", () => {
    const head = createMultilevelDoublyLinkedList([1, null, 2, 3, null, 4, 5]);
    const flattened = flatten(head);
    const expected = createMultilevelDoublyLinkedList([1, 2, 3, 4, 5]);
    expect(flattened).toStrictEqual(expected);
  });

});
