const a=[2,4,3,0,9,7,1,-5];

const merge=(a,leftstart,leftend,rightstart,rightend)=>{
     let i=leftstart;
     let j=rightstart;
     let temp=[];
     while(i<=leftend && j<=rightend){
        if(a[i]<a[j]){
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


const mergeSort=(a,left, right)=>{
    if(left>=right){
        return ;
    }
    let mid= Math.floor((left+right)/2);

    mergeSort(a,left,mid);
    mergeSort(a,mid+1,right);

    merge(a,left,mid,mid+1,right);
}



mergeSort(a,0,a.length-1);
console.log(a);