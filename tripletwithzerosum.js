

function quicksort(a){
    // console.log("quick:-",a);
    if (a.length <= 1) {
        return a;
    }
    let n=a.length;
    let pivot= a[n-1];
    // console.log(pivot);
    let left=[];
    let right=[];

    for(let i=0;i<a.length-1;i++){
        if(a[i]<pivot){
            left.push(a[i])
        }else{
            right.push(a[i])
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)];
}

const findtripsum=()=>{
    //  a= a.sort((a,b)=>a-b);
    let a=[1,0,-1,3,2,4];
    let b= quicksort(a);
    console.log(b);

    let i=0;
    let j=a.length-1;
    while(i<j){
        let k=i+1;
        if(b[i]+b[k]+b[j]===0){
            console.log(b[i],b[j],b[k]);
            break;
        }else if(b[i]+b[j]+b[k]>0){
            j--;
        }else{
            i++;
        }
    }
}

findtripsum();