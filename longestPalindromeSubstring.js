const str="mangnalsh";

const longest=(str)=>{
    let end=0;
    let start=0;
    for(let i=0;i<str.length;i++){
        let len1=expand(str,i,i);
        let len2=expand(str,i,i+1);

        let len=Math.max(len1,len2);
        console.log(len);
        if(len>end-start){
            start=i-Math.floor((len-1)/2);
            end=i+Math.floor(len/2);
        }

    }
    console.log(str.substring(start,end+1));
}

const expand=(str,left,right)=>{
    while(left>=0 && right<str.length && str[left]===str[right]){
        left--;
        right++;
    }
    return right-left-1;
}

longest(str);