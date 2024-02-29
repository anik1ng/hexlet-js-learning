// Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит ближайшее место к указанной точке на карте и возвращает его. Параметры функции:

// locations – список мест на карте (массив). Каждое место – массив из двух элементов:
// Первый элемент – это название места
// Второй – точка на карте (массив из двух чисел-координат x и y)
// point – текущая точка на карте
// import { getTheNearestLocation } from '../location.js';
 
// const locations = [
//   ['Park', [10, 5]],
//   ['Sea', [1, 3]],
//   ['Museum', [8, 4]],
// ];
 
// const currentPoint = [5, 5];
 
// // Если мест нет, то возвращается null
// getTheNearestLocation([], currentPoint); // null
 
// getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

export const getTheNearestLocation = (locations, currentPoint) => {
  if (!locations.length || !currentPoint.length) {
    return null;
  }

  let minDistance = -1;
  let nearestLocation = [];

  for (const [location, coords] of locations) {
    const distance = getDistance(coords, currentPoint);

    if (distance < minDistance || minDistance === -1) {
      minDistance = distance;
      nearestLocation = [location, coords];
    }
  }

  return nearestLocation;
};
