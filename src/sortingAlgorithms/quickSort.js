export function quickSortAnimations(array) {
  const animations = [];
  quickSortHelper(array, 0, array.length - 1, animations);
  // return array;
  return animations;
}
//-1 pivot
//-2 swap
//-3 traversing the arrays with left and right indices
function quickSortHelper(array, startIndex, endIndex, animations) {
  if (startIndex >= endIndex) return;
  // animations.push(-1);
  animations.push(-2);
  const pivot = startIndex;
  let leftIndex = startIndex + 1;
  let rightIndex = endIndex;
  //zero value in last to show that we are changing pivot
  animations.push([pivot, leftIndex, rightIndex, 0]);
  while (rightIndex >= leftIndex) {
    // animations.push(-3);
    //optional pushes to delay the animation effect
    // animations.push([leftIndex, rightIndex]);
    animations.push([leftIndex, rightIndex]);
    animations.push([leftIndex, rightIndex]);
    if (array[leftIndex] > array[pivot] && array[rightIndex] < array[pivot]) {
      animations.push(-2);
      animations.push([
        leftIndex,
        rightIndex,
        array[leftIndex],
        array[rightIndex]
      ]);
      swap(leftIndex, rightIndex, array);
    }
    if (array[leftIndex] <= array[pivot]) leftIndex++;
    if (array[rightIndex] >= array[pivot]) rightIndex--;
  }
  animations.push(-2);
  animations.push([pivot, rightIndex, array[pivot], array[rightIndex]]);
  swap(pivot, rightIndex, array);
  const leftSubArrayIsSmaller =
    rightIndex - 1 - startIndex < endIndex - (rightIndex + 1);
  if (leftSubArrayIsSmaller) {
    quickSortHelper(array, startIndex, rightIndex - 1, animations);
    quickSortHelper(array, rightIndex + 1, endIndex, animations);
  } else {
    quickSortHelper(array, rightIndex + 1, endIndex, animations);
    quickSortHelper(array, startIndex, rightIndex - 1, animations);
  }
}

function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

// read this for more details
// https://www.geeksforgeeks.org/quick-sort/
