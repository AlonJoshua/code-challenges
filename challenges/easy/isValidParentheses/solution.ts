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

  return true;
};