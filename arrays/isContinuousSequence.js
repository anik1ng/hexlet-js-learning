// Реализуйте и экспортируйте по умолчанию функцию, которая проверяет, является ли переданная 
// последовательность целых чисел возрастающей непрерывно (не имеющей пропусков чисел). 
// Например, последовательность [4, 5, 6, 7] — непрерывная, а [0, 1, 3] — нет. 
// Последовательность может начинаться с любого числа, главное условие — отсутствие пропусков чисел. 
// Шаг последовательности равен 1. Последовательность из одного числа не может считаться возрастающей.

// Примеры
// isContinuousSequence([10, 11, 12, 13]);     // true
// isContinuousSequence([-5, -4, -3]);         // true

// isContinuousSequence([10, 11, 12, 14, 15]); // false
// isContinuousSequence([1, 2, 2, 3]);         // false
// isContinuousSequence([7]);                  // false
// isContinuousSequence([]);                   // false


export default (array) => {
  if (array.length <= 1) {
    return false;
  }

  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] + 1 !== array[i + 1]) {
      return false;
    }
  }

  return true;
};
