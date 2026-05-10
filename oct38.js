let str="abcabc";

const countSubStringHasAllChar=(str)=>{
    let count={a:0,b:0,c:0};
    let left=0;
    let res=0;
    for(let right=0;right<str.length;right++){
        count[str[right]]++;

        while(count['a']>0 && count['b']>0 && count['c']>0){
            res+=str.length-right;
            count[str[left]]--;
            left++;
        }
    }
    console.log(res);
}

countSubStringHasAllChar(str);