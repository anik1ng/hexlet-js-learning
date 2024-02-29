// "Счастливым" называют билет с номером, в котором сумма первой половины цифр равна сумме второй половины цифр. 
// Номера могут быть произвольной длины, с единственным условием, что количество цифр всегда чётно, например: 33 или 2341 и так далее.

// Билет с номером 385916 — счастливый, так как 3 + 8 + 5 === 9 + 1 + 6. Билет с номером 231002 не является счастливым, так как 2 + 3 + 1 !== 0 + 0 + 2.

// isHappyTicket.js
// Реализуйте и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер — всегда строка). 
// Функция должна возвращать true, если билет счастливый, или false, если нет.

// Примеры использования:

// isHappyTicket('385916'); // true
// isHappyTicket('231002'); // false
// isHappyTicket('1222');   // false
// isHappyTicket('054702'); // true
// isHappyTicket('00');     // true

const isHappyTicket = (number) => {
  const digitCount = number.length;
  let leftPartSum = 0;
  let rightPartSum = 0;

  for (let i = 0; i < digitCount / 2; i++) {
    leftPartSum += Number(number[i]);
    rightPartSum += Number(number[digitCount - i - 1]);
  }

  return leftPartSum === rightPartSum;
}

export default isHappyTicket;
