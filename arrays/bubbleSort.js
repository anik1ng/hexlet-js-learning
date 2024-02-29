const bubbleSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  let sorted = false;

  do {
    sorted = false;

    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = true;
      }
    }
  } while (sorted);

  return array;
};

export default bubbleSort;
