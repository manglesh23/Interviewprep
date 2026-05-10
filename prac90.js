const a=[1,2,3,4,5,7,9,8];

const getthreeodd=(a)=>{
    let count=0;
    for(let i=0;i<a.length;i++){
        if(a[i]%2!=0){
            count++;
        }else{
            count--;
        }
    }
}