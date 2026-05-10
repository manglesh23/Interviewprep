const a=[[6,8],[1,9],[2,4],[4,7]];

const overLapping=(a)=>{
    a.sort((a,b)=>a[0]-b[0]);
    console.log(a);
    let merged=[];
    let currentInt=a[0];
    console.log(currentInt);
    for(let i=1;i<a.length;i++){
        if(currentInt[1]>a[i][0]){
            currentInt[1]=Math.max(currentInt[1],a[i][1]);
        }else{
            merged.push(currentInt);
            currentInt=a[i];
        }
    }
    merged.push(currentInt);
    console.log(merged);
}

overLapping(a);