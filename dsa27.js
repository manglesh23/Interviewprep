let arr = [1, 2, 3, 2, 1];
let unique = 0;
for (let num of arr) {
    unique ^= num;
    // console.log(unique)
}
console.log(unique); // Output: 3
