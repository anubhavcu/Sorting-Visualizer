// export function insertionSortAnimations(items) {
//   const animations1 = [],
//     animations2 = [];
//   for (let i = 0; i < items.length; i++) {
//     let value = items[i];
//     animations1.push([i]);
//     // store the current item value so it can be placed right
//     for (let j = i - 1; j > 0 && items[j] > value; j--) {
//       animations2.push([j, j + 1]);
//       animations2.push([j, j + 1]);

//       items[j + 1] = items[j];

//       items[j + 1] = value;
//       animations2.push([j + 1, value]);
//     }
//   }

//   return animations1, animations2;
// }

export function insertionSortAnimations(array) {
  const animations = [];
  for (let i = 1; i < array.length; i++) {
    let key = array[i],
      j = i - 1;
    animations.push([i, j]);
    animations.push([i, j]);
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
      // animations.push([j + 1, array[j]]);
    }
    array[j + 1] = key;
    animations.push([j + 1, key]);
  }
  return animations;
}
