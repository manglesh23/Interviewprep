let str="abc";
let k=2;

const substringWithK=(str,k)=>{
    let count=new Map();
    let left=0;
    let res=[];
    let totalSub=0;
    for(let right=0;right<str.length;right++){
        count.set(str[right],(count.get(str[right])||0)+1);

        while(count.size>k){
            count.set(str[left],(count.get(str[left])-1));
            if(count.get(str[left])===0){
                count.delete(str[left]);
            }
            left++;
        }
        let moveWin=left;
        while( moveWin<=right){
           res.push(str.slice(moveWin,right+1));
           moveWin++;
        }
        totalSub+=right-left+1;
    }
    console.log(res,totalSub);
}

substringWithK(str,k);