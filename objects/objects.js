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
