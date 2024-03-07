// Матрицу можно представить в виде двумерного списка. 
// Например, список [[1, 2, 3], [4, 5, 6], [7, 8, 9]] — это отображение матрицы:
// 1 2 3
// 4 5 6
// 7 8 9

// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход матрицу 
// и возвращает список элементов матрицы по порядку следования от левого верхнего элемента 
// по часовой стрелке к внутреннему. Движение по матрице напоминает улитку:

// Примеры:
// buildSnailPath([
//   [1, 2],
//   [3, 4],
// ]); // [1, 2, 4, 3]
 
// buildSnailPath([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ]) // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7] 


export default (matrix) => {
  const result = [];

  while (matrix.length > 0) {
    result.push(...matrix.shift());

    for (let i = 0; i < matrix.length; i += 1) {
      result.push(matrix[i].pop());
    }

    if (matrix.length > 0) {
      result.push(...matrix.pop().reverse());
    }

    for (let i = matrix.length - 1; i >= 0; i -= 1) {
      if (matrix[i].length > 0) {
        result.push(matrix[i].shift());
      }
    }
  }

  return result;
};
