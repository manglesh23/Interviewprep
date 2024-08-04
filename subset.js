function getAllSubsets(array) {
    const subsets = [[]];
  
    for (const element of array) {
      const length = subsets.length;
      for (let i = 0; i < length; i++) {
        const subset = subsets[i].slice(); // Create a copy of the current subset
        subset.push(element);
        subsets.push(subset);
      }
    }
  
    return subsets;
  }
  
  const array = [1, 2, 3];
  const allSubsets = getAllSubsets(array);
  console.log(allSubsets);
  