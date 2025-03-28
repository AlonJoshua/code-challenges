// Brute force
function twistedList1(k: number, n: number[]): number[] {
  
  for (let i = k; i > 0; i--) {
    const number = n.pop() as number;
    n.unshift(number);
  }
  return n;
  // time: O(n*k)
  // space: O(1)
}

// Optimal solution - reversed array
function twistedList2(k: number, n: number[]): number[] {
  const len = n.length;
  k %= len;

  function reverse (start: number, end: number) {
    while (start < end) {
      [n[end], n[start]] = [n[start], n[end]];
      start++;
      end--;
    }
  }

  reverse(0, len - 1);
  reverse(0, k - 1);
  reverse(k, len - 1);

  return n;
  // time: O(n)
  // space: O(1)
}