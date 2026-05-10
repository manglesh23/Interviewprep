let a = [1, 0, 0, 0, 1, 0, 1];

const getMaximumDis = (a) => {
  let last = -1;
  let maxDist = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) {
      if (last === -1) {
        maxDist = i;
      } else {
        maxDist = Math.max(maxDist, Math.floor((i - last) / 2));
      }
      last = i;
    }
  }
  maxDist = Math.max(maxDist, a.length - 1 - last);
  console.log(maxDist);
};
getMaximumDis(a);
