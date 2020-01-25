export function bubbleSortAnimations(array) {
  console.log(array);
  let isSorted = false;
  let animations = [];
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      // animations.push([i, i + 1]);
      animations.push([i, i + 1]);

      if (array[i] > array[i + 1]) {
        // animations.push([i, i + 1]);
        // animations.push([i,i+1]);
        animations.push(-1);
        animations.push([i, i + 1, array[i], array[i + 1]]);
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    // animations.push(-1);
    counter += 1;
  }
  return animations;
  // return array;
}
function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
