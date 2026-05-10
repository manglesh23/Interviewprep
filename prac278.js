const a=[2,2,1,7,9,8];
const k=4;

const countPair=(a,k)=>{
    let leftMax=[];
    leftMax[0]=a[0];
    let rightMax=[];
    rightMax[a.length-1]=a[a.length-1];
    for(let i=1;i<a.length;i++){
        leftMax[i]=Math.max(leftMax[i-1],a[i]);
    }
    console.log(leftMax);
    for(let i=a.length-2;i>=0;i--){
        rightMax[i]=Math.max(rightMax[i+1],a[i]);
    }
    console.log(rightMax);
    for(let i=0;i<a.length;i++){
        if(a[i]>leftMax[i-1] && a[i]<rightMax[i+1]){
            console.log(a[i]);
        }
    }
}

countPair(a,k);