// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и число, которое задает размер чанка (куска). 
// Функция должна вернуть массив, состоящий из чанков указанной размерности.

// Примеры
// chunk(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]
// chunk(['a', 'b', 'c', 'd'], 3); // [['a', 'b', 'c'], ['d']]

export default (array, size) => {
  const result = [];
  let chunkTemp = [];

  array.forEach((el) => {
    chunkTemp.push(el);

    if (chunkTemp.length === size) {
      result.push(chunkTemp);
      chunkTemp = [];
    }
  });

  if (chunkTemp.length > 0) {
    result.push(chunkTemp);
  }

  return result;
};
