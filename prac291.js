const a = [
  { name: "Alice", age: 25, city: "New York", landmark: "road",age:30},
  { city: "Los Angeles", name: "Bob", age: 30, landmark: "" },
  { city: "", name: "shakti" },
];

const sortObject = (a) => {
  const sortedArray = a.map((obj) => {
    const sortedKeys = Object.keys(obj).sort();
    console.log("sorted keys:-", sortedKeys);
    const sortedObj = {};
    sortedKeys.forEach((key) => {
      sortedObj[key] = obj[key];
    });
    return sortedObj;
  });
  console.log(sortedArray);
};

const removeEmpty = (a) => {
  const newArray = a.map((obj) => {
    let getKeys = Object.keys(obj);
    let newObj = {};
    getKeys.forEach((key) => {
      if (obj[key] != "") {
        newObj[key] = obj[key];
      }
    });
    return newObj;
  });
  console.log(newArray);
};

//   sortObject(a);
removeEmpty(a);
