function minRemoveToMakeValid(s: string): string {
  const splitedString = s.split('');
  const stack = [];

  for (let i = 0; i < splitedString.length; i++) {
      if (splitedString[i] === '(') {
          stack.push(i);
      } else if (splitedString[i] === ')' && stack.length) {
          stack.pop();
      } else if (splitedString[i] === ')') {
          splitedString[i] = '';
      }
  }

  if (stack.length) {
      for (let i = 0; i < stack.length; i++) {
          splitedString[stack[i]] = '';
      }
  }

  return splitedString.join('');
  // Time: O(n)
  // Space O(n)
};