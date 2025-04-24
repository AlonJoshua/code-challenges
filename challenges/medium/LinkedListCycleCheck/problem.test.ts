
import { test, expect, describe } from 'vitest'
import { ListNode } from 'utils/types';
// @ts-expect-error: Module export on comment
import { detectCycle } from './problem';

function createLinkedListWithCycle(values: number[], pos: number | -1) {
  if (values.length === 0) return null;

  const nodes: ListNode[] = values.map(value => new ListNode(value));
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  if (pos >= 0) {
    nodes[nodes.length - 1].next = nodes[pos];
  }
  return nodes[0];
}

if (detectCycle) {
  describe("detectCycle", () => {
    test("should return null for a list with no cycle", () => {
      const head = createLinkedListWithCycle([1, 2, 3, 4, 5], -1);
      const result = detectCycle(head);
      expect(result).toBeNull();
    });

    test("should detect a cycle at the beginning of the list", () => {
      const head = createLinkedListWithCycle([1, 2, 3, 4, 5], 0);

      const result = detectCycle(head);
      expect(result).toBe(head);
    });

    test("should detect a cycle in the middle of the list", () => {
      const head = createLinkedListWithCycle([1, 2, 3, 4, 5], 2);
      const result = detectCycle(head);
      expect(result).toBe(head?.next?.next);
    });

    test("should detect a cycle at the end of the list", () => {
      const head = createLinkedListWithCycle([1, 2, 3, 4, 5], 4);
      const result = detectCycle(head);
      expect(result).toBe(head?.next?.next?.next?.next);
    });

    test("should return null for an empty list", () => {
      const head = createLinkedListWithCycle([], -1);
      const result = detectCycle(head);
      expect(result).toBeNull();
    });

    test("should handle a single-node list with no cycle", () => {
      const head = createLinkedListWithCycle([1], -1);
      const result = detectCycle(head);
      expect(result).toBeNull();
    });

    test("should handle a single-node list with a cycle", () => {
      const head = createLinkedListWithCycle([1], 0);
      const result = detectCycle(head);
      expect(result).toBe(head);
    });})
}
