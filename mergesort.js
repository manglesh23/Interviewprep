const a=[4,3,0,-1,6,-4,7,6,9];

const merge=(a,leftstart,leftend,rightstart,rightend)=>{
    let i=leftstart;
    let j=rightstart;
    let tempstart=[];

    while(i<=leftend && j<=rightend){
        if(a[i]<=a[j]){
            tempstart.push(a[i]);
            i++;
        }else{
            tempstart.push(a[j]);
            j++;
        }
    }

    while(i<=leftend){
        tempstart.push(a[i]);
        i++;
    }

    while(j<=rightend){
        tempstart.push(a[j]);
        j++;
    }

    for(let k=leftstart;k<=rightend;k++){
        a[k]=tempstart[k-leftstart];
    }
}

const mergesort=(a,left,right)=>{
    if(left>=right){
        return;
    }
    let mid=Math.floor((left+right)/2);

    mergesort(a,left,mid);
    mergesort(a,mid+1,right);

    merge(a,left,mid,mid+1,right);

}


mergesort(a,0,a.length-1);
console.log(a);