let a = [1, 2, 3, 1, 2, 3];
let k = 4;

const getDupLicateInwindow = (a, k) => {
  let set = new Set();

  let left = 0;
  for (let i = 0; i < a.length; i++) {
    console.log(set);

    if (i - left >= k) {
      set.delete(a[left]);
      left++;
    }

    if (set.has(a[i])) {
      return true;
    }
    set.add(a[i]);
  }
  return false
};

console.log("dup:-",getDupLicateInwindow(a, k));
