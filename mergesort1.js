function merge(array, leftStart, leftEnd, rightStart, rightEnd) {
  let tempArray = [];
  let i = leftStart;
  let j = rightStart;

  while (i <= leftEnd && j <= rightEnd) {
    if (array[i] <= array[j]) {
      tempArray.push(array[i]);
      i++;
    } else {
      tempArray.push(array[j]);
      j++;
    }
  }

  while (i <= leftEnd) {
    tempArray.push(array[i]);
    i++;
  }

  while (j <= rightEnd) {
    tempArray.push(array[j]);
    j++;
  }

  for (let k = leftStart; k <= rightEnd; k++) {
    array[k] = tempArray[k - leftStart];
  }
}

function mergeSort(array, left, right) {
  if (left >= right) {
    return;
  }

  const mid = Math.floor((left + right) / 2);

  mergeSort(array, left, mid);
  mergeSort(array, mid + 1, right);

  merge(array, left, mid, mid + 1, right);
}

const array = [38, 27, 43, 3, 9, 82, 10];
mergeSort(array, 0, array.length - 1);

console.log(array);
