// Brute force
function lengthOfLongestSubstring(s: string): number {
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