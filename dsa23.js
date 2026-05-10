const a = [1, 2, 1, 3, 4, 2, 5];

const checkDuplicate = (a) => {
  let set = new Set(a);
  console.log(set);
  for (let i = 0; i < a.length; i++) {
    if (!set.has(a[i]) && set.size > 0) {
      console.log(a[i]);
    }

    if (set.has(a[i])) {
      set.delete(a[i]);
    }

    // console.log(set)
  }
  // console.log("set;-",set)
};
checkDuplicate(a);
