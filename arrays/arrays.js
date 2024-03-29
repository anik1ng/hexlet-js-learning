// Реализуйте и экспортируйте функцию reverse(), которая принимает на вход массив и располагает элементы исходного массива в обратном порядке. 
// Функция должна мутировать переданный в нее массив. Новый массив из нее возвращать не надо.

// import { reverse } from './arrays';
 
// const names = ['john', 'smith', 'karl'];
 
// reverse(names);
// console.log(names); // => ['karl', 'smith', 'john']
 
// reverse(names);
// console.log(names); // => ['john', 'smith', 'karl']

// Решение этой задачи подразумевает самостоятельную реализацию функции без использования встроенного метода reverse().

export const reverse = (array) => {
  for (let i = 0; i < array.length / 2; i += 1) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }

  return array;
};


// Реализуйте и экспортируйте по умолчанию функцию. Она должна высчитывать сумму всех элементов массива, которые делятся без остатка на три:

// const coll1 = [8, 9, 21, 19, 18, 22, 7];
// calculateSum(coll1); // 48
 
// const coll2 = [2, 0, 17, 3, 9, 15, 4];
// calculateSum(coll2); // 27

const calculateSum = (array) => {
  if (array.length === 0) {
    return 0;
  }

  let result = 0;

  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] % 3 === 0) {
      result += array[i];
    }
  }

  return result;
};

export default calculateSum;


// Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает среднее арифметическое элементов переданного массива. Благодаря этой функции мы наконец-то посчитаем среднюю температуру по больнице:

// const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
// calculateAverage(temperatures1); // 38.5
 
// const temperatures2 = [36, 37.4, 39, 41, 36.6];
// calculateAverage(temperatures2); // 38

const calculateAverage = (array) => {
  if (array.length === 0) {
    return null;
  }

  let result = 0;

  for (const el of array) {
    result += el;
  }

  return result / array.length;
};

export default calculateAverage;


// Реализуйте функцию getSameParity(), которая принимает на вход массив чисел и возвращает новый, состоящий из элементов, 
// у которых такая же чётность, как и у первого элемента входного массива. Экспортируйте функцию по умолчанию.

// getSameParity([]);        // []
// getSameParity([1, 2, 3]); // [1, 3]
// getSameParity([1, 2, 8]); // [1]
// getSameParity([2, 2, 8]); // [2, 2, 8]

const getSameParity = (array) => {
  if (array.length === 0) {
    return [];
  }

  const even = [], odd = [];

  for (const el of array) {
    Math.abs(el) % 2 === 0 ? even.push(el) : odd.push(el);
  }

  return Math.abs(array[0]) % 2 === 0 ? even : odd;
};

export default getSameParity;


// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход в виде массива кошелек с деньгами и название валюты и возвращает сумму денег указанной валюты.

// Параметры функции:

// Массив, содержащий купюры разных валют с различными номиналами
// Наименование валюты
// Реализуйте данную функцию, используя управляющие инструкции:

// const money1 = [
//   'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
// ];
// getTotalAmount(money1, 'usd') // 16
 
// const money2 = [
//   'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
// ];
// getTotalAmount(money2, 'eur') // 135
 
// const money3 = [
//   'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
// ];
// getTotalAmount(money3, 'rub') // 270

const getTotalAmount = (array, currency) => {
  let result = 0;

  for (const el of array) {
    if (el.slice(0, 3) === currency) {
      result += Number(el.slice(4, el.length));
    }
  }

  return result;
};

export default getTotalAmount;


// Реализуйте и экспортируйте по умолчанию функцию, принимающую на вход два массива и возвращающую количество общих уникальных значений в обоих массивах.

// Примеры:
// // Общие уникальные элементы: 1, 3, 2
// getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]); // 3
 
// // Общие уникальные элементы: 4
// getSameCount([1, 4, 4], [4, 8, 4]); // 1
 
// // Общие уникальные элементы: 1, 10
// getSameCount([1, 10, 3], [10, 100, 35, 1]); // 2
 
// // Нет элементов
// getSameCount([], []); // 0

import _ from 'lodash';

const getSameCount = (arrayOne, arrayTwo) => {
  let count = 0;
  const uniqArrayOne = _.uniq(arrayOne);
  const uniqArrayTwo = _.uniq(arrayTwo);

  for (const el of uniqArrayOne) {
    for (const el2 of uniqArrayTwo) {
      if (el === el2) {
        count += 1;
      }
    }
  }

  return count;
};

export default getSameCount;


// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два отсортированных массива и находит их пересечение. 
// Пересечение двух массивов A и B — это массив только с теми элементами A и B, которые одновременно принадлежат обоим массивам, без дублей:

// getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]); // [10, 24]
// getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]); // []
// getIntersectionOfSortedArrays([], [2]); // []

export default (arrayOne, arrayTwo) => {
  const result = [];

  if (arrayOne.length === 0 || arrayTwo.length === 0) {
    return result;
  }

  if (arrayOne.length > arrayTwo.length) {
    [arrayOne, arrayTwo] = [arrayTwo, arrayOne];
  }

  for (const item of arrayOne) {
    if (arrayTwo.includes(item) && !result.includes(item)) {
      result.push(item);
    }
  }

  return result;
};


// Реализуйте и экспортируйте функцию getMax(), которая ищет в массиве максимальное значение и возвращает его:

// import { getMax } from '../arrays.js';
 
// // Для пустого массива возвращается null
// getMax([]); // null
// getMax([1, 10, 8]); // 10

export const getMax = (array) => {
  if (array.length === 0) {
    return null;
  }

  const [first, ...rest] = array;
  let max = first;

  for (const el of rest) {
    max = el > max ? el : max;
  }

  return max;
};


// Реализуйте и экспортируйте функцию flatten(). Эта функция принимает на вход массив и выпрямляет его: если элементами массива являются массивы, 
// то flatten сводит всё к одному массиву, раскрывая один уровень вложенности.

// В js эта функция реализована как метод flat() у массивов. Его использовать нельзя.

// import { flatten } from '../arrays.js';
 
// // Для пустого массива возвращается []
// flatten([]); // []
// flatten([1, [3, 2], 9]); // [1, 3, 2, 9]
// flatten([1, [[2], [3]], [9]]); // [1, [2], [3], 9]
export const flatten = (array) => {
  if (array.length === 0) {
    return array;
  }

  const result = [];

  for (const el of array) {
    if (Array.isArray(el)) {
      result.push(...el);
    } else {
      result.push(el);
    }
  }

  return result;
};
