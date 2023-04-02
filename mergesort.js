function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const left = array.slice(0, Math.floor(array.length / 2));
    const right = array.slice(array.length / 2);

    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  const result = [];
  let [i, j] = [0, 0];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

console.log(mergeSort([4, 8, 6, 2, 1, 7, 5, 3, 9, 0]));
