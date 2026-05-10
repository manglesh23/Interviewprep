const a=[1, 5, 10, 20, 40, 80];
const b=[6, 7,10, 20, 80, 100];
const c=[3, 4,10, 15, 20, 30, 70, 80, 120];

const commonInThree=(a,b,c)=>{
    let res=[];
    let i=0;
    let j=0;
    while(i<a.length && j<b.length){
        if(a[i]<b[j]){
            i++;
        }else if(a[i]>b[j]){
            j++;
        }else{
            res.push(a[i]);
            i++;
            j++;
        }
    }
    console.log(res);
    let k=0;
    let r=0;
    while(k<res.length && r<c.length){
        if(res[k]<c[r]){
            k++;
        }else if(res[k]>c[r]){
            r++;
        }else{
            console.log(res[k]);
            k++;
            r++;
        }
    }
}
commonInThree(a,b,c);