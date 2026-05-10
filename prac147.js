const a=[1,2,2,3,4,1,5];

const getAllNumber=(a)=>{
    let getFactofAll= fact(a.length);
    console.log(getFactofAll);
    let map=new Map();
    for(let i=0;i<a.length;i++){
        if(map.has(a[i])){
            map.set(a[i],map.get(a[i])+1);
        }else{
            map.set(a[i],1);
        }
    }
    console.log(map);
    // let totalCount=0;
    map.forEach((value,key)=>{
        getFactofAll=getFactofAll/fact(value);
    })
    console.log(getFactofAll);
}

const fact=(num)=>{
    let f=1;
    while(num>1){
       f*=num;
       num--;
    }
    return f;
}

getAllNumber(a);