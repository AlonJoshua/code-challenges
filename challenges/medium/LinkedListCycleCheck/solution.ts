import { ListNode } from '../../../utils/types/index'

function detectCycle1(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
      return null;
  }

  const checkedNodes = new Set();
  let current = head;

  while (current) {
      
      if (!current.next) {
          return null;
      }

      if (checkedNodes.has(current)) {
          break;
      }

      checkedNodes.add(current);

      current = current.next;
  }

  return current;
  // Time: O(n)
  // Space: O(n)
};

// Algorithem - https://en.wikipedia.org/wiki/Cycle_detection#Floyd's_tortoise_and_hare
function detectCycle2(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return null;
    }
  
    let tortoise = head;
    let hare = head;
  
    while (hare && hare.next) {
  
      tortoise = tortoise?.next!;
      hare = hare.next?.next!;
      
      if (tortoise === hare) {
        break;
      }
    }
  
    if (!hare || !hare.next) {
        return null
    }
  
    hare = head;
    while (hare !== tortoise) {
      hare = hare.next!;
      tortoise = tortoise.next!;
    }
  
    return tortoise;
    // Time: O(n)
    // Space: O(1)
  };