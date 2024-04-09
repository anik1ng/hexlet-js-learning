// Реализуйте и экспортируйте по умолчанию функцию, которая возвращает объект, соответствующий JSON из файла example.json в этом упражнении. 
// Всё, что вам нужно сделать, это:

// определить функцию
// посмотреть на содержимое example.json и руками сформировать объект аналогичной структуры
// вернуть полученный объект из функции

export default () => {
  return {
    files: ['src/objects.js'],
    config: true,
  };
};


// Реализуйте и экспортируйте по умолчанию функцию, которая "нормализует" данные переданного урока. 
// То есть приводит их к определенному виду. Нормализация происходит путём изменения исходного объекта.

// На вход этой функции подается объект, описывающий собой урок курса. В уроке содержатся два поля: имя и описание.

// const lesson = {
//   name: 'Деструктуризация',
//   description: 'как удивить друзей',
// };
// У некоторых уроков имя и описание могут быть в разном регистре. Такое случается при вводе данных:

// const lesson = {
//   name: 'ДеструКТУРИЗАЦИЯ',
//   description: 'каК удивитЬ друзей',
// };
// Наша функция должна обновлять содержимое урока по следующим правилам:

// Имя капитализируется. То есть первый символ имени становится заглавным, остальные маленькими.
// Весь текст описания приводится к нижнему регистру.
// import normalize from './normalize.js';

// const lesson = {
//   name: 'ДеструКТУРИЗАЦИЯ',
//   description: 'каК удивитЬ друзей',
// };

// Обратите внимание, что не используется возврат.
// Объекты, как и массивы, передаются по ссылке.
// Изменение переданного объекта внутри отражается на самом объекте:
// normalize(lesson);

// console.log(lesson);
// {
//   name: 'Деструктуризация',
//   description: 'как удивить друзей'
// }

import _ from 'lodash';

export default (obj) => {
  obj.name = _.capitalize(obj.name.toLowerCase());
  obj.description = obj.description.toLowerCase();
};


// Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по совпадению данных, а не по ссылкам. 
// Эта функция принимает на вход две компании и возвращает true, если их структура одинаковая, и false в обратном случае. 
// Проверка должна проходить по свойствам name, state, website.

// import is from './company.js';

// const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
// const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
// is(company1, company2); // false

// const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
// const company2 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
// is(company1, company2); // true

export default (company1, company2) => company1.name === company2.name
    && company1.state === company2.state
    && company1.website === company2.website;


// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход имя сайта и возвращает информацию о нем:

// import getDomainInfo from './domain.js';

// Если домен передан без указания протокола,
// то по умолчанию берется http
// getDomainInfo('yandex.ru')
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }

// getDomainInfo('https://hexlet.io');
// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }

// getDomainInfo('http://google.com');
// {
//   scheme: 'http',
//   name: 'google.com',
// }

export default (domain) => {
  let scheme;
  let name;

  if (domain.startsWith('https://')) {
    scheme = 'https';
    name = domain.replace('https://', '');
  } else if (domain.startsWith('http://')) {
    scheme = 'http';
    name = domain.replace('http://', '');
  } else {
    scheme = 'http';
    name = domain;
  }

  return {
    scheme,
    name,
  };
};


// Реализуйте и экспортируйте по умолчанию функцию, которая считает количество слов в предложении, и возвращает объект. 
// В объекте свойства — это слова (приведенные к нижнему регистру), а значения — это то, сколько раз слово встретилось в предложении. 
// Слова в предложении могут находиться в разных регистрах. Перед подсчетом их нужно приводить в нижний регистр, чтобы не пропускались дубли.

// import countWords from './words.js';

// // Если предложение пустое, то возвращается пустой объект 
// countWords('');
// // {}

// const text1 = 'one two three two ONE one wow';
// countWords(text1);
// // {
// //   one: 3,
// //   two: 2,
// //   three: 1,
// //   wow: 1,
// // }

// const text2 = 'another one sentence with strange Words words';
// countWords(text2);
// // {
// //   another: 1,
// //   one: 1,
// //   sentence: 1,
// //   with: 1,
// //   strange: 1,
// //   words: 2,
// // }
// Подсказки
// Для формирования массива слов поможет функция _.words
// toLowerCase – приведение к нижнему регистру

import _ from 'lodash';

export default (text) => {
  if (_.isEmpty(text)) {
    return {};
  }

  const words = _.words(text.toLowerCase());
  const wordCounts = {};

  for (const word of words) {
    if (!wordCounts[word]) {
      wordCounts[word] = 1;
    } else {
      wordCounts[word] += 1;
    }
  }

  return wordCounts;
};


// Реализуйте и экспортируйте функцию по умолчанию, которая формирует из переданного объекта другой объект, 
// включающий только указанные свойства. 

// Параметры:

// Исходный объект
// Массив имен свойств
// import pick from './objects.js';

// const data = {
//   user: 'ubuntu',
//   cores: 4,
//   os: 'linux',
// };

// pick(data, ['user']); // { user: 'ubuntu' }
// pick(data, ['user', 'os']); // { user: 'ubuntu', os: 'linux' }
// pick(data, []); // {}
// // Если такого свойства нет в исходных данных,
// // то оно игнорируется 
// pick(data, ['none', 'cores']); // { cores: 4 }

export default (data, allowed) => {
  const keys = Object.keys(data);
  const result = {};

  for (const key of keys) {
    if (allowed.includes(key)) {
      result[key] = data[key];
    }
  }

  return result;
};
