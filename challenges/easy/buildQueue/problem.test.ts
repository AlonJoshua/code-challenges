import { describe, it, expect } from "vitest";
// @ts-expect-error: Module export on comment
import { MyQueue } from "./problem";

if (MyQueue) {
  describe("MyQueue", () => {
    it("should enqueue elements correctly", () => {
      const queue = new MyQueue();
      queue.push(1);
      queue.push(2);
      expect(queue.peek()).toBe(1);
    });

    it("should dequeue elements correctly", () => {
      const queue = new MyQueue();

      queue.push(1);
      queue.push(2);
      expect(queue.pop()).toBe(1);
      expect(queue.peek()).toBe(2);
    });

    it("should return true for empty queue", () => {
      const queue = new MyQueue();

      expect(queue.empty()).toBe(true);
      queue.push(1);
      queue.pop();
      expect(queue.empty()).toBe(true);
    });

    it("should return false for non-empty queue", () => {
      const queue = new MyQueue();

      queue.push(1);
      expect(queue.empty()).toBe(false);
    });

    it("should handle multiple operations correctly", () => {
      const queue = new MyQueue();

      queue.push(1);
      queue.push(2);
      queue.push(3);
      expect(queue.pop()).toBe(1);
      expect(queue.pop()).toBe(2);
      queue.push(4);
      expect(queue.peek()).toBe(3);
      expect(queue.pop()).toBe(3);
      expect(queue.pop()).toBe(4);
      expect(queue.empty()).toBe(true);
    });
  });
}
