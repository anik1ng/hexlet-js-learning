// Реализуйте функцию buildDefinitionList(), которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку. 
// При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию.

// Параметры функции
// Список определений следующего формата:

//  const definitions = [
//   ['definition1', 'description1'],
//   ['definition2', 'description2']
// ];
// То есть каждый элемент входного списка сам является массивом, содержащим два элемента: термин и его определение.

// Пример использования
// const definitions = [
//   ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
//   ['Бобр', 'Животное из отряда грызунов'],
// ];
 
// buildDefinitionList(definitions);
// // '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';

const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) {
    return '';
  }

  const result = [];

  for (const [dt, dd] of definitions) {
    result.push(`<dt>${dt}</dt><dd>${dd}</dd>`);
  }

  return `<dl>${result.join('')}</dl>`;
};

export default buildDefinitionList;


// Реализуйте и экспортируйте по умолчанию функцию, которая заменяет каждое вхождение указанных слов в предложении 
// на последовательность $#%! и возвращает полученную строку. Аргументы:

// Текст
// Набор стоп слов
// Словом считается любая непрерывная последовательность символов, включая любые спецсимволы (без пробелов).

// Примеры
// import makeCensored from '../strings';
 
// const sentence = 'When you play the game of thrones, you win or you die';
// const result = makeCensored(sentence, ['die', 'play']);
// // When you $#%! the game of thrones, you win or you $#%!
 
// const sentence2 = 'chicken chicken? chicken! chicken';
// const result2 = makeCensored(sentence2, ['?', 'chicken']);
// // '$#%! chicken? chicken! $#%!';

const makeCensored = (sentence, stopList) => {
  const separator = ' ';
  const replacer = '$#%!';
  const words = sentence.split(separator);
  const result = [];

  for (const word of words) {
    result.push(stopList.includes(word) ? replacer : word);
  }

  return result.join(separator);
};

export default makeCensored;
