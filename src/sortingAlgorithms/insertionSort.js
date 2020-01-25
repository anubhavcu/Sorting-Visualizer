export function insertionSortAnimations(array) {
  const animations = [];
  for (let i = 1; i < array.length; i++) {
    let j = i;
    animations.push([j, j - 1, -1, -1]);
    animations.push([j, j - 1, -1, -1]);
    while (j > 0 && array[j] < array[j - 1]) {
      animations.push([j, j - 1, array[j], array[j - 1]]);
      swap(j, j - 1, array);
      j -= 1;
    }
  }
  // return array;
  return animations;
}
function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
