export function heapSortAnimations(array) {
  const animations = [];
  buildMaxHeap(array, animations);
  for (let endIndex = array.length - 1; endIndex >= 1; endIndex--) {
    animations.push([0, endIndex, array[0], array[endIndex]]);
    swap(0, endIndex, array);
    siftDown(0, endIndex - 1, array, animations);
  }
  // return array;
  return animations;
}
function buildMaxHeap(array, animations) {
  const lastParentIndex = Math.floor((array.length - 1) / 2);
  for (let i = lastParentIndex; i >= 0; i--) {
    siftDown(i, array.length - 1, array, animations);
  }
}
function siftDown(currentIndex, endIndex, heap, animations) {
  let childOneIndex = currentIndex * 2 + 1;
  while (childOneIndex <= endIndex) {
    animations.push([childOneIndex, endIndex, -1, -1]);
    animations.push([childOneIndex, endIndex, -1, -1]);
    let childTwoIndex =
      currentIndex * 2 + 2 <= endIndex ? currentIndex * 2 + 2 : -1;
    let indexToSwap;
    if (childTwoIndex !== -1 && heap[childTwoIndex] > heap[childOneIndex]) {
      indexToSwap = childTwoIndex;
    } else {
      indexToSwap = childOneIndex;
    }
    if (heap[indexToSwap] > heap[currentIndex]) {
      animations.push([
        currentIndex,
        indexToSwap,
        heap[currentIndex],
        heap[indexToSwap]
      ]);
      swap(currentIndex, indexToSwap, heap);
      currentIndex = indexToSwap;
      childOneIndex = currentIndex * 2 + 1;
    } else {
      return;
    }
  }
}

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
