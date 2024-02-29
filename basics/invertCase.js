// Реализуйте и экспортируйте по умолчанию функцию, которая меняет в строке регистр каждой буквы на противоположный. 
// Функция должна возвращать полученный результат

// Примеры:

// invertCase('Hello, World!'); // hELLO, wORLD!
// invertCase('I loVe JS');     // i LOvE js

export default (str) => {
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    result += str[i].toUpperCase() === str[i] ? str[i].toLowerCase() : str[i].toUpperCase();
  }

  return result;
};
