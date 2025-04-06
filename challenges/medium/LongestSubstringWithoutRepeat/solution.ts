// Brute force
function lengthOfLongestSubstring1(s: string): number {
  let longestSubstringLength = 0;
  let currentLength = 0;
  let currentSubstringHash: { [key: string]: number } = {};
  let windowPointer = 0;

  for (let i = 0; i < s.length; i++) {
      const char = s[i];
      
      if (char in currentSubstringHash) {
          i = windowPointer++
          currentSubstringHash = {}
          currentLength = 0;
      } else {
          currentSubstringHash[s[i]] = i;
          currentLength++;
      }

      if (currentLength > longestSubstringLength) {
          longestSubstringLength = currentLength;
      }
  }

  return longestSubstringLength;
  // Time: O(n^2)
  // Space: O(k)
};

// Optimal solution
function lengthOfLongestSubstring2(s: string): number {
  let left = 0, longest = 0;
  let seenChars: {[key: string]: number} = {};

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const prevSeenChar = seenChars[currentChar];

    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }

    seenChars[currentChar] = right;
    longest = Math.max(longest, right - left + 1)
  }

  return longest;
  // Time: O(n)
  // Space: O(k)
};