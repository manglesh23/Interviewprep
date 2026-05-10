function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left;
    
    for (let j = left; j < right; j++) {
      if (arr[j] <= pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap elements
        i++;
      }
    }
    
    [arr[i], arr[right]] = [arr[right], arr[i]];  // Move pivot to correct position
    return i;
  }
  
  function quickselect(arr, left, right, k) {
    if (left === right) return arr[left];
    
    const pivotIndex = partition(arr, left, right);
    
    if (k === pivotIndex) {
      return arr[k];
    } else if (k < pivotIndex) {
      return quickselect(arr, left, pivotIndex - 1, k);
    } else {
      return quickselect(arr, pivotIndex + 1, right, k);
    }
  }
  
  function kthSmallest(arr, k) {
    return quickselect(arr, 0, arr.length - 1, k - 1);  // Adjusting for 0-index
  }
  
  // Example usage
  const arr = [7, 10, 4, 3, 20, 15];
  const k = 3;
  console.log(kthSmallest(arr, k));  // Output: 7
  