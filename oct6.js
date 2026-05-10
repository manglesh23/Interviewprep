let a=[1,2,1,1,2];

const formPalindrome=(a)=>{
    let map=new Map();
    for(let i=0;i<a.length;i++){
        if(map.has(a[i])){
            map.set(a[i],map.get(a[i])+1);
        }else{
            map.set(a[i],1);
        }
    }
    let len=a.length;
    let odd=0;
    for(let [key,value] of map){
        if(value%2!=0){
          odd++;
        }
    }
    if(len%2===0){
       return odd===0?console.log("Possible"):console.log("Not possible");
    }
    if(len%2!=0){
        return odd===1?console.log("Possible"):console.log("Not possible");
    }
}

formPalindrome(a);