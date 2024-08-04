const a=[2,3,1,6,5,9,0];

const sortTheArray=(a)=>{

    if(a.length<=1){
        return a;
    }
  let left=[];
  let right=[];
  let pivot=a[a.length-1];

  for(let i=0;i<a.length-1;i++){
    if(a[i]<pivot){
        left.push(a[i])
    }else{
        right.push(a[i])
    }
  }

  return[...sortTheArray(left),pivot,...sortTheArray(right)]


}

let sorted=sortTheArray(a);
console.log(sorted);