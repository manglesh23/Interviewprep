let s="abcbacdefbca"
let k=4;

const getLongestString=(s,k)=>{
    let map= new Map();
    let left=0;
    let maxlen=0;
    let start=0;
    let end=0;
    for(let i=0;i<s.length;i++){
        map.set(s[i],(map.get(s[i])||0)+1);

        if(map.size>k){
            map.set(s[left],map.get(s[left])-1);

            if(map.get(s[left])===0){
                map.delete(s[left]);
            }
            left++;
        }
        if(i-left>maxlen){
            maxlen=i-left;
            start=left;
            end=i;
        }
    }
    console.log(maxlen,start,end);
}
getLongestString(s,k);