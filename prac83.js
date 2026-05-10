const a=[2,3,1,5,4,6,8,9,0];

const merge=(a,leftstart,leftend,rightstart,rightend)=>{
    let i=leftstart;
    let j=rightstart;
    let temp=[];
    while(i<=leftend && j<=rightend){
        if(a[i]<=a[j]){
           temp.push(a[i]);
           i++;
        }else{
            temp.push(a[j]);
            j++;
        }
    }
    while(i<=leftend){
        temp.push(a[i]);
        i++;
    }
    while(j<=rightend){
        temp.push(a[j]);
        j++;
    }
    for(let k=leftstart;k<=rightend;k++){
        a[k]=temp[k-leftstart];
    }
}
const mergeSort=(a,left,right)=>{
  
    let mid=Math.floor((left+right)/2);
    if(left>=right){
        return;
    }
    mergeSort(a,left,mid);
    mergeSort(a,mid+1,right);

    merge(a,left,mid,mid+1,right);
    
}

const findElement=(a,target)=>{
    let left=0;
    let right=a.length-1;
    while(left<right){
        let mid=Math.floor((left+right)/2);
        if(a[mid]===target){
            console.log("index:-",mid);
            return;
        }
        if(a[mid]<target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
}

mergeSort(a,0,a.length-1);
findElement(a,1);
console.log(a);