/* 
You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. 
This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. 
These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. 
Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.

Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.

Example 1:

    Level 0 (Main list):
    1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6
                |
                v
    Level 1:
                7 <-> 8 <-> 9 <-> 10
                        |
                        v
    Level 2:
                        11 <-> 12

Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]

Explanation: The multilevel linked list in the input is shown.
After flattening the multilevel linked list it becomes:

    1 <-> 2 <-> 3 <-> 7 <-> 8 <-> 11 <-> 12 <-> 9 <-> 10 <-> 4 <-> 5 <-> 6

Example 2:
1 <-> 2
 |
 ↓
 3

Input: head = [1,2,null,3]
Output: [1,3,2]

Explanation: The multilevel linked list in the input is shown.
After flattening the multilevel linked list it becomes:

    1 <-> 3 <-> 2

*/

export class ListNode {
    val: number
    prev: ListNode | null
    next: ListNode | null
    child: ListNode | null
    
    constructor(val?: number, prev? : ListNode, next? : ListNode, child? : ListNode) {
        this.val = (val===undefined ? 0 : val);
        this.prev = (prev===undefined ? null : prev);
        this.next = (next===undefined ? null : next);
        this.child = (child===undefined ? null : child);
    }
}
 


export function flatten(head: ListNode | null): ListNode | null {

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
};