// Реализуйте и экспортируйте по умолчанию функцию, которая переворачивает цифры в переданном числе и возвращает новое число.

// Примеры:
// reverseInt(13); // 31
// reverseInt(-123); // -321
// reverseInt(8900); // 98

const reverseInt = (num) => {
  let numStr = String(num), result = '', prefix = '';

  for (let i = numStr.length - 1; i >= 0; i -= 1) {
    if (numStr[i] === '-') {
      prefix = numStr[i];
    } else {
      result += numStr[i];
    }
  }

  return parseInt(`${prefix}${Math.abs(result)}`);
}

export default reverseInt;
