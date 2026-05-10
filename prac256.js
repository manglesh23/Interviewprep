const a=[1, 3, 2, 5, 9, 7, 12];

const findElement=(a)=>{
    let leftMax= Array(a.length).fill(0);
    let rightMin= Array(a.length).fill(0);
    // console.log(leftMax,rightMin);
    leftMax[0]=a[0];
    for(let i=1;i<a.length;i++){
        leftMax[i]=Math.max(leftMax[i-1],a[i]);
    }
    rightMin[a.length-1]=a[a.length-1];
    for(let i=a.length-2;i>=0;i--){
        rightMin[i]=Math.min(rightMin[i+1],a[i]);
    }
    for(let i=0;i<a.length;i++){
        if(a[i]>leftMax[i-1] && a[i]<rightMin[i+1]){
            return a[i];
        }
    }
}

let ele=findElement(a);
console.log(ele);