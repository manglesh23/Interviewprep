const a=[1,3,7,8,9];
const b=[2,4,5,6];

const merge=(a,b)=>{
    let arr=[];
    let i=0;
    let j=0;
    while(i<a.length && j<b.length){
        if(a[i]<b[j]){
            arr.push(a[i]);
            i++;
        }else{
            arr.push(b[j]);
            j++;
        }
    }
    while(i<a.length){
        arr.push(a[i]);
        i++;
    }
    while(j<b.length){
        arr.push(b[j]);
        j++;
    }
    console.log(arr);
}

merge(a,b);