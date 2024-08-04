const a=[-2, -3, 4, -1, -2, 1, 5, -3];

const maxsum=(a)=>{
    let maxcurr=a[0];
    let maxglobal=a[0];
    for(let i=1;i<a.length;i++){
        maxcurr = Math.max(a[i], maxcurr + a[i]);
        if(maxcurr>maxglobal){
            maxglobal=maxcurr;
        }
    }
    console.log(maxglobal)
}

maxsum(a);