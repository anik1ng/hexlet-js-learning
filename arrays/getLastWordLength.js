// Реализуйте и экспортируйте по умолчанию функцию, которая возвращает длину последнего слова переданной на вход строки. 
// Словом считается любая последовательность, не содержащая пробелов.
 
// getLastWordLength(''); // 0
// getLastWordLength('man in BlacK'); // 5
// getLastWordLength('hello, world!  '); // 6

export default (string) => {
  if (string.length === 0) {
    return 0;
  }

  const array = string.trim().split(' ');

  return array[array.length - 1].length;
};
