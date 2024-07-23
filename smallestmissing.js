const arr = [0, -1, -2, 4, 5, -7, -3, 6];

const findsmallest = (arr) => {
    const n = arr.length;
    let j = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] > 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];         // Swap positive number to the front
        j++;
      }
    }
    console.log(arr,j);

    for(let i=0;i<=j;i++){
      let val= arr[i];
      if(val-1<j && arr[val-1]>0){
        arr[val-1]=-arr[val-1]
      }
    }
    console.log(arr)

    for(let i=0;i<=j;i++){
      if(arr[i]>0){
        console.log(i+1);
        break;
      }
    }
};

findsmallest(arr);
