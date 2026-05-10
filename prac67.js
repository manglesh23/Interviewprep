const a=6;

const fibonacci=(a)=>{
    let v1=0;
    let v2=1;
    let i=2;
    let v=0;
    while(i<a){
       v=v1+v2;
       v1=v2;
       v2=v;
       i++;
       console.log(v);
    }
    console.log(v);
}
fibonacci(a);