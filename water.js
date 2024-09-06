const a = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const find = (a) => {
  let left = 0;
  let right = a.length - 1;
  let maxarea = 0;

  while (left < right) {
    let width = right - left;
    let currheight = Math.min(a[left], a[right]);
    let area = width * currheight;

    maxarea = Math.max(area, maxarea);

    if (a[left] < a[right]) {
      left++;
    } else {
      right--;
    }
  }
  console.log(maxarea);
};

find(a);
