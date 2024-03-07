// Вес Хэмминга — это количество единиц в двоичном представлении числа.
// Реализуйте и экспортируйте по умолчанию функцию, которая считает вес Хэмминга.

// Примеры
// hammingWeight(0); // 0
// hammingWeight(4); // 1
// hammingWeight(101); // 4

export default (number) => number.toString(2).replace(/0/g, '').length;
