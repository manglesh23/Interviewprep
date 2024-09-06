const a = [1, 2, 2, 4, 5, 6, 7];

const missingRepeat = (a) => {
  let map = new Map();
  for (let i = 0; i < a.length; i++) {
    if (!map.has(a[i])) {
      map.set(a[i], 1);
    } else {
      map.set(a[i], map.get(a[i]) + 1);
    }
  }

  map.forEach((value, key) => {
    if (value > 1) {
      console.log(key);
    }
  });

  for(let i=1;i<a.length;i++){
    if(!map.has(i)){
        console.log(i);
    }
  }
  
};

missingRepeat(a);
