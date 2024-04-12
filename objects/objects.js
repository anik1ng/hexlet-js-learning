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


// Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из объекта любой глубины вложенности значение по указанным ключам. 

// Параметры:
// Исходный объект
// Цепочка ключей (массив), по которой ведётся поиск значения
// В случае, когда добраться до значения невозможно, возвращается null.

// import get from './objects.js';

// const data = {
//   user: 'ubuntu',
//   hosts: {
//     0: {
//       name: 'web1',
//     },
//     1: {
//       name: 'web2',
//       null: 3,
//       active: false,
//     },
//   },
// };

// get(data, ['undefined']); // null
// get(data, ['user']); // 'ubuntu'
// get(data, ['user', 'ubuntu']); // null
// get(data, ['hosts', 1, 'name']); // 'web2'
// get(data, ['hosts', 0]); // { name: 'web1' }
// get(data, ['hosts', 1, null]); // 3
// get(data, ['hosts', 1, 'active']); // false
// get(data, []); // { user: 'ubuntu', hosts: { 0: { name: 'web1' }, 1: { name: 'web2', null: 3, active: false }}}
// В этой задаче нельзя использовать библиотеку lodash. Смысл задачи в том, чтобы реализовать всё самостоятельно.

// Для проверки наличия ключа используйте вариант предлагаемый ниже:

// // Метод Object.hasOwn() проверяет есть ли в объекте ключ,
// // просто скопируйте этот вызов и подставьте правильные аргументы

// const obj = { key: 'value' };
// Object.hasOwn(obj, 'key'); // true
// Object.hasOwn(obj, 'another key'); // false

export default (object, keys) => {
  let result = object;

  for (const key of keys) {
    if (Object.hasOwn(result, key)) {
      result = result[key];
    } else {
      return null;
    }
  }

  return result;
};


// Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект данными из другого объекта по разрешенному списку ключей. 
  
// Параметры:
// Исходный объект
// Список ключей, которые нужно заменить
// Данные, которые нужно сливать в исходный объект
// В случае, когда список ключей пустой, нужно сливать все данные полностью.

// import fill from '../objects.js';

// const company = {
//   name: null,
//   state: 'moderating',
// };

// const data = {
//   name: 'Hexlet',
//   state: 'published',
// };

// // Вызовы ниже нужно рассматривать как независимые

// fill(company, ['name'], data);
// // {
// //   name: 'Hexlet',
// //   state: 'moderating',
// // }

// fill(company, [], data);
// // {
// //   name: 'Hexlet',
// //   state: 'published',
// // }

export default (object, keys, data) => {
  if (keys.length !== 0) {
    data = _.pick(data, keys);
  }

  Object.assign(object, data);

  return object;
};


// Реализуйте и экспортируйте по умолчанию функцию, которая выполняет поверхностное копирование объектов.

// import cloneShallow from '../objects.js';

// const data = {
//   key: 'value',
//   key2: {
//     key: 'innerValue',
//     innerKey: {
//       anotherKey: 'anotherValue',
//     },
//   },
// };

// // result имеет такую же структуру, как и data
// const result = cloneShallow(data);
// Реализуйте этот функционал самостоятельно, не используя функцию Object.assign().

// Подсказки
// Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные в другой объект.

export default (data) => {
  const result = {};

  for (const key in data) {
    result[key] = data[key];
  }

  return result;
};


// Реализуйте и экспортируйте по умолчанию функцию, которая создает объект компании и возвращает его. 
// Для создания компании обязательно только одно свойство – имя компании. Остальные свойства добавляются только если они есть. 

// Параметры:
// Имя (обязательно)
// Объект с дополнительными свойствами (если они есть)
// Также, кроме имени, у компаний есть два свойства со значениями по умолчанию. 
// Если значение этих свойств не передано при создании, то они принимают следующие значения:

// state – moderating
// createdAt – текущая дата (в формате Unix-времени. Это число - количество миллисекунд, прошедших с полуночи 1 января 1970 года)
// import make from '../company.js';

// // Дополнительные свойства не переданы
// const company = make('Hexlet');
// // {
// //   name: 'Hexlet',
// //   state: 'moderating',
// //   createdAt: <тут текущая дата>
// // }

// // Передаем дополнительные свойства
// const company = make('Hexlet', { website: 'hexlet.io', state: 'published' });
// // {
// //   name: 'Hexlet',
// //   website: 'hexlet.io',
// //   state: 'published',
// //   createdAt: <тут текущая дата>
// // }
// Используйте спред-оператор для слияния данных внутри и возврата нового объекта.

export default (name, company) => ({
  name,
  state: 'moderating',
  createdAt: Date.now(),
  ...company,
});
