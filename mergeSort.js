function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const l = 0;
  const r = arr.length;
  const m = Math.round(r / 2);

  return merge(mergeSort(arr.slice(l, m)), mergeSort(arr.slice(m, r)));
}

function merge(arrOne, arrTwo) {
  let result = [];
  let k = 0;
  let j = 0;

  while (k < arrOne.length && j < arrTwo.length) {
    if (arrOne[k] < arrTwo[j]) {
      result.push(arrOne[k]);
      k++;
    } else {
      result.push(arrTwo[j]);
      j++;
    }
  }

  while (k < arrOne.length) {
    result.push(arrOne[k]);
    k++;
  }

  while (j < arrTwo.length) {
    result.push(arrTwo[j]);
    j++;
  }

  return result;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));