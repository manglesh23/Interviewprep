const minMove=(arr)=>{
    arr.sort((a,b)=>a-b);
    console.log(arr);
    // console.log(arr.length)
    let median= arr[Math.floor((arr.length)/2)];
    console.log(median)
   let move=0;
    for(let v of arr){
        move+=Math.abs(v-median);
    }
    console.log(movemin)
}
let arr=[4,3,5];
minMove(arr);