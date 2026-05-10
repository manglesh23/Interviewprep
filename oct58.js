let a=[1,2,1,3,4,3,5,6,4,6];
let k=3;

const getDuplicateInwindow=(a,k)=>{
    let map=new Map();
    let left=0;
    for(let i=0;i<a.length;i++){
         map.set(a[i],(map.get(a[i])||0)+1);

        if(map.get(a[i])>1){
            console.log(a.slice(left,i+1),a[i]);
        }
        if(i-left+1>k-1){
            map.set(a[left],map.get(a[left])-1);
            if(map.get(a[left])===0){
                map.delete(a[left]);
            }
            left++;
        }
       
    }
}
getDuplicateInwindow(a,k);