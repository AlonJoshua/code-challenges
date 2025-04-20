import { ListNode } from "./problem";

function flatten(head: ListNode | null): ListNode | null {

  if (!head) {
      return head;
  }

  function flattenDFS(node: ListNode) {
      let current = node;

      while (current) {
          let next = current.next;

          if (current.child) {
              const tail = flattenDFS(current.child);
              current.next = current.child;
              current.child.prev = current;

              if (next) {
                  next.prev = tail;
              }

              tail.next = next;
              current.child = null;
              continue;
          }
          
          if (!current.next) {
              break;
          }
          
          current = current.next;
      }

      return current;
  }

  flattenDFS(head);
  return head;

  // Time: O(n);
  // Space: O(d) - the depth level;
};