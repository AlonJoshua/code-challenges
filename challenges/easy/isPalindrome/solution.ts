function isPalindrome(s: string): boolean {
  const alphaString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  let left = 0;
  let right = alphaString.length - 1;

  while (left < right) {

      const leftChar = alphaString[left];
      const rightChar = alphaString[right];

      if (leftChar !== rightChar) {
          return false;
      }

      left++;
      right--;
  }

  return true;
  // Time Complexity: O(n)
  // Space Complexity: O(n)
};