const a = [
  { age: 13, name: "manglesg", city: "delhi", address: "trygh", empty: "" },
  {name:'loan',city:'jaipur',state:'Rajasthan',age:30}
];

const sortobjectkey = (a) => {
  let sortedArray = a.map((obj) => {
    let sortedKeys = Object.keys(obj).sort();
    let sortedObj = {};
    sortedKeys.forEach((key) => {
      if (obj[key] !== "" || obj[key] !== null || obj[key] !== undefined) {
        sortedObj[key] = obj[key];
      }
    });
    return sortedObj;
  });
  console.log(sortedArray);
};

sortobjectkey(a);
