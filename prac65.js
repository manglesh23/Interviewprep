const a=[1,3,4,5,6];
const b=[2,7,8,9];

const marger=(a,b)=>{
    let mergearray=[];

    let i=0;
    let n=a.length;
    let j=0;
    let m=b.length;
    while(i<n && j<m){
        if(a[i]<b[j]){
            mergearray.push(a[i]);
            i++;
        }else if(a[i]>b[j]){
            mergearray.push(b[j]);
            j++;
        }else if(a[i]===b[j]){
            mergearray.push(a[i]);
            i++;
            j++;
        }
    }
    while(i<n){
        mergearray.push(a[i]);
        i++;
    }
    while(j<m){
        mergearray.push(b[j]);
        j++;
    }

    console.log(mergearray);
}

marger(a,b);