let a=[1,2,1,2,3];
let k=2;
const getSubArrayKDistcint=(a,k)=>{
    let map= new Map();

    let left=0;
    let count=0;
    for(let i=0;i<a.length;i++){
        map.set(a[i],(map.get(a[i])||0)+1);

        while(left<i && map.size>k){
            map.set(a[left],map.get(a[left])-1);
            if(map.get(a[left])===0){
                map.delete(a[left])
            }
            left++;
        }
     count+=i-left+1
     let temp=left  
    //  console.log(a.slice(left,i+1))
    // while(temp<=i){
    //     console.log(a.slice(left,i+1));
    //     temp++;
    // }
    }
    console.log(count)
}
getSubArrayKDistcint(a,k);