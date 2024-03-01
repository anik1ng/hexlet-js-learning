const calculate = (operator, b, a) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b === 0 ? null : a / b;
    default:
      return null;
  }
};

const calcInPolishNotation = (array) => {
  const stack = [];

  for (const el of array) {
    if (typeof el === 'number') {
      stack.push(el);
    } else {
      const b = stack.pop();
      const a = stack.pop();
      const result = calculate(el, b, a);

      if (result === null) {
        return null;
      }

      stack.push(result);
    }
  }

  return stack.pop();
};

export default calcInPolishNotation;
