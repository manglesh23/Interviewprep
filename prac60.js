const a=[1,2,3,1];
const b=[2,3,4];

const common=(a,b)=>{
    a.sort();
    b.sort();

    let i=0;
    let j=0;
    while(i<a.length && j<b.length){
        if(a[i]===b[j]){
            console.log(a[i]);
            i++;
            j++;
        }else if(a[i]>b[j]){
            j++;
        }else{
            i++;
        }
    }

}
common(a,b);