export function isValidParentheses1(s: string): boolean {
  if (!s.length) {
      return true;
  }

  const parenthesesMap = {
      '(': ')',
      '[': ']',
      '{': '}'
  }

  const parenthesesArr = s.split('')
  const openStack = []
  const closingStack = []

  while (parenthesesArr.length) {
      const parentheses = parenthesesArr.pop() as keyof typeof parenthesesMap;

      if (parenthesesMap[parentheses]) {
          openStack.push(parentheses);
      } else {
          closingStack.push(parentheses);
      }

      if (openStack.length && !closingStack.length) {
          return false;
      }

      if (!openStack.length || !closingStack.length) {
          continue;
      }

      if (parenthesesMap[openStack[openStack.length - 1] as keyof typeof parenthesesMap] !== closingStack[closingStack.length - 1]) {
          return false;
      }
      openStack.pop();
      closingStack.pop();
  }

  if (openStack.length || closingStack.length) {
      return false;
  }

  // Time: O(n)
  // Space: O(n)
  return true;
};

// A bit more refactored solution using 1 stack
export function isValidParentheses2(s: string): boolean {

    if (s.length === 0) {
      return true;
    }
  
    const stack = [];
    
    const parenthesesMap = {
      ')': '(',
      ']': '[',
      '}': '{'
    }
  
    for (let i = 0; i < s.length; i++) {
      const currentParentheses = s[i] as keyof typeof parenthesesMap
      if (!parenthesesMap[currentParentheses]) {
        stack.push(s[i])
      } else {
        const leftParentheses = stack.pop();
        if (parenthesesMap[currentParentheses] !== leftParentheses) {
          return false;
        }
      }
    }
  
    // Time: O(n)
    // Space: O(n)
    return stack.length === 0;
  };