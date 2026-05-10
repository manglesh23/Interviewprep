const str='manggnam';

const checkPlaindrome=(str)=>{
    let start=0;
    let end=str.length-1;

    while(start<end){
        if(str[start]!=str[end]){
            console.log(false);
            return;
        }
        start++;
        end--;
    }
    console.log(true);
}

checkPlaindrome(str);